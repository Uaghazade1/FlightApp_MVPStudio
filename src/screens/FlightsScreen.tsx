// src/screens/FlightScreen.tsx
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FlightCard from '../components/FlightCard';
import EmptyState from '../components/EmptyState';
import AddFlightButton from '../components/AddFlightButton';
import AddFlightModal from '../components/AddFlightModal';
import { Flight } from '../types'; // Import the Flight type

const FlightScreen: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const addFlight = (flight: Flight) => {
    setFlights([...flights, flight]);
  };

  const deleteFlight = (id: string) => {
    setFlights(flights.filter(flight => flight.id !== id));
  };

  return (
    <View style={styles.container}>
      <AddFlightModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddFlight={addFlight}
      />

      {flights.length === 0 ? (
        <>
          <EmptyState />
          <AddFlightButton onPress={() => setModalVisible(true)} />
        </>
      ) : (
        <>
          <FlatList
            data={flights}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FlightCard
                flight={item}
                onPress={() => setSelectedFlight(item.id)}
                onDelete={() => deleteFlight(item.id)}
                isSelected={selectedFlight === item.id}
              />
            )}
          />
                    <AddFlightButton onPress={() => setModalVisible(true)} />

        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});

export default FlightScreen;

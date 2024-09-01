import React, { useState } from 'react';
import { View, FlatList,Text, StyleSheet, TouchableOpacity } from 'react-native';
import FlightCard from '../components/FlightCard';
import EmptyState from '../components/EmptyState';
import AddFlightButton from '../components/AddFlightButton';
import AddFlightModal from '../components/AddFlightModal';
import { Flight } from '../types'; 
import { MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';


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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Flights</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons name="plus" size={28} color="#404040" />
        </TouchableOpacity>

        </View>
          <FlatList
            data={flights}
            showsVerticalScrollIndicator={false}
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

        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});

export default FlightScreen;

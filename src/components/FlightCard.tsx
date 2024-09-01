import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';

interface FlightCardProps {
  flight: {
    id: string;
    number: string;
    departure: string;
    arrival: string;
    arrivalDate: string;
    arrivalTime: string; 
    time: string;
    date: string; 
    airline: string;
    difference?: string;
  };
  onPress: () => void;
  onDelete: () => void;
  isSelected: boolean;
}

const airlineLogos: { [key: string]: any } = {
  'Azerbaijan Airlines': require('../assets/azal.jpg'),
  'Turkish Airlines': require('../assets/thy.png'),
  'Anadolu Jet': require('../assets/ajet.jpg'),
  'Fly Dubai': require('../assets/fly1.png'),
  'RyanAir': require('../assets/ryanair.jpg'),
  'WizzAir': require('../assets/wizz.png'),
};

const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = ((hours + 11) % 12 + 1).toString().padStart(2, '0');
  return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
};

const FlightCard: React.FC<FlightCardProps> = ({ flight, onPress, onDelete, isSelected }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleLongPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        onLongPress={handleLongPress}
        style={[styles.card, isSelected && styles.selectedCard]}
      >
        <View style={styles.row}>
          <View style={styles.leftContainer}>
            {airlineLogos[flight.airline] && (
              <Image
                resizeMode='contain'
                source={airlineLogos[flight.airline]}
                style={styles.logo}
              />
            )}
            <Text style={styles.flightNumber}>{flight.number}</Text>
            <Text style={styles.airline}> • {flight.airline}</Text>
          </View>
          <View style={styles.rightContainer}>
            {flight.difference && <Text style={{color: '#d16e44', fontSize: 14, fontWeight: '500'}}>{flight.difference}</Text>}
          </View>
        </View>
        <Text>{flight.departure} to {flight.arrival}</Text>
        <Text>Departure Date: {flight.date}</Text>
        <Text>Arrival Date: {flight.arrivalDate}</Text>
        <Text>Departure Time: {formatTime(flight.time)}</Text>
        <Text>Arrival Time: {formatTime(flight.arrivalTime)}</Text>
      </TouchableOpacity>

      {isModalVisible && (
        <Modal
          transparent
          animationType="none"
          visible={isModalVisible}
          onRequestClose={handleCloseModal}
        >
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <View style={styles.overlay}>
              <BlurView
                style={styles.absolute}
                intensity={30}
                tint="dark"
              />
              <View style={styles.cardModal}>
                {airlineLogos[flight.airline] && (
                  <Image
                    resizeMode='contain'
                    source={airlineLogos[flight.airline]}
                    style={styles.logo}
                  />
                )}
                <Text style={styles.flightNumber}>{flight.number}</Text>
                <Text>{flight.departure} to {flight.arrival}</Text>
                <Text>Departure Date: {flight.date}</Text>
                <Text>Arrival Date: {flight.arrivalDate}</Text>
                <Text>Departure Time: {formatTime(flight.time)}</Text>
                <Text>Arrival Time: {formatTime(flight.arrivalTime)}</Text>
                <Text>{flight.airline}</Text>
                {flight.difference && <Text>{flight.difference}</Text>}
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  onDelete();
                  handleCloseModal();
                }}
              >
                <Text style={styles.deleteButtonText}>Remove Flight</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardModal: {
    padding: 15,
    width: '90%',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCard: {
    borderColor: '#000',
  },
  logo: {
    width: 25,
    height: 25,
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 50,
    resizeMode: 'contain',
  },
  flightNumber: {
    marginLeft: 10,
    fontSize: 14,
    color: '#404040',
  },
  airline: {
    color: '#404040',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  deleteButton: {
    marginTop: 10,
    padding: 15,
    width: '90%',
    backgroundColor: '#f9e2e2',
    borderRadius: 10,
  },
  deleteButtonText: {
    color: '#7f1e1d',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#fef7ed',
    padding: 5,
    borderRadius: 8
  },
});

export default FlightCard;

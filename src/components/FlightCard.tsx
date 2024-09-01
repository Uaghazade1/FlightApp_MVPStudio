// src/components/FlightCard.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';

interface FlightCardProps {
  flight: {
    id: string;
    number: string;
    departure: string;
    arrival: string;
    time: string;
    date: string;
    airline: string;
  };
  onPress: () => void;
  onDelete: () => void;
  isSelected: boolean;
}

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
        <Text style={styles.flightNumber}>{flight.number}</Text>
        <Text>{flight.departure} to {flight.arrival}</Text>
        <Text>{flight.time}</Text>
        <Text>{flight.date}</Text>
        <Text>{flight.airline}</Text>
      </TouchableOpacity>

      {/* Modal for background blur effect */}
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
              <View style={styles.modalContent}>
              <Text style={styles.flightNumber}>{flight.number}</Text>
        <Text>{flight.departure} to {flight.arrival}</Text>
        <Text>{flight.time}</Text>
        <Text>{flight.date}</Text>
        <Text>{flight.airline}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => {
                    onDelete();
                    handleCloseModal();
                  }}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
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
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCard: {
    backgroundColor: '#e0f7fa',
    borderColor: '#00796b',
  },
  flightNumber: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    top: '20%',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  deleteButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FlightCard;

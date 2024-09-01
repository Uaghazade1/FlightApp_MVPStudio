import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { Flight } from '../types';

interface AddFlightModalProps {
  visible: boolean;
  onClose: () => void;
  onAddFlight: (flight: Flight) => void;
}

const cities = ['Baku', 'San Francisco', 'Istanbul', 'Paris', 'Milan'];
const times = ['6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];
const airlines = ['Azerbaijan Airlines', 'Turkish Airlines', 'Anadolu Jet', 'Fly Dubai', 'RyanAir', 'WizzAir'];

const AddFlightModal: React.FC<AddFlightModalProps> = ({ visible, onClose, onAddFlight }) => {
  const [departure, setDeparture] = useState<string>(cities[0]);
  const [arrival, setArrival] = useState<string>(cities[1]);
  const [time, setTime] = useState<string>(times[0]);
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]); 
  const [airline, setAirline] = useState<string>(airlines[0]);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options); 
  };


  const handleAddFlight = () => {

    
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    alert("Invalid date format. Please use YYYY-MM-DD.");
    return;
  }

  
  const [timeHours, timeMinutes] = time.split(':');
  const isPM = time.includes('PM');
  let departureHours = parseInt(timeHours);
  if (isPM && departureHours !== 12) {
    departureHours += 12;
  }
  if (!isPM && departureHours === 12) {
    departureHours = 0;
  }

  const departureDate = new Date(parsedDate);
  departureDate.setHours(departureHours, parseInt(timeMinutes.split(' ')[0]));

  const minHours = 2;
  const maxHours = 12;
  const randomHours = Math.floor(Math.random() * (maxHours - minHours + 1)) + minHours;
  const randomMinutes = Math.floor(Math.random() * 60);

  const arrivalDate = new Date(departureDate);
  arrivalDate.setHours(departureDate.getHours() + randomHours);
  arrivalDate.setMinutes(departureDate.getMinutes() + randomMinutes);

  const arrivalDateStr = formatDate(arrivalDate); // Format arrival date as "18 Apr 2024"
  const arrivalTimeHours = arrivalDate.getHours();
  const arrivalTimeMinutes = arrivalDate.getMinutes();
  const arrivalTimeStr = `${arrivalTimeHours.toString().padStart(2, '0')}:${arrivalTimeMinutes.toString().padStart(2, '0')}`;

  const newFlight: Flight = {
    id: Math.random().toString(),
    number: `Flight ${Math.floor(Math.random() * 1000)}`,
    departure,
    arrival,
    time: `${departureDate.getHours()}:${departureDate.getMinutes().toString().padStart(2, '0')}`,
    date: formatDate(parsedDate),
    airline,
    arrivalDate: arrivalDateStr,
    arrivalTime: arrivalTimeStr,
    difference: `${randomHours}h ${randomMinutes}m`,
  };

  onAddFlight(newFlight);
  onClose();
};

  return (
    <Modal
      visible={visible}
      presentationStyle='pageSheet'
      animationType='slide'
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContainer}>
          <Text style={styles.label}>Departure City:</Text>
          <RNPickerSelect
            value={departure}
            onValueChange={(value) => setDeparture(value as string)}
            items={cities.map(city => ({ label: city, value: city }))}
            style={pickerStyles}
          />

          <Text style={styles.label}>Arrival City:</Text>
          <RNPickerSelect
            value={arrival}
            onValueChange={(value) => setArrival(value as string)}
            items={cities.map(city => ({ label: city, value: city }))}
            style={pickerStyles}
          />

          <Text style={styles.label}>Date:</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="YYYY-MM-DD"
          />
          <Text style={styles.label}>Time:</Text>
          <RNPickerSelect
            value={time}
            onValueChange={(value) => setTime(value as string)}
            items={times.map(t => ({ label: t, value: t }))}
            style={pickerStyles}
          />

          <Text style={styles.label}>Airline:</Text>
          <RNPickerSelect
            value={airline}
            onValueChange={(value) => setAirline(value as string)}
            items={airlines.map(a => ({ label: a, value: a }))}
            style={pickerStyles}
          />

          <TouchableOpacity style={styles.addFlightButton} onPress={handleAddFlight}>
            <Text style={styles.addFlightText}>Add Flight</Text>
          </TouchableOpacity>
          <Button title="Cancel" onPress={onClose} color="red" />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const pickerStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 10,
  },
  inputAndroid: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    fontSize: 16,
    borderColor: '#ddd',
    marginBottom: 15,
    borderRadius: 10,
  },
});

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 15,
    marginTop: 20,
  },
  addFlightButton: {
    backgroundColor: '#ea5933',
    padding: 15,
    borderRadius: 10,
  },
  addFlightText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    fontSize: 16,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
});

export default AddFlightModal;

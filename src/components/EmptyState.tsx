import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';



const EmptyState = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flightIcon}>
      <SimpleLineIcons name="plane" size={24} color="black" />
      </View>
      <Text style={styles.message}>No Flights Added Yet</Text>
      <Text style={styles.messageDesc}>Let's get started on your jet lag plan! Add your
      upcoming flights to begin your journey!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  message: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center'
  },
  messageDesc: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center'
  },
  flightIcon: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius:10,
    marginBottom: 20
  }
});

export default EmptyState;

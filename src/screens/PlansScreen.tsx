import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const plans = [
  {
    city: 'Paris',
    country: 'France',
    date: '18 Apr 2024',
    tasks: [
      'Visit the Eiffel Tower',
      'Louvre Museum Tour',
      'Explore Montmartre',
      'Take a Seine River Cruise'
    ],
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    date: '25 May 2024',
    tasks: [
      'Visit the Sensoji Temple',
      'Explore Shibuya Crossing',
      'Eat Sushi in Tsukiji Market',
      'Visit Tokyo Skytree'
    ],
  },
  {
    city: 'New York',
    country: 'USA',
    date: '10 Jun 2024',
    tasks: [
      'Statue of Liberty Tour',
      'Walk through Central Park',
      'Visit the Metropolitan Museum of Art',
      'See a Broadway Show'
    ],
  },
];

const PlansScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {plans.map((plan, index) => (
        <View key={index} style={styles.planContainer}>
          <Text style={styles.city}>{plan.city}, {plan.country}</Text>
          <Text style={styles.date}>Planned Date: {plan.date}</Text>
          <Text style={styles.sectionTitle}>Things To Do:</Text>
          {plan.tasks.map((task, idx) => (
            <Text key={idx} style={styles.task}>
              {idx + 1}. {task}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    
  },
  planContainer: {
    padding: 20,
    marginBottom: 15,
    borderColor: '#ccc',
    borderRadius: 15,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  task: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default PlansScreen;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AddFlightButtonProps {
  onPress: () => void;
}

const AddFlightButton: React.FC<AddFlightButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Add Flight</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ea5933',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'600'
  },
});

export default AddFlightButton;

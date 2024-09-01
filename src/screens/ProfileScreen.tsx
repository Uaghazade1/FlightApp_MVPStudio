import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const phone = '123-456-7890';
  const bio = 'I am a software developer passionate about creating amazing mobile experiences.';

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri); 
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
        )}
      </TouchableOpacity>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
    textAlign: 'center',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    color: '#7d7d7d',
  },
  infoContainer: {
    marginTop: 20,
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#404040',
  },
  value: {
    fontSize: 16,
    color: '#404040',
  },
});

export default ProfileScreen;

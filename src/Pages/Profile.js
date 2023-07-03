import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  const user = {
    name: 'HASAN KAAN KAHRAMAN',
    phoneNumber: '05546439110',
    email: 'hasankaankahraman0@gmail.com',
    website: 'sehirteknolojileri.com',
    occupation: 'Mobile Developer'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.info}>{user.phoneNumber}</Text>
      <Text style={styles.info}>{user.email}</Text>
      <Text style={styles.info}>{user.website}</Text>
      <Text style={styles.occupation}>{user.occupation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  occupation: {
    fontSize: 18,
    marginTop: 10,
    fontStyle: 'italic',
  },
});

export default Profile;

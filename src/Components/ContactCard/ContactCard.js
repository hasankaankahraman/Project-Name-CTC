import React from 'react';
import { View, Image, Text, StyleSheet, Linking } from 'react-native';

const ContactCard = ({ contact }) => {
  const handlePhonePress = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: contact.imgURL }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.team}>{contact.team}</Text>
        <Text style={styles.level}>{contact.level}</Text>
        <Text style={styles.number} onPress={() => handlePhonePress(contact.number)}>
          {contact.number}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  team: {
    fontSize: 16,
    color: 'gray',
  },
  level: {
    fontSize: 16,
    color: 'green',
  },
  number: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ContactCard;

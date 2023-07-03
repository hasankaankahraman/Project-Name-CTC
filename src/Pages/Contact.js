import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ContactCard from '../Components/ContactCard';
import data from '../contact.json';

const Contact = () => {
  return (
    <View style={styles.container} >
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ContactCard contact={item} />}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:60
  },
});

export default Contact;

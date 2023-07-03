import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableWithoutFeedback, Modal } from 'react-native';
import ContentCard from '../Components/ContentCard/ContentCard';
import Instagram from '../Components/InstagramStory/Instagram';
import projects from '../projects.json';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openStoryModal = (story) => {
    setSelectedImage(story.imgURL);
  };

  const closeStoryModal = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.storyline}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item.id}
          data={projects}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => openStoryModal(item)}>
              <View>
                <Instagram story={item} />
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={projects}
        renderItem={({ item }) => <ContentCard content={item} />}
      />
      <Modal visible={selectedImage !== null} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          {selectedImage && <Image style={styles.modalImage} source={{ uri: selectedImage }} />}
          <TouchableWithoutFeedback onPress={closeStoryModal}>
            <View style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Kapat</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingBottom: 70,
    backgroundColor: '#9CA777',
    alignItems: 'center'
  },
  storyline: {
    borderRadius: 10,
    borderWidth: 0,
    height: '15%',
    width: '100%',
    marginBottom: 5
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#9CA777',
    borderRadius: 5
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16
  }
});

export default Home;

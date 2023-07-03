import React, { useState } from 'react';
import { View, Text, FlatList, Image, Button, Modal,StyleSheet } from 'react-native';
const COLOR = {orange:'#F97B22',cream:'#FEE8B0',greenlight:'#9CA777',greendark:'#7C9070'};


import projects from '../projects.json';

const Project = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);

  const filterProjectsByCategory = (category) => {
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  const renderProjectItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={{ width: 150, height: 150,resizeMode:'contain' }} source={{ uri: item.imgURL }} />
      <Text>{item.title}</Text>
      <Text>{item.team}</Text>
      <Button color={'#9CA777'} title="DETAY" onPress={() => setSelectedProject(item)} />
    </View>
  );

  return (
    <View style={styles.full}>
      <View style={styles.category}>
        <Button color={'#9CA777'} title="Tümü" onPress={() => filterProjectsByCategory('All')} />
        <Button color={'#9CA777'} title="Web" onPress={() => filterProjectsByCategory('Web')} />
        <Button color={'#9CA777'} title="Mobil" onPress={() => filterProjectsByCategory('Mobil')} />
        <Button color={'#9CA777'} title="Meta" onPress={() => filterProjectsByCategory('Metaverse')} />
      </View>
      <View style={styles.container} >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredProjects}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={selectedProject !== null} animationType="slide">
        <View>
          {selectedProject && (
            <View>
              <Image
                style={{ width: 200, height: 200,}}
                source={{ uri: selectedProject.imgURL }}
              />
              <Text>{selectedProject.title}</Text>
              <Text>{selectedProject.team}</Text>
              <Button color={'#9CA777'} title="Kapat" onPress={() => setSelectedProject(null)} />
            </View>
          )}
        </View>
      </Modal>
      </View>
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  category:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    height:'10%',
    alignItems:'center',
  },
  full:{
    flex:1,
    paddingBottom:120,
    backgroundColor:COLOR.greendark
  },
  container: {
    backgroundColor:COLOR.greendark,
    justifyContent:'center',
    alignItems:'center'
  },
  card:{
    backgroundColor:COLOR.cream,
    margin:10,
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#9CA777',
    width:300,
  }
});


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableWithoutFeedback, ScrollView } from 'react-native';
import ContentCard from '../Components/ContentCard/ContentCard';
import Instagram from '../Components/InstagramStory/Instagram';
import projects from '../projects.json';

const Home = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(projects);
  // }, []);

  // const renderItem = ({ item }) => (
  //   <View style={styles.cardContainer}>
  //     <Image style={styles.cardImage} source={{ uri: item.imgURL }} />
  //     <View style={styles.cardContent}>
  //       <Text style={styles.cardTitle}>{item.title}</Text>
  //       <Text style={styles.cardTeam}>{item.team}</Text>
  //       <Text style={styles.cardCategory}>{item.category}</Text>
  //     </View>
  //   </View>
  // );

  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={data}
  //       renderItem={renderItem}
  //       keyExtractor={(item) => item.id.toString()}
  //     />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <FlatList showsHorizontalScrollIndicator = {false} horizontal={true}
         keyExtractor={item => item.id}
         data={projects}
         renderItem={({item}) => <Instagram story={item} />}
      />
      <FlatList showsVerticalScrollIndicator = {false}
         keyExtractor={item => item.id}
         data={projects}
         renderItem={({item}) => <ContentCard content={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingBottom:70,
    backgroundColor: '#9CA777',
    alignItems:'center'
  },
  // cardContainer: {
  //   flexDirection: 'row',
  //   backgroundColor: '#fff',
  //   borderRadius: 8,
  //   marginBottom: 10,
  //   padding: 10,
  // },
  // cardImage: {
  //   width: 80,
  //   height: 80,
  //   borderRadius: 4,
  // },
  // cardContent: {
  //   marginLeft: 10,
  //   flex: 1,
  // },
  // cardTitle: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  // cardTeam: {
  //   fontSize: 14,
  //   color: '#888',
  //   marginBottom: 5,
  // },
  // cardCategory: {
  //   fontSize: 12,
  //   color: '#888',
  // },
});

export default Home;

import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
const COLOR = {orange:'#F97B22',cream:'#FEE8B0',greenlight:'#9CA777',greendark:'#7C9070'};


import projects from '../projects.json';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (text) => {
    setSearchText(text);

    const filteredResults = projects.filter((item) => {
      const title = item.title.toLowerCase();

      return (
        title.includes(text.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
  };

  const handleCardPress = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: '#9CA777',borderRadius:10, borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Ara..."
        onChangeText={handleSearch}
        value={searchText}
      />
      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCardPress(item)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                <Image source={{ uri: item.imgURL }} style={{ width: 50, height: 50, marginRight: 10,resizeMode:'contain' }} />
                <Text style={{fontWeight:'bold',color:'#000'}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>   Bir sonuç bulunamadı</Text>
      )}
      <Modal visible={selectedItem !== null} animationType="slide"  onRequestClose={closeModal}>
        {selectedItem && (
          <View style={{alignItems: 'center', justifyContent: 'center', borderWidth:2,borderColor:COLOR.greendark,marginTop:250,marginHorizontal:20,borderRadius:10,backgroundColor:COLOR.cream}}>
            <Image
                style={{ width: 200, height: 200,resizeMode:'contain'}}
                source={{ uri: selectedItem.imgURL }}
                />
                <Text style={{color:'#000',fontWeight:'bold'}}>{selectedItem.title}</Text>
            
            {/* Render other details of the selected item */}
            <TouchableOpacity onPress={closeModal}>
              <View style={{borderColor:COLOR.greendark,borderWidth:1,borderRadius:10,height:30,width:60,justifyContent:'center',alignItems:'center',marginVertical:10}}>
              <Text style={{color:COLOR.greendark,fontWeight:'bold'}}>Kapat</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default Search;

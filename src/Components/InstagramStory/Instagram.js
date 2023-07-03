import React from "react";
import { View,Text,Image} from "react-native";

import styles from './Instagram.styles';


const Instagram = ({story}) => {
  return(
    <View  style={styles.container}>
        <Image  style={styles.image}source={{uri:story.imgURL}}/>
    </View>

    );
};
export default Instagram;


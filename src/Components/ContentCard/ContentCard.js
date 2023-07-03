import React from "react";
import { View,Text,Image} from "react-native";

import styles from './ContentCard.styles';


const ContentCard = ({content}) => {
  return(
    <View style={styles.container}>
            <Image style={styles.image} source={{uri:content.imgURL}}/>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.category}>{content.category}</Text>
            <Text style={styles.category}>{content.team}</Text>
            {content.finished === false && <Text style={styles.finished}>Proje Bitmedi</Text>}
            {content.finished === true && <Text style={styles.completed}>Proje Bitti</Text>}


        </View>

    );
};
export default ContentCard;


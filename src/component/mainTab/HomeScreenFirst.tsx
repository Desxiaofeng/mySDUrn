import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { headComponentData } from '../../head componennt data'; 
import Icon from 'react-native-vector-icons/Ionicons';

interface HeadComponentItem {
  name: string;
  img: string;
  style?: string;
  path: string;
  type: string;
  up: boolean; 
}

const { width } = Dimensions.get('window');

export default function HomeScreenFirst() {
    const [itemsWithUpTrue, setItemsWithUpTrue] = useState<HeadComponentItem[]>([]);

    useEffect(() => {
      const trueUpItems = headComponentData.filter(item => item.up === true);
      setItemsWithUpTrue(trueUpItems);
    }, []); 

  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap', 
      width: width,
      justifyContent: itemsWithUpTrue.length > 5?('flex-start'):('space-around'),
      alignItems: 'center'
    }}>
     {
      itemsWithUpTrue.length > 0 ? (
        itemsWithUpTrue.map((item, index) => (
          <View key={index} style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5 ,
            width: (width - 10 * 5) / 5,
          }}>
            <Icon name={item.img} size={30} color={typeof item.style === 'string' ? item.style : '#900'} />
            <Text>{item.name}</Text>
          </View>
        ))
      ) : (
        <Text>没有 up 为 true 的项目</Text>
      )
     }
    </View>
  );
}

import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TouchableOpacity} from "react-native";
import { headComponentData } from '../../data'; 
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabNavParamList, StackNavParamList} from '../../Root';

interface HomeScreenFirstProps {
  filterMoreType?: boolean; 
}

interface HeadComponentItem {
  name: string;
  img: string;
  style: string;
  path: keyof StackNavParamList;
  type: string;
  up: boolean; 
}

const { width } = Dimensions.get('window');

export default function HomeScreenFirst({ filterMoreType }: HomeScreenFirstProps) {
    const [itemsWithUpTrue, setItemsWithUpTrue] = useState<HeadComponentItem[]>([]);

    
    useEffect(() => {
      const trueUpItems = headComponentData.filter(item => item.up === true&& (!filterMoreType || item.type !== 'more'));
      setItemsWithUpTrue(trueUpItems);
    }, [filterMoreType]); 
   const navigation = useNavigation<NativeStackNavigationProp<StackNavParamList>>();

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
          <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.path)}
            >
          <View key={index} style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5 ,
            width: (width - 10 * 5) / 5,
          }}>
            <Icon name={item.img} size={30} color={typeof item.style === 'string' ? item.style : '#900'} />
            <Text>{item.name}</Text> 
          </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>没有 up 为 true 的项目</Text>
      )
     }
    </View>
  );
}

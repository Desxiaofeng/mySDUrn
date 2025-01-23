import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, TouchableOpacity} from "react-native";
import { headComponentData } from '../../data'; 
import { useNavigation } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { TabNavParamList, StackNavParamList} from '../../Root';
import { useAppSelector, useAppDispatch, redux_setFavorKit } from '../../store'

interface HeadComponentItem {
  index:number,
  name: string;
  img: string;
  style: string;
  path: keyof StackNavParamList;
  type: string;
  up: boolean; 
}

const { width } = Dimensions.get('window');

export default function HomeScreenFirst() {
   const { theme } = useTheme();
   const favorKit = useAppSelector(state => state.user.favorKit)
   const navigation = useNavigation<NativeStackNavigationProp<StackNavParamList>>();
   const itemsWithUpTrue: HeadComponentItem[] = favorKit.map(index => {
        return headComponentData[index]
    });

  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap', 
      width: width,
      justifyContent: itemsWithUpTrue.length > 5?('flex-start'):('space-around'),
      alignItems: 'center',
      paddingTop: 8,
    }}>
     {
        itemsWithUpTrue.map((item, index) => (
          <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.path)}
          >
          <View key={index} 
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              paddingTop: 4,
              paddingBottom: 2,
              width: (width - 15 * 5) / 5,
          }}>
            <Icon name={item.img as 'user'} size={30} color={theme.colors.grey0} iconStyle='solid' />
            <Text style={{color:theme.colors.grey0}}>{item.name}</Text> 
          </View>
          </TouchableOpacity>
        ))
      }
      <TouchableOpacity
              onPress={() => navigation.navigate('More')}
            >
          <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              paddingTop: 4,
              paddingBottom: 2,
              width: (width - 15 * 5) / 5,
          }}>
            <Icon name="plus" size={30} color={theme.colors.grey2} iconStyle="solid"/>
            <Text style={{color:theme.colors.grey2}}>{'更多功能'}</Text> 
          </View>
          </TouchableOpacity>
    </View>
  );
}

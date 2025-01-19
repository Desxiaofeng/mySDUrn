import React from 'react';
import { TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {StackNavParamList} from '../../Root'

const screenWidth = Dimensions.get('window').width;

export default function UserHead() {
    const navigation = useNavigation<NativeStackNavigationProp<StackNavParamList>>();
    return(
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 10 }}>
        {<Image
          source={require('../../assets/userinit.png')} // 使用 require 引入本地图片
          style={{
            width: screenWidth * 0.08, // 以屏幕宽度的 8% 为头像宽度
            height: screenWidth * 0.08, // 以屏幕宽度的 8% 为头像高度
            borderRadius: (screenWidth * 0.08) / 2, // 确保头像为圆形
          }}
        />}
      </TouchableWithoutFeedback>
    )
};
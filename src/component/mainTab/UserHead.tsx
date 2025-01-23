import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import {StackNavParamList} from '../../Root'
import Icon from '@react-native-vector-icons/fontawesome6';

const screenWidth = Dimensions.get('window').width;

export default function UserHead() {
    const { theme } = useTheme();
    const navigation = useNavigation<NativeStackNavigationProp<StackNavParamList>>();
    return(
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={{ marginLeft:10, paddingTop:1 }}>
          <Icon name='user-graduate' iconStyle='solid' size={25} color={theme.colors.grey1}/>
        </View>
      </TouchableOpacity>
    )
};
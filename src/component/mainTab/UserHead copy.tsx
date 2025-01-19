import React from 'react';
import { TouchableWithoutFeedback, Image, Dimensions, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {StackNavParamList} from '../../Root'
import style from '../../style';

const screenWidth = Dimensions.get('window').width;

export default function UserHeadCenter( title:string, customTheme:any, screenHeight:number) {
    const navigation = useNavigation<NativeStackNavigationProp<StackNavParamList>>();
    return(
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Profile')}
          style={{ marginLeft: 10 }}
        >
          <Image
            source={require('../../assets/userinit.png')}
            style={{
              width: screenWidth * 0.08,
              height: screenWidth * 0.08,
              borderRadius: (screenWidth * 0.08) / 2,
            }}
          />
        </TouchableWithoutFeedback>
        <Text style={[style(customTheme,screenHeight).title, { color: customTheme.colors.titleText }]}>
          {title}
        </Text>
      </View>
    );
};
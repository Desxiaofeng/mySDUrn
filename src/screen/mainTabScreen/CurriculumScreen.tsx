import React from 'react';
import {
    ImageBackground,
} from 'react-native';
import  Curriculum from '../../component/mainTab/curriculum';

export default function ScheduleScreen(): React.JSX.Element {
    return (
         <ImageBackground 
           source={require('../../assets/qwq.png')}
           style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }} // 使用内联样式对象
         >
          <Curriculum/>
         </ImageBackground>
    );
}
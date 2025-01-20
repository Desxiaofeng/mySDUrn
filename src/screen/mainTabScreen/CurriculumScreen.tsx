import React, { useEffect, useRef } from 'react';
import { ImageBackground, ScrollView, View, Dimensions } from 'react-native';
import Curriculum from '../../component/mainTab/curriculum';

const { width } = Dimensions.get('window');

interface ScheduleScreenProps {
  initialPage?: number; 
}

export default function ScheduleScreen({ initialPage = 0 }: ScheduleScreenProps): React.JSX.Element {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current && initialPage >= 0) {
      scrollViewRef.current.scrollTo({ x: initialPage * width, animated: true });
    }
  }, [initialPage, width]);

  const curriculumItems = [1, 2, 3].map((item, index) => (
    <View key={index} style={{ width, height: '100%' }}>
      <Curriculum />
    </View>
  ));

  return (
    <ImageBackground 
        source={require('../../assets/qwq.png')}
        style={{ flex: 1 }}
    >
      <ScrollView 
          ref={scrollViewRef}
          horizontal={true}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
      >
        {curriculumItems}
      </ScrollView>
    </ImageBackground>
  );
}
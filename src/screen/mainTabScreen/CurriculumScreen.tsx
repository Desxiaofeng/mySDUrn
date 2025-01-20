import React from 'react';
import { ImageBackground, ScrollView, View, Dimensions } from 'react-native';
import Curriculum from '../../component/mainTab/Curriculum';

const { width } = Dimensions.get('window');

export default function ScheduleScreen(): React.JSX.Element {
    const curriculumItems = [1, 2, 3].map((item) => (
        <View key={item} style={{ width, height: '100%' }}>
            <Curriculum />
        </View>
    ));

    return (
        <View
            style={{ flex: 1 }}
        >
            <ScrollView 
                horizontal={true}
                snapToInterval={width} 
                decelerationRate="fast" 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }} 
            >
                {curriculumItems}
            </ScrollView>
        </View>
    );
}
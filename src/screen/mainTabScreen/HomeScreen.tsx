import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@rneui/themed';
import HomeScreenFirst from '../../component/mainTab/HomeScreenFirst';

export default function HomeScreen() {
    const { theme } = useTheme();
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.secondary }}>
            <HomeScreenFirst filterMoreType={false} />       
       </View>
    );
}
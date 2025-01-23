import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@rneui/themed';
import HomeScreenFirst from '../../component/mainTab/HomeScreenFirst';
import { useAppSelector, useAppDispatch, redux_setFavorKit } from '../../store';

export default function HomeScreen() {
    const { theme } = useTheme();

    const dispatch = useAppDispatch()
    // dispatch(redux_setFavorKit([]))
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.secondary }}>
            <HomeScreenFirst />       
       </View>
    );
}
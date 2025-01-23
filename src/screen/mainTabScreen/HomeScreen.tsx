import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@rneui/themed';
import HomeScreenFirst from '../../component/mainTab/HomeScreenFirst';
import { useAppSelector, useAppDispatch, redux_setFavorKit } from '../../store';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const { theme } = useTheme();

    const dispatch = useAppDispatch()
    // dispatch(redux_setFavorKit([]))
    return (
        <ScrollView 
            style={{ backgroundColor: theme.colors.secondary, flex:1 }}
            contentContainerStyle={{ alignItems: 'center' }}
        >
            <View 
                style={{
                    marginVertical: 10,
                    width: '95%',
                    flexWrap: 'wrap',
                    backgroundColor: theme.colors.white,
                    borderRadius: 10,
                    paddingBottom: 12,
                }}
            >
              <HomeScreenFirst />    
            </View>   
       </ScrollView>
    );
}
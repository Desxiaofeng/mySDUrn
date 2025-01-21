import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import HomeScreenFirst from '../../component/mainTab/HomeScreenFirst';
import { useAppSelector, useAppDispatch,  redux_setFavorKit} from '../../store'

export default function MoreScreen(): React.JSX.Element {
    const favorKit = useAppSelector(state=>state.user.favorKit)

    // const newFavorKit = 
    // useAppDispatch(redux_setFavorKit(newFavorKit))
    
    return (
        <View style={{justifyContent: 'center', alignItems: 'center' }}>

        </View>
    );
}
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { decrement, increment } from '../../redux/counterSlice'
import { useAppSelector, useAppDispatch } from '../../hook'
import { Button } from '@rneui/themed';

export default function MessageScreen(): React.JSX.Element {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          onPress={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Text>{count}</Text>
        <Button
          onPress={() => dispatch(decrement())}
        >
          Decrement
        </Button>

        </View>
    );
}
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Button } from '@rneui/themed';

import { useAppSelector, useAppDispatch, decrement, increment } from '../../store'


export default function MessageScreen(): React.JSX.Element {
    const count = useAppSelector(state => state.user.value)
    const dispatch = useAppDispatch()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          onPress={() => dispatch(increment())}
        >
          <Text>Increment</Text>
        </Button>
        <Text>{count}</Text>
        <Button
          onPress={() => dispatch(decrement())}
        >
          <Text>Increment</Text>
        </Button>

        </View>
    );
}
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Button, useTheme } from '@rneui/themed';
import { useAppSelector, useAppDispatch, decrement, increment } from '../../store'
import { color } from '@rneui/base';


export default function MessageScreen(): React.JSX.Element {
    const { theme } = useTheme();
    const count = useAppSelector(state => state.user.value)
    const dispatch = useAppDispatch()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.secondary }}>
          <Button
            onPress={() => dispatch(increment())}
          >
            <Text>Increment</Text>
          </Button>
            <Text style={{ color: theme.colors.black }}>{count}</Text>
          <Button
            onPress={() => dispatch(decrement())}
          >
            <Text>Increment</Text>
          </Button>
        </View>
    );
}
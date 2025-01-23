import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { useTheme } from '@rneui/themed';

export default function SearchScreen(): React.JSX.Element {
    const { theme } = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.secondary}}>
            <Text>Search Screen</Text>
        </View>
    );
}
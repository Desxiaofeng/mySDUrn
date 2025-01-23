import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { useTheme } from '@rneui/themed';
import Icon from '@react-native-vector-icons/fontawesome6';

export default function RecentActivityScreen(): React.JSX.Element {
    const { theme } = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.secondary}}>
            <Text style={{color:theme.colors.black}}>Recent Activity Screen</Text>
            <Icon name="bell" iconStyle='solid' size={80} />
        </View>
    );
}
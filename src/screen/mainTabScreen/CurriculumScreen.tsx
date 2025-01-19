import React from 'react';
import { Button } from '@rneui/themed';
import {
    View,
    Text,
} from 'react-native';

export default function CurriculumScreen(): React.JSX.Element {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Curriculum Screen</Text>
            <Button
              title="Basic Button"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
        </View>
    );
}
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, useTheme, useThemeMode } from '@rneui/themed';

import { useAppDispatch, redux_setThemeMode } from '../../store';


// 创建主题
export function ProfileScreen() {
  const dispatch = useAppDispatch()
  const { mode } = useThemeMode();
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.secondary }]}>
      <Button color={theme.colors.primary} title="Dark" onPress={()=>{dispatch(redux_setThemeMode('dark'))}} />
      <Text style={{ color: theme.colors.black, margin:10}}>
        Current Mode: {mode}
      </Text>
      <Button color={theme.colors.primary} title="Light" onPress={()=>{dispatch(redux_setThemeMode('light'))}} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
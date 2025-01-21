import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, useTheme, useThemeMode } from '@rneui/themed';

// 创建主题
export function ProfileScreen() {

  const { mode, setMode } = useThemeMode();
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.white, marginBottom: 20 }}>
        Current Mode: {mode}
      </Text>
      <Button title="Dark" onPress={()=>{setMode('dark')}} />
      <Button title="Light" onPress={()=>{setMode('light')}} />
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
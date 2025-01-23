import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Keyboard,
} from 'react-native';
import { useTheme } from '@rneui/themed';
import { StyleSheet, Platform, Dimensions } from 'react-native';

export default function SearchTab() {

  const { theme } = useTheme();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  const inputRef = useRef<TextInput>(null);
  //自动聚焦
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TextInput
      ref={inputRef}
      placeholder="请输入关键词"
      placeholderTextColor={theme.colors.grey1} 
      style={{
        backgroundColor: theme.colors.secondary,
        color: theme.colors.black,
        fontSize: 14,
        padding: (Platform.OS === 'ios') ? (screenHeight * 0.012) : (screenHeight * 0.008),
        width: (Platform.OS === 'ios') ? (screenWidth * 0.5) : (screenWidth * 0.5),
        borderRadius: 8,
        alignItems: 'center',
      }}
      onBlur={Keyboard.dismiss}
    />
  );
};
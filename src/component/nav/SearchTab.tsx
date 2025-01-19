import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Keyboard,
} from 'react-native';


export default function SearchTab() {
    const inputRef = useRef<TextInput>(null);
    //自动聚焦
    useEffect(() => {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <TextInput
        ref={inputRef}
        placeholder="请输入关键词"
        style={styles.searchBar}
        onBlur={Keyboard.dismiss}
      />
    );
};

const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: '#e9ecef',
      padding: 8,
      width: 200,
      borderRadius: 8,
      alignItems: 'center', // 使内容居中对齐
    },
  });
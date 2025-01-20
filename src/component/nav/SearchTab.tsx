import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Keyboard,
} from 'react-native';
import { styles }from '../../style';

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
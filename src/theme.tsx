import { createTheme } from '@rneui/themed';
import { StyleSheet, Platform, Dimensions } from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
export function getTheme(themeMode: any) {
  return createTheme({
    lightColors:{
      primary: "#2089dc",
      secondary: "rgb(239	239	239)",
      background: "#ffffff",
      white: "#ffffff",
      black: "#242424",
      grey0: "#393e42",
      grey1: "#43484d",
      grey2: "#5e6977",
      grey3: "#86939e",
      grey4: "#bdc6cf",
      grey5: "#e1e8ee",
      greyOutline: "#bbb",
      searchBg: "#303337",
      success: "#52c41a",
      warning: "#faad14",
      error: "#ff190c",
      disabled: "hsl(208, 8%, 90%)",
    },
    darkColors: {
      primary: "#439ce0",
      secondary: "rgb(24 24 24)",
      background: "rgb(19 19 19)",
      white: "#f2f2f2",
      black: "#ffffff",
      grey0: '#e1e8ee',
      grey1: "#bdc6cf",
      grey2: "#86939e",
      grey3: "#5e6977",
      grey4: "#43484d",
      grey5: "#393e42",
      greyOutline: "#303337",
      searchBg: "#439946",
      success: "#52c41a",
      warning: "#cfbe27",
      error: "#bf2c24",
      disabled: "hsl(208, 8%, 90%)",
    },
    mode: themeMode, 
    components: {
      Button: (props, theme) => ({
        buttonStyle: {
          backgroundColor: theme.colors.primary, // 使用主题中的 primary 颜色
          padding: 12,
        },
        titleStyle: {
          color: theme.colors.black, // 根据主题设置按钮文字颜色
        },
      }),
    },
  });
}

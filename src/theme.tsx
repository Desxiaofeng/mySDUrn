import { createTheme } from '@rneui/themed';
import { StyleSheet, Platform, Dimensions } from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
export const theme = createTheme({
  lightColors:{
    primary: "#2089dc",
    secondary: "#ca71eb",
    background: "#ffffff",
    white: "#ffffff",
    black: "#242424",
    grey0: '#F1F1F1',
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
    secondary: "#aa49eb",
    background: "#292421",
    white: "#242424",
    black: "#ffffff",
    grey0: '#4D4D4D',
    grey1: "#e1e8ee",
    grey2: "#bdc6cf",
    grey3: "#86939e",
    grey4: "#5e6977",
    grey5: "#43484d",
    greyOutline: "#303337",
    searchBg: "#439946",
    success: "#52c41a",
    warning: "#cfbe27",
    error: "#bf2c24",
    disabled: "hsl(208, 8%, 90%)",
  },
  mode: 'light', // 默认为亮色模式
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
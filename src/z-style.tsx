import { StyleSheet, Platform, Dimensions } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { makeStyles, useTheme } from '@rneui/themed';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

const { theme } = useTheme();
export const styles = StyleSheet.create({
  cdots: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1, // 可选：添加边框
    borderColor: 'transparent', // 边框颜色透明
    backgroundColor: 'transparent', // 背景色透明
  },
//   menuHome:{
//     backgroundColor: customTheme.colors.headerBackground,
//     marginTop: (Platform.OS === 'ios') ? (screenHeight * 0.024) : (screenHeight * 0.024),
//   },
//   menuOther:{
//     backgroundColor: customTheme.colors.headerBackground,
//     marginTop: (Platform.OS === 'ios') ? (screenHeight * 0.024) : (screenHeight * 0.08),
//   },
});
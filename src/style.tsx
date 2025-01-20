import { StyleSheet, Platform, Dimensions } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import theme from "./theme";

export const customTheme = theme.default;
export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  headerHome: {
    flex: 1,
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    backgroundColor: customTheme.colors.headerBackground,
    height: (Platform.OS === 'ios') ? (screenHeight * 0.12) : (screenHeight * 0.06),
  },
  headerOther: {
    flex: 1,
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    backgroundColor: customTheme.colors.headerBackground,
    height: (Platform.OS === 'ios') ? (screenHeight * 0.12) : (screenHeight * 0.06),
  },
  title: {
    fontSize: moderateScale(16), // 动态缩放字体大小
    fontWeight: 'bold', // 加粗字体
    color: customTheme.colors.titleText, // 黑色文字
  },
  searchBar: {
    backgroundColor: customTheme.colors.searchBarBackground,
    padding: (Platform.OS === 'ios') ? (screenHeight * 0.012) : (screenHeight * 0.008),
    width: (Platform.OS === 'ios') ? (screenWidth * 0.5) : (screenWidth * 0.5),
    borderRadius: 8,
    alignItems: 'center', // 使内容居中对齐
  },
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
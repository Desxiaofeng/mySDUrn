import { StyleSheet, Platform } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

const styles = (customTheme:any,screenHeight:any) => StyleSheet.create({
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
    fontSize: moderateScale(15), // 动态缩放字体大小
    fontWeight: 'bold', // 加粗字体
    color: customTheme.colors.titleText, // 黑色文字
  },
  menuHome:{
    backgroundColor: customTheme.colors.headerBackground,
    marginTop: (Platform.OS === 'ios') ? (screenHeight * 0.024) : (screenHeight * 0.024),
  },
  menuOther:{
    backgroundColor: customTheme.colors.headerBackground,
    marginTop: (Platform.OS === 'ios') ? (screenHeight * 0.024) : (screenHeight * 0.08),
  },
  searchBar: {
    backgroundColor: customTheme.colors.searchBarBackground,
    padding: 8,
    width: 200,
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
});

export default styles;
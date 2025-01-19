import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Dimensions, 
  Image,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native';
import { 
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale, scale } from 'react-native-size-matters';
import { Menu, Provider, DefaultTheme } from 'react-native-paper';
import { Background } from '@react-navigation/elements';
//type类型
type RootStackParamList = {
  Root: undefined;
  Tab: undefined;
  Search: undefined;
  Profile: undefined;
  Recent: undefined;
};
type TabParamList = {
  Home: undefined;
  Curriculum: undefined;
  Message: undefined;
};
//初始界面
const init = { 
  tab: 'Tab' as keyof RootStackParamList, 
  home: 'Home' as keyof RootStackParamList 
};
//一些常数
const username = '喜羊羊';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
//主页
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
//课程界面
function CurriculumScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Curriculum Screen</Text>
    </View>
  );
}
//消息界面
function MessageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Message Screen</Text>
    </View>
  );
}
//近期活动
function RecentActivityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recent Activity Screen</Text>
    </View>
  );
}
//搜索栏
const SearchTab = () => {
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
//搜索界面
function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    </View>
  );
}
//头像
function userHead () {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 10 }}>
      <Image
        source={require('./assets/userinit.png')} // 使用 require 引入本地图片
        style={{
          width: screenWidth * 0.08, // 以屏幕宽度的 8% 为头像宽度
          height: screenWidth * 0.08, // 以屏幕宽度的 8% 为头像高度
          borderRadius: (screenWidth * 0.08) / 2, // 确保头像为圆形
        }}
      />
    </TouchableWithoutFeedback>
  )
};
//用户界面
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
//Tab
function TabNavigator() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isPoem, setIsPoem] = useState(true);
  const [menuVisible, setMenuVisible] = useState({
    home: false,
    curriculum: false
  });
  const toggleMenu = (menuKey: keyof typeof menuVisible, visible: boolean) => {
    setMenuVisible((prev) => ({
      ...prev,
      [menuKey]: visible,
    }));
  };
  const menuItems = {
    home: [
      { label: '近期活动', onPress: () => navigation.navigate('Recent') },
    ],
    CurriculumScreen: [
      { label: '设置', onPress: () => Alert.alert('前往设置') },
      { label: '帮助', onPress: () => Alert.alert('查看帮助') },
      { label: '退出', onPress: () => Alert.alert('退出') },
    ],
  };

  return (
    <Provider>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.headerBackground },
          headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: theme.colors.tabBarBackground },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '主页',
            headerStyle: styles.headerHome,
            headerTitleAlign: 'center',
            headerTitleContainerStyle: {
              left: 0,
              right: 0,
            },
            headerTitle: () => (
              <TouchableOpacity
                style={[
                  styles.searchBar,
                  { backgroundColor: theme.colors.searchBarBackground },
                ]}
                onPress={() => navigation.navigate('Search')}
              >
                <Text style={{ color: theme.colors.searchBarText }}>图书/咨询/用户</Text>
              </TouchableOpacity>
            ),
            headerLeft: userHead,
            headerRight: () => (
              <Menu
                visible={menuVisible.home}
                onDismiss={() => toggleMenu('home', false)}
                anchor={
                  <TouchableOpacity
                    onPress={() => toggleMenu('home', true)}
                    style={styles.cdots}
                  >
                    <Text style={{ color: theme.colors.cdotsText }}>···</Text>
                  </TouchableOpacity>
                }
                contentStyle={styles.menuHome}
              >
                {menuItems.home.map((item, index) => (
                  <Menu.Item
                    key={index}
                    onPress={() => {
                      toggleMenu('home', false);
                      item.onPress();
                    }}
                    title={item.label}
                  />
                ))}
              </Menu>
            ),
          }}
        />
        <Tab.Screen
          name="Curriculum"
          component={CurriculumScreen}
          options={{
            title: '课程',
            headerStyle: styles.headerOther,
            headerTitle: () => (
              <View>
                <TouchableWithoutFeedback onPress={() => setIsPoem(!isPoem)}>
                  <Text style={[styles.title, { color: theme.colors.titleText }]}>
                    {isPoem ? '蓦然雪化，且静候飞雪再临之时' : username}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            ),
            headerLeft: userHead,
            headerTitleAlign: 'center',
            headerRight: () => (
              <Menu
                visible={menuVisible.curriculum}
                onDismiss={() => toggleMenu('curriculum', false)}
                anchor={
                  <TouchableOpacity
                    onPress={() => toggleMenu('curriculum', true)}
                    style={styles.cdots}
                  >
                    <Text style={{ color: theme.colors.cdotsText }}>···</Text>
                  </TouchableOpacity>
                }
                contentStyle={styles.menuOther}
              >
                {menuItems.CurriculumScreen.map((item, index) => (
                  <Menu.Item
                    key={index}
                    onPress={() => {
                      toggleMenu('curriculum', false);
                      item.onPress();
                    }}
                    title={item.label}
                  />
                ))}
              </Menu>
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: '信息',
            headerStyle: styles.headerOther,
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Profile')}
                  style={{ marginLeft: 10 }}
                >
                  <Image
                    source={require('./src/assets/userinit.png')}
                    style={{
                      width: screenWidth * 0.08,
                      height: screenWidth * 0.08,
                      borderRadius: (screenWidth * 0.08) / 2,
                    }}
                  />
                </TouchableWithoutFeedback>
                <Text style={[styles.title, { color: theme.colors.titleText }]}>
                  信息
                </Text>
              </View>
            ),
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>
    </Provider>
  );
}
//Root
function Root() {
  return (
    <Stack.Navigator
      initialRouteName={init.tab}    //初始界面
    >
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: { backgroundColor: '#f8f9fa' },
          headerTitle: () => <SearchTab />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="Recent"
        component={RecentActivityScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      {(Platform.OS === 'ios') ? (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </GestureHandlerRootView>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <Root />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaView>
      )}
    
    </>
  );
}

const theme = {
  ...DefaultTheme,
  myOwnProperty: true, // 自定义属性
  colors: {
    ...DefaultTheme.colors,
    headerBackground: '#f8f9fa', // 提取 header 背景色
    tabBarBackground: '#e9ecef', // 提取 tabBar 背景色
    searchBarBackground: '#e9ecef', // 提取搜索栏背景色
    searchBarText: '#6c757d', // 提取搜索栏文本颜色
    cdotsText: '#6c757d', // 提取菜单按钮 (···) 颜色
    titleText: '#000', // 提取标题文本颜色
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    paddingHorizontal: 20, // 为了防止过度靠边，添加左右内边距
  },
  headerHome: {
    flex: 1,
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    paddingHorizontal: 20, // 为了防止过度靠边，添加左右内边距
    backgroundColor: theme.colors.headerBackground,
    height: screenHeight * 0.11,
  },
  headerOther: {
    flex: 1,
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    paddingHorizontal: 20, // 为了防止过度靠边，添加左右内边距
    backgroundColor: theme.colors.headerBackground,
    height: screenHeight * 0.11,
  },
  searchBar: {
    backgroundColor: theme.colors.searchBarBackground,
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
  title: {
    fontSize: moderateScale(15), // 动态缩放字体大小
    fontWeight: 'bold', // 加粗字体
    color: theme.colors.titleText, // 黑色文字
  },
  menuHome:{
    backgroundColor: theme.colors.headerBackground,
    marginTop: (Platform.OS === 'ios') ? (screenHeight * 0.024) : (screenHeight * 0.08),
  },
  menuOther:{
    backgroundColor: theme.colors.headerBackground,
    marginTop: (Platform.OS === 'ios') ? (screenHeight * 0.024) : (screenHeight * 0.08),
  },
});
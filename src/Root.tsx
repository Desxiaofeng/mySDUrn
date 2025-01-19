import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions, 
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
import { Menu, Provider } from 'react-native-paper';

import SearchScreen from './screen/navScreen/RecentActivityScreen';
import RecentActivityScreen from './screen/navScreen/RecentActivityScreen';
import HomeScreen from './screen/mainTabScreen/HomeScreen';
import SearchTab from './component/nav/SearchTab';
import UserHead from './component/mainTab/UserHead';
import CurriculumScreen from './screen/mainTabScreen/CurriculumScreen';
import MessageScreen from './screen/mainTabScreen/MessageScreen';
import ProfileScreen from './screen/mainTabScreen/ProfileScreen';
import theme from './theme';
import style from './style';
import UserHeadCenter from './component/mainTab/UserHead copy';

//type类型
export type StackNavParamList = {
  Root: undefined;
  Tab: undefined;
  Search: undefined;
  Profile: undefined;
  Recent: undefined;
};
type TabNavParamList = {
  Home: undefined;
  Curriculum: undefined;
  Message: undefined;
};
//初始界面
const init = { 
  tab: 'Tab' as keyof StackNavParamList, 
  home: 'Home' as keyof StackNavParamList 
};
//主题色 待定函数
const customTheme = theme.default;
//用户名 待定函数
const username = '喜羊羊';
//一些常数
const screenHeight = Dimensions.get('window').height;
const Stack = createNativeStackNavigator<StackNavParamList>();
const Tab = createBottomTabNavigator<TabNavParamList>();
//Tab
function TabNav(): React.JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavParamList>>();
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
          headerStyle: { backgroundColor: customTheme.colors.headerBackground },
          headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: customTheme.colors.tabBarBackground },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '主页',
            headerStyle: style(customTheme,screenHeight).headerHome,
            headerTitleAlign: 'center',
            headerTitleContainerStyle: {
              left: 0,
              right: 0,
            },
            headerTitle: () => (
              <TouchableOpacity
                style={[
                  style(customTheme,screenHeight).searchBar,
                  { backgroundColor: customTheme.colors.searchBarBackground },
                ]}
                onPress={() => navigation.navigate('Search')}
              >
                <Text style={{ color: customTheme.colors.searchBarText }}>图书/咨询/用户</Text>
              </TouchableOpacity>
            ),
            headerLeft: UserHead,
            headerRight: () => (
              <Menu
                visible={menuVisible.home}
                onDismiss={() => toggleMenu('home', false)}
                anchor={
                  <TouchableOpacity
                    onPress={() => toggleMenu('home', true)}
                    style={style(customTheme,screenHeight).cdots}
                  >
                    <Text style={{ color: customTheme.colors.cdotsText }}>···</Text>
                  </TouchableOpacity>
                }
                contentStyle={style(customTheme,screenHeight).menuHome}
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
            headerStyle: style(customTheme,screenHeight).headerOther,
            headerTitle: () => (
              <View>
                <TouchableWithoutFeedback onPress={() => setIsPoem(!isPoem)}>
                  <Text style={[style(customTheme,screenHeight).title, { color: customTheme.colors.titleText }]}>
                    {isPoem ? '蓦然雪化，且静候飞雪再临之时' : username}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            ),
            headerLeft: UserHead,
            headerTitleAlign: 'center',
            headerRight: () => (
              <Menu
                visible={menuVisible.curriculum}
                onDismiss={() => toggleMenu('curriculum', false)}
                anchor={
                  <TouchableOpacity
                    onPress={() => toggleMenu('curriculum', true)}
                    style={style(customTheme,screenHeight).cdots}
                  >
                    <Text style={{ color: customTheme.colors.cdotsText }}>···</Text>
                  </TouchableOpacity>
                }
                contentStyle={style(customTheme,screenHeight).menuOther}
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
            headerStyle: style(customTheme,screenHeight).headerOther,
            headerTitle: () => UserHeadCenter( '信息',customTheme,screenHeight ),
          }}
        />
      </Tab.Navigator>
    </Provider>
  );
}
//Root
function StackNav() : React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={init.tab}    //初始界面
    >
      <Stack.Screen
        name="Tab"
        component={TabNav}
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

export default function Root(): React.JSX.Element {
  return (
    <>
      {(Platform.OS === 'ios') ? (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
           <StackNav />
          </NavigationContainer>
        </GestureHandlerRootView>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
             <StackNav />
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaView>
      )}
    
    </>
  );
}
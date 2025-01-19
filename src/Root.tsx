import React from 'react';
import { useState, useRef, useEffect } from 'react';
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
} from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { 
    NavigationContainer,
    useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchScreen from './screen/navScreen/SearchScreen';
import HomeScreen from './screen/mainTabScreen/HomeScreen';
import SearchTab from './component/nav/SearchTab';
import UserHead from './component/mainTab/UserHead';
import ScheduleScreen from './screen/mainTabScreen/ScheduleScreen';
import MessageScreen from './screen/mainTabScreen/MessageScreen';
import ProfileScreen from './screen/mainTabScreen/ProfileScreen';


export type StackNavParamList = {
    Root: undefined;
    Tab: undefined;
    Search: undefined;
    Profile: undefined;
};
  
type TabNavParamList = {
    Home: undefined;
    Curriculum: undefined;
    Message: undefined;
};

const Stack = createNativeStackNavigator<StackNavParamList>();
const Tab = createBottomTabNavigator<TabNavParamList>();
const init = { 
    tab: 'Tab' as keyof StackNavParamList, 
    home: 'Home' as keyof StackNavParamList 
};
const username = '喜羊羊';
const screenWidth = Dimensions.get('window').width;


function TabNav(): React.JSX.Element  {
    const navigation = useNavigation<NativeStackNavigationProp<StackNavParamList>>();
    //诗句用户名切换
    const [isPoem, setIsPoem] = useState(true);
    const poem = '蓦然雪化，且静候飞雪再临之时';
    return (
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f8f9fa' },
          headerTitleStyle: { fontSize: 18, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: '#e9ecef' },
        }}
      >

        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: '主页',
            headerStyle: styles.screen,
            headerTitleAlign: 'center',
            headerTitleContainerStyle: {
              left: 0,
              right: 0,
            },
            headerTitle: () => (
              <TouchableOpacity
                style={styles.searchBar}
                onPress={() => navigation.navigate('Search')}
              >
                <Text style={{ color: '#6c757d' }}>图书/咨询/用户</Text>
              </TouchableOpacity>),
            headerLeft: UserHead,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('还没做QWQ')}
                style={styles.cdots}
              >
                <Text style={{ color: '#6c757d', }}>···</Text>
              </TouchableOpacity>
            ),
          }} 
        />
        <Tab.Screen 
          name="Schedule" 
          component={ScheduleScreen} 
          options={{ 
            title: '课程',
            headerTitle: () => (
              <View>
                <TouchableWithoutFeedback onPress={() => setIsPoem(!isPoem)}>
                  <Text style={styles.title}>{isPoem ? poem : username}</Text>
                </TouchableWithoutFeedback>
              </View>
            ),
            headerLeft: UserHead,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('还没做QWQ')}
                style={styles.cdots}
              >
                <Text style={{ color: '#6c757d', }}>···</Text>
              </TouchableOpacity>
            ),
            }} 
        />
        <Tab.Screen 
          name="Message" 
          component={MessageScreen}
          options={{ 
            title: '信息',
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                <TouchableWithoutFeedback 
                  onPress={() => navigation.navigate('Profile')} 
                  style={{ marginLeft: 10
                  }}
                >
                  {/* <Image
                    source={require('./assets/userinit.png')} // 使用 require 引入本地图片
                    style={{
                      width: screenWidth * 0.08, // 以屏幕宽度的 8% 为头像宽度
                      height: screenWidth * 0.08, // 以屏幕宽度的 8% 为头像高度
                      borderRadius: (screenWidth * 0.08) / 2, // 确保头像为圆形
                    }}
                  /> */}
                  <Text>debug</Text>
                </TouchableWithoutFeedback>
                <Text style={styles.title}>信息</Text>
              </View>
            ),
            headerTitleAlign: 'center',
            }} 
          />
          <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ 
            title: '我的',
            }} 
          />

      </Tab.Navigator>
    );
}

function StackNav() : React.JSX.Element {
    const navigation = useNavigation();
  
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

      </Stack.Navigator>
    );
}

export default function Root(): React.JSX.Element {
    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <StackNav />
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center', // 垂直居中
      alignItems: 'center', // 水平居中
      paddingHorizontal: 20, // 为了防止过度靠边，添加左右内边距
    },
    searchBar: {
      backgroundColor: '#e9ecef',
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
      // fontSize: moderateScale(15), // 动态缩放字体大小
      fontWeight: 'bold', // 加粗字体
      color: '#000', // 黑色文字
    },
});
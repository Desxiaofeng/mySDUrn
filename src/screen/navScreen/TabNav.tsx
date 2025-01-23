import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Dimensions,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHead from '../../component/mainTab/UserHead';
import CurriculumScreen from '../../screen/mainTabScreen/CurriculumScreen';
import MessageScreen from '../../screen/mainTabScreen/MessageScreen';
import HomeScreen from '../../screen/mainTabScreen/HomeScreen';
// import UserHeadCenter from '../../component/mainTab/UserHeadCenter';
import { TabNavParamList, StackNavParamList} from '../../Root';
import { useTheme, ListItem } from '@rneui/themed';
import Icon from '@react-native-vector-icons/fontawesome6';
import { data } from '../../data';

const Tab = createBottomTabNavigator<TabNavParamList>();

export default function TabNav(): React.JSX.Element {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const { theme } = useTheme();
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
      // <Provider>
        <Tab.Navigator
          initialRouteName={data.init.home}
          screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: theme.colors.background },
            headerTitleStyle: { color: theme.colors.black, fontSize: 18, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: theme.colors.background },
            tabBarLabelStyle: {
              fontSize: 15,
              color: theme.colors.black,
              fontWeight: '500',
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case "Home": iconName = focused ? 'house-chimney' : 'house';break;
                case "Curriculum": iconName = focused ? 'calendar-check' : 'calendar-days';break;
                case "Message": iconName = focused ? 'envelope-open' : 'envelope';break;
              }
              return(
                <Icon
                  name={iconName as any}
                  iconStyle={'solid'}
                  size={size || 24}
                  color={color || theme.colors.black}
                />
            )},
            tabBarActiveTintColor: theme.colors.black, // 激活状态下的文字和图标颜色
            tabBarInactiveTintColor: theme.colors.grey2, // 非激活状态下的文字和图标颜色
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: '主页',
              headerStyle: {
                flex: 1,
                justifyContent: 'center', // 垂直居中
                alignItems: 'center', // 水平居中
                backgroundColor: theme.colors.background,
                height: (Platform.OS === 'ios') ? (screenHeight * 0.12) : (screenHeight * 0.06),
              },
              headerTitleAlign: 'center',
              headerTitleContainerStyle: {
                left: 0,
                right: 0,
              },
              headerTitle: () => (
                <TouchableOpacity
                  style={[
                    {
                      backgroundColor: theme.colors.grey0,
                      padding: (Platform.OS === 'ios') ? (screenHeight * 0.012) : (screenHeight * 0.008),
                      width: (Platform.OS === 'ios') ? (screenWidth * 0.5) : (screenWidth * 0.5),
                      borderRadius: 8,
                      alignItems: 'center', // 使内容居中对齐
                    },
                    { backgroundColor: theme.colors.grey5 },
                  ]}
                  onPress={() => navigation.navigate('Search')}
                >
                  <Text style={{ color: theme.colors.grey0 }}>图书/咨询/用户</Text>
                </TouchableOpacity>
              ),
              headerLeft: UserHead,
              headerRight: () => (
                // <Menu
                //   visible={menuVisible.curriculum}
                //   onDismiss={() => toggleMenu('curriculum', false)}
                //   anchor={
                //     <TouchableOpacity
                //       onPress={() => toggleMenu('curriculum', true)}
                //       style={style.cdots}
                //     >
                      <Text style={{ color: theme.colors.black }}>··· </Text>
                //     </TouchableOpacity>
                //   }
                //   contentStyle={style.menuOther}
                // >
                //   {menuItems.CurriculumScreen.map((item, index) => (
                //     <Menu.Item
                //       key={index}
                //       onPress={() => {
                //         toggleMenu('curriculum', false);
                //         item.onPress();
                //       }}
                //       title={item.label}
                //     />
                //   ))}
                // </Menu>
              ),
            }}
          />
          <Tab.Screen
            name="Curriculum"
            component={CurriculumScreen}
            options={{
              title: '课程',
              headerStyle: {
                flex: 1,
                justifyContent: 'center', // 垂直居中
                alignItems: 'center', // 水平居中
                backgroundColor: theme.colors.background,
                height: (Platform.OS === 'ios') ? (screenHeight * 0.12) : (screenHeight * 0.06),
              },
              headerTitle: () => (
                <View>
                  <TouchableOpacity onPress={() => setIsPoem(!isPoem)}>
                    <Text style={[{
                        fontSize: 18, // 动态缩放字体大小
                        fontWeight: 'bold', // 加粗字体
                        color: theme.colors.black, // 黑色文字
                      }, 
                      { color: theme.colors.black }]}>
                      {isPoem ? data.poem.winter : data.user.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ),
              headerTitleAlign: 'center',
              headerRight: () => (
                // <Menu
                //   visible={menuVisible.curriculum}
                //   onDismiss={() => toggleMenu('curriculum', false)}
                //   anchor={
                //     <TouchableOpacity
                //       onPress={() => toggleMenu('curriculum', true)}
                //       style={style.cdots}
                //     >
                      <Text style={{ color: theme.colors.black }}>··· </Text>
                //     </TouchableOpacity>
                //   }
                //   contentStyle={style.menuOther}
                // >
                //   {menuItems.CurriculumScreen.map((item, index) => (
                //     <Menu.Item
                //       key={index}
                //       onPress={() => {
                //         toggleMenu('curriculum', false);
                //         item.onPress();
                //       }}
                //       title={item.label}
                //     />
                //   ))}
                // </Menu>
              ),
            }}
          />
          <Tab.Screen
            name="Message"
            component={MessageScreen}
            options={{
              title: '信息',
              headerStyle: {
                flex: 1,
                justifyContent: 'center', // 垂直居中
                alignItems: 'center', // 水平居中
                backgroundColor: theme.colors.background,
                height: (Platform.OS === 'ios') ? (screenHeight * 0.12) : (screenHeight * 0.06),
              },
              headerTitle: '信息',
              headerTitleAlign: 'center',
            }}
          />
        </Tab.Navigator>
      // </Provider>
    );
  }
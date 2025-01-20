import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Dimensions, 
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
import { styles, customTheme, screenHeight }from '../../style';
import data from '../../component/data';

const Tab = createBottomTabNavigator<TabNavParamList>();

export default function TabNav(): React.JSX.Element {
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
                    { backgroundColor: customTheme.colors.searchBarBackground },
                  ]}
                  onPress={() => navigation.navigate('Search')}
                >
                  <Text style={{ color: customTheme.colors.searchBarText }}>图书/咨询/用户</Text>
                </TouchableOpacity>
              ),
              headerLeft: UserHead,
              headerRight: () => (
                // <Menu
                //   visible={menuVisible.home}
                //   onDismiss={() => toggleMenu('home', false)}
                //   anchor={
                //     <TouchableOpacity
                //       onPress={() => toggleMenu('home', true)}
                //       style={style.cdots}
                //     >
                      <Text style={{ color: customTheme.colors.cdotsText }}>···</Text>
                //     </TouchableOpacity>
                //   }
                //   contentStyle={style.menuHome}
                // >
                //   {menuItems.home.map((item, index) => (
                //     <Menu.Item
                //       key={index}
                //       onPress={() => {
                //         toggleMenu('home', false);
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
              headerStyle: styles.headerOther,
              headerTitle: () => (
                <View>
                  <TouchableWithoutFeedback onPress={() => setIsPoem(!isPoem)}>
                    <Text style={[styles.title, { color: customTheme.colors.titleText }]}>
                      {isPoem ? data.poem.winter : data.user.name}
                    </Text>
                  </TouchableWithoutFeedback>
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
                      <Text style={{ color: customTheme.colors.cdotsText }}>···</Text>
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
              headerStyle: styles.headerOther,
              headerTitle: '信息',
              headerTitleAlign: 'center',
            }}
          />
        </Tab.Navigator>
      // </Provider>
    );
  }
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import SearchScreen from './screen/navScreen/RecentActivityScreen';
import RecentActivityScreen from './screen/navScreen/RecentActivityScreen';
import TabNav from './screen/navScreen/TabNav';
import SearchTab from './component/nav/SearchTab';
import ProfileScreen from './screen/mainTabScreen/ProfileScreen';
import data from './component/data';
import theme from './theme';
import { store, persistor } from './store';

//type类型
export type StackNavParamList = {
  Root: undefined;
  Tab: undefined;
  Search: undefined;
  Profile: undefined;
  Recent: undefined;
};
export type TabNavParamList = {
  Home: undefined;
  Curriculum: undefined;
  Message: undefined;
};
const Stack = createNativeStackNavigator<StackNavParamList>();
//Root
function StackNav() : React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={data.init.tab}    //初始界面
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
          headerStyle: { backgroundColor: theme.default.colors.headerBackground },
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
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
      </Provider>,
    
    </>
  );
}
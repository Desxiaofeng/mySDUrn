import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform, SafeAreaView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { theme } from './theme';
import SearchScreen from './screen/navScreen/RecentActivityScreen';
import RecentActivityScreen from './screen/navScreen/RecentActivityScreen';
import TabNav from './screen/navScreen/TabNav';
import SearchTab from './component/nav/SearchTab';
import { ProfileScreen } from './screen/mainTabScreen/ProfileScreen';
import { store, persistor } from './store';
import { useTheme, ThemeProvider } from '@rneui/themed';
import { data } from './data';

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

function StackNav() : React.JSX.Element {

  const { theme } = useTheme();
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  return (
    <Stack.Navigator
      initialRouteName={data.init.tab}
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTitleStyle: { color: theme.colors.black, fontSize: 18, fontWeight: 'bold' },
      }}
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
          title: '搜索',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleAlign: 'center',
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
                <ThemeProvider theme={theme}>
                 <StackNav />
                </ThemeProvider>
              </NavigationContainer>
            </GestureHandlerRootView>
          ) : (
            <SafeAreaView style={{ flex: 1 }}>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer>
                <ThemeProvider theme={theme}>
                 <StackNav />
                </ThemeProvider>
                </NavigationContainer>
              </GestureHandlerRootView>
            </SafeAreaView>
          )}
        </PersistGate>
      </Provider>
    
    </>
  );
}
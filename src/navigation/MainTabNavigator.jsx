/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MainScreen from '../screens/MainScreen';
import EditUserScreen from '../screens/EditUserScreen';
import ParticipantsScreen from '../screens/ParticipantsScreen';
import PlaceScreen from '../screens/PlaceScreen';
import FilterScreen from '../screens/FilterScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ActivityOpenScreen from '../screens/ActivityOpenScreen';
import ActivityDetailScreen from '../screens/ActivityDetailScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const PlaceStack = createStackNavigator(
  {
    Place: PlaceScreen,
    Filter: FilterScreen,
    Detail: PlaceDetailScreen,
  },
  config
);

PlaceStack.path = '';

PlaceStack.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  const tabBarVisible = !navigation.state.index;

  return {
    tabBarVisible,
    tabBarLabel: 'Place',
    header: params ? params.header : undefined,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
      />
    ),
  };
};

const ActivityStack = createStackNavigator(
  {
    Activity: ActivityScreen,
    Open: ActivityOpenScreen,
    Detail: ActivityDetailScreen,
  },
  config
);

ActivityStack.path = '';

ActivityStack.navigationOptions = ({ navigation }) => {
  const tabBarVisible = !navigation.state.index;

  return {
    tabBarVisible,
    tabBarLabel: 'Activity',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
  };
};

const MainStack = createStackNavigator(
  {
    Main: MainScreen,
    Edit: EditUserScreen,
    Participants: ParticipantsScreen,
    // Modify: ActivityOpenScreen,지혜 메롱
  },
  config
);

MainStack.path = '';

MainStack.navigationOptions = ({ navigation }) => {
  const tabBarVisible = !navigation.state.index;

  return {
    tabBarVisible,
    tabBarLabel: 'Main',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
        }
      />
    ),
  };
};

const tabNavigator = createBottomTabNavigator({
  MainStack,
  PlaceStack,
  ActivityStack,
});

tabNavigator.path = '';

const MainTabNavigator = createStackNavigator({
  tabNavigator: {
    screen: tabNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
});

export default MainTabNavigator;

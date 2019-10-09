import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

// Menu
import Screen1 from './main/Menu/Screen1';
import Screen2 from './main/Menu/Screen2';
import Screen3 from './main/Menu/Screen3';

import MyStackNavigator from './StackNavigator';

const MyDrawerNavMenu = createDrawerNavigator(
  {
    Home: {
      screen: MyStackNavigator,
    },
    Screen1: {
      screen: Screen1,
    },
    Screen2: {
      screen: Screen2,
    },
    Screen3: {
      screen: Screen3,
    },
  },
  {
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition: 'left',
  },
);

const AppContainer = createAppContainer(MyDrawerNavMenu);

export default class DrawerNavigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}

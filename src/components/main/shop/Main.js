import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerActions} from 'react-navigation-drawer';

import HomeScreen from './HomeScreen';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const MyStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Screen4: {
      screen: Screen4,
    },
    Screen5: {
      screen: Screen5,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {hieght: 55, backgroundColor: 'orange'},
      headerTitleStyle: {fontWeight: 'bold', color: 'white'},
    },
  },
);

const AppContainer = createAppContainer(MyStackNavigator);

export default class StackNavigator extends React.Component {
  render() {
    return (
      <AppContainer
        screenProps={{
          openDraw: () =>
            this.props.navigation.dispatch(DrawerActions.openDrawer()),
        }}
      />
    );
  }
}

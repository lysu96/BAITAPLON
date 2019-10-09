import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {DrawerActions} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
// shop
import HomeScreen from './main/HomeScreen';
import Productsp from './main/shop/Home/Product';
// Singin
import SignIn from './authentication/Singin';
import Singout from './authentication/Singout';
import AuthLoading from './authentication/AuthLoading';
import Register from './authentication/Register';
// button home
import Carts from './main/shop/Cart/Cart';
import Search from './main/shop/Search/Search';
import Contact from './main/shop/Contact/Contact';
// screen
import Screen4 from './changinfo/Screen4';
import Screen5 from './changinfo/Screen5';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Singout: {
      screen: Singout,
    },
    Screen4: {
      screen: Screen4,
    },
    Screen5: {
      screen: Screen5,
    },
    Register: {
      screen: Register,
    },
    Product: {
      screen: Productsp,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {hieght: 55, backgroundColor: '#2ECC71'},
      headerTitleStyle: {fontWeight: 'bold', color: '#FFFFFF'},
    },
  },
);

// button homeshop
const SettingsStack = createStackNavigator({
  Settings: {screen: Contact},
  Details: {screen: DetailsScreen},
});
const Cart = createStackNavigator({
  Cart: {screen: Carts},
});
//--thong bao
class IconWithBadge extends React.Component {
  render() {
    const {name, badgeCount, color, size} = this.props;
    return (
      <View style={styles.viewThongbao}>
        <Icon name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View style={styles.viewIconthongbao}>
            <Text style={styles.textIconthongbao}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'home';
  } else if (routeName === 'Cart') {
    iconName = 'shopping-cart';
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Search') {
    iconName = 'search-plus';
  } else if (routeName === 'Contact') {
    iconName = 'sign-out';
  } else if (routeName === 'Settings') {
    iconName = 'rocket';
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};
// ---bnt --
const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Cart: {screen: Cart},
    Search: {screen: Search},
    Contact: {screen: SettingsStack},
    //Settings: {screen: SettingsStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#2ECC71',
      inactiveTintColor: 'gray',
    },
  },
);

// login swith
const AuthStack = createStackNavigator({SignIn: SignIn}, {Register: Register});
const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: BottomTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default class StackNavigator extends React.Component {
  static navigationOptions = ({screenProps}) => ({
    drawerLabel: 'Trang chủ',
    drawerIcon: ({tintColor}) => (
      //<Image source={iconHome} style={styles.iconMenu} />
      <Icon name={'home'} size={24} color={'#2ECC71'} />
    ),
  });
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

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // icon bnt home
  iconMenu: {
    width: 24,
    height: 24,
  },
  // icon thong o bao tron
  viewThongbao: {
    width: 24,
    height: 24,
    margin: 5,
  },
  viewIconthongbao: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIconthongbao: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

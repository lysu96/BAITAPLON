import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  // AsyncStorage,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
// Home
import Collection from './shop/Home/Collection';
import Category from './shop/Home/Category';
import Product from './shop/Home/Product';
// import moduleName from './shop/Home/HomeStack';
// icon
import iconHome from '../../imgitem/icon/ic_menu.png';
import ic_seach from '../../imgitem/icon/search0.png';
import ic_user from '../../imgitem/icon/contact0.png';
// Icon menu
class LogoMenu extends React.Component {
  render() {
    return <Image source={iconHome} style={styles.imgMenu} />;
  }
}
class IconSeach extends React.Component {
  render() {
    return <Image source={ic_seach} style={styles.imgMenu} />;
  }
}
class IcUser extends React.Component {
  render() {
    return <Image source={ic_user} style={styles.imgMenu} />;
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = ({screenProps}) => ({
    headerTitle: (
      <View style={styles.viewSeach}>
        <TextInput style={styles.tseach} />
        <TouchableOpacity style={styles.titleHeader}>
          <IconSeach />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleHeader}>
          <IcUser />
        </TouchableOpacity>
      </View>
    ),
    headerLeft: (
      <TouchableOpacity onPress={() => screenProps.openDraw()}>
        <View style={styles.titleHeader}>
          <LogoMenu />
        </View>
      </TouchableOpacity>
    ),
  });

  // _goScreen4 = () => {
  //   this.props.navigation.navigate('Product');
  // };
  // _showMoreApp = () => {
  //   this.props.navigation.navigate('Singout');
  // };

  // _signOutAsync = async () => {
  //   await AsyncStorage.clear();
  //   this.props.navigation.navigate('Auth');
  // };

  render() {
    return (
      <ScrollView style={styles.containerHomeSceens}>
        <Collection />
        <Category />
        <Product />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerHomeSceens: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  text: {
    fontWeight: 'bold',
    margin: 20,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000000',
  },
  ouchableHighlight: {
    backgroundColor: 'yellow',
    marginVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  container: {
    height: 100,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // header
  imgMenu: {
    width: 35,
    height: 40,
    marginLeft: 4,
  },
  viewSeach: {
    width: 300,
    height: 40,
    flexDirection: 'row',
  },
  tseach: {
    width: 220,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 3,
    marginRight: 0,
    paddingLeft: 20,
    fontSize: 18,
  },
});

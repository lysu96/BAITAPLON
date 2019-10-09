import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import iconHome from '../../imgitem/icon/ic_menu.png';

export class LogoMenu extends React.Component {
  render() {
    return <Image source={iconHome} style={styles.imgMenu} />;
  }
}
export class imgMenu extends Component {
  render() {
    return <Image source={iconHome} styles={styles.imgMenu} />;
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dff5c9',
  },
});

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import ic_message from '../../../imgitem/icon/icons8-sms-26.png';

export default class Screen1 extends Component {
  static navigationOptions = ({screenProps}) => ({
    drawerLabel: 'Thông báo',
    drawerIcon: ({tintColor}) => (
      <Image source={ic_message} style={styles.iconMenu} />
    ),
  });

  render() {
    return (
      <View styles={styles.view}>
        <Text> DrawerNavigator Screen 1</Text>
        <TouchableOpacity>
          <Text
            onPress={() => this.props.navigation.goBack()}
            style={styles.TouchableOpacity}
            underlayColor={'#f1f1f1'}>
            Go to back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  ouchableHighlight: {
    backgroundColor: 'orange',
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 10,
  },
  iconMenu: {
    width: 24,
    height: 24,
  },
});

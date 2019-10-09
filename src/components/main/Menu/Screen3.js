import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import clock_checked50 from '../../../imgitem/icon/icons8-clock-checked-48.png';

export default class Screen3 extends Component {
  static navigationOptions = ({screenProps}) => ({
    drawerLabel: 'Lịch sử mua hàng',
    drawerIcon: ({tintColor}) => (
      <Image source={clock_checked50} style={styles.iconMenu} />
    ),
  });

  render() {
    return (
      <View styles={styles.view}>
        <Text> DrawerNavigator Screen 3</Text>
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
    backgroundColor: 'green',
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

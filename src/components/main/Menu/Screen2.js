import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import deliver_food32 from '../../../imgitem/icon/icons8-deliver-food-48.png';

export default class Screen2 extends Component {
  static navigationOptions = ({screenProps}) => ({
    drawerLabel: 'Vận chuyển',
    drawerIcon: ({tintColor}) => (
      <Image source={deliver_food32} style={styles.iconMenu} />
    ),
  });

  render() {
    return (
      <View styles={styles.view}>
        <Text> Screen2 </Text>
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
    backgroundColor: 'red',
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

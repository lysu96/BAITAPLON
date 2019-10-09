import React, {Component} from 'react';
import {View, StyleSheet, Button, AsyncStorage} from 'react-native';

export default class Contact extends Component {
  static navigationOptions = ({screenProps}) => ({
    title: 'Thông báo',
    headerStyle: {
      backgroundColor: '#2ECC71',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.viewbnt}>
          <Button title="Đăng xuất" onPress={this._signOutAsync} />
        </View>
        <View style={styles.viewbnt}>
          <Button
            title="Cài đặt"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 5,
    marginTop: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  viewbnt: {
    margin: 5,
    marginTop: 10,
  },
});

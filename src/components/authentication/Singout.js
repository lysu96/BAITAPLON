import React from 'react';
import {Button, View, StyleSheet, AsyncStorage, StatusBar} from 'react-native';

export default class Singout extends React.Component {
  static navigationOptions = {
    title: 'Trang Sing out',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
          <StatusBar barStyle="default" />
        </View>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

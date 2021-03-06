import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Screen1 extends Component {
  static navigationOptions = ({screenProps}) => ({
    drawerLabel: 'Seach',
  });

  render() {
    return (
      <View styles={styles.view}>
        <Text> ButtonNavigator Seach</Text>
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

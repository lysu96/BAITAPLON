import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Screen5 extends Component {
  static navigationOptions = ({screenProps}) => ({
    title: 'Screen 5',
  });

  render() {
    return (
      <View styles={styles.view}>
        <Text> StackNavigator Screen 5</Text>
        <TouchableOpacity>
          <Text
            onPress={() => this.props.navigation.goBack()}
            style={styles.TouchableOpacity}
            underlayColor={'#f1f1f1'}>
            Go to StackNavigator Screen 2
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
    backgroundColor: 'green',
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 10,
  },
});

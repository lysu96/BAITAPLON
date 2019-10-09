import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Screen4 extends Component {
  static navigationOptions = ({screenProps}) => ({
    title: 'Screen 4',
  });

  render() {
    return (
      <View styles={styles.view}>
        <Text> StackNavigator Screen 4</Text>
        <TouchableOpacity>
          <Text
            onPress={() => this.props.navigation.navigate('Screen5')}
            style={styles.TouchableOpacity}
            underlayColor={'#f1f1f1'}>
            Go to Screen 5
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
});

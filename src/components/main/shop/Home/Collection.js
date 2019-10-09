import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
// bane
import tpbanner from '../../../../imgitem/temp/banner.jpg';

// -- homeScreen--
const {height, width} = Dimensions.get('window');

export default class Collection extends Component {
  // gotoListProduct() {
  //   const {navigator} = this.props;
  //   navigator.push({
  //     name: 'LIST_PRODUCT',
  //     category: {name: 'SPRING COLLECTION', id: 'COLLECTION'},
  //   });
  // }
  render() {
    return (
      <View style={styles.containerHomeSceen}>
        <View style={styles.textHomeSceen}>
          <Text style={styles.textTitle}>SPRING COLLECTION</Text>
        </View>
        <View style={styles.imgHomeSceen}>
          <Image source={tpbanner} style={styles.imgbanener} />
        </View>
      </View>
    );
  }
}
// imgHomeSceen
// 933 * 465
const imgWidth = width - 40;
const imgHeight = (imgWidth / 933) * 465;

const styles = StyleSheet.create({
  //
  textHomeSceen: {
    flex: 1,
  },
  imgHomeSceen: {
    flex: 4,
    justifyContent: 'center',
  },
  imgbanener: {
    // width: imgWidth,
    // height: imgHeight,
    height: imgHeight,
    width: imgWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#9A9A9A',
  },
  //
  containerHomeSceen: {
    height: height * 0.28,
    backgroundColor: '#FFFFFF',
    margin: 10,
    shadowColor: '#2e272b',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,

    // width: width - 20,
    // backgroundColor: '#FFF',
    // margin: 10,
    // justifyContent: 'space-between',
    // shadowColor: '#2E272B',
    // shadowOffset: {width: 0, height: 3},
    // shadowOpacity: 0.2,
    // padding: 10,
    // paddingTop: 0,
  },
});

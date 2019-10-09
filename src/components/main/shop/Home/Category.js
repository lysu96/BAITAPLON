import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
// bane
import maxi from '../../../../imgitem/temp/maxi.jpg';
import little from '../../../../imgitem/temp/little.jpg';
import party from '../../../../imgitem/temp/party.jpg';

// -- homeScreen--
const {height, width} = Dimensions.get('window');

export default class Category extends Component {
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
          <Text style={styles.textTitle}>LIST COLLECTION</Text>
        </View>
        <View style={styles.imgHomeSceen}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={2}
            showPagination>
            <ImageBackground source={maxi} style={styles.imgbanener}>
              <Text style={styles.textStyle}>Anh 1</Text>
            </ImageBackground>
            <ImageBackground source={little} style={styles.imgbanener}>
              <Text style={styles.textStyle}>Anh 2</Text>
            </ImageBackground>
            <ImageBackground source={party} style={styles.imgbanener}>
              <Text style={styles.textStyle}>Anh 3</Text>
            </ImageBackground>
          </SwiperFlatList>
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
  },
  imgbanener: {
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
  textStyle: {
    fontSize: 18,
    color: '#9A9A9A',
    justifyContent: 'center',
  },
  //
  containerHomeSceen: {
    height: height * 0.25,
    backgroundColor: '#FFFFFF',
    margin: 10,
    shadowColor: '#2e272b',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    justifyContent: 'space-between',
  },
});

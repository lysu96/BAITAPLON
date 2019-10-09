import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
//import iconcart0 from '../../../../imgitem/icon/cart0.png';

const {width} = Dimensions.get('window');

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Datalist: [
        {
          key: '1',
          uri: require('../../../../imgitem/temp/sp1.jpeg'),
          tenSP: 'SAN PHAM 1 DUC MUA NHIEU NHAT TAI DAY ',
          giaSp: '200000',
        },
        {
          key: '2',
          uri: require('../../../../imgitem/temp/sp2.jpeg'),
          tenSP: 'SAN PHAM 3',
          giaSp: '300000',
        },
        {
          key: '3',
          uri: require('../../../../imgitem/temp/sp3.jpeg'),
          tenSP: 'SAN PHAM 3',
          giaSp: '400000',
        },
      ],
    };
  }

  static navigationOptions = ({screenProps}) => ({
    drawerLabel: 'Cart',
    title: 'Giỏ hàng',
    headerStyle: {
      backgroundColor: '#2ECC71',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });
  render() {
    return (
      <View style={styles.containerHomeSceens}>
        <FlatList
          style={styles.flatlistSP}
          data={this.state.Datalist}
          renderItem={({item}) => (
            <View style={styles.viewSP}>
              <View style={styles.imgStyle}>
                <Image source={item.uri} style={styles.imgStyle} />
              </View>
              <View style={styles.textStyle}>
                <Text style={styles.textTitelsp}>{item.tenSP}</Text>
                <Text style={styles.textsp}>{item.giaSp}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const widthSP = width - 15;
const ImgWidth = (width - 50) / 5;
const ImgHeight = (ImgWidth / 361) * 452;
const styles = StyleSheet.create({
  containerHomeSceens: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  flatlistSP: {
    width: '100%',
  },
  viewSP: {
    width: widthSP,
    borderColor: '#D3D3CF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#2e272b',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    margin: 7.5,
    flexDirection: 'row',
  },
  imgStyle: {
    flex: 2,
    width: ImgWidth - 2.2,
    height: ImgHeight,
    borderRadius: 5,
  },
  textStyle: {
    flex: 8,
  },
  textTitelsp: {
    paddingLeft: 5,
    fontSize: 18,
    color: '#9A9A9A',
    fontWeight: '500',
  },
  textsp: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 14,
    color: 'red',
  },
});

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Datalist: [
        {
          key: '1',
          uri: require('../../../../imgitem/temp/sp1.jpeg'),
          tenSP: 'SAN PHAM 1 DUC MUA NHIEU NHAT TAI DAY',
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
        {
          key: '4',
          uri: require('../../../../imgitem/temp/sp4.jpeg'),
          tenSP: 'SAN PHAM 4',
          giaSp: '500000',
        },
        {
          key: '5',
          uri: require('../../../../imgitem/temp/sp5.jpeg'),
          tenSP: 'SAN PHAM 3',
          giaSp: '400000',
        },
        {
          key: '6',
          uri: require('../../../../imgitem/temp/sp5.jpeg'),
          tenSP: 'SAN PHAM 4',
          giaSp: '500000',
        },
        {
          key: '7',
          uri: require('../../../../imgitem/temp/sp5.jpeg'),
          tenSP: 'SAN PHAM 3',
          giaSp: '400000',
        },
        {
          key: '8',
          uri: require('../../../../imgitem/temp/sp5.jpeg'),
          tenSP: 'SAN PHAM 4',
          giaSp: '500000',
        },
        {
          key: '9',
          uri: require('../../../../imgitem/temp/sp5.jpeg'),
          tenSP: 'SAN PHAM 3',
          giaSp: '400000',
        },
        {
          key: '10',
          uri: require('../../../../imgitem/temp/sp5.jpeg'),
          tenSP: 'SAN PHAM 4',
          giaSp: '500000',
        },
      ],
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Sảm phẩm',
  });

  _goScreen4 = () => {
    this.props.navigation.navigate('Screen4');
  };
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.viewTitel}>
          <Text style={styles.textTitel}>DANH SACH SAN PHAM</Text>
        </View>

        <FlatList
          style={styles.flatlistSP}
          data={this.state.Datalist}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.viewSP}>
                <Image source={item.uri} style={styles.imgStyle} />
                <Text style={styles.textTitelsp}>{item.tenSP}</Text>
                <Text style={styles.textsp}>{item.giaSp}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const ImgWidth = (width - 50) / 2;
const ImgHeight = (ImgWidth / 361) * 452;
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
    margin: 10,
    justifyContent: 'center',
    shadowColor: '#2e272b',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  viewTitel: {
    height: 50,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  textTitel: {
    color: '#9A9A9A',
    fontSize: 20,
  },
  flatlistSP: {
    width: '100%',
  },
  viewSP: {
    width: ImgWidth,
    borderColor: '#D3D3CF',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#2e272b',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    margin: 7.5,
  },
  imgStyle: {
    width: ImgWidth - 2.2,
    height: ImgHeight,
    borderRadius: 5,
  },
  textTitelsp: {
    paddingLeft: 5,
    fontSize: 18,
    color: '#9A9A9A',
    fontWeight: '500',
  },
  textsp: {
    paddingLeft: 5,
    fontSize: 14,
    color: 'red',
  },
});

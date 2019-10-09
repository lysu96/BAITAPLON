import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  AsyncStorage,
  TextInput,
  Text,
} from 'react-native';
export default class Singin extends React.Component {
  constructor(props) {
    super(props);
    // this.props= state;
    this.state = {
      name: ' ',
      email: ' ',
      pass: ' ',
      repass: ' ',
      hienthi: ' ',
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Đăng Ký',
    headerStyle: {hieght: 55, backgroundColor: '#2ECC71'},
    headerTitleStyle: {fontWeight: 'bold', color: 'white'},
  });

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    // this.props.navigation.navigate('SignIn', {Don: 'Đăng ký thành công'});
    this.props.navigation.push('SignIn', {
      Don: 'Đăng ký thành công bây giờ có thể đang nhập',
    });
  };

  _getTextName(text) {
    this.setState({name: text});
  }
  _getTextEmail(text) {
    this.setState({email: text});
  }
  _getTextPass(text) {
    this.setState({pass: text});
  }
  _getTextRePass(text) {
    this.setState({repass: text});
  }
  _onPress() {
    let namenguoidung = this.state.name;
    let emailnguoidung = this.state.email;
    let passnguoidung = this.state.pass;
    let repassnguoidung = this.state.repass;

    // let namedata = '1';
    // let emaildata = '1';
    // let passdata = '1';
    // let repassdata = '1';

    let aCong = emailnguoidung.indexOf('@email');
    let dauCham = emailnguoidung.lastIndexOf('.com');

    if (
      namenguoidung === '' ||
      emailnguoidung === '' ||
      passnguoidung === '' ||
      repassnguoidung === ''
    ) {
      this.setState({hienthi: '* Các trường không được để trống'});
    } else if (
      aCong < 1 ||
      dauCham < aCong + 2 ||
      dauCham + 2 > emailnguoidung.length
    ) {
      this.setState({hienthi: '* Email bạn điền không chính xác'});
    } else {
      this._signInAsync();
    }

    // if (
    //   namenguoidung === namedata &&
    //   emailnguoidung === emaildata &&
    //   passnguoidung === passdata &&
    //   repassnguoidung === repassdata
    // ) {
    //   this._signInAsync();
    // } else {
    //   this.setState({hienthi: '* Sai tên đăng nhập hoặc mật khẩu'});
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.viewIP}>
            <TextInput
              style={styles.textIP}
              placeholder="Enter your Name"
              onChangeText={this._getTextName.bind(this)}
            />
          </View>
          <View style={styles.viewIP}>
            <TextInput
              style={styles.textIP}
              placeholder="Enter your Email"
              onChangeText={this._getTextEmail.bind(this)}
            />
          </View>
          <View style={styles.viewIP}>
            <TextInput
              style={styles.textIP}
              placeholder="Enter your Password"
              secureTextEntry={true}
              onChangeText={this._getTextPass.bind(this)}
            />
          </View>
          <View style={styles.viewIP}>
            <TextInput
              style={styles.textIP}
              placeholder="Re-enter your Password"
              secureTextEntry={true}
              onChangeText={this._getTextRePass.bind(this)}
            />
          </View>
          <Text style={styles.textErro}>{this.state.hienthi}</Text>
          <View style={styles.bnt}>
            <Button
              title="Đăng ký"
              style={styles.bnt}
              onPress={this._onPress.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#99e699',
  },
  row: {
    width: 320,
    height: 300,
    marginTop: 80,
  },
  viewIP: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
  textIP: {
    fontSize: 20,
    padding: 3,
    margin: 5,
    paddingLeft: 15,
  },
  bnt: {
    margin: 10,
    padding: 5,
  },
  textErro: {
    color: 'red',
  },
});

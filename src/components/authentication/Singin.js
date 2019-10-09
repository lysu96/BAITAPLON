import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  AsyncStorage,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import iconHome from '../../imgitem/icon/home0.png';
export default class Singin extends React.Component {
  constructor(props) {
    super(props);
    // this.props= state;
    this.state = {
      email: ' ',
      pass: ' ',
      hienthi: ' ',
    };
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.titleHeader}>
          <LogoTitle />
        </View>
      </TouchableOpacity>
    ),
    headerStyle: {hieght: 55, backgroundColor: '#2ECC71'},
    headerTitleStyle: {fontWeight: 'bold', color: 'white'},
    headerLeft: (
      <Button
        // onPress={() => screenProps.navigate('authention')}
        onPress={() => navigation.navigate('Register')}
        title="Đăng ký"
        color="red"
      />
    ),
  });

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  _getTextEmail(text) {
    this.setState({email: text});
  }
  _getTextPass(text) {
    this.setState({pass: text});
  }
  _onPress() {
    let emailnguoidung = this.state.email;
    let passnguoidung = this.state.pass;
    let emaildata = 'Admin';
    let passdata = '12345';

    if (emailnguoidung === emaildata && passnguoidung === passdata) {
      this._signInAsync();
    } else if (emailnguoidung === '') {
      this.setState({hienthi: '* Hãy nhập UserName'});
    } else if (passnguoidung === '') {
      this.setState({hienthi: '* Hãy nhập Mật khẩu'});
    } else if (emailnguoidung === '' && passnguoidung === '') {
      this.setState({hienthi: '* Đừng để rỗng UserName và Mật khẩu'});
    } else {
      this.setState({hienthi: '* Sai tên đăng nhập hoặc mật khẩu'});
    }
  }

  render() {
    const {navigation} = this.props;
    const xong = navigation.getParam('Don');

    return (
      <View style={styles.container}>
        <View style={styles.row}>
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
          <Text style={styles.textErro}>{this.state.hienthi}</Text>
          <Text style={styles.textErro}>{JSON.stringify(xong)}</Text>
          <View style={styles.bnt}>
            <Button
              title="Sign in"
              style={styles.bnt}
              onPress={this._onPress.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}
class LogoTitle extends React.Component {
  render() {
    return <Image source={iconHome} style={styles.logo} />;
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
  logo: {
    width: 30,
    height: 30,
  },
  titleHeader: {
    marginLeft: 30,
  },
  textErro: {
    color: 'red',
  },
});

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  auth_input: {
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    width: '90%',
    padding: 10,
  },
});

class SignIn extends Component {
  static navigationOptions = ({ navigation: { goBack } }) => ({
    title: 'Sign In',
    headerTitleStyle: {
      justifyContent: 'space-between',
      textAlign: 'center',
    },
    headerStyle: {
      backgroundColor: '#DDDDDD',
    },
    headerLeft: (
      <TouchableOpacity onPress={() => goBack()} style={{ marginLeft: 20 }}>
        <Ionicons name="ios-arrow-back" size={32} color="grey" />
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ width: 120 }} />
    ),
  })

  constructor(props) {
    super(props);
    this.state = {
      // password: '',
      // email: '',
    };
    this.fullWidth = Dimensions.get('window').width;
	}
	
	onPressButton = () => {
		const { navigation: { navigate } } = this.props;
		navigate('Success');
	}

	render() {
	  return (
      <View style={styles.container}>
        <View style={{ height: '60%', width: '100%', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://www.shareicon.net/download/2015/09/15/101512_logo_512x512.png' }}
              style={{ width: 100, height: 100 }}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Choose Your Method.</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={{ uri: 'https://png.pngtree.com/element_our/md/20180301/md_5a982744da73b.png' }}
                style={{ width: 60, height: 60, padding: 10 }}
              />
              <Image
                source={{ uri: 'https://png.pngtree.com/element_our/md/20180301/md_5a982744da73b.png' }}
                style={{ width: 60, height: 60, padding: 10 }}
              />
              <Image
                source={{ uri: 'https://png.pngtree.com/element_our/md/20180301/md_5a982744da73b.png' }}
                style={{ width: 60, height: 60, padding: 10 }}
              />
            </View>
          </View>

          <TextInput
            style={styles.auth_input}
            underlineColorAndroid="transparent"
            placeholder="Email Address"
            maxLength={40}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.auth_input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            maxLength={10}
            secureTextEntry
            autoCapitalize="none"
          />

          <View style={{ width: '90%', paddingTop: 15 }}>
            <Text style={[GlobalStyles.regular_text, { color: '#DDDDDD' }]}>
            By creating an account, I agree to the Terms of Use and Privacy Policy
            </Text>
          </View>
        </View>

        <TouchableOpacity style={GlobalStyles.btn_green} onPress={this.onPressButton}>
          <Text style={[GlobalStyles.notification_text, { fontWeight: 'normal', color: '#fff' }]}>{'Continue'.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
	  );
	}
}

const mapStateToProp = () => ({

});

export default connect(mapStateToProp)(SignIn);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import {
  AsyncStorage,
  // ActivityIndicator,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  // StyleSheet,
  TextInput,
  Image,
  Keyboard,
  // TouchableWithoutFeedback,
} from 'react-native';
import LinkedInModal from 'react-native-linkedin';
import Ionicons from '@expo/vector-icons/Ionicons';
import GlobalStyles from '../styles/GlobalStyles';

// const styles = StyleSheet.create({

// });

class SignIn extends Component {
  static navigationOptions = ({ navigation: { goBack } }) => ({
    title: 'Sign In',
    headerTitleStyle: {
      justifyContent: 'space-between',
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
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

    };
    this.fullWidth = Dimensions.get('window').width;
    this.linkedInModal = null;
    this.linkedInModalRef = (node) => {
      this.linkedInModal = node;
    };
  }

componentDidMount = async () => {
  await this.retrieveData();
}

onPressButton = () => {
  const { reset, navigate } = NavigationActions;
  const { navigation: { dispatch } } = this.props;
  const resetAction = reset({
    index: 0,
    actions: [
      navigate({ routeName: 'Success' }),
    ],
  });
  dispatch(resetAction);
}

storeData = async (token) => {
  try {
    await AsyncStorage.setItem('setToken', token.access_token);
    console.log('setToken', token);
  } catch (error) {
    console.log('setToken', error);
  }
}

retrieveData = async () => {
  try {
    const token = await AsyncStorage.getItem('setToken');
    if (token !== null) {
      console.log('retrieve', token);
    }
  } catch (error) {
    console.log('error', error);
  }
}

render() {
  return (
    <View style={[GlobalStyles.container, { justifyContent: 'space-around', alignItems: 'center' }]}>
      <View style={{ height: '60%', width: '100%', alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://www.shareicon.net/download/2015/09/15/101512_logo_512x512.png' }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Choose Your Method.</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: 'https://semantic-ui.com/images/wireframe/image.png' }}
              style={{ width: 40, height: 40, marginRight: 10, marginTop: 10 }}
            />
            <Image
              source={{ uri: 'https://semantic-ui.com/images/wireframe/image.png' }}
              style={{ width: 40, height: 40, marginTop: 10 }}
            />

            <TouchableOpacity onPress={() => this.linkedInModal.open()} style={{ width: 60, height: 60 }}>
              <LinkedInModal
                ref={this.linkedInModalRef}
                linkText=""
                clientID="77ncmjo9a0iwf5"
                clientSecret="R9SOMq50LL0NWGIH"
                redirectUri="https://www.linkedin.com/developer/apps"
                onSuccess={this.storeData}
                onSignIn={this.onPressButton}
              />
              <Image
                source={{ uri: 'https://png.pngtree.com/element_our/md/20180301/md_5a982744da73b.png' }}
                style={GlobalStyles.auth_btn}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={GlobalStyles.auth_input}
          underlineColorAndroid="transparent"
          placeholder="Email Address"
          maxLength={40}
          keyboardType="numeric"
          autoCapitalize="none"
          onSubmitEditing={Keyboard.dismiss}
        />

        <TextInput
          style={GlobalStyles.auth_input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          maxLength={10}
          secureTextEntry
          autoCapitalize="none"
          onSubmitEditing={Keyboard.dismiss}
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

SignIn.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProp)(SignIn);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import {
  AsyncStorage,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import LinkedInModal from 'react-native-linkedin';
import { Ionicons } from '@expo/vector-icons';
// import { auth } from '../actions';
import GlobalStyles from '../styles/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  auth_input: {
    height: 60,
    marginTop: '10%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    width: '90%',
    padding: 10,
  },
});

class SignUp extends Component {
static navigationOptions = ({ navigation: { goBack } }) => ({
  title: 'Sign Up',
  headerTitleStyle: {
    justifyContent: 'space-around',
    textAlign: 'center',
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

// auth = () => {
//   const { navigation: { dispatch } } = this.props;
//   dispatch(auth());
// }

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

render() {
  const { navigation: { navigate } } = this.props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'skyblue' }}>Sign Up With LinkedIn</Text>
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
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TouchableOpacity style={GlobalStyles.btn_green} onPress={this.onPressButton}>
          <Text style={[GlobalStyles.notification_text, { fontWeight: 'normal', color: '#fff' }]}>{'Continue'.toUpperCase()}</Text>
        </TouchableOpacity>

        <View style={[GlobalStyles.view_conteiner, { flexDirection: 'row' }]}>
          <Text style={[GlobalStyles.regular_text, { color: '#DDDDDD' }]}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate('SignIn')}>
            <Text style={[GlobalStyles.regular_text, { color: '#DDDDDD' }]}>&nbsp;Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
}

const mapStateToProp = () => ({

});

SignUp.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProp)(SignUp);

import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  View,
  Dimensions,
  // Button,
  // Alert,
  TouchableOpacity,
} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

class WelcomeScreen extends React.Component {
  static navigationOptions = () => ({
    header: null,
  })

  // static getDerivedStateFromProps(props, state) {
  //   return null;
  // }

  constructor(props) { // 1
    super(props);
    this.state = {
      text: 'Considerit',
    };
    this.fullWidth = Dimensions.get('window').width;
  }

  // componentDidMount() {

  // }

  // componentDidUpdate() {

  // }

  // shouldComponentUpdate() {

  // }

  // componentWillUnmount() {

  // }

  onPressButton = () => {
    const { navigation: { navigate } } = this.props;
    navigate('SignUp');
  }

  render() {
    const { navigation: { navigate } } = this.props;
    const { text } = this.state;
    return (
      <View style={GlobalStyles.container}>
        <View style={[GlobalStyles.main_top_conteiner, { flexDirection: 'row' }]}>
          <View style={{ borderRightWidth: 1, marginRight: 15, paddingRight: 15 }}>
            <Image
              source={{ uri: 'https://www.shareicon.net/download/2015/09/15/101512_logo_512x512.png' }}
              style={{ width: 100, height: 100, borderRightWidth: 10 }}
            />
          </View>
          <Text style={GlobalStyles.welcome_text}>{text}</Text>
        </View>

        <View style={GlobalStyles.main_bottom_conteiner}>
          <View style={GlobalStyles.view_conteiner}>
            <Text style={GlobalStyles.notification_text}>
              Welcome to &nbsp;
              {text}
            </Text>
          </View>

          <View style={[GlobalStyles.view_conteiner, { width: '90%' }]}>
            <Text style={GlobalStyles.regular_text}>
              Are you ready to build more meaningful
              relationships that matter? Click `Get Started`
              to start your journey
            </Text>
          </View>

          <TouchableOpacity style={GlobalStyles.btn_green} onPress={this.onPressButton}>
            <Text style={[GlobalStyles.notification_text, { fontWeight: 'normal', color: '#fff' }]}>Get started</Text>
          </TouchableOpacity>

          <View style={[GlobalStyles.view_conteiner, { flexDirection: 'row' }]}>
            <Text style={GlobalStyles.regular_text}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate('SignIn')}>
              <Text style={GlobalStyles.regular_text}>&nbsp;Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

WelcomeScreen.propTypes = {
  myParams: PropTypes.shape({
    state: PropTypes.shape(),
  }),
};

WelcomeScreen.defaultProps = {
  myParams: {
    state: null,
  },
};

export default WelcomeScreen;

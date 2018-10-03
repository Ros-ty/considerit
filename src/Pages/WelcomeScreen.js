import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Dimensions, Button, Alert, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../GlobalStyles';

class WelcomeScreen extends React.Component {
  // static navigationOptions = () => ({
    
  // })

  static getDerivedStateFromProps(props, state) {
      return null;
  }

  constructor(props) { // 1
    super(props);
    this.state = {};
    this.fullWidth = Dimensions.get('window').width;
    this.state = {text: 'Considerit'};
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  shouldComponentUpdate() {

  }

  componentWillUnmount() {
      
  }

  onPressButton = () => {
    const { navigation: { navigate } } = this.props;
    navigate('NextPage');
  }

  render() {
    
    return (
      <View style={[GlobalStyles.container, styles.AlignContainer]}>
        {/* <View style={{ height: 40, width: this.fullWidth }}> */}
        <View style={styles.main_top_conteiner}>
          {/* <Text style={styles.notification_text}>{'Considerit'.toUpperCase()}</Text> */}
          <Text style={styles.welcome_text}>{this.state.text}</Text>
        </View>

        <View style={styles.main_bottom_conteiner}>
          <View style={styles.view_conteiner}>
            <Text style={styles.notification_text}>Welcome to {this.state.text}</Text>
          </View>
          <View style={styles.view_conteiner}>
            <Text style={styles.regular_text}>Are you ready to build more meaningful relationships that matter? Click 'Get Started' to start your journey</Text>
          </View>

          <TouchableOpacity style={{ width: '90%', paddingVertical: 10, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }} onPress={this.onPressButton}>
            <Text>Get started</Text>
          </TouchableOpacity>
          <View style={[styles.view_conteiner, { flexDirection: 'row' }]}>
            <Text style={styles.regular_text}>Already have an account?</Text><TouchableOpacity onPress={() => console.log('signIn')}><Text style={styles.regular_text}>&nbsp;Sign In</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome_text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'skyblue',
  },
  notification_text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  view_conteiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_top_conteiner: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  main_bottom_conteiner: {
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    height: '50%',
  },
  regular_text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

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

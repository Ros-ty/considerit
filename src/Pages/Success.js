import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

class Success extends Component {
  static navigationOptions = () => ({
    header: null,
  })

  constructor(props) {
    super(props);
    this.state = {};
    this.fullWidth = Dimensions.get('window').width;
  }

  onPressButton = () => {
    const { reset, navigate } = NavigationActions;
    const { navigation: { dispatch } } = this.props;
    const resetAction = reset({
      index: 0,
      actions: [
        navigate({ routeName: 'GetData' }),
      ],
    });
    dispatch(resetAction);
  }

  render() {
    return (
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.main_top_conteiner}>
          <Image
            source={{ uri: 'https://www.shareicon.net/download/2015/09/15/101512_logo_512x512.png' }}
            style={{ width: 250, height: 250 }}
          />
        </View>

        <View style={GlobalStyles.main_bottom_conteiner}>
          <View style={GlobalStyles.view_conteiner}>
            <Text style={[GlobalStyles.notification_text, { textAlign: 'center', marginTop: 50 }]}>
              Success! Your account has been linked.
            </Text>
          </View>

          <TouchableOpacity style={GlobalStyles.btn_green} onPress={this.onPressButton}>
            <Text style={[GlobalStyles.notification_text, { fontWeight: 'normal', color: '#fff' }]}>{'Continue'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProp = () => ({

});

Success.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProp)(Success);

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class NextPage extends Component {
	static navigationOptions = () => ({
	  title: 'Next Page',
	  headerLeft: null,
	})

	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render() {
	  return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hi Ros!</Text>
      </View>
	  );
	}
}

const mapStateToProp = () => ({

});

export default connect(mapStateToProp)(NextPage);

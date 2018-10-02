import React from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
// import GlobalStyles from '../../GlobalStyles';

class WelcomScreen extends React.Component {
  static getDerivedStateFromProps(props, state) {
      return null;
  }

  constructor(props) { // 1
    super(props);
    this.state = {};
    this.fullWidth = Dimensions.get('window').width;
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  shouldComponentUpdate() {

  }

  componentWillUnmount() {
      
  }

  render() {
    
    return (
      <ScrollView style={[GlobalStyles.container, styles.AlignContainer]}>
        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: auto, height:180}}
        />
        {/* <View > */}
          {/* <View style={{ height: 40, width: this.fullWidth }}> */}
          <ScrollView style={{ height: 40, width: this.fullWidth }}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Hello it's me</Text>
          {/* </View> */}
          </ScrollView>
        {/* </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AlignContainer: {
    justifyContent: 'center',
  },
});

WelcomScreen.propTypes = {
  myParams: PropTypes.shape({
    state: PropTypes.shape(),
  }),
};

WelcomScreen.defaultProps = {
  myParams: {
    state: null,
  },
};

export default WelcomScreen;

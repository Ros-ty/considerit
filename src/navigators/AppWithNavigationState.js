import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BackHandler,
  DeviceEventEmitter,
  Dimensions,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { isEqual } from 'lodash';

import { addListener } from '../helpers/redux';
import AppNavigator from './AppNavigator';

class AppWithNavigationState extends Component {
  static getDerivedStateFromProps = (_, state) => ({
    state,
  })

  constructor(props) {
    super(props);
    this.width = Dimensions.get('window').width;
    this.state = {};
    this.backPressSubscriptions = new Set();
  }

  componentDidMount() {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress');
    DeviceEventEmitter.addListener('hardwareBackPress', this.hardwareBackPress);
    this.backPressSubscriptions.add(this.handleHardwareBack);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { state, props } = this;

    const stateChanges = false;
    const propsChanges = (
      !isEqual(nextProps.nav, props.nav)
    );

    return stateChanges || propsChanges;
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeAllListeners('hardwareBackPress');
    this.backPressSubscriptions.clear();
  }

  hardwareBackPress = () => {
    let invokeDefault = true;
    const subscriptions = [];

    this.backPressSubscriptions.forEach(sub => subscriptions.push(sub));

    for (let i = 0; i < subscriptions.reverse().length; i += 1) {
      if (subscriptions[i]()) {
        invokeDefault = false;
        break;
      }
    }

    if (invokeDefault) {
      BackHandler.exitApp();
    }
  }

  handleHardwareBack = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    const {
      dispatch,
      nav: state,
      ...rest
    } = this.props;
    return (
      <Fragment>
        {/* <StatusBar
          barStyle={Platform.OS !== 'ios' ? 'light-content' : 'dark-content'}
          key="StatusBar"
        /> */}
        <AppNavigator
          key="AppNavigator"
          screenProps={{
            ...rest,
          }}
          navigation={{
            dispatch,
            state,
            addListener,
          }}
        />
      </Fragment>
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    isTransitioning: PropTypes.bool,
    key: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

AppWithNavigationState.defaultProps = {
};

const mapStateToProps = ({
  nav,
}) => ({
  nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

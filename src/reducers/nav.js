import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('WelcomeScreen');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'LOG_OUT_SUCCESS':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'WelcomeScreen' })] }), state);
      break;
    case 'AUTH_SUCCESS':
      nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Success' })] }), state);
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

// import React from 'react';
// import WelcomeScreen from './src/Pages/WelcomeScreen';

// export default () => (
//   <WelcomeScreen />
// );
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './storeConfig';
import AppWithNavigationState from './src/navigators/AppWithNavigationState';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

console.ignoredYellowBox = ['Remote debugger'];
console.disableYellowBox = true;

import { StackNavigator } from 'react-navigation';

import WelcomeScreen from '../Pages/WelcomeScreen';
import NextPage from '../Pages/NextPage';

export default StackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  NextPage: {
    screen: NextPage,
  },
});

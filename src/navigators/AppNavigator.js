import { StackNavigator } from 'react-navigation';

import WelcomeScreen from '../Pages/WelcomeScreen';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Success from '../Pages/Success';
import GetData from '../Pages/GetData';

export default StackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  SignUp: {
    screen: SignUp,
  },
  SignIn: {
    screen: SignIn,
  },
  Success: {
    screen: Success,
  },
  GetData: {
    screen: GetData,
  },
});

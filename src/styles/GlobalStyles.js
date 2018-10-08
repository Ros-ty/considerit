import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    marginBottom: 10,
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
    justifyContent: 'space-around',
    backgroundColor: 'skyblue',
    flexDirection: 'column',
    height: '50%',
  },
  regular_text: {
    fontSize: 18,
    textAlign: 'center',
  },
  btn_green: {
    width: '90%',
    marginBottom: 10,
    paddingVertical: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Sign_in styles
  auth_input: {
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    width: '90%',
    padding: 10,
  },
  auth_btn: {
    width: 60,
    height: 60,
    padding: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  // Sign_in styles

});

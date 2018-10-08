import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getGiphy } from '../actions/giphy';
import GlobalStyles from '../styles/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  auth_input: {
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    width: '90%',
    padding: 10,
  },
  content_title: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'skyblue',
    marginTop: 10,
  },
  content_sub: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#DDDDDD',
    marginTop: 10,
  },
});

class GetData extends Component {
  // static navigationOptions = ({ navigation }) => ({
  static navigationOptions = ({ navigation: { state: { params } } }) => ({
    title: 'Get_Data_From_API',
    headerTitleStyle: {
      justifyContent: 'space-between',
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
    headerStyle: {
      backgroundColor: '#DDDDDD',
    },
    headerLeft: null,
    headerRight: (
      <TouchableOpacity
        disabled={!params || !params.toglleMenu}
        style={{ marginRight: 20, paddingHorizontal: 10 }}
        onPress={() => params.toglleMenu()}
      >
        <Ionicons name="md-more" size={32} color="grey" />
      </TouchableOpacity>
    ),
  })

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.fullWidth = Dimensions.get('window').width;
  }

  componentDidMount = () => {
    const { navigation: { setParams, dispatch } } = this.props;
    dispatch(getGiphy());
    setParams({ toglleMenu: this.toglleMenu });
  }

  toglleMenu = () => this.setState(prevState => ({ showMenu: !prevState.showMenu }));

  // renderGiphy = (giphy) => giphy.map()

  render() {
    const { showMenu } = this.state;
    return (
      <ScrollView style={GlobalStyles.container}>
        <TouchableWithoutFeedback disabled={!showMenu} onPress={() => this.toglleMenu()}>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TextInput
              style={styles.auth_input}
              underlineColorAndroid="transparent"
              placeholder="Search"
              maxLength={40}
              autoCapitalize="none"
            />

            <View style={{ width: '60%', padding: 20 }}>
              <Text style={styles.content_title}>{'Some Text'.toUpperCase()}</Text>
              <Text style={styles.content_sub}>Some Subtext - Lorem Lorem</Text>
              <View>
                <Image
                  source={{ uri: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif' }}
                  style={{ width: 200, height: 200, marginTop: 10 }}
                />
              </View>
            </View>

            <View style={{ width: '60%', padding: 20 }}>
              <Text style={styles.content_title}>{'Some Text'.toUpperCase()}</Text>
              <Text style={styles.content_sub}>Some Subtext - Lorem Lorem</Text>
              <View>
                <Image
                  source={{ uri: 'https://semantic-ui.com/images/wireframe/image.png' }}
                  style={{ width: 200, height: 200, marginTop: 10 }}
                />
              </View>
            </View>

            <View style={{ width: '60%', padding: 20 }}>
              <Text style={styles.content_title}>{'Some Text'.toUpperCase()}</Text>
              <Text style={styles.content_sub}>Some Subtext - Lorem Lorem</Text>
              <View>
                <Image
                  source={{ uri: 'https://semantic-ui.com/images/wireframe/image.png' }}
                  style={{ width: 200, height: 200, marginTop: 10 }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {showMenu && (
        <View style={{
          width: '80%',
          height: 50,
          position: 'absolute',
          right: 0,
          top: 0,
          backgroundColor: '#fff',
          padding: 10,
          borderWidth: 1,
          borderColor: '#DDDDDD',
        }}
        >
          <Text style={{ fontSize: 20 }}>Some text</Text>
        </View>
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ giphy: { giphy } }) => ({
  giphy,
});

// const mapActionsToProps = {
//   getGiphy,
// };

GetData.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  // getGiphy: PropTypes.func.isRequired,
};

GetData.defaultProps = {
  // giphy: [],
};

export default connect(mapStateToProps, getGiphy)(GetData);

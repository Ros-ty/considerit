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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
  static navigationOptions = () => ({
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
      <TouchableOpacity style={{ marginRight: 20 }}>
        <Ionicons name="md-more" size={32} color="grey" />
      </TouchableOpacity>
    ),
  })

  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
    };
    this.fullWidth = Dimensions.get('window').width;
  }

  render() {
    return (
      <ScrollView style={GlobalStyles.container}>
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
      </ScrollView>
    );
  }
}

const mapStateToProp = () => ({

});

GetData.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProp)(GetData);

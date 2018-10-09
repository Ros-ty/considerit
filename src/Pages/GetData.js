import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
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
import { getSearch } from '../actions/search';

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
    alignSelf: 'center',
    fontWeight: 'normal',
    color: 'skyblue',
    marginTop: 10,
  },
  content_sub: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'normal',
    color: '#DDDDDD',
    marginTop: 10,
  },
  popup_menu: {
    width: '80%',
    height: 50,
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  image_view: {
    width: 250,
    height: 250,
    marginTop: 10,
    alignSelf: 'center',
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
      searchValue: '',
    };
    this.fullWidth = Dimensions.get('window').width;
  }

  componentDidMount = () => {
    const { navigation: { setParams, dispatch } } = this.props;
    dispatch(getGiphy());
    setParams({ toglleMenu: this.toglleMenu });
  }

  onPressButton = () => {
    const { reset, navigate } = NavigationActions;
    const { navigation: { dispatch } } = this.props;
    const resetAction = reset({
      index: 0,
      actions: [
        navigate({ routeName: 'WelcomeScreen' }),
      ],
    });
    dispatch(resetAction);
  }

  toglleMenu = () => this.setState(prevState => ({ showMenu: !prevState.showMenu }));

  renderGiphy = giphy => giphy.map(({
    id, title, images, slug,
  }) => {
    console.log('images', images);
    return (
      <View style={{ width: '80%', padding: 20 }} key={id}>
        <Text style={styles.content_title}>{title.toUpperCase()}</Text>
        <Text style={styles.content_sub}>{slug}</Text>
        <View>
          <Image
            source={{ uri: images.fixed_height.url }}
            style={styles.image_view}
          />
        </View>
      </View>
    );
  });

  render() {
    const { giphy, navigation: { dispatch }, giphySearch } = this.props;
    const { showMenu, searchValue: search } = this.state;
    const giphyData = search.trim().length > 0 ? giphySearch : giphy;
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            style={styles.auth_input}
            underlineColorAndroid="transparent"
            placeholder="Search"
            maxLength={40}
            onChangeText={(searchValue) => {
              this.setState({ searchValue }, () => {
                const value = searchValue.trim().replace(/ /g, '+');
                dispatch(getSearch(value));
              });
            }}
            autoCapitalize="none"
          />
        </View>
        <ScrollView style={GlobalStyles.container}>
          <TouchableWithoutFeedback disabled={!showMenu} onPress={() => this.toglleMenu()}>
            <View style={{ width: '100%', alignItems: 'center' }}>

              {this.renderGiphy(giphyData)}

              <View style={{ width: '80%', padding: 20 }}>
                <Text style={styles.content_title}>{'Some Text'.toUpperCase()}</Text>
                <Text style={styles.content_sub}>Some Subtext - Lorem Lorem</Text>
                <View>
                  <Image
                    source={{ uri: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif' }}
                    style={styles.image_view}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          {showMenu && (
          <View style={styles.popup_menu}>
            <TouchableOpacity onPress={this.onPressButton}>
              <Text style={{ fontSize: 20, color: '#DDDDDD' }}>Log Out</Text>
            </TouchableOpacity>
          </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ giphy: { giphy }, search: { search: giphySearch } }) => ({
  giphy,
  giphySearch,
});

GetData.propTypes = {
  navigation: PropTypes.shape().isRequired,
  giphySearch: PropTypes.arrayOf(PropTypes.shape({})),
  giphy: PropTypes.arrayOf(PropTypes.shape({})),
};

GetData.defaultProps = {
  giphy: [],
  giphySearch: [],
};

export default connect(mapStateToProps)(GetData);

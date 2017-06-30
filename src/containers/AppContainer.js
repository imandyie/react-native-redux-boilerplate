import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class AppContainer extends Component {

  changeActiveScreen() {
    let screens = ['Home', 'About', 'Contact', 'Portfolio', 'News'];
    this.props.setScreen(screens[(Math.random() * screens.length) | 0]);
  }

  changeCurrentPost() {
    let posts = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6'];
    this.props.setPost(posts[(Math.random() * posts.length) | 0]);
  }

  render() {
    let activeScreen = this.props.activeScreen;
    let currentPost = this.props.currentPost;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Hello World</Text>
        <Text style={styles.subHead}>The active screen is: {activeScreen.state}</Text>
        <Text style={styles.subHead}>The current post is: {currentPost.state}</Text>
        <TouchableHighlight style={styles.button} onPress={ () => { this.changeActiveScreen() } }>
          <Text style={styles.buttonText}>Change Active Screen State</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={ () => { this.changeCurrentPost() } }>
          <Text style={styles.buttonText}>Change Current Post State</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
  button: {
    backgroundColor: 'green',
    marginBottom: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  welcomeText: {
    marginBottom: 30,
    fontSize: 40,
    textAlign: 'center',
  },
  subHead: {
    textAlign: 'center',
    marginBottom: 10
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    activeScreen: state.activeScreen,
    currentPost: state.currentPost,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

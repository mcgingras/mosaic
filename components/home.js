import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import GameContainer from './gameContainer';
import ViewContainer from './viewContainer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },

  button: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 50
  },

  text: {
    color: 'white'
  }
})

const Home = (props) => {

  return (
    <View style={styles.container}>
      <ViewContainer/>
      <GameContainer/>
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.toggleItem(key);
         }}>
        <View style={styles.button}>
          <Text style={styles.text}>{props.solved ? 'solved!' : 'not solved'}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
      solved: state.gameState.solved
  }
}

export default connect(mapStateToProps,null)(Home);


import React, {Component} from 'react';
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
    backgroundColor: '#F14729',
    padding: 10,
    marginTop: 50,
    borderRadius: 5
  },

  text: {
    fontFamily: 'StyreneA',
    color: 'white'
  }
})

class Home extends Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <ViewContainer/>
        <GameContainer/>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.toggleItem(key);
          }}>
          {this.props.loaded ?
            <View style={styles.button}>
              <Text style={styles.text}>{this.props.solved ? 'solved!' : 'not solved'}</Text>
            </View> :
            <View style={styles.button}>
            </View>
          }

        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      solved: state.gameState.solved
  }
}

export default connect(mapStateToProps,null)(Home);


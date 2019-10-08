import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import GameContainer from './gameContainer';
import ViewContainer from './viewContainer';


class Home extends Component {

  static navigationOptions = {
    title: 'Level',
    headerStyle: {
        backgroundColor: 'black',
    },
    headerTitleStyle: {
        color: 'white',
    }
};

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
              <Text>why is nothing here</Text>
            </View>
          }

        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      solved: state.gameState.solved,
      loaded: state.fontState.loaded
  }
}

export default connect(mapStateToProps,null)(Home);


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black'
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
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import GameContainer from './gameContainer';
import LogoTitle from './logoTitle';


class Home extends Component {

  static navigationOptions = {
    title: 'level',
    headerTitle: <LogoTitle />,
    headerStyle: {
        backgroundColor: 'black',
        paddingBottom: 20
        // borderBottomWidth: 0
    },
    headerTintColor: 'rgb(241, 245, 245)',
    headerTitleStyle: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontWeight: 'light',
    }
};

  constructor(props){
      super(props);  
  }

  // navigate to success screen if you solve the puzzle
  goToSuccess(){
    const {navigate} = this.props.navigation;
    navigate('SuccessScreen');
  }

  render(){
    this.props.solved && this.goToSuccess();

    return (
      <View style={styles.container}>
        <GameContainer/>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.toggleItem(key);
          }}>
          {this.props.loaded ?
            <View style={styles.button}>
              <Text style={styles.text}>{this.props.moves}</Text>
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
      loaded: state.fontState.loaded,
      moves: state.gameState.currentMoves
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
    fontFamily: 'Mono',
    color: 'white'
  }
})
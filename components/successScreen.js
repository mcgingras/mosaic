import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import LogoTitle from './logoTitle';
import { updateLevelMetadata, setMaxLevel, setCurrentLevel, setBoardToLevel } from '../actions';


class SuccessScreen extends Component {

  static navigationOptions = {
    title: 'YOU WIN',
    headerTitle: <LogoTitle />,
    headerStyle: {
        backgroundColor: 'black',
        paddingBottom: 20
    },
    headerTitleStyle: {
        color: 'white',
    }
};

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { navigate } = this.props.navigation;
    this.props.updateLevelMetadata(this.props.currentLevel, this.props.currentMoves);
    this.props.setMaxLevel(this.props.currentLevel);
  }

  // I feel like there is a lot that goes on when we change level that could be organized better
  goToNextLevel(){
    // if they want to continue to next level
    const {navigate} = this.props.navigation;
    this.props.setCurrentLevel(parseInt(this.props.currentLevel) + 1);
    this.props.setBoardToLevel(parseInt(this.props.currentLevel) + 1);
    navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.itemFont}>You win!</Text>
          <Text style={styles.itemFont}>{`Moves: ${this.props.currentMoves}`}</Text>
          <Button 
           onPress={() => {this.props.navigation.navigate('Levels')}}
           title="Back To Levels"
           />
          <Button 
           onPress={() => {this.goToNextLevel()}}
           title="Next Level"
           />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      currentLevel: state.gameState.currentLevel,
      currentMoves: state.gameState.currentMoves,
  }
}

const mapDispatchToProps =  { updateLevelMetadata, setMaxLevel, setCurrentLevel, setBoardToLevel }

export default connect(mapStateToProps,mapDispatchToProps)(SuccessScreen);


/**
 * styles for successScreen
 * 
 * container: rectangle that holds entire list
 * itemBody:  rectangle that holds individual level item
 * itemFont:  font displayed in itemBody
 */
const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'black'
  },

  itemFont: {
      fontFamily: 'Mono',
      color: '#F1F5F5'
  }
})
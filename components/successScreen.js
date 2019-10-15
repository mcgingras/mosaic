import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import LogoTitle from './logoTitle';
import { updateLevelMetadata } from '../actions';


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
    setTimeout(() => { navigate('Levels')}, 3000);
  }

  render() {
    return (
      <View>
          <Text>You win!</Text>
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

const mapDispatchToProps =  { updateLevelMetadata }

export default connect(mapStateToProps,mapDispatchToProps)(SuccessScreen);


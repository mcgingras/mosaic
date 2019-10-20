import React, {Component} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { toggleItem, checkIfSolved, incrementMoves } from '../actions';

class GameContainer extends Component {
    constructor(props){
        super(props);
    }

    press(key){
        this.props.toggleItem(key);
        this.props.checkIfSolved();
        this.props.incrementMoves(this.props.levelId);
    }

    render(){
        return (
        <View style={styles.container}>
            {this.props.board.map((item, key) => {
                return (
                    <TouchableWithoutFeedback
                    key={key}
                    onPress={() => {
                        this.press(key);
                    }}>
                        <View
                        style={[styles.gameItem, item == 0 ? styles.gameItemOff: styles.gameItemOn]}>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.gameState.board,
        levelId: state.levelState.currentLevel
    }
  }

const mapDispatchToProps = { toggleItem, checkIfSolved, incrementMoves }
export default connect(mapStateToProps,mapDispatchToProps)(GameContainer);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginTop: 50
    },

    gameItem: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10
    },

    gameItemOn: {
        backgroundColor: '#F14729',
    },

    gameItemPressed: {
        backgroundColor: "#000",
        borderColor: '#F14729',
        borderWidth: 2
    },

    gameItemOff: {
        backgroundColor: '#E6E6E2',
        borderColor: '#F1F5F5',
        borderWidth: .5
    }
  });
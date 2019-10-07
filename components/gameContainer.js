import React, {Component} from 'react';
import { View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { toggleItem } from '../actions'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    gameItemOn: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#000',
    },

    gameItemOff: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#FFF',
        borderColor: '#000',
        borderWidth: 1
    }
  });

class GameContainer extends Component {
    constructor(props){
        super(props);
    }

    press(){
        console.log('is this pressing');
    }

    render(){
        return (
        <View style={styles.container}>
            {this.props.board.map((item, key) => {
                return (
                    <TouchableWithoutFeedback
                    key={key}
                    onPress={() => {
                        this.props.toggleItem(key);
                    }}>
                        <View
                        style={item == 0 ? styles.gameItemOn: styles.gameItemOff}>
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
        board: state.gameState.board
    }
  }

const mapDispatchToProps = { toggleItem }

export default connect(mapStateToProps,mapDispatchToProps)(GameContainer);

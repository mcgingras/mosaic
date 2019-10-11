import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { levels } from '../constants/levels';


class ViewContainer extends Component {
    constructor(props){
        super(props); 
    }

    render(){
        return (
            <View style={styles.container}>
                {levels[this.props.currentLevel].map((item, key) => {
                    return (
                        <View
                        key={key}
                        style={[styles.viewItem, item == 0 ? styles.viewItemOff: styles.viewItemOn]}>
                        </View>
                    )
                })}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        puzzles: state.gameState.puzzles,
        solved: state.gameState.solved,
        currentLevel: state.levelState.currentLevel
    }
  }

export default connect(mapStateToProps,null)(ViewContainer);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginTop: 50,
        width: 150,
        marginHorizontal: 'auto'
    },

    viewItem: {
        width: 20,
        height: 20,
        margin: 10,
        borderRadius: 2
    },

    viewItemOn: {
        backgroundColor: '#F14729',
    },

    viewItemPressed: {
        backgroundColor: "#000",
        borderColor: '#F14729',
        borderWidth: 2
    },

    viewItemOff: {
        backgroundColor: '#E6E6E2',
        borderColor: '#F1F5F5',
        borderWidth: .5
    },

    text: {
        backgroundColor: 'white',
        color: 'white'
    }
  });
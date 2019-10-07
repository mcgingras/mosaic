import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginTop: 100,
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


class ViewContainer extends Component {
    constructor(props){
        super(props);

        console.log(this.props.solved);
        
    }

    render(){
        return (
            <View style={styles.container}>
                {this.props.puzzles[0].map((item, key) => {
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
        solved: state.gameState.solved
    }
  }

export default connect(mapStateToProps,null)(ViewContainer);


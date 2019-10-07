import React, {Component} from 'react';
import { View, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    gameItem: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#000',
    }
  });

class GameContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            config: [0,0,0,0,0,0,0,0,0]
        }
    }

    press(){
        console.log('is this pressing');
    }

    render(){
        return (
        <View style={styles.container}>
            {this.state.config.map((item, key) => {
                return (
                    <TouchableWithoutFeedback
                    key={key}
                    onPress={() => {
                        alert('You tapped the button!');
                    }}
                    >
                        <View
                        style={styles.gameItem}
                        ></View>
                    </TouchableWithoutFeedback>
                )
            })}
        </View>
        )
    }
}

export default GameContainer;
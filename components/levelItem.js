import React, {Component} from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

export default class LevelItem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>{this.props.levelId}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     backgroundColor: '#434141',
     padding: 10,
     width: 150,
     height: 150,
     borderRadius: 10,
     marginRight: 10
    },

    containerText: {
        color: 'white'
    }
  })
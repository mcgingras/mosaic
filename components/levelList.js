import React, {Component} from 'react'; 
import { View, FlatList, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { connect } from 'react-redux';
import { levels } from '../constants/levels';
import { setLevel } from '../actions'

class LevelList extends Component {

    static navigationOptions = {
        title: 'Levels',
    };

    constructor(props){
        super(props); 
    }

    goToLevel(levelId){
        const {navigate} = this.props.navigation;
        this.props.setLevel(levelId);
        // TODO: 'home' is a pretty shit name
        navigate('Home')
    }

    render(){
        return (
            <View style={styles.container}>
                {/* this is sort of annoying but we have to wait for
                    font to load first before rendering with that style */}
                {this.props.loaded
                ?
                <FlatList
                data={Object.keys(levels).map((level) => {
                    return (
                        {
                            title: `level ${level}`,
                            levelId: level
                        }
                    )
                })}
                renderItem={({item}) => {
                    return (
                        <TouchableWithoutFeedback
                        onPress={() => {this.goToLevel(item.levelId)}}
                        >
                            <View style={styles.itemBody}>
                                <Text style={styles.itemFont}>{item.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }}
                />
                :
                // rendering empty when style isnt there yet
                // very temporary though. might be way to change this
                <View></View>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loaded: state.fontState.loaded
    }
}

const mapDispatchToProps =  { setLevel }

export default connect(mapStateToProps,mapDispatchToProps)(LevelList);


/**
 * styles for levelList
 * 
 * container: rectangle that holds entire list
 * itemBody:  rectangle that holds individual level item
 * itemFont:  font displayed in itemBody
 */
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    itemBody: {
      padding: 10,
      fontSize: 18,
      height: 64,
      justifyContent: 'center',
      borderBottomWidth: 1,
    },
    itemFont: {
        fontFamily: 'StyreneA'
    }
  })
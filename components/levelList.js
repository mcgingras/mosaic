import React, {Component} from 'react'; 
import { View, FlatList, Text, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { connect } from 'react-redux';
import { levels } from '../constants/levels';
import { setCurrentLevel, setBoardToLevel } from '../actions'
import LogoTitle from './logoTitle';


class LevelList extends Component {

    static navigationOptions = {
        title: 'Levels',
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
        console.log(this.props.levelInfo);
          
    }

    goToLevel(levelId){
        const {navigate} = this.props.navigation;
        this.props.setCurrentLevel(levelId);
        this.props.setBoardToLevel(levelId);
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
                            title: `LEVEL ${level}`,
                            levelId: level
                        }
                    )
                })}
                renderItem={({item}) => {
                    return (
                        <TouchableWithoutFeedback
                        key={item.title}
                        onPress={() => {this.goToLevel(item.levelId)}}
                        >
                            <View style={styles.itemBody}>
                                <Text style={[styles.itemFont, item.levelId > this.props.maxLevel && styles.itemFontInactive]}>
                                    {item.title}
                                </Text>
                                <Text style={[styles.itemFont, item.levelId > this.props.maxLevel && styles.itemFontInactive]}>
                                    8 moves
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }}
                />
                :
                // rendering empty when style isnt there yet
                // hopefully temporary though. might be way to change this.
                // like this is incredibly annoying and dumb
                <View></View>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loaded: state.fontState.loaded,
        maxLevel: state.levelState.maxLevel,
        levelInfo: state.levelState.levelInfo
    }
}

const mapDispatchToProps =  { setCurrentLevel, setBoardToLevel }

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
     backgroundColor: 'black'
    },

    itemBody: {
      padding: 10,
      fontSize: 18,
      height: 64,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomWidth: .5,
      backgroundColor: 'black',
      borderBottomColor: "rgba(241, 245, 245, .5)"
    },

    itemFont: {
        fontFamily: 'Mono',
        color: '#F1F5F5'
    },

    itemFontInactive: {
        color: "rgba(241, 245, 245, .5)"
    }
  })
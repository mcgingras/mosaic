import React, {Component} from 'react'; 
import { View, FlatList, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { levels } from '../constants/levels';
import { setCurrentLevel, setBoardToLevel } from '../actions'
import LevelItem from './levelItem';


class LevelList extends Component {

    // dont want header to show for this initial screen,
    // but we want it here for the nav props
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props); 
    }

    goToLevel(levelId){
        // if (levelId <= this.props.maxLevel){
            const {navigate} = this.props.navigation;
            this.props.setCurrentLevel(levelId);
            this.props.setBoardToLevel(levelId);
            navigate('Home')
        // }
    }

    levelsOrdered = [23, 173, 184, 120, 132, 265, 293, 322, 341];

    render(){
        return (
            <View style={styles.container}>
                {/* this is sort of annoying but we have to wait for
                    font to load first before rendering with that style */}
                {this.props.loaded
                ?
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.titleText}>Lights{"\n"} Out!</Text>
                    </View>

                    {/* stack of colors -- just for decoration :-0 */}
                    <View style={[styles.colorStack, styles.colorStack4]}></View>
                    <View style={[styles.colorStack, styles.colorStack3]}></View>
                    <View style={[styles.colorStack, styles.colorStack2]}></View>
                    <View style={[styles.colorStack, styles.colorStack1]}></View>

                    <FlatList
                    // horizontal={true}
                    // data={Object.keys(levels).map((level) => {
                    //     return (
                    //         {
                    //             title: `LEVEL ${level}`,
                    //             levelId: level
                    //         }
                    //     )
                    // })}
                    data={this.levelsOrdered.map((level, i) => {
                        return (
                            {
                                title: `LEVEL ${i}`,
                                levelId: level,
                                index: i
                            }
                        )
                    })}
                    renderItem={({item}) => {
                        return (
                            <TouchableWithoutFeedback
                            key={item.title}
                            onPress={() => {this.goToLevel(item.levelId)}}
                            >
                                <View>
                                    <LevelItem 
                                    levelId={item.index + 1}
                                    levelInfo={this.props.levelInfo}
                                    maxLevel={this.props.maxLevel}
                                    title={`level ${item.index}`}
                                     />
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                    />
                </View>
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
        levelId: state.levelState.currentLevel,
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
 * colorStack[n]: colored rectangle just for decoration.
 */
const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'black'
    },

    containerTitle: {
        backgroundColor: 'black',
        padding: 8,
        paddingTop: 50
    },

    titleText: {
        fontFamily: 'GT-Cinetype',
        color: '#FFF',
        fontSize: 64,
    },

    h2: {
        fontFamily: 'GT-Cinetype',
        color: "#F1F5F5",
        fontSize: 24,
        margin: 20
    },

    colorStack: {
        height: 10,
        width: "100%"
    },

    colorStack1: { backgroundColor: "#434141" },
    colorStack2: { backgroundColor: "#8B8989" },
    colorStack3: { backgroundColor: "#B7B7B7" },
    colorStack4: { backgroundColor: "#DFDFDF" },

  })
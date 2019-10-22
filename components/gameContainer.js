import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useSprings, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux';
import {TOGGLE_ITEM, CHECK_PUZZLE, INCREMENT_MOVES} from '../constants/actions';


const AnimatedView = animated(View);
/**
 * game container
 * 
 * this component is the configuration of the board.
 * it shows all of the tiles, and binds actions for when they are tapped
 * name could use some work.
 */
const GameContainer = (props) => {

    // redux 
    const dispatch = useDispatch();
    const board = useSelector(state => state.gameState.board);
    const levelId = useSelector(state => state.levelState.currentLevel);
    

    // make **board length** springs
    const [springs, set, stop] = useSprings(board.length, index => ({config: { mass: 1, tension: 150, friction: 40 }, scale: 1, from: {scale: 0}}))

    

    /**
     * if you press a button, it toggles a few actions
     * 
     * toggle_item : changes board based on press
     * check_if_solved: see if board state is solved
     * increment_moves: increment moves counter to set record (lowest moves)
     */
    press = (key) => {
        dispatch({ type: TOGGLE_ITEM, itemId: key })
        dispatch({ type: CHECK_PUZZLE })
        dispatch({ type: INCREMENT_MOVES, levelId })

        // board is array with 0 for off, 1 for on
        
    }

    useEffect(() => {
        set(index => ({scale: board[index]}))
    });


    return (
    <View style={styles.container}>
        {springs.map((springProps, key) => {
            const item = board[key];
            return (
                <TouchableWithoutFeedback
                key={key}
                onPress={() => {
                    this.press(key);
                }}>
                    <View style={styles.itemContainer}>
                        <AnimatedView style={
                            [styles.gameItem,
                            {
                            height: springProps.scale
                            .interpolate({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [10, 20, 30, 40, 50, 55, 52, 50]
                              }),
                            width: springProps.scale
                            .interpolate({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [10, 20, 30, 40, 50, 55, 52, 50]
                            })
                            }
                            ]}>
                        </AnimatedView>
                    </View>
                </TouchableWithoutFeedback>
            )
        })}
    </View>
    )
}


export default GameContainer;


// styles
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
        borderRadius: 100,
        backgroundColor: 'white'
    },

    itemContainer: {
        width: 100,
        height: 100,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    gameItemPressed: {
        backgroundColor: "#000",
        borderColor: '#F14729',
        borderWidth: 2
    },

  });
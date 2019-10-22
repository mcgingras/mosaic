import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';


const LevelItem = (props) => {
    
    return (
        <View style={styles.itemBody}>
            <Text style={[styles.itemFont, props.levelId > props.maxLevel && styles.itemFontInactive]}>
                {props.title}
            </Text>
            <Text style={[styles.itemFont, props.levelId > props.maxLevel && styles.itemFontInactive]}>
                {props.levelId > props.maxLevel ? 
                    'level locked' :
                    !(props.levelId in props.levelInfo) ?
                    `No record set` :
                    `Record: ${props.levelInfo[props.levelId].moves} moves`
                }
            </Text>
        </View>
    )
}

export default LevelItem;

const styles = StyleSheet.create({
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
        color: '#F1F5F5'
    },

    itemFontInactive: {
        color: "rgba(241, 245, 245, .5)"
    },
  })
import React from 'react'; 
import { View, FlatList, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 64,
      color: 'white',
      borderBottomColor: 'white',
      borderBottomWidth: 1
    },
  })

const LevelList = (props) => {

    return (
        <View style={styles.container}>
            <FlatList
            data={[
                {key: 'level 1'},
                {key: 'level 2'},
                {key: 'level 3'},
                {key: 'level 4'},
                {key: 'level 5'},
                {key: 'level 6'},
                {key: 'level 7'},
                {key: 'level 8'},
                {key: 'level 9'},
                {key: 'level 10'},
                {key: 'level 11'},
                {key: 'level 12'},
                {key: 'level 13'},
                {key: 'level 14'},
                {key: 'level 15'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    )
}

export default LevelList;
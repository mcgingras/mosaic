import React, {Component} from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './components/home';
import rootReducer from './reducers/index.js';
import LevelList from './components/levelList';
const store = createStore(rootReducer);
import * as Font from 'expo-font';
import gameContainer from './components/gameContainer';


// navigation
const MainNavigator = createStackNavigator({
    Levels: {screen: LevelList},
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Levels',
  });

let Navigation = createAppContainer(MainNavigator);


// main app with redux store
export default class App extends Component {

    async componentDidMount(){
        await Font.loadAsync({
            'StyreneA': require('./assets/fonts/StyreneA.ttf'),
          });

        store.dispatch({type:"FONT_LOADED"})
    }

    render() {
      return (
        <Provider store={store}>
          <View style={{ backgroundColor: '#000', flex: 1}}>
              {/* <Home /> */}
            {/* <LevelList/> */}
            <Navigation />
          </View>
        </Provider>
      );
    }
  }
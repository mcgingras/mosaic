import React, {Component} from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './components/home';
import LevelList from './components/levelList';
import SuccessScreen from './components/successScreen';
import { store, persistor } from './store/store';
import * as Font from 'expo-font';


// navigation
const MainNavigator = createStackNavigator({
    Levels: {screen: LevelList},
    Home: {screen: Home},
    SuccessScreen: {screen: SuccessScreen},
  },
  {
    initialRouteName: 'Levels',
  });

let Navigation = createAppContainer(MainNavigator);


// main app with redux store
export default class App extends Component {

    constructor(props){
      super(props);

    }
    async componentDidMount(){
        // purge persistance -- useful when modifying state in dev env
        // store.dispatch({ 
        //     type: 'RESET_STATE'           
        // })
        
        await Font.loadAsync({
            'StyreneA': require('./assets/fonts/StyreneA.ttf'),
            'Mono': require('./assets/fonts/AlmaMono-Regular.ttf')
          });

        store.dispatch({type:"FONT_LOADED"})
    }

    render() {
      return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <View style={{ backgroundColor: '#000', flex: 1}}>
                    <Navigation />
                </View>
            </PersistGate>
        </Provider>
      );
    }
  }
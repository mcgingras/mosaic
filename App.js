import React, {Component} from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './components/home';

import rootReducer from './reducers/index.js';
const store = createStore(rootReducer);


export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <View>
            <Home />
          </View>
        </Provider>
      );
    }
  }




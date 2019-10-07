import React, {Component} from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Home from './components/home';
import rootReducer from './reducers/index.js';
import LevelList from './components/levelList';
const store = createStore(rootReducer);


export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <View style={{ backgroundColor: '#000', flex: 1}}>
            {/* <LevelList/> */}
            <Home />
          </View>
        </Provider>
      );
    }
  }


// const mapDispatchToProps = { fontLoaded }
// export default connect(null,mapDispatchToProps)(App);





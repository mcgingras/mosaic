import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers/index.js';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: [
      'gameState',
      'levelState'
    ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
      'fontState'
    ],
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    // applyMiddleware(...middleware),
  );

let persistor = persistStore(store);

export {
    store,
    persistor,
};
import AsyncStorage from '@react-native-community/async-storage';
import appReducer from './reducers/app';
import usersReducer from './reducers/users';
import sagas from './sagas/';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Dispatch,
  MiddlewareAPI,
} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

/*ß
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */

const appPersistConfig = {
  storage: AsyncStorage,
  key: 'app',
};

const userPersistConfig = {
  storage: AsyncStorage,
  key: 'user',
};

export const reducers = {
  app: persistReducer(appPersistConfig, appReducer),
  users: persistReducer(userPersistConfig, usersReducer),
};

export const rootReducer = combineReducers(reducers);

const appMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  //   var state = store.getState()
  //   switch (action.type) {
  //     case actions.ADD_TASK:
  //       *do something*
  //       break;
  //   }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);

/*
 *--------------------------------------------------*
 * Reset persist store: persistor.purge()
 *--------------------------------------------------*
 */

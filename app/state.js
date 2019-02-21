import { createStore, combineReducers, applyMiddleware } from 'redux';
import promisesMiddleware from './reducers/middlewares/promiseMiddleware';
import * as reducers from './reducers';
import { createEmptyPlayer, createInitialPlayersState } from './utils';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, {
  players: createInitialPlayersState(),
  currentPlayer: createEmptyPlayer(),
  editingPlayerIndex: null,
});

export default store;
// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { timerStateType } from '../reducers/types';

const history = createHashHistory();
const router = routerMiddleware(history);
const enhancer = compose(applyMiddleware(thunk, router));

function configureStore(initialState?: timerStateType) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };

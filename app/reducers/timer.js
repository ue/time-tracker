// @flow
import {
  IS_TIMER_ACTIVE,
  SET_START_TIME,
  SET_STOP_TIME,
  SET_PASSING_TIME
} from '../actions/timer';
import type { Action } from './types';

export default (
  state = {
    passingTime: 0,
    isTimerActive: false,
    startTime: null,
    stopTime: null
  },
  action: Action
) => {
  switch (action.type) {
    case IS_TIMER_ACTIVE:
      return Object.assign({}, state, {
        isTimerActive: action.payload
      });
    case SET_START_TIME:
      return Object.assign({}, state, {
        startTime: action.payload
      });
    case SET_STOP_TIME:
      return Object.assign({}, state, {
        stopTime: action.payload
      });
    case SET_PASSING_TIME:
      return Object.assign({}, state, {
        passingTime: action.payload
      });
    default:
      return state;
  }
};

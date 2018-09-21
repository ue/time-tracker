// @flow
import {
  IS_TIMER_ACTIVE,
  SET_START_TIME,
  SET_STOP_TIME
} from '../actions/timer';
import type { Action } from './types';

export default (state = {}, action: Action) => {
  switch (action.type) {
    case IS_TIMER_ACTIVE:
      return {
        ...state,
        isTimerActive: action.payload
      };
    case SET_START_TIME:
      return {
        ...state,
        startTime: action.payload
      };
    case SET_STOP_TIME:
      return {
        ...state,
        stopTime: action.payload
      };
    default:
      return state;
  }
};

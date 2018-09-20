// @flow
import { IS_TIMER_ACTIVE } from '../actions/timer';
import type { Action } from './types';

export default (state = {}, action: Action) => {
  switch (action.type) {
    case IS_TIMER_ACTIVE:
      return {
        ...state,
        isTimerActive: action.payload
      };
    default:
      return state;
  }
};

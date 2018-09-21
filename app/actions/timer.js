// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const IS_TIMER_ACTIVE = 'IS_TIMER_ACTIVE';
export const SET_START_TIME = 'SET_START_TIME';
export const SET_STOP_TIME = 'SET_STOP_TIME';

export function setIsTimerActive(payload) {
  return {
    type: IS_TIMER_ACTIVE,
    payload
  };
}

export function setStartTime(payload) {
  return {
    type: SET_START_TIME,
    payload
  };
}

export function setStopTime(payload) {
  return {
    type: SET_STOP_TIME,
    payload
  };
}

// export function incrementIfOdd() {
//   return (dispatch: Dispatch, getState: GetState) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

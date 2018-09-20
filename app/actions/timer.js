// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const IS_TIMER_ACTIVE = 'IS_TIMER_ACTIVE';

export function setIsTimerActive(payload) {
  return {
    type: IS_TIMER_ACTIVE,
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

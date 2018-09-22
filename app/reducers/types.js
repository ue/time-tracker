import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type timerStateType = {
  +timer: boolean
};

export type Action = {
  +type: string
};

export type GetState = () => timerStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;

export const defaultState = () => ({
  passingTime: 0,
  isTimerActive: false,
  startTime: 0,
  stopTime: 0
});

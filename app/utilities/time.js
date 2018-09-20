/* eslint import/prefer-default-export: 0 */
// @flow
import moment from 'moment';

export const pad = (num: number, size: number = 2) =>
  `000000000${num}`.substr(-size);

export const dissectDuration = (milliseconds: number) => {
  const duration = moment.duration(milliseconds);
  return {
    seconds: duration.seconds(),
    minutes: duration.minutes(),
    hours: duration.hours()
  };
};

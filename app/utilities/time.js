// Moment.js
import moment from 'moment';

export const getMoment = () => moment();

export const getFormatedLocalTime = time =>
  moment(time)
    .local()
    .format('h:mm A zzZ');

export const getSeperatedTime = startTime => {
  const difference = moment().diff(startTime);
  const duration = moment.duration(difference);

  const seconds = makeDigits(duration.seconds());
  const minutes = makeDigits(duration.minutes());
  const hours = makeDigits(duration.hours());

  return {
    seconds,
    minutes,
    hours
  };
};

export const getPassingTime = (stopTime, startTime) =>
  moment(stopTime).diff(startTime);

export const getDurationTime = passingTime => moment.duration(passingTime);

const lengthCheck = val => val.toString().length;

const makeDigits = val => (lengthCheck(val) < 2 ? `0${val}` : val);

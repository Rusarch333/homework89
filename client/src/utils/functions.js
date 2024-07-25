import moment from 'moment';

export const formatDiffDate = (value) => {
  const diff = moment.duration(moment().diff(moment(value)));
  let str = '';
  if (diff._data.days !== 0) str = `${diff._data.days}d `;
  if (diff._data.hours !== 0) str += `${diff._data.hours}h`;
  if (str.length === 0) str = 'less than one hour';
  return str;
};

export const ucFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

import { Dayjs } from 'dayjs';

export const formateDate = (date: Dayjs): string => {
  const year = date.year();
  const month = (date.month() + 1) < 10 ? `0${date.month() + 1}` : (date.month() + 1);
  const day = date.date() < 10 ? `0${date.date()}` : date.date();

  return `${year}.${month}.${day}`;
};
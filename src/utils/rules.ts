import dayjs, { Dayjs } from 'dayjs';

export const rules = {
  required: (message: string = 'Обязательное поле') => ({
    required: true,
    message
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Dayjs ) {
      if (value) {
        if (value.isSame(dayjs().subtract(1, 'minute')) || value.isAfter(dayjs().subtract(1, 'minute'))) {
          console.log(value);
          console.log(dayjs());
          
          
          return Promise.resolve();
        } else {
          console.log(value);
          console.log(dayjs());
          return Promise.reject(new Error(message));
        }
      }
    }
  })
};
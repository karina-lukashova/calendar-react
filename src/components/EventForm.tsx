import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Dayjs } from 'dayjs';
import { formateDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';


interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

export const EventForm: React.FC<EventFormProps> = ({guests, submit}) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  });
  const { user } = useTypedSelector(state => state.auth);

  const selectDate = (date: Dayjs | null) => {
    if (date) {
      setEvent({...event, date: formateDate(date)});
    }
  }

  const submitForm = () => {
    submit({...event, author: user.username});
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={e => setEvent({...event, description: e.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.required(), rules.isDateAfter('Нельзя создать событие в прошлом')]}
      >
        <DatePicker
          onChange={(date) => selectDate(date)}
        />
      </Form.Item>
      <Form.Item
        label="Гость"
        name="guest"
        rules={[rules.required()]}
      >
        <Select
          onChange={(guest: string) => setEvent({...event, guest})}
          options={guests.map(guest => (
            { value: guest.username, label: guest.username }
          ))}
        />
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
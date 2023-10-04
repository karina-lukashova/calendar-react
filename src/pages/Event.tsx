import React, { useEffect, useState } from 'react';
import { Button, Layout, Row, Modal } from 'antd';
import { EventCalendar } from '../components/EventCalendar';
import { EventForm } from '../components/EventForm';
import { useActions } from '../hooks/userActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

export const Event: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(state => state.event)
  const { user } = useTypedSelector(state => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, [])

  const addNewEvent = (event: IEvent) => {
    setIsModalOpen(false);
    createEvent(event);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setIsModalOpen(true)}>Добавить событие</Button>
      </Row>
      <Modal
        title="Добавить событие"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}>
          <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";
import { UserService } from "../../../api/UserService";


export const EventActionCreators = {
  setGuests: (guests: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload: guests}),
  setEvents: (events: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload: events}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);      
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const eventsJson = JSON.parse(events) as IEvent[];
      eventsJson.push(event);
      dispatch(EventActionCreators.setEvents(eventsJson));
      localStorage.setItem('events', JSON.stringify(eventsJson));
    } catch (e) {
      console.log(e);      
    }
  },
  fetchEvents: (userName: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const eventsJson = JSON.parse(events) as IEvent[];
      const currentUserEvents = eventsJson.filter(event => event.author === userName || event.guest === userName);
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);      
    }
  },
};
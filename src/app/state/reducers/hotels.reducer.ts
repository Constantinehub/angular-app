import { Action } from '@ngrx/store';
import {HotelActions, HotelActionTypes} from '../actions/action-hotels.actions';
import { IHotel } from '../../interfaces/hotels.interface';

export const initialState: IHotel[] = [
  {
    id: 0,
    title: 'Universal Cabana',
    address: 'Orlando',
    description: 'Best one',
    phone: '+3242353434',
    picture: 'https://a1.r9cdn.net/rimg/kimg/8a/7f/1d872142-15d7b449de9.jpg?width=500&height=350&xhint=645&yhint=498&crop=true',
    photos: [
      'https://t-ec.bstatic.com/images/hotel/max1024x768/883/88311182.jpg',
      'https://images.oyster.com/photos/the-beach-club-infinity-pool--v6136470-w902.jpg'
    ],
    weather:  {
      temperature: 12,
      wind: 11,
      icon: 'grain'
    },
    profile: {
      followers: 112,
      following: 11,
      photo: 'https://a1.r9cdn.net/rimg/kimg/8a/7f/1d872142-15d7b449de9.jpg?width=500&height=350&xhint=645&yhint=498&crop=true'
    },
    stars: 3
  }
];

export function reducer(state = initialState, action: HotelActions): IHotel[] {
  switch (action.type) {

    case HotelActionTypes.ChooseHotel: {
      const newState: IHotel[] = { ...state };
      newState.splice(0, 1, action.payload);
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
}

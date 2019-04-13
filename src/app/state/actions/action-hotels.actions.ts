import { Action } from '@ngrx/store';
import {IHotel} from '../../interfaces/hotels.interface';

export enum HotelActionTypes {
  ChooseHotel = '[Hotels] Active Hotel',
}

export class ChooseHotel implements Action {
  readonly type: string = HotelActionTypes.ChooseHotel;
  constructor(public payload: IHotel) {}
}

export type HotelActions = ChooseHotel;

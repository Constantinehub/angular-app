import { Action } from '@ngrx/store';

export enum ActionTypes {
  LoadHotels = '[Hotels Component] Load Hotels',
}

export class LoadActionHotelss implements Action {
  readonly type = ActionTypes.LoadHotels;
}


export type ActionHotelsActions = LoadActionHotelss;

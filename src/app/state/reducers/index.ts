import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromHotels from './hotels.reducer';
import {IHotel} from '../../interfaces/hotels.interface';

export interface State {
  hotels: IHotel[];
}

export const reducers: ActionReducerMap<State> = {
  hotels: fromHotels.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

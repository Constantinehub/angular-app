import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from '../../interfaces/hotels.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../../reducers';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  @Input() activeHotel: number;
  @Output() selectedHotelItem: EventEmitter<IHotel> = new EventEmitter();

  public hotels$: Observable<IHotel[]>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.hotels$ = this.store.select('hotels');
  }

  public selectHotel(item: IHotel, event) {
    event.stopPropagation();
    this.selectedHotelItem.emit(item);
  }
}

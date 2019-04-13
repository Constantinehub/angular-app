import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from '../../interfaces/hotels.interface';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../../state/reducers';
import {RequestService} from '../../services/request.service';
import {ChooseHotel} from '../../state/actions/action-hotels.actions';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  @Input() activeHotel: number;
  // @Output() selectedHotelItem: EventEmitter<IHotel> = new EventEmitter();

  public hotels$: Observable<IHotel[]>;

  constructor(
    private store: Store<State>,
    private request: RequestService,
  ) { }

  ngOnInit() {
    this.hotels$ = this.request.getHotelsFromDb();
  }

  public selectHotel(item: IHotel, event: Event) {
    event.stopPropagation();
    this.store.dispatch(new ChooseHotel(item));
  }

  // public selectHotel(item: IHotel, event: Event) {
  //   event.stopPropagation();
  //   this.selectedHotelItem.emit(item);
  // }
}

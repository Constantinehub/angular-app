import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from '../../interfaces/hotels.interface';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  @Input() hotels;
  @Output() selectedHotelItem: EventEmitter<IHotel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public selectHotel(item: IHotel) {
    this.selectedHotelItem.emit(item);
  }

}

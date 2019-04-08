import {Component, OnInit} from '@angular/core';
import { RequestService } from './services/request.service';
import { Observable } from 'rxjs';
import { IHotel } from './interfaces/hotels.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public headerTitle = 'My not a first Angular application';
  public hotels$: Observable<IHotel[]>;
  public activeHotel: IHotel;

  constructor(
    private requestService: RequestService
  ) {}

  public ngOnInit(): void {
    this.hotels$ = this.requestService.getHotelsFromDb();
    this.hotels$.subscribe(hotels => this.activeHotel = hotels[0]);
  }

  // public test(hotel) {
  //   console.log('the first value ', hotel);
  // }

  public getSelectedHotel(item) {
    this.activeHotel = item;
  }
}

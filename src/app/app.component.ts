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
  public dbData: Observable<IHotel[]>;
  public hotels: IHotel[];


  constructor(
    private requestService: RequestService
  ) {}

  public ngOnInit(): void {
    this.dbData = this.requestService.getHotelsFromDb();
    this.dbData.subscribe((hotelsData) => this.hotels = hotelsData);
  }
}

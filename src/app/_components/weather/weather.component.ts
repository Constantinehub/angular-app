import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../../interfaces/hotels.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() public activeHotel;

  public weatherTitle = 'The Weather in this hotel';

  constructor() { }

  ngOnInit() {
    console.log('weather ', this.activeHotel);
  }

}

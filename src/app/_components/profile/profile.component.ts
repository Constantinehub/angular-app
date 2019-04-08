import {Component, Input, OnInit} from '@angular/core';
import {IProfile} from '../../interfaces/hotels.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileTitle = 'This is the profile of this hotel';

  @Input() activeHotel: IProfile;

  constructor() { }

  ngOnInit() {
  }

}

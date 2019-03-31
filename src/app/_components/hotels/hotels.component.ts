import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  @Input() hotels;

  constructor() { }

  ngOnInit() {
  }

  test(item) {
    console.log('star count ', String(item));
  }

}

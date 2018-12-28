import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-card-mobile',
  templateUrl: './beer-card-mobile.component.html',
  styleUrls: ['./beer-card-mobile.component.css']
})
export class BeerCardMobileComponent implements OnInit {

  @Input() beer: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  device: any = {
    type: '',
    size: ''
  };

  beers: [object];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getActive()
      .then(data => {
        this.beers = data.beers;
      })
      .catch(err => console.log(err));

      this.handleDisplay();
    }

  handleDisplay() {
    const w = window.innerWidth;

    this.device.type = 'ontouchstart' in document.documentElement ? 'touch' : 'tv';

    if (w <= 768) {
      this.device.size = 'small'
    } else if (w > 768 && w <= 1024) {
      this.device.size = 'medium'
    } else if (w > 1024) {
      this.device.size = 'large'
    }
    console.log(`device type: ${this.device.type}, ${this.device.size} size`);
  }
}

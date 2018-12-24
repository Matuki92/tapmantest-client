import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  beers: [object];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getActive()
      .then(data => {
        this.beers = data.beers;
      })
      .catch(err => console.log(err));
  }

}

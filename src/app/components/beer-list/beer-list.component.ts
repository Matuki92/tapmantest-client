import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: [object];

  @Output() selectedBeer = new EventEmitter();

  constructor(
    private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getAll()
      .then(result => {
        this.beers = result.beers;
      });
  }

  exportBeer(beer) {
    this.selectedBeer.emit(beer);
  }

}

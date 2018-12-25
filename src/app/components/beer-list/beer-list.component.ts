import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  beers: [any];
  beerList: any;
  searchWord: string;

  @Output() selectedBeer = new EventEmitter();

  constructor(
    private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getAll()
      .then(result => {
        this.beers = result.beers;
        this.beerList = this.beers;
      });
    }

    searchBeer() {
      this.beerList = this.beers.filter(beer => {
        return beer.name.includes(this.searchWord);
      });
  }

  exportBeer(beer) {
    this.selectedBeer.emit(beer);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

}

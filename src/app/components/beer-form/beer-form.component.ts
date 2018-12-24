import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {

  @Input() beerToEdit: {};

  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  clearForm() {
    this.beerToEdit = {}
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.beerService.addNew(this.beerToEdit)
        .then((result) => {
          this.clearForm();
        })
        .catch((err) => {
          this.error = err.error.code;
        });
      this.processing = false;
      this.feedbackEnabled = false;
    }
  }

}

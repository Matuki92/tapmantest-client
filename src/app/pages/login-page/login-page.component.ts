import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { VenueService } from '../../services/venue.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;

  password = '';

  constructor(
    private venueService: VenueService,
    private router: Router
  ) {}

  ngOnInit() { }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const data = {
        adminpwd: form.form.value.password
      }
       this.venueService.login(data)
         .then((result) => {
           this.router.navigate(['/admin']);
            //... handle result, reset form, etc...
            //... navigate with this.router.navigate(['...'])
            //... maybe turn this to false if your're staying on the page - this.processing = false;
         })
         .catch((err) => {
           this.error = err.error.code;
           this.processing = false;
           this.feedbackEnabled = false;
         });
    }
  }
}
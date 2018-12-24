import { Component, OnInit } from '@angular/core';
import { VenueService } from '../../services/venue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private venueService: VenueService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.venueService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

}

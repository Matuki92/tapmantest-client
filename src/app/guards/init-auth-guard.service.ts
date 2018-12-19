import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { VenueService } from '../services/venue.service';

@Injectable()
export class InitAuthGuardService implements CanActivate {

  constructor(
    private venueService: VenueService,
    private router: Router
    ) { }

  canActivate(): Promise<boolean> {
    return this.venueService.loadDns()
      .then((exists) => {
        return true;
      })
      .catch((error) => {
        console.error(error);
        window.location.href = 'http://google.es';
        return false;
      });
  }

}
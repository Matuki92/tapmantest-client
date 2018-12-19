import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { VenueService } from '../services/venue.service';

@Injectable()
export class InitAuthGuardService implements CanActivate {

  constructor(private venueService: VenueService) { }

  canActivate(): Promise<boolean> {
    return this.venueService.me()
      .then((user) => {
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

}
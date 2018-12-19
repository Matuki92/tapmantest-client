import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { VenueService } from '../services/venue.service';

@Injectable()
export class RequireUserGuardService implements CanActivate {

  constructor(
    private venueService: VenueService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return this.venueService.me()
      .then((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

}
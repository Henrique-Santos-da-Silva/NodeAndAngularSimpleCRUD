import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Telephone} from '../models/Telephone';
import {TelephonebookService} from '../telephonebook.service';

@Injectable({
  providedIn: 'root'
})
export class TelephoneGuard implements Resolve<Telephone> {
  constructor(private service: TelephonebookService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Telephone> {
    if (route.params && route.params['id']) {
      return this.service.getTelephoneById(route.params['id'])
    }

    return of({
      id: null,
      name: null,
      email: null,
      telephone: null
    });
  }

}

import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/DataModels/User'
import { IngressService } from '../services/ingress.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ingressService: IngressService
    , private router: Router
    , @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.ingressService.currentUser) {
      return true;
    }
    else if(this.storage.get('UserId')){
      this.ingressService.currentUser = this.storage.get('UserId');
    }
    else {
      this.router.navigateByUrl("/");
      return true;
    }

  }

}

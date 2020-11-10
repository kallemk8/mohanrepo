import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRoute, Router } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private route: ActivatedRoute, private router: Router, ){}


  canActivate() {
    
    return false;
    
  
  }
  
}
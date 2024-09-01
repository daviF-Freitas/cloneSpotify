import { Injectable } from "@angular/core";
import { CanMatch, GuardResult, MaybeAsync, Route, Router, UrlSegment } from "@angular/router";
import { SportifyService } from "../services/sportify.service";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanMatch {

  constructor(
    private readonly router: Router,
    private readonly sportifyService: SportifyService){}

  public canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    
    if(typeof localStorage !== "undefined"){
      const token = localStorage.getItem('token');

      if(!token){
       this.noAuthenticate();
      }

    }

    return new Promise((res) => {
      const userCreated = this.sportifyService.initUser();
      if(userCreated){
        res(true);
      }else{
        res(this.noAuthenticate());
      }
    });
  }

  private noAuthenticate() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }

}
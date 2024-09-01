import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment.development';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interface/IUser';
import { SportifyUserProfile } from '../common/spotifyHelper';


@Injectable({
  providedIn: 'root'
})

export class SportifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor() { 
    this.spotifyApi = new Spotify();
  }

  public obterUrlLogin(): string {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return `${authEndpoint}${clientId}${redirectUrl}${scopes}${responseType}`;

  }

  public obterTokenUrlCallback() {

    if (typeof window !== "undefined") {
      
      if(!window.location.hash){
        return '';
      }

      const params = window.location.hash.substring(1).split('&');
      return params[0].split('=')[1]; 
    }

    return ''; 

  }

  public definirAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);

  }

  async initUser(){

    if (typeof localStorage !== "undefined") {
    
      if(!!this.user){
        return true;
      }

      const token = localStorage.getItem('token');

      if(!token){
        return false;
      }

      try {

        this.definirAccessToken(token);
        await this.getSpotifyUser();
        return !!this.user;

      } catch(ex) {
        return false;
      }
    }
    return false;

  }

  async getSpotifyUser(){
    const userInfo = await this.spotifyApi.getMe();
    this.user = SportifyUserProfile(userInfo);
  }

}

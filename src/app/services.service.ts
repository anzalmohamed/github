import { HttpClient } from '@angular/common/http';
import { MethodCall } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  private username: string;
  private clientid = '203dd913322b3db7d987';
  private clientsecret = '020c0b3665296b33d758edeeced30473ef44f7da';
  http: any;


  constructor(private HttpClient: HttpClient,) {
    console.log('service is now ready');
    this.username = 'zecollokaris';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
     .pipe(map(res => res.json()));
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
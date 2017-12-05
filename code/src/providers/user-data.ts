import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public events: Events,
    public storage: Storage,
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(data: any): void {
    console.log("data.as_json()");
    console.log(data);
    // var data = data.as_json();
    localStorage.setItem('access_token', data['token']);
    localStorage.setItem('user_object', JSON.stringify(data));
    localStorage.setItem('user_role', data['role']);
    this.events.publish('user:login');
  };

  is_logged_in(): boolean {
     if ((localStorage.getItem('access_token') || '').length > 0) {
      this.events.publish('user:login');
      return true ;
     }
     return false;
  };

  signup(username: string): void {
    // this.storage.set(this.HAS_LOGGED_IN, true);
    // this.setUsername(username);
      this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    localStorage.removeItem('access_token')
    localStorage.setItem('user_object', JSON.stringify({}));
    localStorage.removeItem('user_role');
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  hasLoggedIn(): string{
    return localStorage.getItem('access_token')
  }
  hasLoggedIn2(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };
}
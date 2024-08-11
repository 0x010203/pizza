import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class AuthService {

  private isLogged: boolean = false;
  public isLogged$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  logIn(): void{
    this.isLogged = true;
    this.isLogged$.next(this.isLogged);
  }

  logOut(): void{
    this.isLogged = false;
    this.isLogged$.next(this.isLogged);
  }

  isLoggedIn(): boolean{
    return this.isLogged;
    
  }

  getToken(){
    return 'test';
  }
}

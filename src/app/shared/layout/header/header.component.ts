import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { CartService } from '../../services/cart.service';
//import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public loggedState: boolean = false;

  constructor(
    public cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLoggedIn: boolean) =>{
      this.loggedState = isLoggedIn;  
      //other logic
      console.log('state has been changed: '+this.loggedState);
    })
  }

  login() {
    this.authService.logIn();
    
  }
  logout() {
    this.authService.logOut();
  }
}

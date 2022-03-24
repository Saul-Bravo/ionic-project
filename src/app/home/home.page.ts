import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  constructor(private router: Router) {}
  
  onUsersClick(){
    this.router.navigateByUrl('/users', { replaceUrl: true })
  }

  onLogout(){
    this.router.navigateByUrl('/login', { replaceUrl: true })
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  userObjects = [
    {
      id:0,
      name: "Saúl Bravo",
      avatarRoute: "../assets/Gigachad.webp",
      age: 21,
      country: "Mexico",
      followers: 687,
      posts: 578
    },
    {
      id:1,
      name: "Roberto Gomez Bolañoz",
      avatarRoute: "../assets/roberto.jpg",
      age: 68,
      country: "Mexico",
      followers: 720,
      posts: 5855
    },
    {
      id:2,
      name: "Enrique Segoviano",
      avatarRoute: "../assets/enrique.jpg",
      age: 72,
      country: "Mexico",
      followers: 485,
      posts: 487
    },
    {
      id:3,
      name: "Grigori Rasputín",
      avatarRoute: "../assets/rasputin.jpg",
      age: 47,
      country: "Russia",
      followers: 1369,
      posts: 789
    },
    {
      id:4,
      name: "Jack Ma",
      avatarRoute: "../assets/jack.webp",
      age: 50,
      country: "China",
      followers: 4789,
      posts: 526555
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openUserDetails(id){
    console.log(id);
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.userObjects[id]
      }
    }
    console.log(this.userObjects[id]);
    this.router.navigate(['details'], navigationExtras);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  isBistrotdesGascons: boolean = false;
  isCafedesPhares: boolean = false;
  isLeVertTulipe: boolean = false;
  isRuchequiditOui: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  activerRestaurant(restaurant: string) {
    // Désactive tous les restaurants
    this.isBistrotdesGascons = false;
    this.isCafedesPhares = false;
    this.isLeVertTulipe = false;
    this.isRuchequiditOui = false;

    // Active le restaurant sélectionné
    if (restaurant === 'BistrotdesGascons') {
      this.isBistrotdesGascons = true;
    } else if (restaurant === 'CafedesPhares') {
      this.isCafedesPhares = true;
    } else if (restaurant === 'LeVertTulipe') {
      this.isLeVertTulipe = true;
    } else if (restaurant === 'RuchequiditOui') {
      this.isRuchequiditOui = true;
    }
  }

  onGoToHome() {
    this.router.navigate(['home']);
  }
}

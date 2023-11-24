import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  isLesPassionnes = false;
  isDeLaBrise = false;
  isSaphir = false;
  isLePenelope = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  // Fonction pour activer la vue "Les Passionnés"
  activerLesPassionnes() {
    this.isLesPassionnes = true;
    this.isDeLaBrise = false;
    this.isSaphir = false;
    this.isLePenelope = false;
  }

  activerDeLaBrise() {
    this.isLesPassionnes = false;
    this.isDeLaBrise = true;
    this.isSaphir = false;
    this.isLePenelope = false;
  }

  activerSaphir() {
    this.isLesPassionnes = false;
    this.isDeLaBrise = false;
    this.isSaphir = true;
    this.isLePenelope = false;
  }

  activerLePenelope() {
    this.isLesPassionnes = false;
    this.isDeLaBrise = false;
    this.isSaphir = false;
    this.isLePenelope = true;
  }

  onGoToHome() {
    this.router.navigate(['home']);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage {
  isHomard: boolean = false;
  isStJacques: boolean = false;
  isBar: boolean = false;
  isJacque: boolean = false;

  activerRecette(recette: string) {
    // Désactive toutes les recettes
    this.isHomard = false;
    this.isStJacques = false;
    this.isBar = false;
    this.isJacque = false;

    // Active la recette sélectionnée
    if (recette === 'Homard') {
      this.isHomard = true;
    } else if (recette === 'StJacques') {
      this.isStJacques = true;
    } else if (recette === 'Bar') {
      this.isBar = true;
    } else if (recette === 'Jacque') {
      this.isJacque = true;
    }
  }
}

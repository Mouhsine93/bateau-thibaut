import { Component, OnInit } from '@angular/core';
import { CartService, Product } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: Product[] = [];
  addressProvided: boolean = false;

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  provideAddress(): void {
    // Logique pour fournir l'adresse
    // Cette méthode peut inclure l'affichage d'un formulaire pour saisir l'adresse, etc.
    // Une fois l'adresse fournie, vous pouvez mettre à jour la variable addressProvided
    this.addressProvided = true;
  }

  confirmCheckout(): void {
    // Logique pour confirmer le processus de paiement
    // ...

    // Vider le panier après avoir confirmé le paiement
    this.cartService.clearCart();

    this.modalCtrl.dismiss();

    // Naviguer vers la page d'accueil
    this.router.navigate(['home']);
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product: Product): void {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product: Product): void {
    this.cartService.addProduct(product);
  }

  removeCartItem(product: Product): void {
    this.cartService.removeProduct(product);
  }

  getTotal(): number {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close(): void {
    this.modalCtrl.dismiss();
  }

  checkout(): void {
    // Logique pour le processus de paiement
    // ...

    // Une fois l'adresse fournie, mettez à jour la variable
    this.addressProvided = true;
  }
}

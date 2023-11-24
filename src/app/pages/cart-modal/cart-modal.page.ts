import { Component, OnInit } from '@angular/core';
import { CartService, Product } from 'src/app/services/cart.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: Product[] = [];
  addressProvided: boolean = false;
  selectedLocation: string = '';
  showCartButton: boolean = true;
  showLocationDropdown: boolean = false;
  showCheckoutButton: boolean = false;

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private router: Router,
    private alertController: AlertController
  ) {}

  provideAddress(): void {
    this.showLocationDropdown = false;
    this.showCheckoutButton = true;
    this.addressProvided = true;
  }

  async confirmCheckout(): Promise<void> {
    console.log('Panier non vide');
    const alert = await this.alertController.create({
      header: 'Commande Validée',
      message: `Votre commande a été validée avec succès à l'adresse : ${this.selectedLocation}`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.cartService.clearCart();
            this.modalCtrl.dismiss();
            this.router.navigate(['home']);
          },
        },
      ],
    });

    await alert.present();
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

  async checkout(): Promise<void> {
    // Vérifiez si le panier est vide
    if (this.cartService.getCart().length === 0) {
      const errorAlert = await this.alertController.create({
        header: 'Erreur',
        message:
          'Votre panier est vide. Veuillez ajouter des produits avant de valider la commande.',
        buttons: ['OK'],
      });
      await errorAlert.present();
      return; // Arrêtez la méthode si le panier est vide
    }

    this.showCartButton = false;
    this.showLocationDropdown = true;
    this.addressProvided = true;
  }
}

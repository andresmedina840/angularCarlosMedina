import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product.model';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  cartItems: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCarrito();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acumulador, producto) => acumulador + producto.price, 0);
  }

  goToProducts(): void {
    this.router.navigate(['/']); 
  }

  goToCart(): void {
    this.router.navigate(['/carritoTiendas']); 
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  adicionarCarrito(product: Product): void {
    this.cart.push(product);
  }

  getCarrito(): Product[] {
    return this.cart;
  }

  limpiarCarrito(): void {
    this.cart = [];
  }

  eliminarProducto(productId: number): void {
    this.cart = this.cart.filter((product) => product.id !== productId);
  }
}

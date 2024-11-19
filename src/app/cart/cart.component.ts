import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSnackBarModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', '../../styles.css']
})
export class CartComponent {
  cartItems: Product[] = [];

  constructor(private cartService: CartService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCarrito();
  }

  eliminarProducto(product: Product): void {
    this.cartService.eliminarProducto(product.id);
    this.cartItems = this.cartService.getCarrito();
    this.snackBar.open(`Producto "${product.title}" eliminado del carrito`, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left',
      panelClass: ['success-snackbar']
    });
  }

  clearCart(): void {
    this.cartService.limpiarCarrito();
    this.cartItems = [];
    this.snackBar.open(`Carrito vaciado`, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left',
      panelClass: ['success-snackbar']
    });
  }
}

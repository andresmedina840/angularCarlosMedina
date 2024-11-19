import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, MatSnackBarModule ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'], 
})
export class ProductListComponent {
  productList: Product[] = [];
  searchId: string | undefined;
  foundProduct: Product | undefined;

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  /*ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }*/

  ngOnInit(): void {
   this.productService.getProducts1().subscribe((data : Product[]) => {
    
    this.productList = data;
    console.log(this.productList)
   })
  }

  /*buscarProductoPorId(): void {
    if (this.searchId !== undefined && this.searchId.trim() !== '') {
      console.log('Valor de búsqueda:', this.searchId);
      if (!isNaN(Number(this.searchId))) {
        this.foundProduct = this.productService.getProductById(Number(this.searchId));
      } else {
        this.foundProduct = this.productService.getProductByDescription(this.searchId);
      }
      console.log('Producto encontrado:', this.foundProduct);
    } else {
      this.foundProduct = undefined;
    }
  }*/

  addToCart(product: Product): void {
    this.cartService.adicionarCarrito(product);
    this.snackBar.open(`Producto "${product.title}" añadido al carrito`, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left',
      panelClass: 'success-snackbar'
    });
  }
}

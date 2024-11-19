import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  /*private productsList: Product[] = [
    {
      id: 1,
      name: 'Televisor',
      description: 'Televisor de 50 pulgas',
      price: 1500000,
    },
    {
      id: 2,
      name: 'Portatil Dell 14',
      description: 'Portatil Dell 14, com preocesoar Intel de 11 generacion',
      price: 3500000,
    },
    {
      id: 3,
      name: 'Celular  Xiaomi Redmi 13',
      description: 'Calular Xiaomi Redmi 13, 8 gb de ram',
      price: 800000,
    },
  ];*/

  private productsList: Product[] = [];

  getProducts(): Product[] {
    return this.productsList;
  }

  /*getProductById(id: number): Product | undefined {
    return this.productsList.find((product) => product.id === id);
  }

  getProductByDescription(searchTerm: string): Product | undefined {
    return this.productsList.find(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }*/

  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient){

  }

  getProducts1(): Observable<Product[]> {
    return this.http.get<any[]> (this.apiUrl)
  }
  
  searchProduct(id: number ): Observable<Product>{
    return this.http.get<Product>(`this.apiUrl/${id}`)
  }
}

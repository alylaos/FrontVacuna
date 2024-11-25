import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_SERVICES = 'http://localhost:8090'; //Verificar el puerto
  private urlBase = this.URL_SERVICES + '/api';
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  //Inyectar http
  constructor(private http:HttpClient) { }

  //Listamos todos los productos con su precio final de venta calculado
  getProductList(): Observable<any>{
    console.log("Llamando a REST: " + this.urlBase + '/productostotal');
    return this.http.get(this.urlBase + '/productostotal').pipe(
      map(response => response as Product[])
    )
  }

  //Detalles de un producto


  //Método para registrar un producto
  createProduct(product: Object): Observable<Object>{
    return this.http.post(this.urlBase + "/producto", product, {headers:this.httpHeaders})
  }
}

import { Injectable } from '@angular/core';
import { Produk } from './produk';

export interface CartItem {
  produk: Produk;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(produk: Produk): boolean {
    let existingItem: CartItem | undefined = undefined;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].produk.id === produk.id) {
        existingItem = this.cartItems[i];
        break;
      }
    }

    if (existingItem) {
      if (existingItem.quantity < produk.stok) {
        existingItem.quantity += 1;
        return true;
      } else {
        return false;
      }
    } else {
      this.cartItems.push({ produk: produk, quantity: 1 });
      return true;
    }
  }

  getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      total = total + (this.cartItems[i].produk.harga_jual * this.cartItems[i].quantity);
    }
    return total;
  }

  clearCart() {
    this.cartItems.length = 0;
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}

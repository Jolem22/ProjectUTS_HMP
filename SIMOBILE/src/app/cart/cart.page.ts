import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../services/cart';
import { TransaksiService, Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {
  public alertButtons = ['OK'];

  constructor(
    private cartService: CartService,
    private transaksiService: TransaksiService
  ) { }

  ngOnInit() {
  }

  get cartItems(): CartItem[] {
    return this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  hapusItem(index: number) {
    this.cartService.removeItem(index);
  }

  konfirmasiTransaksi() {
    if (this.cartItems.length === 0) {
      return;
    }

    const currentTotal = this.getTotal();
    const currentDate = new Date();

    const currentCart = this.cartItems;
    const itemsCopy: CartItem[] = [];
    for (let i = 0; i < currentCart.length; i++) {
      itemsCopy.push(currentCart[i]);
    }

    const newTransaksi: Transaksi = {
      id: this.transaksiService.generateNextId(),
      tanggal: currentDate.toLocaleString(),
      total: currentTotal,
      items: itemsCopy
    };

    for (let item of this.cartItems) {
      item.produk.stok -= item.quantity;
      if (item.produk.stok < 0) {
        item.produk.stok = 0;
      }
    }

    this.transaksiService.addTransaksi(newTransaksi);

    this.cartService.clearCart();
  }

}

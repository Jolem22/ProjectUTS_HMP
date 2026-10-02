import { Component, OnInit } from '@angular/core';
import { riwayatTransaksi } from '../transaksi/transaksi.page';

interface CartItem {
  productName: string;
  productPrice: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {

  cartItems: CartItem[] = [
    {
      productName: 'Iphone 14',
      productPrice: 14000000,
      quantity: 1
    },
    {
      productName: 'MacBook Pro',
      productPrice: 20000000,
      quantity: 2
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getTotal(): number {
    let total = 0;
    for(let item of this.cartItems) {
      total += item.productPrice * item.quantity;
    }
    return total;
  }

  konfirmasiTransaksi() {
    if(this.cartItems.length === 0) {
      alert("Keranjang kosong!");
      return;
    }

    const currentTotal = this.getTotal();
    const currentDate = new Date();
    
    // Add to history
    riwayatTransaksi.push({
      tanggal: currentDate.toLocaleString(),
      total: currentTotal,
      items: [...this.cartItems]
    });

    // Clear cart
    this.cartItems = [];
    alert("Transaksi berhasil dikonfirmasi!");
  }

}

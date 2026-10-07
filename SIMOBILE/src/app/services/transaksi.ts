import { Injectable } from '@angular/core';
import { CartItem } from './cart';
import { ProdukService } from './produk';

export interface Transaksi {
  id: string;
  tanggal: string;
  total: number;
  items: CartItem[];
}

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {
  private riwayatTransaksi: Transaksi[] = [];

  constructor(private produkService: ProdukService) {
    this.seedMockData();
  }

  private seedMockData() {
    const rawData = [
      { id: '#001', items: [{ id: 'p5', qty: 10 }, { id: 'p6', qty: 2 }, { id: 'p9', qty: 1 }] },
      { id: '#002', items: [{ id: 'p1', qty: 1 }, { id: 'p2', qty: 2 }, { id: 'p3', qty: 3 }, { id: 'p4', qty: 2 }] },
      { id: '#003', items: [{ id: 'p5', qty: 15 }, { id: 'p8', qty: 4 }, { id: 'p10', qty: 1 }] },
      { id: '#004', items: [{ id: 'p7', qty: 3 }, { id: 'p6', qty: 1 }, { id: 'p3', qty: 2 }, { id: 'p9', qty: 2 }] },
      { id: '#005', items: [{ id: 'p4', qty: 1 }, { id: 'p5', qty: 5 }, { id: 'p8', qty: 2 }, { id: 'p1', qty: 1 }, { id: 'p2', qty: 1 }] },
      { id: '#006', items: [{ id: 'p5', qty: 10 }, { id: 'p1', qty: 1 }, { id: 'p3', qty: 1 }, { id: 'p7', qty: 5 }, { id: 'p4', qty: 3 }] }
    ];

    const today = new Date().toLocaleString();

    for (const raw of rawData) {
      const cartItems: CartItem[] = [];
      let total = 0;
      for (const item of raw.items) {
        const produk = this.produkService.getProdukById(item.id);
        if (produk) {
          cartItems.push({ produk: produk, quantity: item.qty });
          total += produk.harga_jual * item.qty;
        }
      }
      this.riwayatTransaksi.push({
        id: raw.id,
        tanggal: today,
        total: total,
        items: cartItems
      });
    }
  }

  getRiwayat(): Transaksi[] {
    return this.riwayatTransaksi;
  }

  generateNextId(): string {
    const nextNumber = this.riwayatTransaksi.length + 1;
    let strNumber = nextNumber.toString();

    if (nextNumber < 10) {
      strNumber = '00' + strNumber;
    } else if (nextNumber < 100) {
      strNumber = '0' + strNumber;
    }

    return '#' + strNumber;
  }

  addTransaksi(transaksi: Transaksi) {
    this.riwayatTransaksi.push(transaksi);
  }

  getTransaksiById(id: string): Transaksi | undefined {
    return this.riwayatTransaksi.find(t => t.id === id);
  }
}

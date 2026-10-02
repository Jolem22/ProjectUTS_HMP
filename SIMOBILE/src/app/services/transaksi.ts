import { Injectable } from '@angular/core';
import { CartItem } from './cart';

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

  constructor() { }

  getRiwayat(): Transaksi[] {
    return this.riwayatTransaksi;
  }

  addTransaksi(transaksi: Transaksi) {
    this.riwayatTransaksi.push(transaksi);
  }

  getTransaksiById(id: string): Transaksi | undefined {
    return this.riwayatTransaksi.find(t => t.id === id);
  }
}

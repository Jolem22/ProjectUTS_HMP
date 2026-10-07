import { Component, OnInit } from '@angular/core';
import { ProdukService, Produk } from '../services/produk';
import { TransaksiService, Transaksi } from '../services/transaksi';

interface ProdukTerlaris {
  nama: string;
  total: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})

export class DashboardPage implements OnInit {
  produkTerlaris: ProdukTerlaris[] = [];

  constructor(
    private produkService: ProdukService,
    private transaksiService: TransaksiService
  ) { }

  ngOnInit() {
    this.transaksiList = this.transaksiService.getRiwayat();
    this.hitungProdukTerlaris();
  }

  transaksiList: Transaksi[] = [];

  ionViewWillEnter() {
    this.transaksiList = this.transaksiService.getRiwayat();
    this.hitungProdukTerlaris();
  }

  ionViewDidEnter() {
    this.transaksiList = this.transaksiService.getRiwayat();
    this.hitungProdukTerlaris();
  }

  hitungProdukTerlaris() {
    const hasil: ProdukTerlaris[] = [];
    const riwayat = this.transaksiService.getRiwayat();

    for (const p of this.produkService.getProduks()) {
      let total = 0;
      for (const t of riwayat) {
        for (const item of t.items) {
          if (item.produk.id === p.id) {
            total += item.quantity;
          }
        }
      }
      hasil.push({ nama: p.nama, total: total });
    }

    hasil.sort((a, b) => b.total - a.total);
    this.produkTerlaris = hasil;
  }

  rupiah(angka: number): string {
    return 'Rp ' + angka.toFixed(0);
  }
}

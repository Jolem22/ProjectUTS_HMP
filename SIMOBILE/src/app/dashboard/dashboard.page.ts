import { Component, OnInit } from '@angular/core';
import { ProdukService, Produk } from '../services/produk';

interface ItemTransaksi {
  produkId: string;  
  jumlah: number;
}

interface Transaksi {
  id: number;
  nomor: string;
  items: ItemTransaksi[];
}

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
  transaksiList: Transaksi[] = [
    { id: 1, nomor: '#001', items: [
        { produkId: 'p5',  jumlah: 10 },
        { produkId: 'p6',  jumlah: 2 },
        { produkId: 'p9',  jumlah: 1 } ] },
    { id: 2, nomor: '#002', items: [
        { produkId: 'p1',  jumlah: 1 },
        { produkId: 'p2',  jumlah: 2 },
        { produkId: 'p3',  jumlah: 3 },
        { produkId: 'p4',  jumlah: 2 } ] },
    { id: 3, nomor: '#003', items: [
        { produkId: 'p5',  jumlah: 15 },
        { produkId: 'p8',  jumlah: 4 },
        { produkId: 'p10', jumlah: 1 } ] },
    { id: 4, nomor: '#004', items: [
        { produkId: 'p7',  jumlah: 3 },
        { produkId: 'p6',  jumlah: 1 },
        { produkId: 'p3',  jumlah: 2 },
        { produkId: 'p9',  jumlah: 2 } ] },
    { id: 5, nomor: '#005', items: [
        { produkId: 'p4',  jumlah: 1 },
        { produkId: 'p5',  jumlah: 5 },
        { produkId: 'p8',  jumlah: 2 },
        { produkId: 'p1',  jumlah: 1 },
        { produkId: 'p2',  jumlah: 1 } ] },
    { id: 6, nomor: '#006', items: [
        { produkId: 'p5',  jumlah: 10 },
        { produkId: 'p1',  jumlah: 1 },
        { produkId: 'p3',  jumlah: 1 },
        { produkId: 'p7',  jumlah: 5 },
        { produkId: 'p4',  jumlah: 3 } ] },
  ];

  produkTerlaris: ProdukTerlaris[] = [];

  constructor(private produkService: ProdukService) { }

  ngOnInit() {
    this.hitungProdukTerlaris();
  }

  // Cari nama produk dari service berdasarkan id
  getNama(id: string): string {
    const p = this.produkService.getProdukById(id);
    if (p) {
      return p.nama;
    }
    return '-';
  }

  // Cari harga jual produk dari service berdasarkan id
  getHarga(id: string): number {
    const p = this.produkService.getProdukById(id);
    if (p) {
      return p.harga_jual;
    }
    return 0;
  }

  hitungTotal(t: Transaksi): number {
    let total = 0;
    for (const item of t.items) {
      total += item.jumlah * this.getHarga(item.produkId);
    }
    return total;
  }

  // Jumlahkan penjualan tiap produk dari semua transaksi, lalu urutkan dari yang terbanyak
  hitungProdukTerlaris() {
    const hasil: ProdukTerlaris[] = [];

    for (const p of this.produkService.getProduks()) {
      let total = 0;
      for (const t of this.transaksiList) {
        for (const item of t.items) {
          if (item.produkId === p.id) {
            total += item.jumlah;
          }
        }
      }
      hasil.push({ nama: p.nama, total: total });
    }

    hasil.sort((a, b) => b.total - a.total);
    this.produkTerlaris = hasil;
  }

  rupiah(angka: number): string {
    return 'Rp ' + angka.toLocaleString('id-ID');
  }
}

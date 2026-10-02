import { Component, OnInit } from '@angular/core';

interface ItemTransaksi {
  nama: string;
  jumlah: number;
  harga: number;
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
  // Data dummy (pola array of object seperti `books` di Week 4)
  transaksiList: Transaksi[] = [
    { id: 1, nomor: '#001', items: [
        { nama: 'Indomie Goreng', jumlah: 5, harga: 3500 },
        { nama: 'Teh Botol 450ml', jumlah: 2, harga: 5000 } ] },
    { id: 2, nomor: '#002', items: [
        { nama: 'Beras Premium 5kg', jumlah: 1, harga: 68000 },
        { nama: 'Minyak Goreng 1L', jumlah: 1, harga: 17000 },
        { nama: 'Telur Ayam 1kg', jumlah: 1, harga: 30000 } ] },
    { id: 3, nomor: '#003', items: [
        { nama: 'Air Mineral 600ml', jumlah: 6, harga: 3000 },
        { nama: 'Sabun Mandi', jumlah: 2, harga: 4000 } ] },
    { id: 4, nomor: '#004', items: [
        { nama: 'Deterjen 800g', jumlah: 2, harga: 16500 },
        { nama: 'Biskuit Kelapa', jumlah: 3, harga: 9000 },
        { nama: 'Indomie Goreng', jumlah: 4, harga: 3500 },
        { nama: 'Teh Botol 450ml', jumlah: 1, harga: 5000 } ] },
    { id: 5, nomor: '#005', items: [
        { nama: 'Gula Pasir 1kg', jumlah: 2, harga: 18000 } ] },
  ];

  // Data dummy produk terlaris (sudah urut dari yang paling banyak terjual)
  produkTerlaris: ProdukTerlaris[] = [
    { nama: 'Indomie Goreng',    total: 120 },
    { nama: 'Air Mineral 600ml', total: 95 },
    { nama: 'Teh Botol 450ml',   total: 80 },
    { nama: 'Minyak Goreng 1L',  total: 64 },
    { nama: 'Gula Pasir 1kg',    total: 52 },
    { nama: 'Telur Ayam 1kg',    total: 47 },
    { nama: 'Beras Premium 5kg', total: 40 },
    { nama: 'Sabun Mandi',       total: 35 },
    { nama: 'Deterjen 800g',     total: 28 },
    { nama: 'Biskuit Kelapa',    total: 21 },
  ];

  constructor() { }

  ngOnInit() {
  }

  // Dipanggil dari HTML lewat interpolation (materi Week 3: method di interpolation)
  hitungTotal(t: Transaksi): number {
    let total = 0;
    for (const item of t.items) {
      total += item.jumlah * item.harga;
    }
    return total;
  }

  rupiah(angka: number): string {
    return 'Rp ' + angka.toLocaleString('id-ID');
  }


}

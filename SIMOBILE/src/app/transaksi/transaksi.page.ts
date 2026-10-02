import { Component, OnInit } from '@angular/core';

export const riwayatTransaksi: any[] = [];

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  riwayat = riwayatTransaksi;

  constructor() { }

  ngOnInit() {
  }

}

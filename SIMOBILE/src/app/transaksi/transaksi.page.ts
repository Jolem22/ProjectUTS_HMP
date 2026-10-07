import { Component, OnInit } from '@angular/core';
import { TransaksiService, Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {
  riwayat: Transaksi[] = [];

  constructor(
    private transaksiService: TransaksiService
  ) { }

  ngOnInit() {
    this.riwayat = [...this.transaksiService.getRiwayat()];
  }

  ionViewWillEnter() {
    this.riwayat = [...this.transaksiService.getRiwayat()];
  }

}

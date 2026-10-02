import { Component, OnInit } from '@angular/core';
import { TransaksiService, Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false,
})
export class TransaksiPage implements OnInit {

  constructor(
    private transaksiService: TransaksiService
  ) { }

  ngOnInit() {
  }

  get riwayat(): Transaksi[] {
    return this.transaksiService.getRiwayat();
  }

}

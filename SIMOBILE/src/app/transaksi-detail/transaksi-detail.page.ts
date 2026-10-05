import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransaksiService, Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-transaksi-detail',
  templateUrl: './transaksi-detail.page.html',
  styleUrls: ['./transaksi-detail.page.scss'],
  standalone: false,
})
export class TransaksiDetailPage implements OnInit {
  transaksi: Transaksi | undefined;

  constructor(
    private route: ActivatedRoute,
    private transaksiService: TransaksiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.transaksi = this.transaksiService.getTransaksiById(id);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdukService, Produk } from '../services/produk';

@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.page.html',
  styleUrls: ['./produk-detail.page.scss'],
  standalone: false,
})
export class ProdukDetailPage implements OnInit {
  produk: Produk | undefined;

  constructor(
    private route: ActivatedRoute,
    private produkService: ProdukService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.produk = this.produkService.getProdukById(id);
    });
  }

  tambahKeKeranjang(produk: Produk) {
    if (produk.stok > 0) {
      alert(`Produk ${produk.nama} ditambahkan ke keranjang!`);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdukService, Produk } from '../services/produk';
import { CartService } from '../services/cart';

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
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.produk = this.produkService.getProdukById(id);
    });
  }

  tambahKeKeranjang(produk: Produk) {
    if (produk.stok > 0) {
      const added = this.cartService.addToCart(produk);
      if (added) {
        alert(`Produk ${produk.nama} ditambahkan ke keranjang!`);
      }
    }
  }
}

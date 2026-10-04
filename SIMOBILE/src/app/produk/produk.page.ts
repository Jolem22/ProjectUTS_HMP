import { Component, OnInit } from '@angular/core';
import { ProdukService, Produk } from '../services/produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  produks: Produk[] = [];
  searchQuery: string = '';

  // Gambar default --> belum ada gambar produk
  gambarDefault: string = 'https://ubaya.cloud/no_image.jpg';

  constructor(private produkService: ProdukService) {}

  ngOnInit() {
    this.produks = this.produkService.getProduks();
  }

  filteredProduks() {
    if (!this.searchQuery) {
      return this.produks;
    }
    return this.produks.filter((p) =>
      p.nama.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }
}

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

  selectedCategory: string = 'Semua';

  filteredProduks() {
    return this.produks.filter((p) => {
      const matchName = p.nama.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchCat = this.selectedCategory === 'Semua' ? true : p.kategori === this.selectedCategory;
      return matchName && matchCat;
    });
  }
}

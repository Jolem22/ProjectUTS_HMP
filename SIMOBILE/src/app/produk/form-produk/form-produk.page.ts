import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdukService } from '../../services/produk';

@Component({
  selector: 'app-form-produk',
  templateUrl: './form-produk.page.html',
  styleUrls: ['./form-produk.page.scss'],
  standalone: false,
})
export class FormProdukPage implements OnInit {
  new_nama: string = '';
  new_kategori: string = '';
  new_harga_beli: any = null;
  new_harga_jual: any = null;
  new_stok: any = null;
  new_gambar: string = '';

  modeEdit: boolean = false;
  idProduk: string = '';
  sudahCoba: boolean = false;


  halamanProduk: string = '/produk';

  daftarKategori: string[] = ['Sembako', 'Makanan', 'Minuman', 'Mandi'];


  gambarDefault: string = 'https://ubaya.cloud/no_image.jpg';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produkService: ProdukService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const produk = this.produkService.getProdukById(params['id']);
        if (produk) {
          this.modeEdit = true;
          this.idProduk = produk.id;
          this.new_nama = produk.nama;
          this.new_kategori = produk.kategori;
          this.new_harga_beli = produk.harga_beli;
          this.new_harga_jual = produk.harga_jual;
          this.new_stok = produk.stok;
          this.new_gambar = produk.gambar;
        } else {
          this.router.navigate([this.halamanProduk]);
        }
      }
    });
  }

  errNama(): string {
    if (this.new_nama == '' && this.sudahCoba) {
      return 'Nama barang wajib diisi.';
    }
    return '';
  }

  errKategori(): string {
    if (this.new_kategori == '' && this.sudahCoba) {
      return 'Kategori wajib dipilih.';
    }
    return '';
  }

  errHargaBeli(): string {
    if (this.new_harga_beli === null || this.new_harga_beli === '') {
      if (this.sudahCoba) {
        return 'Harga beli wajib diisi dengan angka.';
      }
      return '';
    }
    if (this.new_harga_beli <= 0) {
      return 'Harga beli harus lebih dari 0.';
    }
    return '';
  }

  errHargaJual(): string {
    if (this.new_harga_jual === null || this.new_harga_jual === '') {
      if (this.sudahCoba) {
        return 'Harga jual wajib diisi dengan angka.';
      }
      return '';
    }
    if (this.new_harga_jual <= 0) {
      return 'Harga jual harus lebih dari 0.';
    }
    return '';
  }

  errStok(): string {
    if (this.new_stok === null || this.new_stok === '') {
      if (this.sudahCoba) {
        return 'Stok wajib diisi dengan angka (isi 0 jika habis).';
      }
      return '';
    }
    if (this.new_stok < 0) {
      return 'Stok tidak boleh negatif.';
    }
    return '';
  }

  simpan() {
    this.sudahCoba = true;

    if (this.errNama() != '' || this.errKategori() != '' ||
      this.errHargaBeli() != '' || this.errHargaJual() != '' ||
      this.errStok() != '') {
      return;
    }

    if (this.modeEdit) {
      this.produkService.updateProduk(this.idProduk, this.new_nama, this.new_kategori,
        this.new_harga_beli, this.new_harga_jual, this.new_stok, this.new_gambar);
    } else {
      this.produkService.tambahProduk(this.new_nama, this.new_kategori,
        this.new_harga_beli, this.new_harga_jual, this.new_stok, this.new_gambar);
    }

    this.router.navigate([this.halamanProduk]);
  }
}
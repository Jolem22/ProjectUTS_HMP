import { Injectable } from '@angular/core';

export interface Produk {
  id: string;
  nama: string;
  kategori: string;
  harga_beli: number;
  harga_jual: number;
  stok: number;
  gambar: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProdukService {
  public produks: Produk[] = [
    {
      id: 'p1',
      nama: 'Beras Rojolele 5kg',
      kategori: 'Sembako',
      harga_beli: 60000,
      harga_jual: 65000,
      stok: 10,
      gambar:
        'https://down-id.img.susercontent.com/file/id-11134207-7r98r-lvsf71avzj7g93',
    },
    {
      id: 'p2',
      nama: 'Minyak Goreng Bimoli 2L',
      kategori: 'Sembako',
      harga_beli: 35000,
      harga_jual: 38000,
      stok: 0,
      gambar: 'https://coreimages.lottemart.co.id/ord/06/1037586000-a',
    },
    {
      id: 'p3',
      nama: 'Gula Pasir Gulaku 1kg',
      kategori: 'Sembako',
      harga_beli: 15000,
      harga_jual: 17000,
      stok: 20,
      gambar:
        'https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2024/7/5/92da6545-0ee1-4a71-b5f5-b52d6a2e0451.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg',
    },
    {
      id: 'p4',
      nama: 'Telur Ayam 1kg',
      kategori: 'Sembako',
      harga_beli: 25000,
      harga_jual: 28000,
      stok: 15,
      gambar:
        'https://www.shutterstock.com/image-photo/fresh-chicken-eggs-telur-ayam-260nw-2110653281.jpg',
    },
    {
      id: 'p5',
      nama: 'Indomie Goreng',
      kategori: 'Makanan',
      harga_beli: 2500,
      harga_jual: 3000,
      stok: 100,
      gambar:
        'https://www.indomie.co.id/Content/Product/Category/indomie-goreng.jpg',
    },
    {
      id: 'p6',
      nama: 'Kopi Kapal Api 165g',
      kategori: 'Minuman',
      harga_beli: 12000,
      harga_jual: 14000,
      stok: 5,
      gambar:
        'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-49520545/kapal_api_kopi_kapal_api_165g_-_kopi_kapal_api_merah_165_gram_full01_vbjvdxpa.jpg',
    },
    {
      id: 'p7',
      nama: 'Teh Celup Sosro',
      kategori: 'Minuman',
      harga_beli: 8000,
      harga_jual: 10000,
      stok: 0,
      gambar:
        'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-81056760/sosro_teh_celup_sosro_asli_1_pak_isi_30_pcs_full01_jhwodcxo.jpg',
    },
    {
      id: 'p8',
      nama: 'Sabun Mandi Lifebuoy',
      kategori: 'Mandi',
      harga_beli: 3000,
      harga_jual: 4000,
      stok: 50,
      gambar: 'https://assets.unileversolutions.com/v1/142783570.png',
    },
    {
      id: 'p9',
      nama: 'Pasta Gigi Pepsodent',
      kategori: 'Mandi',
      harga_beli: 8000,
      harga_jual: 10000,
      stok: 30,
      gambar:
        'https://down-id.img.susercontent.com/file/id-11134207-7qul2-ljzfeo8tc58f91',
    },
    {
      id: 'p10',
      nama: 'Shampoo Clear 160ml',
      kategori: 'Mandi',
      harga_beli: 20000,
      harga_jual: 23000,
      stok: 12,
      gambar:
        'https://order.lottemart.co.id/_next/image?url=https%3A%2F%2Fcoreimages.lottemart.co.id%2Ford%2F06%2F1093327000&w=1920&q=75',
    },
  ];

  constructor() {}

  getProduks() {
    return this.produks;
  }

  getProdukById(id: string) {
    return this.produks.find((p) => p.id === id);
  }
  private nextId: number = 11; //karena p1 - p10 sudah dipakai

  tambahProduk(
    p_nama: string,
    p_kategori: string,
    p_harga_beli: number,
    p_harga_jual: number,
    p_stok: number,
    p_gambar: string
  ) {
    this.produks.push({
      id: 'p' + this.nextId,
      nama: p_nama,
      kategori: p_kategori,
      harga_beli: p_harga_beli,
      harga_jual: p_harga_jual,
      stok: p_stok,
      gambar: p_gambar,
    });
    this.nextId++;
  }

  updateProduk(
    p_id: string,
    p_nama: string,
    p_kategori: string,
    p_harga_beli: number,
    p_harga_jual: number,
    p_stok: number,
    p_gambar: string
  ) {
    for (let i = 0; i < this.produks.length; i++) {
      if (this.produks[i].id === p_id) {
        this.produks[i] = {
          id: p_id,
          nama: p_nama,
          kategori: p_kategori,
          harga_beli: p_harga_beli,
          harga_jual: p_harga_jual,
          stok: p_stok,
          gambar: p_gambar,
        };
      }
    }
  }
}

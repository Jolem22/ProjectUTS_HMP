import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdukService, Produk } from '../services/produk';
import { CartService } from '../services/cart';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.page.html',
  styleUrls: ['./produk-detail.page.scss'],
  standalone: false,
})
export class ProdukDetailPage implements OnInit {
  produk: Produk | undefined;
  alertMessage = '';
  alertButtons = ['OK'];
  isAlertOpen = false;

  constructor(
    private route: ActivatedRoute,
    private produkService: ProdukService,
    private cartService: CartService,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.produk = this.produkService.getProdukById(id);
    });
  }

  animateButton() {
    const btnElement = document.querySelector('#btn-tambah') as HTMLElement;
    if (btnElement) {
      const animation = this.animationCtrl
        .create()
        .addElement(btnElement)
        .duration(300)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.15)' },
          { offset: 1, transform: 'scale(1)' }
        ]);

      animation.play();
    }
  }

  tambahKeKeranjang(produk: Produk) {
    this.animateButton();
    if (produk.stok > 0) {
      const added = this.cartService.addToCart(produk);
      if (added) {
        this.alertMessage = `Produk ${produk.nama} ditambahkan ke keranjang!`;
      } else {
        this.alertMessage = 'Stok tidak mencukupi!';
      }
      this.isAlertOpen = true;
    }
  }
}

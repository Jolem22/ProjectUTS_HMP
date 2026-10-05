import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {

  constructor(
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.fadeInAvatar();
    this.slideUpCard();
  }

  fadeInAvatar() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    if (avatarElement) {
      const animation = this.animationCtrl
        .create()
        .addElement(avatarElement)
        .duration(1500)
        .iterations(1)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0.5)' },
          { offset: 0.5, opacity: '0.5', transform: 'scale(1.1)' },
          { offset: 1, opacity: '1', transform: 'scale(1)' }
        ]);

      animation.play();
    }
  }

  slideUpCard() {
    const cardElement = document.querySelector('#cardProfil') as HTMLElement;
    if (cardElement) {
      const animation = this.animationCtrl
        .create()
        .addElement(cardElement)
        .duration(1000)
        .iterations(1)
        .fromTo('transform', 'translateY(20px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1');

      animation.play();
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage implements OnInit {
  isDarkMode: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark');
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}

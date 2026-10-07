# 📱 SIMOBILE - Sistem Informasi Manajemen Toko

Aplikasi manajemen toko berbasis mobile yang dibangun menggunakan **Ionic Framework** dan **Angular**. Aplikasi ini merupakan project untuk UTS (Ujian Tengah Semester) yang mensimulasikan pencatatan barang, keranjang belanja, dan riwayat transaksi.

---

## 🛠️ Persyaratan Sistem (Prerequisites)
Sebelum menjalankan project ini, pastikan Anda telah menginstal:
1. **Node.js** (Versi LTS direkomendasikan) - [Download di sini](https://nodejs.org/)
2. **Angular CLI** - Install secara global melalui terminal/command prompt:
   ```bash
   npm install -g @angular/cli
   ```
3. **Ionic CLI** - Install secara global melalui terminal/command prompt:
   ```bash
   npm install -g @ionic/cli
   ```

---

## 🚀 Cara Instalasi

1. Buka terminal atau command prompt.
2. Arahkan ke direktori project SIMOBILE yang sudah diekstrak:
   ```bash
   cd "C:\Users\ASUS\Documents\PROJECT UTS SMS 5\ProjectUTS_HMP\SIMOBILE"
   ```
   *(Catatan: Sesuaikan kembali jika lokasi folder Anda berbeda)*
3. Jalankan perintah berikut untuk mengunduh semua library dan dependency yang dibutuhkan:
   ```bash
   npm install
   ```

---

## ▶️ Cara Menjalankan Aplikasi

Setelah proses instalasi (`npm install`) selesai, Anda dapat menjalankan aplikasi di browser lokal Anda dengan perintah:

```bash
ionic serve
```

Aplikasi akan memproses *build* dan otomatis terbuka di browser bawaan Anda (biasanya di `http://localhost:8100`). 

> **💡 Tips Tampilan Mobile:** 
> Agar terlihat seperti di HP, tekan **F12** di browser (Chrome/Edge) untuk membuka Developer Tools, lalu klik ikon **Toggle Device Toolbar** (atau tekan `Ctrl+Shift+M`).

---

## ✨ Daftar Fitur yang Berhasil Diimplementasikan

Berikut adalah daftar fitur utama yang berjalan dengan baik pada aplikasi SIMOBILE:

### 1. 🏠 Dashboard Interaktif
- **Ringkasan Transaksi Hari Ini**: Menampilkan semua riwayat transaksi yang terjadi secara real-time dalam bentuk akordeon (bisa di-klik untuk melihat detail item yang dibeli).
- **Produk Terlaris**: Menampilkan peringkat produk berdasarkan total jumlah (quantity) yang terjual dari seluruh transaksi. Data ini otomatis dihitung dan diperbarui setiap kali ada transaksi baru.

### 2. 📦 Manajemen Produk (Katalog)
- **Daftar Produk**: Menampilkan katalog produk beserta foto, stok, dan harga jual. Jika stok habis (0), angka stok akan otomatis berwarna merah sebagai peringatan visual.
- **Pencarian Cerdas (Search)**: Fitur pencarian produk berdasarkan nama secara *real-time* (hasil pencarian langsung muncul saat mengetik).
- **Filter Kategori**: Menyaring daftar produk berdasarkan kategori tertentu (Sembako, Makanan, Minuman, Mandi).
- **Pencarian Ganda**: Filter kategori dan kolom pencarian nama dapat bekerja bersamaan.

### 3. 🔍 Detail Produk & Interaksi
- Menampilkan informasi lengkap produk (gambar ukuran besar, nama, harga beli, harga jual, dan sisa stok).
- **Sistem Tambah ke Keranjang**: 
  - Tombol akan otomatis non-aktif (*disabled*) dan tidak bisa ditekan jika stok habis.
  - Terdapat **Animasi** membesar (scale bounce) ketika tombol ditekan menggunakan `AnimationController` bawaan Ionic.
  - Dilengkapi validasi: Muncul notifikasi (Alert) sukses jika berhasil, atau notifikasi peringatan jika jumlah pembelian melebihi sisa stok yang ada.

### 4. 🛒 Sistem Keranjang Belanja (Cart)
- Menampilkan daftar produk yang ingin dibeli beserta kalkulasi subtotal tiap produk.
- **Hitung Total Otomatis**: Total tagihan belanja dihitung secara dinamis.
- **Hapus Item (Swipe-to-Delete)**: Fitur hapus item dari keranjang dengan gestur kekinian (geser item ke kiri untuk memunculkan tombol hapus).
- **Konfirmasi Transaksi (Checkout)**: 
  - Meng-generate ID Transaksi yang berurutan secara otomatis (contoh: `#007`, `#008`).
  - Mengurangi stok produk di gudang (katalog) secara otomatis sesuai jumlah yang dibeli.
  - Memindahkan data keranjang ke dalam riwayat transaksi secara permanen, lalu mengosongkan keranjang.

### 5. 📋 Riwayat Transaksi
- Menampilkan daftar riwayat transaksi (tanggal dan total belanja).
- **Sinkronisasi Data Sempurna (Real-time)**: Data transaksi tersinkronisasi 100% dengan halaman Dashboard. Transaksi yang baru saja di-checkout di Keranjang akan langsung muncul seketika di halaman Transaksi maupun Dashboard tanpa perlu me-refresh aplikasi.
- **Detail Transaksi**: Pengguna dapat mengklik salah satu riwayat untuk melihat detail struk belanja (barang apa saja yang dibeli pada transaksi tersebut).

---

## 🏗️ Struktur & Teknologi Inti
- **State Management**: Menggunakan pola Angular Services (`ProdukService`, `CartService`, `TransaksiService`) yang diinjeksi secara global (`providedIn: 'root'`) sebagai pusat kendali data (Single Source of Truth).
- **Lifecycle Management**: Penggunaan cermat perpaduan antara Angular Lifecycle (`ngOnInit`) dan Ionic Lifecycle (`ionViewWillEnter`, `ionViewDidEnter`) untuk mengatasi isu cache halaman (memastikan layar selalu memperbarui data saat berpindah tab).
- **Data Reactivity**: Menerapkan pembaruan memori (*immutability* menggunakan Spread Operator `[...]`) untuk memancing deteksi perubahan (Change Detection) bawaan Angular agar tampilan selalu *up-to-date*.

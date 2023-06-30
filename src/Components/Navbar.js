import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <div class="page1">
      <nav class="navbar part1">
        <span class="nav-link">Çözüm ve Hizmetler</span>
        <span class="nav-link">Ürünler</span>
        <span class="nav-link">Teknolojiler</span>
        <span class="nav-link">İnsan Kaynakları</span>
        <span class="nav-link">Kurumsal</span>
        <button class="nav-button">İletişim</button>
      </nav>
      <section class="mailBox part2">
        <h1>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</h1>
        <span>
          Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
          farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
          Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
        </span>
        <div class="mailMessage">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Mail bültenimize kayıt ol"
          />
          <button class="mailButton">Kayıt Ol</button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

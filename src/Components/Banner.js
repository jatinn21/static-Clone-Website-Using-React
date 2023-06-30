import React from "react";
import "../CSS/Banner.css";
const Banner = () => {
  return (
    <section class="banner part4">
      <div class="banner__overlay">
        <div class="title__desc">
          <h1 class="heading__Part4">Test Yönetimiyle Neler Sağlıyoruz?</h1>
          <span class="desc__Part4">IoT Destekli Çözümler</span>
          <div class="banner_bottom">
            <span>Yazılım Kalitesini Arttırıyoruz</span>
            <span class="bottom_icon"></span>
            <span>Olası Hataları Önceden Belirliyoruz</span>
            <span class="bottom_icon"></span>
            <span>Oluşabilecek Riskleri Önlüyoruz</span>
            <span class="bottom_icon"></span>
            <span>Zaman ve Maliyetten Tasarruf Sağlıyoruz</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

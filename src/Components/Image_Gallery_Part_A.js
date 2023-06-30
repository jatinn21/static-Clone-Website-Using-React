import React from "react";
import "../CSS/Image_Gallery.css";
import speaker_imageGallery from "../Assets/speaker_imageGallery.jpg";

const Image_Gallery_A = () => {
  return (
    <section class="image__gallery part5">
      <div class="left">
        <h1 class="IG_title">Kalite ve Süreç Yönetimi</h1>
        <p class="IG_desc">
          Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
          sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
          Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz
          alanları güçlendirmek, uluslararası geçerliliği olan PMI®
          metodolojisini şirketinizde uygulamak ve geliştirmek için
          yanınızdayız.
        </p>
        <button class="IG_button">Keşfet</button>
      </div>
      <div class="right">
        <img src={speaker_imageGallery} alt="" />
      </div>
    </section>
  );
};

export default Image_Gallery_A;

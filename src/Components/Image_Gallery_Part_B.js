import React from "react";
import "../CSS/Image_Gallery.css";
import programmer from "../Assets/programmer.jpg";

const Image_Gallery_B = () => {
  return (
    <section class="image__gallery part6">
      <div class="left">
        <img src={programmer} alt="" />
      </div>
      <div class="right">
        <h1 class="IG_title">Test Yönetimi ve Analizi</h1>
        <p class="IG_desc">
          Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek
          amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya
          da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test
          ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile
          baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi
          sunmaktadır.
        </p>
        <button class="IG_button">Keşfet</button>
      </div>
    </section>
  );
};

export default Image_Gallery_B;

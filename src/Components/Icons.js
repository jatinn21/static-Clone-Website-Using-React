import React from "react";
import "../CSS/Icons.css";
import FileIcon from "../Assets/FileIcon.png";
import StarIcon from "../Assets/starIcon.png";
import CrownIcon from "../Assets/crownIcon.png";
import BarIcon from "../Assets/barIcon.png";
import PiChartIcon from "../Assets/PiChartIcon.png";
import FigmaIcon from "../Assets/FigmaIcon.png";

const Icons = () => {
  return (
    <section class="icons part3">
      <h1 class="heading__Part3">Kalite ve Süreç Yönetimi</h1>
      <div class="span__Part3">
        Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı
        sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş
        Analizi ve Test Yönetimi hizmetleri sunmaktayız.
      </div>
      <div class="icon_grid">
        <span class="card">
          <img class="icon" src={FileIcon} />
          <p class="card__title">Döküman Analizi</p>
          <p class="card__desc">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>{" "}
        </span>
        <span class="card">
          <img class="icon" src={StarIcon} />
          <p class="card__title">Kabul ve Değerlendirme</p>
          <p class="card__desc">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>{" "}
        </span>
        <span class="card">
          <img class="icon" src={CrownIcon} />
          <p class="card__title">İş Kuralları Analizi</p>
          <p class="card__desc">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>{" "}
        </span>
        <span class="card">
          <img class="icon" src={BarIcon} />
          <p class="card__title">Akış Diyagramları</p>
          <p class="card__desc">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>
        </span>
        <span class="card">
          <img class="icon" src={PiChartIcon} />
          <p class="card__title">Paydaş Analizi</p>
          <p class="card__desc">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>
        </span>
        <span class="card">
          <img class="icon" src={FigmaIcon} />
          <p class="card__title">Prototipleme</p>
          <p class="card__desc">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>
        </span>
      </div>
    </section>
  );
};

export default Icons;

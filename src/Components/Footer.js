import React from "react";
import "../CSS/Footer.css";
import LinkedinLogo from "../Assets/SocialLogo/LinkedinLogo.png";
import TwitterLogo from "../Assets/SocialLogo/TwitterLogo.png";
import FacebookLogo from "../Assets/SocialLogo/FacebookLogo.png";
import InstagramLogo from "../Assets/SocialLogo/InstagramLogo.png";

const Footer = () => {
  return (
    <footer>
      <div class="top">
        <div class="footer-part1">
          <span class="heading_link">Çözüm ve Hizmetler</span>
          <span>Yazılım Geliştirme</span>
          <span>Outsourcing</span>
          <span>Kalite ve Süreç Yönetimi</span>
          <span>Danışmanlık</span>
          <span>IoT Destekli Çözümler</span>
        </div>
        <div class="footer-part2">
          <span class="heading_link">Ürünler</span>
          <span>Eğitim Yönetim Sistemi</span>
          <span>İnsan Sermayesi Yönetim Sistemi</span>
          <span>Müşteri İlişkileri Yönetim Sistemi</span>
          <span>İçerik Yönetim Sistemi</span>
        </div>
        <div class="footer-part3">
          <span class="heading_link">Kurumsal</span>
          <span>Hakkımızda</span>
          <span>Belge ve Yetkinlikler</span>
          <span>İş Ortakları</span>
        </div>
        <div class="footer-part4">
          <span class="heading_link">İletişim</span>
          <span>Bilgi İstek Formu</span>
          <span>Uzman Talep Formu</span>
        </div>
      </div>
      <div class="bottom">
        <span>© Copyright 2010-2021 - Can Çevik</span>
        <div class="logos">
          <img src={LinkedinLogo} />
          <img src={TwitterLogo} />
          <img src={InstagramLogo} />
          <img src={FacebookLogo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

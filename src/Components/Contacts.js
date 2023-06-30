import React from "react";
import "../CSS/Contacts.css";
import contactLogo from "../Assets/contactLogo.png";

const Contacts = () => {
  return (
    <section class="contacts part8">
      <img src={contactLogo} alt="contact Logo" />
      <h1 class="contact__heading">Bize Ulaşın</h1>
      <span class="contact__desc">
        Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
        irtibata geçin.
      </span>
      <button>Bize Ulaşın</button>
    </section>
  );
};

export default Contacts;

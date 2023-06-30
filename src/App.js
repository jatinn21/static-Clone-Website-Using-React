import React from "react";

import Navbar from "./Components/Navbar";
import Icons from "./Components/Icons";
import Banner from "./Components/Banner";
import Image_Gallery_A from "./Components/Image_Gallery_Part_A";
import Image_Gallery_B from "./Components/Image_Gallery_Part_B";
import CompaniesCollab from "./Components/CompaniesCollab";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Icons />
      <Banner />
      <Image_Gallery_A />
      <Image_Gallery_B />
      <CompaniesCollab />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

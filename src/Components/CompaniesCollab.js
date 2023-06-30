import React from "react";
import "../CSS/CompaniesCollab.css";
import borusan from "../Assets/CompaniesLogo/image 6.png";
import istanbul from "../Assets/CompaniesLogo/image 5.png";
import BookMyShow from "../Assets/CompaniesLogo/BookMyShow Logo.png";
import AKBank from "../Assets/CompaniesLogo/image 2.png";
import AKCansa from "../Assets/CompaniesLogo/image 3.png";
import Tumunu from "../Assets/CompaniesLogo/Frame 4.png";
import Aktas from "../Assets/CompaniesLogo/image 4.png";
import OLA from "../Assets/CompaniesLogo/OLA logo.png";
import Amazon from "../Assets/CompaniesLogo/Amazon Logo.png";

const CompaniesCollab = () => {
  return (
    <section class="collabCompanies part7">
      <h1 class="collabCompanies_heading">Referanslarımız</h1>
      <span class="collabCompanies_desc">
        Bize güvenen ve beraber çalıştığımız iş ortaklarımız
      </span>
      <section class="companieslogo">
        <div class="child1">
          <span class="element">
            <img src={borusan} alt="Borusan Company" srcset="" />
          </span>
        </div>
        <div class="child2">
          <span class="element">
            <img src={istanbul} alt="Istanbul University" srcset="" />
          </span>
          <span class="element">
            <img src={BookMyShow} alt="Book My Show" srcset="" />
          </span>
        </div>
        <div class="child3">
          <span class="element">
            <img src={AKBank} alt="AKBank" srcset="" />
          </span>
          <span class="element">
            <img src={AKCansa} alt="AKCansa" srcset="" />
          </span>
          <span class="element">
            <img src={Tumunu} alt="Tumunu" srcset="" />
          </span>
        </div>
        <div class="child4">
          <span class="element">
            <img src={Aktas} alt="" srcset="" />
          </span>
          <span class="element">
            <img src={OLA} alt="" srcset="" />
          </span>
        </div>
        <div class="child5">
          <span class="element">
            <img src={Amazon} alt="" srcset="" />
          </span>
        </div>
      </section>
    </section>
  );
};

export default CompaniesCollab;

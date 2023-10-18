import { Box } from "@mui/material";
import React from "react";
import "./catalog.css";
import Telegram from "../../Img/FooterImg/Vector (1).svg";
import Instagram from "../../Img/FooterImg/Vector.svg";
import Facebook from "../../Img/FooterImg/Vector (3).svg";
import Youtube from "../../Img/FooterImg/Vector (4).svg";
import TikTok from "../../Img/FooterImg/Vector (2).svg";
import Gmail from "../../Img/Gmail.svg";
import Phone from "../../Img/phone.svg";
import Location from "../../Img/location.svg";
import catalogImg from "../../Img/Group 198.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Catalog({
  toggleCatalog,
  toggleCatalogIcon,
  changeLanguage,
  setActiveLanguage,
  searchIconColor,
  activelanguage,
}) {
  const { t } = useTranslation();
  return (
    <Box
      className="catalog"
      sx={{
        pt: "110px",
        width: "100vw",
        backdropFilter: "blur(30px) !important",
        height: "100vh",
        zIndex: "55555 !important",
        position: "relative !important",
        overflow: "scroll !important",
      }}
    >
      <Box
        className="langueBox"
        sx={{
          display: "flex",
          gap: "4vw",
          padding:'10px 5%'
        }}
      >
        <button
          onClick={() => {
            changeLanguage("ru");
            setActiveLanguage("ru");
          }}
          style={{
            color: searchIconColor ? " #ffff" : "",
          }}
        >
          <span
            style={{
              color: activelanguage === "ru" ? "rgb(120, 120, 255)" : "",
            }}
          >
            RU
          </span>
        </button>
        <button
          onClick={() => {
            changeLanguage("en");
            setActiveLanguage("en");
          }}
          style={{
            color: searchIconColor ? " #ffff" : "",
          }}
        >
          <span
            style={{
              color: activelanguage === "en" ? "rgb(120, 120, 255)" : "",
            }}
          >
            EN
          </span>
        </button>

        <button
          onClick={() => {
            changeLanguage("uz");
            setActiveLanguage("uz");
          }}
          style={{
            color: searchIconColor ? " #ffff" : "",
          }}
        >
          <span
            style={{
              color: activelanguage === "uz" ? "rgb(120, 120, 255)" : "",
            }}
          >
            UZ
          </span>
        </button>
      </Box>
      <ul>
        <li>
          <Link
            to={"/concerts-and-events"}
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            {t("Catalog.catalogText1")}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            {t("Catalog.catalogText2")}
          </Link>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            to={"/cinema-secheduale"}
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            {t("Catalog.catalogText3")}
            <img
              src={catalogImg}
              alt="svg"
              style={{
                position: "relative",
                top: "2px",
              }}
            />
          </Link>
        </li>
        <li>
          <Link
            to={"/catalog-shop"}
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            {t("Catalog.catalogText4")}
          </Link>
        </li>
        <li>
          <Link
            to={"/catalog-food"}
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            {t("Catalog.catalogText5")}
          </Link>
        </li>
        <li>
          <Link
            to={"/catalog-entertainment"}
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            {" "}
            {t("Catalog.catalogText6")}
          </Link>
        </li>
        <li>
          <Link
            to={"/catalog-promotion"}
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            {t("Catalog.catalogText7")}
          </Link>
        </li>
        <li>
          <Link
            to={"#lastPage"}
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            {t("Catalog.catalogText8")}
          </Link>
        </li>  
        <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        className="centerCatalog"
      >
        <Link
          to={"/vacancy"}
          onClick={() => {
            toggleCatalog();
            toggleCatalogIcon();
          }}
        >
          {t("Catalog.catalogText9")}
        </Link>
        <Link
          to={"/last"}
          onClick={() => {
            toggleCatalog();
            toggleCatalogIcon();
          }}
        >
          {t("Catalog.catalogText10")}
        </Link>
      </Box>
      <Box
        className="center2Catalog"
        sx={{
          pl: "3%",
        }}
      >
        <Link
          to={"/rules-visitors"}
          onClick={() => {
            toggleCatalog();
            toggleCatalogIcon();
          }}
        >
          {t("Footer.Rulestext1")}
        </Link>
        <br />
        <Link
          to={"/rules-parking"}
          onClick={() => {
            toggleCatalog();
            toggleCatalogIcon();
          }}
        >
          {t("Footer.Rulestext2")}
        </Link>
        <br />
        <Link
        to={'/rules-advertings'}
          onClick={() => {
            toggleCatalog();
            toggleCatalogIcon();
          }}
        >
          {t("Footer.Rulestext3")}
        </Link>
      </Box>
      </Box> 
      </ul>
    
      <Box className='footerCatalog'>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
        className="endCatalog"
      >
        <Link
          to={"#"}
          onClick={() => {
            toggleCatalog();
            toggleCatalogIcon();
          }}
        >
          <img src={Gmail} alt="svg" />{" "}
          <span id="Gmali"> familypark@gmail.com</span>
        </Link>
        <Link
          to={"#"}
          onClick={() => {
            toggleCatalog();
            toggleCatalogIcon();
          }}
        >
          <img src={Phone} alt="svg" /> <span>+998 94 440 44 40</span>
        </Link>
        <Link
          to={"#"}
          onClick={() => {
            toggleCatalog();
            toggleCatalogIcon();
          }}
        >
          <img src={Location} alt="svg" />
          <span>{t("Catalog.catalogText11")}</span>
        </Link>
      </Box>
      <Box className="CatalogFooter">
        <Link
          to={"https://www.instagram.com/family_park.uz/"}
          className="LinkFooter"
        >
          <span>
            <img src={Instagram} alt="svg" />
          </span>
        </Link>
        <Link
          to={"https://t.me/familyparkbymirankulgroup"}
          className="LinkFooter"
        >
          <span>
            <img src={Telegram} alt="svg" />
          </span>
        </Link>
        <Link
          to={"https://www.tiktok.com/@familypark.uz"}
          className="LinkFooter"
        >
          <span>
            <img src={TikTok} alt="svg" />
          </span>
        </Link>
        <Link
          to={"https://www.facebook.com/familyparkuz"}
          className="LinkFooter"
        >
          <span>
            <img src={Facebook} alt="svg" />
          </span>
        </Link>
        <Link
          to={"https://www.youtube.com/@family_park_uz"}
          className="LinkFooter"
        >
          <span>
            <img src={Youtube} alt="svg" />
          </span>
        </Link>
      </Box>
      </Box>
    </Box>
  );
}

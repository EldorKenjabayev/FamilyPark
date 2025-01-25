import { Box } from "@mui/material";
import React, { useState } from "react";
import "./Magazine.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CarouselCard from "../../CoruselCard/CarouselCard";
export default function MagazinePage({ setIdInfo }) {
  const { t } = useTranslation();
  const [magazine, setMagzine] = useState([
    {
      id: 1,
      img: "https://family.khm473.ru/uploads/tenant/1676356856.png",
      magazineType: "Одежды",
      magazineName: "INDENIM",
    },
    {
      id: 2,
      img: "https://family.khm473.ru/uploads/tenant/1676356856.png",
      magazineType: "Продукты",
      magazineName: "INDENIM",
    },
    {
      id: 3,
      img: "https://family.khm473.ru/uploads/tenant/1676356856.png",
      magazineType: "Одежды",
      magazineName: "INDENIM",
    },
    {
      id: 4,
      img: "https://family.khm473.ru/uploads/tenant/1676356856.png",
      magazineType: "Продукты",
      magazineName: "INDENIM",
    }
  ]);
  const OpenShop = (item) => {
    localStorage.setItem("ShopInfo", item.id);
    setIdInfo(item.id);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        
      }}
    >
      <Box
        className="TitleMagzinne"
        sx={{
          pt: "110px",
          pb: "160px",
          background: "linear-gradient(310.2deg, #FA557B 5.48%, #BB2649 102.12%);",
        }}
      >
        <h1>{t("MagazinePage.MagazinePageTitle")}</h1>
        <Link to={"/catalog-shop"}>
          <button>{t("MagazinePage.MagazinePageBtn")}</button>
        </Link>
      </Box>
      <Box className='carusellMainpage'
        sx={{
          position: "relative",
          top: "-130px",
        }}
      >
        <CarouselCard shops={magazine} OpenShop={OpenShop} />
      </Box>
      <Box className="magazineMoblie">
        <Box className="magazine">
          {magazine.map((item, index) => (
            <Link
              to={`/renter-${item.id}`}
              key={index}
              onClick={() => OpenShop(item)}
              style={{
                color: "#25254c",
              }}
            >
              <Box className="CardMagazine">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.img}
                    alt="png"
                    style={{
                      width: "95%",
                      borderRadius: "25px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "95%",
                    margin: "auto",
                  }}
                >
                  <p>{item.magazineType}</p>
                  <h3>{item.magazineName}</h3>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

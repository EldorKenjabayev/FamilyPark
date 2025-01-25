import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './fooodpage.css'
import CarouselCard from "../../CoruselCard/CarouselCard";
export default function FoodPage() {
    const {t} = useTranslation()
  const [foods, setFodds] = useState([
    {
      id: 1,
      img: "https://family.khm473.ru/uploads/tenant/1685439659.jpg",
      magazineType: "Еда",
      magazineName: "Chocolate",
    },
    {
      id: 2,
      img: "https://family.khm473.ru/uploads/tenant/1685439659.jpg",
      magazineType: "Еда",
      magazineName: "Chocolate",
    },
    {
      id: 3,
      img: "https://family.khm473.ru/uploads/tenant/1685439659.jpg",
      magazineType: "Еда",
      magazineName: "Chocolate",
    },
    {
      id: 4,
      img: "https://family.khm473.ru/uploads/tenant/1685439659.jpg",
      magazineType: "Еда",
      magazineName: "Chocolate",
    },
  ]);
  const OpenShop = (item) =>{
    localStorage.setItem('ShopInfo', item.id)
    
  }
  return (
    <Box className='FoodPage'>
    <Box
      className="TitleMagzinne"
      sx={{
        pt: "110px",
        pb: "160px",
  
      }}
    >
      <h1>{t("foodPage.foodpageTitle")}</h1>
      <Link to={"/catalog-food"}>
        <button style={{
          background:"#ffff"
        }}>{t("MagazinePage.MagazinePageBtn")}</button>
      </Link>
    </Box>
    <Box className='carusellMainpage'
        sx={{
          position: "relative",
          top: "-130px",
        }}
      >
        <CarouselCard shops={foods} OpenShop={OpenShop} />
      </Box>
    <Box className="magazineMoblie">
      <Box className="magazine">
        {foods.map((item, index) => (
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

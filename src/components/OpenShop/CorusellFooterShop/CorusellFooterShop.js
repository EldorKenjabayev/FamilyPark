import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CorusellFooterShop.css";
import { Link } from "react-router-dom";
export default function CorusellFooterShop({ setIdInfo }) {
  const [coruselcard, setCoruselCard] = useState([
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
    },
    {
      id: 5,
      img: "https://family.khm473.ru/uploads/tenant/1676356856.png",
      magazineType: "Одежды",
      magazineName: "INDENIM",
    },
    {
      id: 6,
      img: "https://family.khm473.ru/uploads/tenant/1676356856.png",
      magazineType: "Продукты",
      magazineName: "INDENIM",
    },
    {
      id: 7,
      img: "https://family.khm473.ru/uploads/tenant/1677744493.jpg",
      magazineType: "Одежды",
      magazineName: "INDENIM",
    },
  ]);
  const OpenShop = (item) => {
    localStorage.setItem("ShopInfo", item.id);
    setIdInfo(item.id);
  };

  const responsive = {
    Maxdesctop :{
      breakpoint: { max: 1900, min: 1300},
      items: 5,
    },
    desctop :{
      breakpoint: { max: 1300, min: 700 },
      items: 4,
    },
    ipad :{
      breakpoint: { max: 700, min: 450 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 2,
    },

  };
  return (
    <Box>
      <Carousel responsive={responsive} itemClass="custom-carousel-item">
        {coruselcard.map((item, index) => (
          <Link
            to={`/renter-${item.id}`}
            key={index}
            onClick={() => {
              OpenShop(item);
            }}
          >
            <Box className=" cardcorusel" sx={{
              width: '92%',
            }}>
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
      </Carousel>
    </Box>
  );
}

import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./carouselcard.css";
export default function CarouselCard({ shops, OpenShop }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },

    tablet: {
      breakpoint: { max: 3000, min: 800 },
      items: 3,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      keyBoardControl={true}
      draggable={true}
    >
      {shops.map((item, index) => (
        <Link
          to={`/renter-${item.id}`}
          key={index}
          onClick={() => OpenShop(item)}
          style={{
            color: "#25254c",
          }}
        >
          <Box
            className="CardMagazine CardMagazineCarousel"
            sx={{
              width: "73%",
              ml: "15px",
              pb: "15px",
            }}
          >
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
                  objectFit: "fill",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "95%",
                margin: "auto",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "800",
                }}
              >
                {item.magazineType}
              </p>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                }}
              >
                {item.magazineName}
              </h3>
              {item.orienter === "" ? (
                <>
                  <p>{item.orienter}</p>
                  <h3>{item.title}</h3>
                </>
              ) : (
                <></>
              )}
            </Box>
          </Box>{" "}
          <br />
        </Link>
      ))}
    </Carousel>
  );
}

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./catalogmagzine.css";

export default function EntertainmentCatalog() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage());

  function determineItemsPerPage() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 800) {
      return 4;
    } else if (screenWidth < 1000) {
      return 6;
    } else {
      return 8;
    }
  }

  useEffect(() => {
    function handleResize() {
      const newItemsPerPage = determineItemsPerPage();
      setCurrentPage(1);
      setItemsPerPage(newItemsPerPage);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [entertainment, setEntertaiment] = useState([
    {
      id: 1,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    },
    {
      id: 2,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    },
    {
      id: 3,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    },
    {
      id: 4,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    },
    {
      id: 5,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    },
    {
      id: 6,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    },
    {
      id: 7,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    },
    {
      id: 8,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    },
    {
      id: 9,
      img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
      magazineType: "Развлевательный центр",
      magazineName: "PLAY ARENA",
    }
  ]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEntertainment = entertainment.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <Box>
      <Box
        className="TitleMagzinne TitleCatalog"
        sx={{
          p: "130px 0",
          position:'relative'
        }}
      >
        <h1 id="titleCatalog">{t("MagazinePage.MagazinePageTitle2")}</h1>
        <h3 id="Catalogtitle2">{t("entertainmentPage.entertainmentPaggTitle")}</h3>
      </Box>
      <Box>
      <Box className="magazine" sx={{
        transition:"liner"
      }}>
        {currentEntertainment.map((item, index) => (
          <Link
            to={`/renter-${item.id}`}
            style={{ color: "#25254C" }}
            key={index}
            className="CatalogLinks"
          >
            <Box className="CardMagazine">
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={item.img}
                  alt="png"
                  style={{
                    width: "95%",
                    borderRadius: "25px",
                  }}
                />
              </Box>
              <Box sx={{ width: "95%", margin: "auto" }}>
                <p>{item.magazineType}</p>
                <h3>{item.magazineName}</h3>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
      </Box>
      <Box
        sx={{
          width: "60%",
          margin: "auto",
          textAlign: "center",
          marginTop: "20px",
          position:'absolute',
          bottom:'5%',
          left:'15%',
          right:'15%'

        }}
      >
        <h3> {`${currentPage} - ${Math.ceil(entertainment.length / itemsPerPage)}`}</h3>
        <Box
          sx={{
            display: "flex",
            justifyContent:"center",
            alignItems: "center"
          }}
        >
          <ArrowBackIcon
          sx={{
            color:"#BB2649",
            position:'relative',
            fontWeight:'900',
            left:'-10px',
            cursor:'pointer'
          }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
          <Box
            sx={{
              width: "70%",
              height: "15px",
              padding: "10px 5px",
              borderRadius:'15px',
              background: "#cccc",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                transition: 'margin-left 0.4s linear',
                marginLeft: `calc(${
                  ((currentPage - 1) /
                    Math.ceil(entertainment.length / itemsPerPage)) *
                  100
                }%)`,
                width: `${
                  100 / Math.ceil(entertainment.length / itemsPerPage)
                }%`,
                height: "10px",
                background: "#25254C",
                borderRadius:'10px'
              }}
            ></Box>
          </Box>
          <ArrowForwardIcon  sx={{
            color:"#BB2649",
            position:'relative',
            fontWeight:'900',
            left:'10px',
            cursor:'pointer'
          }}
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  Math.ceil(entertainment.length / itemsPerPage)
                )
              )
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

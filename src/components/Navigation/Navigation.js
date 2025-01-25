import React, { useState, useEffect, useRef } from "react";
import Logo from "../Img/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import "./navigation.css";
import axios from "axios";
import Line from "../Img/Line 1 (1).svg";
import Catalog from "./Catalog/Catalog";
import BackroundCatalog from "../Img/Background/backgrouncatalog.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Telegram from "../Img/FooterImg/Vector (1).svg";
import Instagram from "../Img/FooterImg/Vector.svg";
import Facebook from "../Img/FooterImg/Vector (3).svg";
import Youtube from "../Img/FooterImg/Vector (4).svg";
import TikTok from "../Img/FooterImg/Vector (2).svg";
import "../../i18next";
import SearchResult from "./SearchResult/SearchResult";
export default function Navigation({ setIdInfo, result, setResult }) {
  const savedLanguage = localStorage.getItem("language") || "ru";
  const [activelanguage, setActiveLanguage] = useState(savedLanguage);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [inputActive, setInputActive] = useState(false);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
    localStorage.setItem("language", lang);
  };
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://679509b5aad755a134eb0c43.mockapi.io/api/magazine")
        .then((res) => {
          const data = res.data;
          const filteredResult = data.filter((item) =>
            item.magazineName.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setResult(filteredResult);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, []);
  const [searchActive, setSearchActive] = useState(false);

  const [activecatalog, setActiveCatalog] = useState(false);
  const [searchActivatedOnce, setSearchActivatedOnce] = useState(false);

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/results-search`);
    }
  };
  const [isActive, setIsActive] = useState(false);
  const Location = useLocation();
  let PathName = "";
  PathName = Location.pathname.substring(8);
  console.log(PathName);
  const hash = Location.hash;
  const searchIconColor =
    (hash === "#secondPage" ||
      hash === "#mapPage" ||
      hash === "#magazinePage" ||
      hash === "#foodPage" ||
      hash === "#entertainmentPage  " ||
      hash === "#eventsPage" ||
      hash === "#promotionPage" ||
      hash === "#entertainmentPage" ||
      hash === "#lastPage" ||
      hash === "#footerPage" ||
      Location.pathname === "/catalog-shop" ||
      Location.pathname === "/catalog-food" ||
      Location.pathname === "/catalog-entertainment" ||
      Location.pathname === "/concerts-and-events" ||
      Location.pathname === "/catalog-promotion" ||
      Location.pathname === "/cinema-secheduale" ||
      Location.pathname === "/results-search" ||
      Location.pathname === "/last" ||
      Location.pathname === "/vacancy" ||
      Location.pathname.startsWith("/renter") ||
      PathName === "open-shop") &&
    !activecatalog
      ? "brightness(0) invert(1)"
      : "";
  const toggleCatalogIcon = () => {
    setIsActive(!isActive);
  };

  const firstSpanWidth = isActive ? "25px" : "35px";
  const secondSpanWidth = "25px";
  const toggleSearch = () => {
    if (!searchActivatedOnce) {
      setSearchActivatedOnce(true);
    }
    setSearchActive(true);
  };

  useEffect(() => {
    if (searchActive) {
      const timer = setTimeout(() => {
        setSearchActive(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [searchActive]);
  const toggleCatalog = () => {
    setActiveCatalog((prevState) => !prevState);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 4%",
          height: "100px",
          alignItems: "center",
          backdropFilter: "blur(10px)",
          position: "fixed",
          zIndex: "1111",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1.5vw",
          }}
        >
          <Box
            className="languNavigation"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              padding: "10px 5%",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              filter: searchIconColor ? " brightness(0 ) invert(1)" : "",
            }}
            onClick={toggleSearch}
          >
            <SearchIcon
            className="searchIcon"
              sx={{
                fontSize: "30px",
                position: "relative",
                top: "3px",
              }}
            />
          </Box>
          <input
            type="text"
            className={`search-active ${searchActive ? "slide-in" : ""}`}
            onKeyPress={handleKeyPress}
            onChange={(e) => {
              setInputActive(e.target.value.length > 0);
              handleInputChange(e);
            }}
            style={{
              filter: searchIconColor ? " brightness(0 ) invert(1)" : "",
              fontWeight: "700",
            }}
          />
          <Box
            className={searchActive ? "NoneResult" : "BlockResult"}
            sx={{
              position: "relative",
              maxHeight:"250px"
            }}
          >
            <SearchResult
              result={result}
              inputActive={inputActive}
              searchActive={searchActivatedOnce}
            />
          </Box>
        </Box>
        <Box>
          <Link
            to={"/"}
            onClick={() => {
              if (activecatalog) {
                toggleCatalog();
                toggleCatalogIcon();
              }
            }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "80%",
                margin: "auto",
                filter: searchIconColor ? " brightness(0 ) invert(1)" : "",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "5vw",
            filter: searchIconColor ? " brightness(0 ) invert(1)" : "",
          }}
        >
          <Box
            className={
              activecatalog
                ? "iconLinksNotActive"
                : " displayIconNav iconLinksActive "
            }
            sx={{
              gap: "6px",
            }}
          >
            <Link
              to={"https://www.instagram.com/family_park.uz/"}
              className="LinkFooter"
            >
              <span>
                <img
                  src={Instagram}
                  alt="svg"
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </Link>
            <Link
              to={"https://t.me/familyparkbymirankulgroup"}
              className="LinkFooter"
            >
              <span>
                <img
                  src={Telegram}
                  alt="svg"
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </Link>
            <Link
              to={"https://www.tiktok.com/@familypark.uz"}
              className="LinkFooter"
            >
              <span>
                <img
                  src={TikTok}
                  alt="svg"
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </Link>
            <Link
              to={"https://www.facebook.com/familyparkuz"}
              className="LinkFooter"
            >
              <span>
                <img
                  src={Facebook}
                  alt="svg"
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </Link>
            <Link
              to={"https://www.youtube.com/@family_park_uz"}
              className="LinkFooter"
            >
              <span>
                <img
                  src={Youtube}
                  alt="svg"
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </Link>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isActive ? "0px" : "5px",
              cursor: "pointer",
              filter: searchIconColor ? " brightness(0 ) invert(1)" : "",
            }}
            onClick={() => {
              toggleCatalog();
              toggleCatalogIcon();
            }}
          >
            <span
              style={{
                width: firstSpanWidth,
                height: "4px",
                borderRadius: "5px",
                backgroundColor: "#D73B5F",
                transform: isActive ? "rotate(45deg)" : "none",
                // transition: "all 0.2s ease",
                position: isActive ? "absolute" : "static",
              }}
            ></span>
            <span
              style={{
                width: secondSpanWidth,
                height: "4px",
                borderRadius: "5px",
                backgroundColor: "#D73B5F",
                transform: isActive ? "rotate(-45deg)" : "none",
                // transition: "all 0.2s ease",
              }}
            ></span>
          </Box>
        </Box>
        <img
          src={Line}
          alt="svg"
          style={{
            width: "90%",
            height: "2px",
            margin: "auto",
            zIndex: "1000",
            position: "absolute",
            bottom: "0",
            filter: searchIconColor ? " brightness(0 ) invert(1)" : "",
          }}
        />
      </Box>
      <Box
        className={activecatalog ? "openCatalog" : "closeCatalog"}
        sx={{
          position: "fixed",
          zIndex: "1000",
          height: "110vh",
          backgroundImage: `url(${BackroundCatalog})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Catalog
          toggleCatalog={toggleCatalog}
          toggleCatalogIcon={toggleCatalogIcon}
          changeLanguage={changeLanguage}
          setActiveLanguage={setActiveLanguage}
          searchIconColor={searchIconColor}
          activelanguage={activelanguage}
        />
      </Box>
    </Box>
  );
}

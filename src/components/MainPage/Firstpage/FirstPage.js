import React from "react";
import { Box } from "@mui/material";
import backgroundMain from "../../Img/Background/backgrounmenu.svg";
import "./FirstPage.css";
import { Link } from "@mui/joy";
import { useTranslation } from "react-i18next";
import "../../../i18next";
export default function FirstPage() {
  const { t } = useTranslation();

  return (
    <Box
    className='firstPage'
      sx={{
        height: "100%",
      }}
    >
      <Box className='fisrtTopBox'></Box>
      <Box>
        <Box className="FirstImg"></Box>
        <Box
          className="background-menu"
          sx={{
            backgroundImage: `url(${backgroundMain})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            className="firstTitle-Text"
            sx={{
              width: "100%",
            }}
          >
            <Box>
              <h1 className="FirstTitle">
                <span className="FirstTitleOne">
                  {t("Firstpage.FirstTitleOne")}
                </span>
                <br />
                <span className="FirstTitleTwo">
                  {t("Firstpage.FirstTitleTwo")}
                </span>
              </h1>
            </Box>
          </Box>
          <Box>
            <Box className="FirstText ">
              <p>{t("Firstpage.FirstTitleDescription")}</p>
            </Box>{" "}
            <br />
            <Box className="mainblock2" sx={{}}>
              <Link
                href="#secondPage"
                sx={{
                  paddingTop: "2vh",
                  display: "flex",
                  pl: "16%",
                  pr: "16%",
                  textDecoration: "none !important",
                  justifyContent: "center",
                  alignItems: "center",
                  pb: "13%",
                }}
              >
                <button className="BtnGradient firsPageBtn">
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {t("Firstpage.FirstTitleButton")}
                  </span>
                </button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

import { Box } from "@mui/material";
import React from "react";
import "./SecondPage.css";
import bacgrounImage1 from "../../Img/Group.svg";
import bacgrounImage2 from "../../Img/Group (1).svg";
import bacgrounImage3 from "../../Img/Layer 3.svg";
import bacgrounImage4 from "../../Img/Group (2).svg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../../../i18next";
import { useTranslation } from "react-i18next";
export default function SecondPage() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: "100vh",
        background: "#ffff",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(310.2deg, #FA557B 5.48%, #BB2649 102.12%);",
          pt:"100px"
        }}
      >
        <Box className="TitleSeconPage">
          <h1>
            {t("SecondPage.SecondPageTitleh1")}
            <span
              style={{
                fontWeight: "900",
              }}
              dangerouslySetInnerHTML={{
                __html: t("SecondPage.SecondPageTitleh1span1"),
              }}
            ></span>{" "}
            {`${t("SecondPage.SecondPageTitleh1span2")}`}
            <span
              style={{
                fontWeight: "900",
              }}
            >
              {t("SecondPage.SecondPageTitleh1span3")}
            </span>
          </h1>
        </Box>
        <Box className="SecondPageFlex">
          <Box>
            <h1>80+</h1>
            <p>{t("SecondPage.SecondPageFlex1")}</p>
          </Box>
          <Box>
            <h1>10+</h1>
            <p>{t("SecondPage.SecondPageFlex2")}</p>
          </Box>
          <Box>
            <h1>20+</h1>
            <p>{t("SecondPage.SecondPageFlex3")}</p>
          </Box>
          <Box className='BoxSecondPageLine' sx={{
            height:'35%',
            width:'2px',
            background:'#ffff',
            position:'relative',
            top:"25%"
          }}>

          </Box>
          <Box>
            <p>{t("SecondPage.SecondPageFlex4")}</p>
          </Box>
        </Box>
      </Box>
      <Box
        className="flexGrid"
        sx={{
          background: "#ffff",
        }}
      >
        <Box
          className="SecondPageFlexTwo"
          sx={{
            border: "1px solid transparent",
            borderRadius: "25px",
          }}
        >
          <Box className="SecondPageFlexTwo-1 SecondPageFlexTwo-0">
            <h3>
              {" "}
              {t("SecondPage.SecondPageFlexTwo1")}{" "}
              <NavigateNextIcon
                className="NavigateNextIcon"
                sx={{
                  fontSize: "12px",
                }}
              />{" "}
            </h3>
            <p>{t("SecondPage.SecondPageFlexTwo1Text")}</p>
            <img src={bacgrounImage1} alt="svg" />
          </Box>
          <Box className="SecondPageFlexTwo-2 SecondPageFlexTwo-0">
            <h3>
              {" "}
              {t("SecondPage.SecondPageFlexTwo2")}{" "}
              <NavigateNextIcon
                className="NavigateNextIcon"
                sx={{
                  fontSize: "12px",
                }}
              />
            </h3>
            <p>{t("SecondPage.SecondPageFlexTwo2Text")}</p>
            <img src={bacgrounImage2} alt="svg" />
          </Box>
          <Box className="SecondPageFlexTwo-3 SecondPageFlexTwo-0">
            <h3>
              {" "}
              {t("SecondPage.SecondPageFlexTwo3")}{" "}
              <NavigateNextIcon
                className="NavigateNextIcon"
                sx={{
                  fontSize: "12px",
                }}
              />
            </h3>
            <p>{t("SecondPage.SecondPageFlexTwo3Text")}</p>
            <img src={bacgrounImage3} alt="svg" />
          </Box>
          <Box className="SecondPageFlexTwo-4 SecondPageFlexTwo-0">
            <h3>
              {" "}
              {t("SecondPage.SecondPageFlexTwo4")}{" "}
              <NavigateNextIcon
                sx={{
                  fontSize: "12px",
                }}
              />{" "}
            </h3>
            <p>{t("SecondPage.SecondPageFlexTwo4Text")}</p>
            <img src={bacgrounImage4} alt="svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

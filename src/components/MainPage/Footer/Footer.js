import { Box } from "@mui/material";
import React from "react";
import Clock from "../../Img/FooterImg/clock 1 (Traced).svg";
import Instagram from "../../Img/FooterImg/Vector.svg";
import Telegram from "../../Img/FooterImg/Vector (1).svg";
import TikTok from "../../Img/FooterImg/Vector (2).svg";
import Facebook from "../../Img/FooterImg/Vector (3).svg";
import Youtube from "../../Img/FooterImg/Vector (4).svg";
import LogoFooter from "../../Img/FooterImg/Ресурс 1@2x.svg";
import "./footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box
    className='Footer'
      sx={{
        background: "#F2F2F2",
        padding: "3%",
      }}
    >
      <Box className='displayFooter1'>
        <Box  sx={{
        position:'relative',
        top:'20px'
      }}>
          <Box className="FooterStart">
            <Link className="LinkFooter">+998 94 440 44 40</Link> <br />
            <Link className="LinkFooter">familypark@gmail.com</Link>
          </Box>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2vw",
            }}
            className="clockFooter"
          >
            <img
              src={Clock}
              style={{
                width: "20px",
                height: "20px",
              }}
              alt="svg"
            />
            {t("Footer.WorkingTime")}
          </p>
        </Box>
        <Box className="logoFooterandTex">
        <Box  
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: "6vh",
            pb: "4vh",
          }}
        >
          <img src={LogoFooter} alt="svg" />
        </Box>
        <Box>
        <p className="FooterEnd">{t("Footer.FooterEndText")}</p>
      </Box>
        </Box>
      </Box>
      <Box className="FooterCenter"  sx={{
        position:'relative',
        top:'20px'
      }}>
        <Box className="FooterCenterDisplay">
          <ul>
            <h3>{t("Footer.SocialMedia")}</h3>
            <Link
              to={"https://www.instagram.com/family_park.uz/"}
              className="LinkFooter"
            >
              <span>
                <img src={Instagram} alt="svg" />
                Instagram
              </span>
            </Link>
            <Link
              to={"https://t.me/familyparkbymirankulgroup"}
              className="LinkFooter"
            >
              <span>
                <img src={Telegram} alt="svg" />
                Telegram
              </span>
            </Link>
            <Link
              to={"https://www.tiktok.com/@familypark.uz"}
              className="LinkFooter"
            >
              <span>
                <img src={TikTok} alt="svg" />
                Tik Tok
              </span>
            </Link>
            <Link
              to={"https://www.facebook.com/familyparkuz"}
              className="LinkFooter"
            >
              <span>
                <img src={Facebook} alt="svg" />
                Facebook
              </span>
            </Link>
            <Link
              to={"https://www.youtube.com/@family_park_uz"}
              className="LinkFooter"
            >
              <span>
                <img src={Youtube} alt="svg" />
                Youtube
              </span>
            </Link>
          </ul>
        </Box>
        <Box className="FooterCenterDisplay  FooterCenterDisplay2">
          <ul>
            <h3>{t("Footer.Rules")}</h3>
            <Link to={"/rules-visitors"} className="LinkFooter">
              <p class="LinkText">{t("Footer.Rulestext1")}</p>{" "}
            </Link>
            <Link to={"/"} className="LinkFooter">
              <p class="LinkText">{t("Footer.Rulestext2")}</p>{" "}
            </Link>
            <Link to={"/rules-advertings"} className="LinkFooter">
              <p class="LinkText">{t("Footer.Rulestext3")}</p>{" "}
            </Link>
          </ul>
        </Box>
      </Box>
      <Box
      className='LogoFooterMoble'
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "6vh",
          pb: "4vh",
        }}
      >
        <img src={LogoFooter} alt="svg" />
      </Box>
      <Box className='FooterEndText'>
        <p className="FooterEnd">{t("Footer.FooterEndText")}</p>
      </Box>
    </Box>
  );
}

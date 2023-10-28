  import { Box } from "@mui/material";
  import React from "react";
  import { useEffect } from "react";
  import { useState } from "react";
  import { Link,  useLocation} from "react-router-dom";
  import Corusell from "./CoruselOpenShop/Corusell";
  import Telegram from "../Img/FooterImg/Vector (1).svg";
  import Instagram from "../Img/FooterImg/Vector.svg";
  import { useSpring, animated } from "react-spring";
  import Facebook from "../Img/FooterImg/Vector (3).svg";
  import Youtube from "../Img/FooterImg/Vector (4).svg";
  import TikTok from "../Img/FooterImg/Vector (2).svg";
  import './openshop.css'
  import CorusellFooterShop from "./CorusellFooterShop/CorusellFooterShop";
import { useTranslation } from "react-i18next";
  export default function OpenShop({ idinfo, setIdInfo }) {
    const {t} = useTranslation();
    const Location = useLocation()
    let idLocation = Location.pathname.replace(/\D/g, '')
    const [filteredShopInfo, setFilteredShopInfo] = useState([]);
    const [info, setShopInfo] = useState([

      {
        id: 1,
        img: [
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
        ],
        magazineType: "Одежды",
        magazineName: "INDENIM",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 2,
        img: [
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
        ],
        magazineType: "Продукты",
        magazineName: "INDENIM",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 3,
        img: [
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
        ],
        magazineType: "Одежды",
        magazineName: "INDENIM",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 4,
        img: [
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
        ],
        magazineType: "Продукты",
        magazineName: "INDENIM",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 5,
        img: [
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
        ],
        magazineType: "Одежды",
        magazineName: "INDENIM",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 6,
        img: [
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
          "https://family.khm473.ru/uploads/tenant/1676356856.png",
        ],
        magazineType: "Продукты",
        magazineName: "INDENIM",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 7,
        img: [
          "https://family.khm473.ru/uploads/tenant/1677744493.jpg",
          "https://family.khm473.ru/uploads/tenant/1677744493.jpg",
          "https://family.khm473.ru/uploads/tenant/1677744493.jpg",
          "https://family.khm473.ru/uploads/tenant/1677744493.jpg",
        ],
        magazineType: "Одежды",
        magazineName: "INDENIM",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 8,
        img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
        magazineType: "Развлевательный центр",
        magazineName: "PLAY ARENA",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 9,
        img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
        magazineType: "Развлевательный центр",
        magazineName: "PLAY ARENA",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 10,
        img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
        magazineType: "Развлевательный центр",
        magazineName: "PLAY ARENA",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
      {
        id: 11,
        img: "https://family.khm473.ru/uploads/tenant/1676538985.jpg",
        magazineType: "Развлевательный центр",
        magazineName: "PLAY ARENA",
        instagramProfile: "https://www.instagram.com/family_park.uz/",
        telegramProfile: "https://www.instagram.com/family_park.uz/",
        facebookProfile: "https://www.instagram.com/family_park.uz/",
        youtubeProfile: "https://www.instagram.com/family_park.uz/",
        tiktokProfile: "https://www.instagram.com/family_park.uz/",
        operatingmode: "10:00-23:00",
        phone: "+998 91 123 45 67 ",
        descriptions:
          "Carrefour SA (с фр. — «перекрёсток», произносится Карфу́р) — французская компания розничной торговли, оператородноимённой розничной сети.",
      },
    ]);
    useEffect(() => {
      const filteredShop = info.filter((item) => item.id === idinfo  || item.id  ==  idLocation);
      setFilteredShopInfo(filteredShop);
    }, [idLocation]);
 
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      reset: true,
      config: {
        duration: 800, 
      },
  
    });
  
    const slideInUp = useSpring({
      transform: "translate3d(0, 0, 0)",
      from: { transform: "translate3d(0, 100%, 0)" },
      reset: true,
    });
    return (
      <Box className='renterPage'>
        {filteredShopInfo.map((item) => (
          <animated.div key={item.id} className="animated-shop" style={fadeIn}>
            <Box
              className="TitleMagzinne OpenRenter"
              style={slideInUp}
              sx={{
                pt: "130px",
                pb: "60px",
                display:'block !important'
              }}
            >
              <h1 style={{
                fontSize:"35px"
              }}>{item.magazineName}</h1>
              <h3 style={{
                fontSize:"25px"
              }} id="Catalogtitle2">{item.magazineType}</h3>
            </Box>
            <Box className='flexRenter' >
              <br />
              <Box className='RenterCorusell' >
              <Box>
                <Corusell img={item.img} />
              </Box>
              <Box
                className="openshopImg"
                sx={{
                  padding: "18px 3%",
                  display: "flex",
                  gap: "1vw",
                }}
              >
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

              <Box className='RenterInfo'>
              <Box className='operatingmode'>
                <h2>{t("OpenShop.WorkingTime")}</h2>
                <p className="operatingmodeText">{item.operatingmode}</p>
                <p>{item.phone}</p>
              </Box>
              <Box className='description'>
                <h3>{t("OpenShop.description")}</h3>
                <p>{item.descriptions}</p>
              </Box>
              </Box>
            </Box>
          </animated.div>
        ))}
        <Box className='openshopFooter'>
          <h4>{t("OpenShop.interesing")}</h4>
          <CorusellFooterShop setIdInfo={setIdInfo}/>
        </Box>
      </Box>
    );
  }

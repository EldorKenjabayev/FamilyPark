import { Box } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './events.css'
export default function Events({ setIdInfo }) {
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
  const [events, setEvents] = useState([
    {
      id: 1,
      img: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO01zPFb-default.jpg",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Консерт Rauf & Faik",
      subtitle: "ПРОЖИВИ ЭТО С НАМИ!",
      orienter: "Family ice arena, 1 этаж",
      description:
        "Грандиозный концерт знаменитых артистов в нашем замечательном ТРЦ Family Park. Испытай кучу незабываемых эмоций! 24 Февраля придут гости из популярных стран. Чтобы исполнить свой очередной хит.Успей купить билеты прямо сейчас! ",
      date: "24.02.2023",
      slug: "event-view-konsert_rauf-faik",
    },

    {
      id: 2,
      img: "https://family.khm473.ru/uploads/tenant/1676534388.jpg",
      linkPlayer: "https://www.youtube.com/embed/pP-LFjps0Mg",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ!",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug: "event-view-black-fridayr",
    },
    {
      id: 3,
      img: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO01zPFb-default.jpg",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Консерт Rauf & Faik",
      subtitle: "ПРОЖИВИ ЭТО С НАМИ!",
      orienter: "Family ice arena, 1 этаж",
      description:
        "Грандиозный концерт знаменитых артистов в нашем замечательном ТРЦ Family Park. Испытай кучу незабываемых эмоций! 24 Февраля придут гости из популярных стран. Чтобы исполнить свой очередной хит.Успей купить билеты прямо сейчас! ",
      date: "24.02.2023",
      slug: "event-view-konsert_rauf-faik",
    },

    {
      id: 4,
      img: "https://family.khm473.ru/uploads/tenant/1676534388.jpg",
      linkPlayer: "https://www.youtube.com/embed/pP-LFjps0Mg",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ!",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug: "event-view-black-fridayr",
    },
  ]);
  const OpenShop = (item) => {
    localStorage.setItem("ShopInfo", item);
    setIdInfo(item);
  };
  const { t } = useTranslation();
  return (
    < Box className="Events" sx={{
      height:"100vh"
    }}>
      <Box
        className="TitleMagzinne "
        sx={{
          pt: "110px",
          pb: "150px",
        }}
      >
        <h1>{t("EventsPage.EventsPageTitle")}</h1>
        <Link to={"/concerts-and-events"}>
          <button
            style={{
              background: "#ffff",
            }}
          >
            {t("MagazinePage.MagazinePageBtn")}
          </button>
        </Link>
      </Box>
      <Box
        className="carusellMainpage"
        sx={{
          position: "relative",
          top: "-130px",
        }}
      >
        <Carousel
          responsive={responsive}
          swipeable={true}
          keyBoardControl={true}
          draggable={true}
        >
          {events.map((item, index) => (
            <Link
            to={`/concerts-and-events-${item.id}`}
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
                  <p>{item.orienter}</p>
                  <h3>{item.title}</h3>
                </Box>
              </Box>{" "}
              <br />
            </Link>
          ))}
        </Carousel>
      </Box>
      <Box className="magazineMoblie">
        <Box className="magazine">
          {events.map((item, index) => (
            <Link
              to={`/concerts-and-events-${item.id}`}
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
                  <p>{item.orienter}</p>
                  <h3>{item.title}</h3>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

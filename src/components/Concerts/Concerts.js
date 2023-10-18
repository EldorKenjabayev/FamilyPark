  import { Box } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import "./concerts.css";
  import { useTranslation } from "react-i18next";
  import { useLocation } from "react-router-dom";
  import { useSpring, animated } from "react-spring";
  export default function Concerts() {
    const Location = useLocation()
    let idLocation = Location.pathname.replace(/\D/g, '')
    const [openevents, setOpenEvents] = useState([
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
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
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
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
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
    useEffect(() => {
      const filteredShop = openevents.filter((item) => item.id == idLocation );
      setOpenEvents(filteredShop);

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
    const { t } = useTranslation();
    return (
      <Box pt={"120px"} pl={"3%"} pr={"3%"}>
        <Box className="concertsHeader">
          <h1>{t("Catalog.catalogText1")}</h1>
        </Box>
        {openevents.map((item, index) => (
          <animated.div key={item.id} className="animated-shop" style={fadeIn}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                pt: "2vh",
              }}
              className="concertsPlayer"
            >
              <iframe
                width="98%"
                height="228px"
                className="eventsVideos"
                src={item.linkPlayer}
                title="GAFUR, RAUF &amp; FAIK |Концерт в Самарканде🤩"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
            <Box className="concertsCenter" sx={{
              display:'flex',
              justifyContent:"space-between",
              flexDirection:'column',
              alignItems:'start'
            }}>
              <p className="date">{item.date}</p>
              <Box>
              <p className="title-center"> {item.title}</p>
              <p className="orienter">{item.orienter}</p>
              </Box>
            </Box>
            <Box className="concertsFooter">
              <h3>{item.subtitle}</h3>
              <p>
              {item.description}
              </p>{" "}
              <br />
              <Box sx={{
                display:'flex',
                justifyContent:'center'
              }}>
              <button className="concertsBtn" >
                <span>КУПИТЬ БИЛЕТ</span>
              </button>
              </Box>
            </Box>
          </animated.div>
        ))}
      </Box>
    );
  }

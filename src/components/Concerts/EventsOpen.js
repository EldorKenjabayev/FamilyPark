import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../Catalog/catalogmagzine.css'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function EventsOpen({setIdInfo}) {
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

  const [events, serEvents] = useState([
    {
      id: 1,
      img: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO01zPFb-default.jpg",
      linkPlayer: "https://youtu.be/qod03PVTLqk",
      title: "Консерт Rauf & Faik",
      subtitle: "ПРОЖИВИ ЭТО С НАМИ!",
      orienter: "Family ice arena, 1 этаж",
      description:
        "Грандиозный концерт знаменитых артистов в нашем замечательном ТРЦ Family Park. Испытай кучу незабываемых эмоций! 24 Февраля придут гости из популярных стран. Чтобы исполнить свой очередной хит.Успей купить билеты прямо сейчас! ",
      date: "24.02.2023",
      slug:'event-view-konsert_rauf-faik'
    },
  
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/36e1dae2-c4df-488c-affd-4f5aa48690b2/300x450",
      linkPlayer: "https://www.youtube.com/embed/P1uAB_IQr98",
      title: "Черная пятница",
      subtitle: "УСПЕЙТЕ КУПИТЬ ПО СКИДКЕ",
      orienter: "Магазин Goodzone",
      description:
        "Эту заветную дату ждут с таким же нетерпением, как и Нового Года. К этому дню специально откладывают деньги и составляют список покупок. ",
      date: "04.02.2023",
      slug:'event-view-black-fridayr'
    }
  ]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEntertainment = events.slice(
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
        <h3 id="Catalogtitle2">{t("EventsPage.EventsPageTitle")}</h3>
      </Box>
      <Box className="magazine" sx={{
        transition:"liner"
      }}>
        {currentEntertainment.map((item, index) => (
          <Link
            to={`/concerts-and-events-${item.id}`}
            style={{ color: "#25254C" }}
            key={index}
            className="CatalogLinks"
          >
            <Box className="CardMagazine">
              <Box className='concertImgBlock' sx={{ display: "flex", justifyContent: "center" , height:'300px'}}>
                <img
                  src={item.img}
                  alt="png"
                  style={{
                    width: "95%",
                    height:"100%",
                    objectFit:'cover',
                    borderRadius: "25px",
                  }}
                />
              </Box>
              <Box sx={{ width: "95%", margin: "auto" }}>
                <p>{item.title}</p>
                <h3>{item.subtitle}</h3>
              </Box>
            </Box>
          </Link>
        ))}
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
        <h3> {`${currentPage} - ${Math.ceil(events.length / itemsPerPage)}`}</h3>
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
                    Math.ceil(events.length / itemsPerPage)) *
                  100
                }%)`,
                width: `${
                  100 / Math.ceil(events.length / itemsPerPage)
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
                  Math.ceil(events.length / itemsPerPage)
                )
              )
            }
          />
        </Box>
      </Box>
    </Box>
  );
}


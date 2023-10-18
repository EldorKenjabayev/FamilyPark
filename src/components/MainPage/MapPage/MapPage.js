import { Box } from "@mui/material";
import React from "react";
import './mappage.css'
import { useTranslation } from "react-i18next";
export default function MapPage() {
  const {t} = useTranslation()
  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Box
        className="TitleMagzinne titlemap"
        sx={{
          paddingTop: "110px",
          paddingBottom: "50px",
          
        }}
      >
        <h1 >{t('MapPage.mapTitle')} </h1>
      </Box>
      <Box
        sx={{
          padding: "4%",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <Box className='mapPage-Flex'>
            <h3>Google Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6142.935751890043!2d66.90535420210675!3d39.66168867684482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d190de18fc085%3A0xd85ce9a14443d55f!2sFAMILY%20PARK!5e0!3m2!1suz!2s!4v1696511838139!5m2!1suz!2s"
            width="100%"
            height="220px"
            style={{
              border: "0",
              margin: "0 auto",
              borderRadius: "22px",
            }}
            className="mapPage-Map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box className='mapPage-Flex'>
            <h3>Yandex Map</h3>
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3Ae4b8ebf80ed1810bbc056107e3f63377a44e2874ef5317c63bcb949853080c2f&amp;source=constructor"
            width="100%"
            height="220px"
            className="mapPage-Map"
            style={{
              borderRadius: "22px",
            }}
            frameborder="0"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}

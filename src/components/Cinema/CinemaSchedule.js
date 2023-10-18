import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./cinema.css";
import { useTranslation } from "react-i18next";
export default function CinemaScheduale() {
  const {t} = useTranslation();
  console.log(t("CinemaSchedualePage.CinemaSchedualeBigTitle"));
  const [cinemascheduale, setCinemaScheduale] = useState([
    {
      cinematime: "10:20",
      moviename: "Аватар: Путь воды",
      price: "32 000",
      agelimit: "12+",
    },
    {
      cinematime: "10:20",
      moviename: "Аватар: Путь воды",
      price: "32 000",
      agelimit: "12+",
    },
    {
      cinematime: "10:20",
      moviename: "Аватар: Путь воды",
      price: "32 000",
      agelimit: "12+",
    },
  ]);
  const [expandedPanel1, setExpandedPanel1] = useState('panel1');
  const [expandedPanel2, setExpandedPanel2] = useState(false);

  const handleChangePanel1 = (panel) => (event, isExpanded) => {
    setExpandedPanel1(isExpanded ? panel : false);
  };

  const handleChangePanel2 = (panel) => (event, isExpanded) => {
    setExpandedPanel2(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Box
        className="TitleMagzinne cinematitle"
        sx={{
          pt: "130px",
          pb: "20px",
          display:'block'
        }}
      >
        <h1
          id="titleCatalog"
          style={{
            fontSize: "38px",
          }}
        >
          {t("CinemaSchedualePage.CinemaTitle")}
        </h1>
        <h4
          id="Catalogtitle2"
          style={{
            fontSize: "25px",
            textTransform: "capitalize",
          }}
        >
         {t("CinemaSchedualePage.CinemaSmallTitle")}
        </h4>
        <h2
          id="datacinema"
          style={{
            fontSize: "30px",
            paddingTop: "10%",
            paddingBottom: "2vh",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          c 5 по 12 января
        </h2>
      </Box>{" "}
      <br />
      <Box>
        <Box className="accardionbackground">
          <Accordion
            expanded={expandedPanel1}
            onChange={handleChangePanel1("panel1")}
            className="accardionbackground1 accardionPosition"
            style={{
              borderRadius: "25px",
              backgroundColor: "rgba(241, 241, 241, 0.7)",
              backdropFilter: "blur(10px)",
              padding: "1%",
              boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                className="iconCinemaAccardion"
                  sx={{
                    padding: "0px",
                    backgroundClip: "text",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(310.2deg, #25254C 5.48%, #6A6DBD 102.12%)",
                    color: "#fff",
                    fontSize: "40px",
                  }}
                />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <h2 sx={{ width: "33%", flexShrink: 0 }} className="room">
              {t("CinemaSchedualePage.CinemaHall1")}
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              {cinemascheduale.map((item, index) => (
                <Box key={index}
                  sx={{
                    borderBottom: "2px solid #888888",
                  }}
                  className="accardionDetails"
                >
                  <Box sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    gap:"3vw"
                  }}>
                    <h3>{item.cinematime}</h3>
                    <p>{item.moviename}</p>
                  </Box>
                  <Box sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    gap:"4vw"
                  }}>
                    <h3>{item.price}</h3>
                    <p>{item.agelimit}</p>
                  </Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>{" "}
        <br /> <br />
        <Box className="accardionbackground">
          <Accordion
            className="accardionbackground2 accardionPosition"
            expanded={expandedPanel2}
            onChange={handleChangePanel2("panel2")}
            style={{
              borderRadius: "25px",
              backgroundColor: "rgba(241, 241, 241, 0.7)",
              backdropFilter: "blur(25px)",
              padding: "1%",
              boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                className="iconCinemaAccardion"
                  sx={{
                    padding: "0px",
                    backgroundClip: "text",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(310.2deg, #25254C 5.48%, #6A6DBD 102.12%)",
                    color: "#fff",
                    fontSize: "40px",
                  }}
                />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <h2 sx={{ width: "33%", flexShrink: 0 }} className="room">
              {t("CinemaSchedualePage.CinemaHall2")}
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              {cinemascheduale.map((item, index) => (
                <Box key={index}
                  sx={{
                    borderBottom: "2px solid #888888",
                  }}
                  className="accardionDetails"
                >
                  <Box sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    gap:"3vw"
                  }}>
                    <h3>{item.cinematime}</h3>
                    <p>{item.moviename}</p>
                  </Box>
                  <Box sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    gap:"4vw"
                  }}>
                    <h3>{item.price}</h3>
                    <p>{item.agelimit}</p>
                  </Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}

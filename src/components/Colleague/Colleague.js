import { Box } from "@mui/material";
import React from "react";
import "./Colleague.css";
import line from "../Img/Line 1 (1).svg";
import Number1 from "../Img/ColleagueImg/1.svg";
import Number2 from "../Img/ColleagueImg/2.svg";
import Number3 from "../Img/ColleagueImg/3.svg";
import Number4 from "../Img/ColleagueImg/4.svg";
import Number5 from "../Img/ColleagueImg/5.svg";
import Number6 from "../Img/ColleagueImg/6.svg";
import Vacancie from "../Img/ColleagueImg/vacany.svg";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalForm from "./CollegaueModal/CollegaueModal";

import { useTranslation } from "react-i18next";
export default function Colleague() {
  const {t} = useTranslation();
  const [vacanciesFamilyPark, setVacanciesFamilyPark] = useState([
    {
      typeofWork: "Ассистент графического дизайнера",
    },
    {
      typeofWork: "Ассистент графического дизайнера",
    },
    {
      typeofWork: "Ассистент графического дизайнера",
    },
    {
      typeofWork: "Ассистент графического дизайнера",
    },
  ]);
  const [vacanciestenant, setVacanciesTenant] = useState([
    {
      typeofWork: "Требуется продавец консультант",
    },
    {
      typeofWork: "Требуется оператор кол-центра",
    },
    {
      typeofWork: "Требуется продавец консультант",
    },
    {
      typeofWork: "Требуется оператор кол-центра",
    },
  ]);
  const [expandedPanel1, setExpandedPanel1] = useState(true);
  const [expandedPanel2, setExpandedPanel2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChangePanel1 = (panel) => (event, isExpanded) => {
    setExpandedPanel1(isExpanded ? panel : false);
  };

  const handleChangePanel2 = (panel) => (event, isExpanded) => {
    setExpandedPanel2(isExpanded ? panel : false);
  };
  return (
    <Box className='vacancyPage' sx={{
        background:"#ffff"
    }}>
      <Box
        className="TitleMagzinne TitleCatalog "
        sx={{
          pt: "110px",
          pb: "20px",
        }}
      >
        <h1
          id="titleCatalog"
          style={{
            fontSize: "35px",
          }}
        >
          {t("vacancy.vacancyTitle")}
        </h1>
        <h4
          id="Catalogtitle1"
          style={{
            fontSize: "20px",
            textTransform: "capitalize",
          }}
        >
         {t("vacancy.vacancySmallTitle")}
        </h4>
        <br /><br />
      </Box>
      <Box>
        <Box className='block-questions'
        >
          <h4 className="">{t("vacancy.ourcompanyTitle")}</h4> <br />
          <Box className='vacancy' sx={{
            display:"grid",
            flexDirection:"column",
            gap:"5",
            justifyContent:"center"
          }}>
            <Box className="questions">
              <img src={Number1} alt="svg" />
              <p>{t("vacancy.ourcompanyText1")}</p>
            </Box>
            <Box className="questions">
              <img src={Number2} alt="svg" />
              <p>{t("vacancy.ourcompanyText2")}</p>
            </Box>
            <Box className="questions">
              <img src={Number3} alt="svg" />
              <p>{t("vacancy.ourcompanyText3")}</p>
            </Box>
            <Box className="questions">
              <img src={Number4} alt="svg" />
              <p>{t("vacancy.ourcompanyText4")}</p>
            </Box>
            <Box className="questions">
              <img src={Number5} alt="svg" />
              <p>{t("vacancy.ourcompanyText5")}</p>
            </Box>
            <Box className="questions">
              <img src={Number6} alt="svg" />
              <p>{t("vacancy.ourcompanyText6")}</p>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            top:'-25px'
          }}
        >
          <img
            src={line}
            alt="svg"
            style={{
              width: "100%",
              position: "absolute",
              top: "50%",
              zIndex: "0",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
            className="btnPost"
              style={{
                width: "70%",
                margin: "auto",
                borderRadius: "50px",
                padding: "20px 0",
                color: "#fff",
                position: "relative",
                border: "none",
                margin: "0 auto",
                marginTop: "3vh",
                marginBottom: "3vh",
                cursor: "pointer",
                zIndex: "60",
              }}
              onClick={handleModalOpen}
            >
              {t("vacancy.vacancyBTN")}
            </button>
          </Box>
        </Box>
        <Box>
          <Box className='accardionVacancy'>
            <Box className="accardionbackground">
              <Accordion
                expanded={expandedPanel1}
                onChange={handleChangePanel1(true)}
                className="accardionbackground1"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(241, 241, 241, 0.7)",
                  padding: "1%",
                }}
              >
                <AccordionSummary
                  alignItems="center"
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        padding: "0px",
                        backgroundClip: "text",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(310.2deg, #25254C 5.48%, #6A6DBD 102.12%)",
                        color: "#fff",
                        fontSize: "35px",
                        alignItems: "center",
                      }}
                    />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <h2
                    className="room"
                    style={{
                      width: "80%",
                      textTransform:'uppercase'
                    }}
                  >
                    {t("vacancy.vacancyFamily")}
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
                  {vacanciesFamilyPark.map((item, index) => (
                    <Box
                      sx={{
                        borderBottom: "2px solid #888888",
                      }}
                      className="accardionDetails"
                      key={index}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "10px 7px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src={Vacancie} alt="svg" />
                        <p
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          {item.typeofWork}
                        </p>
                      </Box>
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            </Box>{" "}
            <br /> <br />
            <Box className="accardionbackground">
              <Accordion
                className="accardionbackground2"
                expanded={expandedPanel2}
                onChange={handleChangePanel2(true)}
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(241, 241, 241, 0.7)",
                  padding: "1%",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        padding: "0px",
                        backgroundClip: "text",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(310.2deg, #25254C 5.48%, #6A6DBD 102.12%)",
                        color: "#fff",
                        fontSize: "35px",
                      }}
                    />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <h2
                    style={{
                      width: "95%",
                      textTransform:'uppercase'
                    }}
                    className="room"
                  >
                    {t("vacancy.vacancyTenants")}
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
                  {vacanciestenant.map((item, index) => (
                    <Box key={index}
                      sx={{
                        borderBottom: "2px solid #888888",
                      }}
                      className="accardionDetails"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "10px 7px",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src={Vacancie} alt="svg" />
                        <p
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          {item.typeofWork}
                        </p>
                      </Box>
                    </Box>
                  ))}
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Box>
      <br /><br />
      <ModalForm isOpen={isModalOpen} onClose={handleModalClose}/>
    </Box>
  );
}

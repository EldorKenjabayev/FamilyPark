import ReactFullpage from "@fullpage/react-fullpage";
import FirstPage from "./Firstpage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import MagazinePage from "./MagazinePage/MagazinePage";
import LastPage from "./LastPage/LastPage";
import Footer from "./Footer/Footer";
import "./mainblock.css";
import { Box } from "@mui/material";
import MapPage from "./MapPage/MapPage";
import FoodPage from "./FoodPage/FoodPage";
import Entertainment from "./EntertainmentPage/Entertainment";
import Events from "./Events/Events";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PromotionPage from "./PromotionPage/PromotionPage";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const MainBlock = ({ setIdInfo }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [fullpageApi, setFullpageApi] = useState(null);
  const { t } = useTranslation();
  const handleSetActiveSection = (sectionIndex) => {
    setActiveSection(sectionIndex);
  };
  const handleMoveSectionUp = () => {
    if (fullpageApi) {
      fullpageApi.moveSectionUp();
    }
  };
  const handleMoveToFirstSection = () => {
    if (fullpageApi) {
      fullpageApi.moveTo("firstPage");
    }
  };

  const handleMoveSectionDown = () => {
    if (fullpageApi) {
      fullpageApi.moveSectionDown();
    }
  };
  return (
    <Box>
      <ReactFullpage
        controlArrows={false}
        navigation
        ref={fullpageApi}
        anchors={[
          "firstPage",
          "secondPage",
          "mapPage",
          "magazinePage",
          "foodPage",
          "entertainmentPage",
          "eventsPage",
          "promotionPage",
          "lastPage"
        ]}
        sectionsColor={[
          "#f1f1f1",
          "#cccccc",
          "#ffff",
          "#fffff",
          "#ffff",
          "#ffff",
          "#fffff",
          "#fffff",
          "#fffff",
          "#00000",
        ]}
        onLeave={(origin, destination, direction) => {
          handleSetActiveSection(destination.index);
        }}
        render={({ fullpageApi }) => {
          setFullpageApi(fullpageApi);
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <FirstPage />
              </div>
              <div
                className="section"
                style={{
                  height: "100vh",
                }}
              >
                <SecondPage />
              </div>
              <div className="section" style={{
                height:'100vh'
              }}>
                <MapPage />
              </div>
              <div className="section">
                <MagazinePage setIdInfo={setIdInfo} />
              </div>
              <div className="section" style={{
                height:'100vh'
              }}>
                <FoodPage />
              </div>
              <div className="section">
                <Entertainment />
              </div>
              <div className="section" >
                <Events setIdInfo={setIdInfo} />
              </div>
              <div className="section">
                <PromotionPage setIdInfo={setIdInfo} />
              </div>
              <div className="section">
                <LastPage />
                <Footer />
              </div>

            </div>
          );
        }}
      />
      <Box
        className="mainPageScroll"
        sx={{
          position: "absolute",
          top: "20%",
          right: "2%",
          zIndex: "999",
        }}
      >
        <ArrowUpwardIcon
          onClick={handleMoveSectionUp}
          sx={{
            fontSize: "34px",
            ml: "-6px",
            color: "#BB2649",
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            width: "22px",
            pt: "5px",
            height: "55vh",
            borderRadius: "15px",
            backgroundColor: "rgb(217, 217, 217)",
          }}
        >
          <Box
            sx={{
              width: "15px",
              height: "11%",
              position: "relative",
              left: "3.5px",
              top: `${11 * activeSection}%`,
              transition: "top 0.5s ease-in-out",
              borderRadius: "15px",
              backgroundColor: "#25254C",
            }}
          ></Box>
        </Box>
        <ArrowDownwardIcon
          onClick={handleMoveSectionDown}
          sx={{
            fontSize: "34px",
            ml: "-6px",
            color: "#BB2649",
            cursor: "pointer",
          }}
        />
      </Box>
      <Box className="btnGroupFixed">
        <Link to={"/last"}>
          <button className="BtnFixed1">
            <span>{t("Catalog.catalogText10")}</span>
          </button>
        </Link>
        <Link to={"/vacancy"}>
          <button className="BtnFixed2">
            <span>{t("Catalog.catalogText9")}</span>
          </button>
        </Link>

        <Box
        onClick={handleMoveToFirstSection}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "63px",
            height: "63px",
            borderRadius: "100%",
            cursor: "pointer",
            background: "#25254C",
          }}
        >
          <ArrowBackIosIcon className="ArrowIconTop" />
        </Box>
      </Box>
    </Box>
  );
};

export default MainBlock;

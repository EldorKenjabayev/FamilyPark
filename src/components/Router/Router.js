import { Box } from "@mui/material";
import React from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import MainBlock from "../MainPage/MainBlock";
import Concerts from "../Concerts/Concerts";
import CatalogMagazine from "../Catalog/MagzineCatalog";
import OpenShop from "../OpenShop/Renter";
import LostForm from "../LastPage/LostForm";
import { useEffect } from "react";
import CinemaScheduale from "../Cinema/CinemaSchedule";
import Colleague from "../Colleague/Colleague";
import Events from "../Concerts/EventsOpen";
import RulesVisitor from "../Rules/RulesVisitor";
import RulesParking from "../Rules/RulesParking";
import RulesAdvertings from "../Rules/RulesAdvertings";
import FoodCatalog from "../Catalog/FoodCatalog";
import EntertainmentCatalog from "../Catalog/EntertainmentCatalog";
import EventsOpen from "../Concerts/EventsOpen";
import PoromitionCatalog from "../Catalog/PoromitionCatalog";

export default function Router({ idinfo, setIdInfo }) {
  const Location = useLocation();
  let idLocation = Location.pathname.replace(/\D/g, "");

  useEffect(() => {
    if (idinfo && idinfo !== localStorage.getItem("ShopInfo")) {
      setIdInfo(idLocation);
    }
    setIdInfo(idLocation);
  }, [idinfo, idLocation]);
  useEffect(() => {}, [idinfo]);
  // useEffect(() => {
  //   let Info = localStorage.getItem("ShopInfo");
  //   setShopInfoId(JSON.parse(Info));
  // }, []);
  console.log(idinfo);
  console.log(idLocation);

  return (
    <Box>
      <Routes>
        <Route path="/" element={<MainBlock setIdInfo={setIdInfo} />} />
        <Route
          path={`/concerts-and-events`}
          element={<EventsOpen setIdInfo={setIdInfo} />}
        />
        <Route
          path={`/concerts-and-events-${idinfo}`}
          element={<Concerts setIdInfo={setIdInfo} idinfo={idinfo} />}
        />
        <Route
          path="/catalog-shop"
          element={<CatalogMagazine setIdInfo={setIdInfo} />}
        />
        <Route
          path="/catalog-food"
          element={<FoodCatalog setIdInfo={setIdInfo} />}
        />
        <Route
          path="/catalog-entertainment"
          element={<EntertainmentCatalog setIdInfo={setIdInfo} />}
        />
        <Route
          path="/catalog-promotion"
          element={<PoromitionCatalog setIdInfo={setIdInfo} />}
        />
        <Route
          path={`renter-${idinfo}`}
          element={<OpenShop idinfo={idinfo} setIdInfo={setIdInfo} />}
        />
        <Route
          path="/cinema-secheduale"
          element={<CinemaScheduale setIdInfo={setIdInfo} />}
        />
        <Route path="/vacancy" element={<Colleague />} />
        <Route path="/last" element={<LostForm />} />
        <Route path="/rules-visitors" element={<RulesVisitor />} />
        <Route path="/rules-parking" element={<RulesParking />} />
        <Route path="/rules-advertings" element={<RulesAdvertings />} />
      </Routes>
    </Box>
  );
}
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Router from "./components/Router/Router";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTranslation } from "react-i18next";
import "./App.css";
export default function App() {
  const [idinfo, setIdInfo] = useState("");
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState(1);
  const { t } = useTranslation();
  const [result, setResult] = useState([]);



  return (
    <Box>
      <Navigation setIdInfo={setIdInfo} result={result}
setResult={setResult}/>
   

      {/* <Box
        sx={{
          position: "absolute",
          top: "18%",
          right: "2%",
          zIndex: "1000000",
        }}
      >
        <ArrowUpwardIcon
          onClick={() => setCurrentSection(currentSection - 1)}
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
            height: "68vh",
            borderRadius: "15px",
            backgroundColor: "rgb(217, 217, 217)",
          }}
        >
          <Box
            sx={{
              width: "15px",
              height: "11%",
              background: "#000",
              margin: "auto",
              borderRadius: "15px",
              backgroundColor: "#25254C",
            }}
          ></Box>
        </Box>
        <ArrowDownwardIcon
          onClick={() => setCurrentSection(currentSection + 1)}
          sx={{
            fontSize: "34px",
            ml: "-6px",
            color: "#BB2649",
            cursor: "pointer",
          }}
        />
      </Box> */}
      <Router idinfo={idinfo} setIdInfo={setIdInfo} result={result}
setResult={setResult} />
      <br />
    </Box>
  );
}

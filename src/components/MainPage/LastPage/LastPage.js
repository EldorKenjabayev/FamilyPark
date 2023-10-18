import React from "react";
import "./lastpage.css";
import { Box} from "@mui/material";
import RequestForm from "./FormLatPage";
import { useTranslation } from "react-i18next";
export default function LastPage() {
  const [type, setType] = React.useState("");
  const {t} = useTranslation()
  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box className='LastPage'
      sx={{
        position: "relative",
      }}
    >
      <Box className="LastTitle" sx={{
         background: "linear-gradient(310.2deg, #FA557B 5.48%, #BB2649 102.12%);",
      }}>
        <h1>{t('LastPage.LastPageTitle')}</h1>
        <p>{t('LastPage.LastPageTitleP')}</p>
      </Box>
      <Box className='LastRequestForm' sx={{
        background:"#ffff"
      }}>
      <Box sx={{
        pt:'5vh',
        width:'93%',
        margin:'auto',
        borderRadius:"25px",
        position:'relative',
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        top:'-18vh',
        background:'#F6F6F6',
        zIndex:'500 '
      }}>
        <RequestForm/>
      </Box>
      </Box>
      
    </Box>
  );
}

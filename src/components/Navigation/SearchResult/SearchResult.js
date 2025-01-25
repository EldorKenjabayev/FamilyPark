import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import '../navigation.css'
export default function SearchResult({ result, inputActive, searchActive }) {
  const serachResult = Location.pathname;
  return (
    <Box className='searchResult'
      sx={{
        width: `${searchActive && serachResult === '/results-search'  ? "0px" : "120px"}`,
        position: 'absolute',
        maxWidth:"250px",
        left: "-120px",
        top: "25px",
        overflow:'hidden' , 
        background: "#fff",
        borderRadius: "15px",
        zIndex:'10000',

      }}
    >
      {inputActive &&
        searchActive &&
        result.map((item, index) => (
          
          <Box
            key={index}
            sx={{
              "&:hover": {
                backgroundColor: "#ccc",
                cursor: "pointer"
              },
            }}
          >
            <Link to={`/renter-${item.id}`} style={{
              textDecoration:'none',
              padding:'0',
              color:"#000"
            }}>           
            <p
             className='searchResultText'
              style={{
                fontSize:"16px",
                padding:"5px 8px",
                textTransform:'revert-layer'
              }}
            >
              {item.magazineName}
            </p>
            </Link>
           
          </Box>
        ))}
    </Box>
  );
}

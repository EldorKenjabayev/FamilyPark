import React from "react";
import { Box } from "@mui/material";
import "./corusel.css";

export default function Corusell({ img }) {
  return (
    <Box className="corusell">
      <Box
        className="corusellbig"
        sx={{
          maxWidth: "100%",
          height: "auto",
        }}
      >
        <img
          src={img[0]}
          alt="svg"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "15px",
            border: "0.2px solid #cccc",
          }}
        />
      </Box>
      <Box className="corusellmini">
        {img.slice(1).map((image, index) => (
          <Box
            key={index}
            className="corusellminiBox"
            sx={{
              maxWidth: "100% !important", 
              height: "auto", 
            }}
          >
            <img
              src={image}
              alt={`svg-${index}`}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
                border: "0.2px solid #cccc",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

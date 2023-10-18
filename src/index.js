import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Box sx={{
    maxWidth:'1900px',
    margin:'auto',
    position:"relative"
  }}>
    <App />
  </Box>
  </BrowserRouter>
);


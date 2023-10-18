import { Box, Modal } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LastPageModal({
  modalsuccessfully,
  successfullyClose,
}) {
  const { t } = useTranslation();
  return (
    <Box>
      <Modal
        className="ModalCollegau"
        open={modalsuccessfully}
        onClose={successfullyClose}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: "20vh",
            width: "90%",
            height: "50vh",
            borderRadius: "15px",
            ml: "5%",
            background: "#ffff",
          }}
        >
          <br />
          <br />
          <h1
            style={{
              textAlign: "center",
              width: "80%",
              lineHeight: "100%",
              color: "#363768",
            }}
          >
            {t("vacancy.vacansyModal.vacansyModal2Title")}
          </h1>{" "}
          <br />
          <br />
          <button
            className="btnPost"
            onClick={() => successfullyClose()}
            style={{
              width: "70%",
              margin: "auto",
              borderRadius: "50px",
              padding: "20px 0",
              border: "none",
              margin: "0 auto",
              marginTop: "3vh",
              marginBottom: "3vh",
              cursor: "pointer",
            }}
          >
            <a href="#firstPage" style={{
              color:'#ffff'
            }}>
              {t("vacancy.vacansyModal.vacansyModal2BTN")}
            </a>
          </button>
        </Box>
      </Modal>
    </Box>
  );
}

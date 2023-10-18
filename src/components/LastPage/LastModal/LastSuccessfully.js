import { Box, Modal } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function LastSuccessfully({ ActiveModal, CloseModal }) {
  const { t } = useTranslation();
  return (
    <Modal className="ModalCollegau" open={ActiveModal} onClose={CloseModal}>
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
        <Link
          to={"/#fistPage"}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="btnPost"
            onClick={() => CloseModal()}
            style={{
              width: "70%",
              margin: "auto",
              borderRadius: "50px",
              padding: "20px 0",
              color: "#fff",
              border: "none",
              margin: "2vh 0",
              cursor: "pointer",
            }}
          >
            {t("vacancy.vacansyModal.vacansyModal2BTN")}
          </button>
        </Link>
      </Box>
    </Modal>
  );
}

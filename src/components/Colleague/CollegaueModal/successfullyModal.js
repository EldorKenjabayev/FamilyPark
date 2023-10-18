import { Box, Modal } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SuccessfullyModal({
  successfullyClose,
  modalsuccessfully,
  onClose,
}) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position:'absolute',
        width: "100%",
        height: "60%",
      }}
    >
      <Modal
        className="ModalCollegau "
        sx={{
          width: "75%",
          height: "70%",
        }}
        open={modalsuccessfully}
        onClose={successfullyClose}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#ffff",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              lineHeight: "100%",
              color: "#363768",
              padding:'0 5%'
            }}
          >
            {t("vacancy.vacansyModal.vacansyModal2Title")}
          </h3>{" "}
          <br />
          <br />
          <Link
            to={"/#firstPage"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems:'center',
            }}
          >
            {" "}
            <button
              onClick={() => {
                successfullyClose();
                onClose();
              }}
              className="btnPost"
              style={{
                fontSize:'7px',
                borderRadius: "50px",
                padding: "10px 50px ",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                }}
              >
                {t("vacancy.vacansyModal.vacansyModal2BTN")}
              </span>
            </button>
          </Link>
        </Box>
      </Modal>
    </Box>
  );
}

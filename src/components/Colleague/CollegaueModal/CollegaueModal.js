import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import "./CollegaueModal.css";
import SuccessfullyModal from "./successfullyModal";
import { useTranslation } from "react-i18next";
const ModalForm = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const initialFormState = {
    fullName: "",
    phone: "",
    email: "",
    resumeLink: "",
  };
  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);
  const [modalsuccessfully, setModalSuccessfully] = useState(false);
  const handleModalSuccessfullyOpen = () => {
    setModalSuccessfully(true);
  };

  const handleModalSuccessfullyClose = () => {
    setModalSuccessfully(false);
  };
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  console.log(FormData);
  const [formErrors, setFormErrors] = useState({});
  const resetForm = () => {
    setFormData(initialFormState);
    setFile(null);
    setFormErrors({});
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "resumeLink") {
      const linkError = isValidUrl(value) ? "" : "Недопустимая ссылка";
      setFormErrors({ ...formErrors, [name]: linkError });
    } else {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };
  function isValidUrl(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = t("vacancy.vacansyModal.vacansyModalTeaxtErro1");
    }
    if (!formData.phone.trim()) {
      errors.phone = t("vacancy.vacansyModal.vacansyModalTeaxtErro2");
    }
    if (!formData.email.trim()) {
      errors.email = t("vacancy.vacansyModal.vacansyModalTeaxtErro3");
    }
    if (!file && !formData.resumeLink.trim()) {
      const linkError = isValidUrl(formData.resumeLink);
      if (!formData.resumeLink.trim()) {
        errors.resumeLink = t("vacancy.vacansyModal.vacansyModalTeaxtErro4");
      }
      errors.file = t("vacancy.vacansyModal.vacansyModalTeaxtErro5");
    }
    if (Object.keys(errors).length === 0) {
      handleModalSuccessfullyOpen();
      const formDataToSend = new FormData();
      formDataToSend.append("file", file);
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("resumeLink", formData.resumeLink);
      axios
        .post("/api/submit", formDataToSend)
        .then((response) => {
          console.log("Данные успешно отправлены на сервер:", response.data);
          resetForm();
        })
        .catch((error) => {
          console.error("Ошибка отправки данных на сервер:", error);
        });
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} className="ModalCollegau">
      <Box className="modal-container">
        <h1
          style={{
            textAlign: "center",
            fontSize:"22px"
          }}
        >
          {t("vacancy.vacansyModal.vacansyModalTitle")}
        </h1>
        <form onSubmit={handleSubmit}>
          <Box className='modal-vacancy' sx={{
            width:'100%',
            display:'grid',
            justifyContent:'space-between',
            gridTemplateColumns:"100%",
            gap:'2%',
            alignItems:"center"
          }}>
          <label htmlFor="user-name">
            <span>{t("vacancy.vacansyModal.vacansyModalTeaxt1")}</span>
            <input
              type="text"
              id="user-name"
              placeholder="Цыркач Виталий Владиленович"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {formErrors.fullName && (
              <p className="style-error">{formErrors.fullName}</p>
            )}
          </label>
          <label htmlFor="phone">
            <span id="vacancyPhone">{t("vacancy.vacansyModal.vacansyModalTeaxt2")}</span>
            <PhoneInput
              international
              defaultCountry="UZ"
              placeholder="+998 -- --- -- --"
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone: phone })}
              inputStyle={{
                width: "100%",
                padding: "5px",
                fontSize: "14px",
                outline: "none",
                marginBottom: "18px",
                background: "#DBD8D8",
                borderTop: "0px solid transparent",
                borderLeft: "0px solid transparent",
                borderRight: "0px solid transparent",
                borderRadius: "0px",
                borderBottom: "1px solid #888888",
              }}
            />
            {formErrors.phone && (
              <p className="style-error phone-error">{formErrors.phone}</p>
            )}
          </label>
          <label htmlFor="email">
            <span>{t("vacancy.vacansyModal.vacansyModalTeaxt3")}</span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className="style-error">{formErrors.email}</p>
            )}
          </label>
          </Box>
          <Box className="input-file-box">
            <p>
              <label htmlFor="fileupload">
                {t("vacancy.vacansyModal.vacansyModalTeaxt4Label")}
              </label>
              <span> {t("vacancy.vacansyModal.vacansyModalTeaxt5")}</span>
              <input
                className="inputFile"
                id="fileupload"
                type="file"
                file-upload-button="hshxshdhsh"
                onChange={handleFileChange}
                value={formData.file}
                accept=".doc, .docx, .pdf, .rtf"
                style={{
                  border: "none",
                }}
              />{" "}
            </p>
          </Box>
          <p className="input-file-text" style={{
            textAlign:'center'
          }}>Обратите внимание! Прикрепляемый файл должен быть не более 10мб</p>
          <p className="style-error input-file-text">{formErrors.file}</p>
          <label htmlFor="link" className="resumeLink" >
            <span>{t("vacancy.vacansyModal.vacansyModalTeaxt6")}</span>
            <input
              type="text"
              id="link"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleInputChange}
            />
            {formErrors.resumeLink && (
              <p className="style-error">{formErrors.resumeLink}</p>
            )}
          </label>

          <button
            type="sumbit"
            className="btnPost  modalvacansyBtn"
            style={{
              width: "70%",
              margin: "auto",
              borderRadius: "50px",
              padding: "10px 0",
              color: "#fff",
              marginBottom: "2vh",
              position: "relative",
              border: "none",
              margin: "0 auto",

              cursor: "pointer",
              zIndex: "60",
            }}
          >
            {t("vacancy.vacansyModal.vacansyModalBTN")}
          </button>
        </form>
        <Box sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}>
        <SuccessfullyModal
          successfullyClose={handleModalSuccessfullyClose}
          modalsuccessfully={modalsuccessfully}
          onClose={onClose}
        />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalForm;

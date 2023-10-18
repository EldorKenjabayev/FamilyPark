import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import './lostform.css'
import LastSuccessfully from "./LastModal/LastSuccessfully";
const LostForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    contactName: "",
    phone:"",
    nameTing: "",
    location: "",
    time: "",
    comment: "",
  });
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const ActiveModal = () =>{
  setOpen(true)
}
const CloseModal = () =>{
  setOpen(false)
}

  const validateForm = () => {
    const errors = {};
    let hasError = false;

    if (formData.contactName.trim() === "") {
      errors.contactName = t("LastPage.LastPageFormText6Error");
      hasError = true;
    }

    if (phone.trim() === "") {
      errors.phone = t("LastPage.LastPageFormText8Error");
      hasError = true;
    }
    if (formData.nameTing.trim() === "") {
      errors.nameTing = t("Last.LastFormtext3Error");
      hasError = true;
    }
    if (formData.location.trim() === "") {
      errors.location = t("Last.LastFormtext4Error");
      hasError = true;
    }
  
    if (formData.time.trim() === "") {
      errors.time = t("Last.LastFormtext5Error");
      hasError = true;
    }
  
    if (formData.comment.trim() === "") {
      errors.comment = t("Last.LastFormtext6Error");
      hasError = true;
    }
    setFormErrors(errors);
    return hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = validateForm();
    if (hasError) {
      return;
    }

    const formDataObject = {
      contactName: formData.contactName,
      nameTing: formData.nameTing,
      phone: phone,
      location: formData.location,
      time: formData.time,
      comment: formData.comment,
    };
    ActiveModal()
    setFormData({
      contactName: "",
      phone:"",
      nameTing: "",
      location: "",
      time: "",
      comment: "",
    })
    setPhone('')
    console.log(formDataObject);
    //  здесь код для обработки отправки формы, например, отправка данных на сервер
  };

  return (
    <Box>
      <Box className="LastTitle">
        <h1>{t("Last.LastTitle")}</h1>
        <p>{t("Last.LastSmallTitle")}</p>
      </Box>
      <Box
      className='LastFormBox'
        sx={{
          pt: "5vh",
          margin: "auto",
          borderRadius: "25px",
          position: "relative",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          top: "-18vh",
          background: "#F6F6F6",
          zIndex: "500 ",
        }}
      >
        <form
        className="LastForm"
          onSubmit={handleSubmit}
          style={{
            width: "85%",
            margin: "auto",
            display: "flex",
            flexDirection: 'row',
            gap:'5%'
          }}
        >
          <h3 style={{
            position:'absolute',
            top:'20px'
          }}>{t("LastPage.LastPageFormText5")}</h3>
          <Box className='lostPageflex'>

          <label htmlFor="user-name">
            <span>{t("LastPage.LastPageFormText6")}</span>
            <input
              type="text"
              id="user-name"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
            />
            {formErrors.contactName && (
              <p className="style-error">{formErrors.contactName}</p>
            )}
          </label>
          <label htmlFor="phone">
            <span>{t("LastPage.LastPageFormText8")}</span>
            <PhoneInput
              international
              defaultCountry="UZ"
              placeholder="+998 -- --- -- --"
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "100%",
                padding: "10px",
                fontSize: "14px",
                outline: "none",
                background: "#F6F6F6",
                borderTop: "0px solid transparent",
                borderLeft: "0px solid transparent",
                borderRight: "0px solid transparent",
                borderRadius: "0px",
                borderBottom: "1px solid #888888",
              }}
            />
            {formErrors.phone && <p className="style-error" style={{
              position:'relative',
              top:'5px'
            }}>{formErrors.phone}</p>}
          </label> <br />
          <label htmlFor="nameTing">
            <span>{t("Last.LastFormtext3")}</span>
            <input
              type="text"
              id="nameTing"
              name="nameTing"
              value={formData.nameTing}
              onChange={handleChange}
            />
            {formErrors.nameTing && (
              <p className="style-error">{formErrors.nameTing}</p>
            )}
          </label>
          </Box>
          <Box className='lostPageflex'>
          <label htmlFor="location" className="lastLocation">
            <span>{t("Last.LastFormtext4")}</span>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            {formErrors.location && (
              <p className="style-error">{formErrors.location}</p>
            )}
          </label>
          <label htmlFor="time" className="lastTime">
            <span>{t("Last.LastFormtext5")}</span>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            {formErrors.time && <p className="style-error">{formErrors.time}</p>}
          </label>
          <label htmlFor="comment">
            <span>{t("Last.LastFormtext6")}</span>
            <input
              type="text"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
            {formErrors.comment && (
              <p className="style-error">{formErrors.comment}</p>
            )}
          </label>
          <button
            className="btnPost LastBtn"
            style={{
              width: "30% !important",
              margin: "auto",
              borderRadius: "50px",
              padding: "20px 0",
              color: "#fff",
              border: "none",
              margin: "3vh auto",
              cursor: "pointer",
            }}
          >
            {t("vacancy.vacansyModal.vacansyModalBTN")}
          </button>
          </Box>
        </form>
      <LastSuccessfully ActiveModal={open} CloseModal={CloseModal}  />
      </Box>
    </Box>
  );
};

export default LostForm;

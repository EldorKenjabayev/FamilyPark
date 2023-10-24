import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./lastpage.css";
import LastPageModal from "./Modal/LastPageModal";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import '../../../i18next'
const RequestForm = () => {
  const {t}= useTranslation()
  const [formData, setFormData] = useState({
    Tradingprofile: "",
    Desiredarea: "",
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
  });
  const [modallastpage, setModalLastpage] = useState(false);

 const handleOpenModal = () => {
    setModalLastpage(true)
  };
 const handleClouseModal = () => {
    setModalLastpage(false)
  };

  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    let hasError = false;
    if (formData.Tradingprofile.trim() === "") {
      errors.Tradingprofile = t("LastPage.LastPageFormText2Error");
      hasError = true;
    }

    if (formData.Desiredarea.trim() === "") {
      errors.Desiredarea = t("LastPage.LastPageFormText3Error");
      hasError = true;
    }

    if (formData.companyName.trim() === "") {
      errors.companyName = t("LastPage.LastPageFormText4Error");
      hasError = true;
    }

    if (formData.contactName.trim() === "") {
      errors.contactName = t("LastPage.LastPageFormText6Error");
      hasError = true;
    }

    if (formData.email.trim() === "") {
      errors.email = t("LastPage.LastPageFormText7Error");
      hasError = true;
    }

    if (phone.trim() === "") {
      errors.phone = t("LastPage.LastPageFormText8Error");
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
      Tradingprofile: formData.Tradingprofile,
      Desiredarea: formData.Desiredarea,
      companyName: formData.companyName,
      contactName: formData.contactName,
      email: formData.email,
      phone: phone,
    };
    handleOpenModal()
    console.log(formDataObject);
    setFormData({
      Tradingprofile: "",
      Desiredarea: "",
      companyName: "",
      contactName: "",
      email: "",
    });
    setPhone("");
  };

  return (
    <form
    className="FormLsatpage"
      onSubmit={handleSubmit}
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box className='formlastpageBox formLastpageBox1' >
      <h3>{t("LastPage.LastPageFormText1")}</h3>
      <label htmlFor="profile" >
        <span>{t("LastPage.LastPageFormText2")}</span>
        <select
          id="profile"
          name="Tradingprofile"
          value={formData.Tradingprofile}
          onChange={handleChange}
          style={{
            marginBottom: "15px",
            color:'#474747'
          }}
        >
          <option value="null"></option>
          <option value="Магазин">{t("LastPage.LastPageFormText2Option1")}</option>
          <option value="Еда">{t("LastPage.LastPageFormText2Option2")}</option>
          <option value="Развлекательный центр">{t("LastPage.LastPageFormText2Option3")}</option>
          <option value="Услуги">{t("LastPage.LastPageFormText2Option4")}</option>
        </select>
        {formErrors.Tradingprofile && (
          <p className="style-error">{formErrors.Tradingprofile}</p>
        )}
      </label>
      <label htmlFor="area">
        <span>{t("LastPage.LastPageFormText3")}</span>
        <input
          type="number"
          id="area"
          name="Desiredarea"
          value={formData.Desiredarea}
          onChange={handleChange}
        />
        {formErrors.Desiredarea && (
          <p className="style-error">{formErrors.Desiredarea}</p>
        )}
      </label>
      <label htmlFor="brand-name">
        <span>{t("LastPage.LastPageFormText4")}</span>
        <input
          type="text"
          id="brand-name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        {formErrors.companyName && (
          <p className="style-error">{formErrors.companyName}</p>
        )}
      </label> 
      </Box> <br />
      <Box className='formlastpageBox'>
      <h3 style={{
        paddingTop:'10px'
      }}>{t("LastPage.LastPageFormText5")}</h3>
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
      <label
        htmlFor="email"
      >
        <span>{t("LastPage.LastPageFormText7")}</span>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="style-error">{formErrors.email}</p>}
      </label>
      <label className="LabelPhone" htmlFor="phone">
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
            paddingBottom:'5px',
            fontWeight:'400',
            fontSize: "15px",
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
          paddingTop:'20px'
        }}>{formErrors.phone}</p>}
      </label>
      <button
        className="btnPost btnLastForm"
        style={{
          width: "70%",
          borderRadius: "50px",
          padding: "20px 0",
          color: "#fff",
          border: "none",
          margin: "3vh auto",
          cursor: "pointer",
        }}
      >
        {t("LastPage.LastPageFormBtnText")}
      </button>
      </Box>
      <Box>
      <LastPageModal modalsuccessfully={modallastpage} successfullyClose={handleClouseModal} />
      </Box>
    </form>
  );
};

export default RequestForm;

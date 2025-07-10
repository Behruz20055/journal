import React, { useState, useEffect } from "react";
import styles from "./Journal.module.css";
import { useDropzone } from "react-dropzone";
import {
  FaBook,
  FaFileDownload,
  FaPlusCircle,
  FaUser,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { testUrl } from "../../shared/routes/configs/testUrl";

const Journal = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [journals, setJournals] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    category: "",
    file: null,
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  useEffect(() => {
    fetch(testUrl + "/api/journals/")
      .then((res) => res.json())
      .then((data) => setJournals(data))
      .catch((err) => console.error("Error fetching journals:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert(t("pleaseVerifyCaptcha"));
      return;
    }

    const botToken = "7443223152:AAHhNAB534F-i5sGUyKpR1AwBztad1tyduU";
    const chatId = "-1002384689140";
    const { fullName, phone, email, category, file } = formData;

    if (!chatId) {
      alert(t("chatIdMissing"));
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("chat_id", chatId);
    formDataObj.append(
      "caption",
      `${t("newArticleSent")}\n\n${t("name")}: ${fullName}\n${t(
        "phone"
      )}: ${phone}\n${t("email")}: ${email}\n${t("category")}: ${category}`
    );
    formDataObj.append("document", file);

    fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
      method: "POST",
      body: formDataObj,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          alert(t("articleSentSuccess"));
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            category: "",
            file: null,
          });
          setCaptchaVerified(false);
        } else {
          alert(t("articleSendError"));
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  const onDrop = (acceptedFiles) => {
    setFormData({ ...formData, file: acceptedFiles[0] });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".pdf, .doc, .docx",
    maxFiles: 1,
  });

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <div className={styles.submitPage}>
          <h1 className={styles.title}>{t("submitArticle")}</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <FaUser className={styles.inputIcon} />
              <input
                type="text"
                placeholder={`${t("fullName")} *`}
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div className={styles.inputWrapper}>
              <FaPhone className={styles.inputIcon} />
              <input
                type="tel"
                placeholder={`${t("phone")} *`}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>

            <div className={styles.inputWrapper}>
              <FaEnvelope className={styles.inputIcon} />
              <input
                type="email"
                placeholder={`${t("email")} *`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className={styles.selectWrapper}>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              >
                <option value="">{t("selectCategory")} *</option>
                <option value="Ijtimoiy-gumanitar">
                  {t("ijtimoiyGumanitar")}
                </option>
                <option value="Tabiiy fanlar">{t("tabiiyFanlar")}</option>
                <option value="Aniq fanlar">{t("aniqFanlar")}</option>
                <option value="Texnika fanlari">{t("texnikaFanlari")}</option>
              </select>
            </div>

            <div
              {...getRootProps()}
              className={`${styles.fileDropzone} ${
                isDragActive ? styles.active : ""
              }`}
            >
              <input {...getInputProps()} required />
              {formData.file ? (
                <p className={styles.fileName}>
                  {t("selectedFile")}: {formData.file.name}
                </p>
              ) : (
                <p>
                  {isDragActive
                    ? t("dropFileHere")
                    : `${t("clickToUploadFile")} *`}
                </p>
              )}
            </div>

            {/* <ReCAPTCHA
              sitekey="6LeCq-UqAAAAAIYdl2QISCRg8Ql73lUkstF0KZ6r"
              onChange={() => setCaptchaVerified(true)}
            /> */}

            <button type="submit" className={styles.submitButton}>
              {t("submitArticle")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Journal;

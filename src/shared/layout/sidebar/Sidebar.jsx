import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { testUrl } from "../../routes/configs/testUrl";

const Sidebar = () => {
  const { t } = useTranslation();
  const [latestJournal, setLatestJournal] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    file: null,
  });
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch(testUrl + "api/journals/magazines")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setLatestJournal(data[0]); // Fetch latest journal
        }
      })
      .catch((err) => console.error("Error fetching latest journal:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("articleSent")); // Replace with API call
  };

  // Drag & Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files.length > 0) {
      setFormData({ ...formData, file: e.dataTransfer.files[0] });
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <aside className={classes.sidebar}>
      <h3>{t("forAuthors")}</h3>

      {/* Submission Form */}
      <form className={classes.journalForm} onSubmit={handleSubmit}>
        <p className={classes.descriptionJorunal}>{t("SizMaqola")}</p>
        <Link to="journal-send">
          <button type="submit" className={classes.submitBtn}>
            {t("submit")}
          </button>
        </Link>
      </form>

      {/* Latest Journal Issue */}
      {latestJournal && (
        <div className={classes.latestIssue}>
          <h4>{t("latestIssue")}</h4>
          <img src={latestJournal.image} alt="Журнал" />
          <Link to={`/magazine/${latestJournal.id}`}><p>{latestJournal.title_uz}</p></Link>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

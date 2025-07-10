import React, { useState, useEffect } from "react";
import styles from "./Journal.module.css";
import { useTranslation } from "react-i18next";
import { testUrl } from "../../shared/routes/configs/testUrl";

const Journal = () => {
  const { t, i18n } = useTranslation();
  const [journals, setJournals] = useState([]);
  const [currentJournal, setCurrentJournal] = useState(null);

  useEffect(() => {
    fetch(testUrl + "api/journals/")
      .then((res) => res.json())
      .then((data) => {
        setJournals(data[0]);
        setCurrentJournal(data.length > 0 ? data[0] : null); // Set the first journal as default
      })
      .catch((err) => console.error("Error fetching journals:", err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        {currentJournal && (
          <div className={styles.infoPage}>
            <div className={styles.cardsimiz}>
              <div
                className={styles.aboutContent}
                dangerouslySetInnerHTML={{
                  __html: currentJournal[`about_${i18n.language}`],
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;

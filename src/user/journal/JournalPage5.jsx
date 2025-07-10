import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Journal.module.css";
import { testUrl } from "../../shared/routes/configs/testUrl";

const Journalpage4 = () => {
  const { t, i18n } = useTranslation();
  const [journals, setJournals] = useState([]);
  const [currentJournal, setCurrentJournal] = useState(null);

  useEffect(() => {
    fetch(testUrl + "api/journals/")
      .then((res) => res.json())
      .then((data) => {
        setJournals(data);
        setCurrentJournal(data.length > 0 ? data[0] : null);
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
                className={styles.editorialContent}
                dangerouslySetInnerHTML={{
                  __html: currentJournal[`ethics_${i18n.language}`],
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journalpage4;

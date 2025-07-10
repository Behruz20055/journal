import React, { useState, useEffect } from "react";
import styles from "./Journal.module.css";
import { SearchBar } from "./component/searchBar/SearchBar";
import { FaFileDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { testUrl } from "../../shared/routes/configs/testUrl";

const Journal = () => {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [journals, setJournals] = useState([]);
  const [filteredJournals, setFilteredJournals] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    fetch(`${testUrl}api/journals/magazines/`)
      .then((res) => {
        if (!res.ok) {
          console.error('Network response was not ok', res);
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setJournals(data);
        setFilteredJournals(data);
        const years = [...new Set(data.map((journal) => journal.year))];
        setAvailableYears(years.sort((a, b) => b - a)); // Sort years in descending order
      })
      .catch((err) => {
        console.error("Error fetching journals:", err);
        setJournals([]);
        setFilteredJournals([]);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchText, selectedYear]); // Trigger search when searchText or selectedYear changes

  const handleSearch = () => {
    let filtered = journals.filter((journal) => {
      const titleKey = `title_${i18n.language}`;
      return journal[titleKey].toLowerCase().includes(searchText.toLowerCase());
    });

    if (selectedYear !== "All") {
      filtered = filtered.filter(
        (journal) => journal.year === parseInt(selectedYear, 10)
      );
    }
    console.log(journals);
    setFilteredJournals(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <SearchBar
          setSearchText={setSearchText}
          handleSearch={handleSearch}
          availableYears={availableYears}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />

        {currentPage === 1 && (
          <div className={styles.journalIssues}>
            <h1 className={styles.title}>{t("allJournals")}</h1>
            <div className={styles.journalGrid}>
              {filteredJournals.length > 0 ? (
                filteredJournals.map((journal) => {
                  const titleKey = `title_${i18n.language}`;
                  const descriptionKey = `description_${i18n.language}`;

                  return (
                    <Link
                      to={`/magazine/${journal.id}`}
                      key={journal.id}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div className={styles.journalCard}>
                        <div className={styles.cardContent}>
                          <img
                            src={journal.image}
                            alt={journal[titleKey]}
                            className={styles.cardImage}
                          />
                          <h3>{journal[titleKey]}</h3>
                          <p>{journal[descriptionKey]}</p>
                          <p>
                            {t("articleCount")}: {journal.article_count}
                          </p>
                          <p>
                            {t("articleYear")}: {journal.year}
                          </p>
                          <a
                            href={journal.file_upload}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadButton}
                            download={true}
                          >
                            <FaFileDownload /> {t("download")}
                          </a>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <p className={styles.noResults}>{t("noResultsFound")}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;

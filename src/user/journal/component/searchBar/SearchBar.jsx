import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./SearchBar.module.css";

export const SearchBar = ({
  setSearchText,
  handleSearch,
  availableYears,
  selectedYear,
  setSelectedYear,
}) => {
  const { t } = useTranslation();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div data-aos="fade-down" className={classes["search-box"]}>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleEnter}
        className={classes["search-input"]}
        type="text"
        placeholder={t("searchJournal")}
      />

      <select
        className={classes["search-select"]}
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="All">{t("allYears")}</option>
        {availableYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <button onClick={handleSearch} className={classes["search-btn"]}>
        <p>{t("searchOfBar")}</p>
      </button>
    </div>
  );
};

export default SearchBar;

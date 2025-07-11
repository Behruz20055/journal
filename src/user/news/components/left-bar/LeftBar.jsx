import React, { useEffect, useState } from "react";
import axios from "axios";
import SocialMedias from "../../../../shared/components/socialMedias/SocialMedias";
import search from "../../assets/icons/search.svg";
import classes from "./LeftBar.module.css";
import { useTranslation } from "react-i18next";

export const LeftBar = ({
  setSelectedCategory,
  setSearchTerm,
  categoriesWithCounts,
}) => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sayt.renessans-edu.uz/api/news/categories/")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["section"]}>
        <h3 className={classes["title"]}>{t("searchLeftBar")}</h3>
        <div className={classes["box"]}>
          <input
            placeholder={t("whatSearch")}
            className={classes["input"]}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img className={classes["img"]} src={search} alt="search" />
        </div>
      </div>
      <div className={classes["section"]}>
        <h3 className={classes["title"]}>{t("partsLeftBar")}</h3>
        {loading ? (
          <p>{t("loading")}</p>
        ) : (
          categories.map((category) => (
            <div
              key={category.id}
              className={classes["category_box"]}
              onClick={() => setSelectedCategory(category.name_uz)}
            >
              <p className={classes["category_name"]}>
                {category[`name_${i18n.language}`]}
              </p>
              <p className={classes["category_count"]}>
                {categoriesWithCounts[category[`name_${i18n.language}`]] || 0}
              </p>
            </div>
          ))
        )}
      </div>
      <div className={classes["section"]}>
        <h3 className={classes["title"]}>{t("socialMedias")}</h3>
        <SocialMedias />
      </div>
    </div>
  );
};

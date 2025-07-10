import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Head from "../../shared/layout/head/Head";
import { RightBar } from "./components/right-bar/Right-bar";
import { LeftBar } from "./components/left-bar/LeftBar";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { testUrl } from "../../shared/routes/configs/testUrl";
import { useEffect } from "react";
import moment from "moment";
import Pagination from "@mui/material/Pagination";

import classes from "./index.module.css";
import newsClasses from "./newsClasses.module.css";
  

export const NewsPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [news_data, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageApi, setPageApi] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = pageApi * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = (news_data || []).slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchNewsData = axios.get(
      testUrl + "api/categories/8/"
    );
    
    Promise.all([fetchNewsData])
        .then(([newsResponse]) => {
            const news = newsResponse.data;
            
            if (news) {
                setNews(news?.news);
            } else {
                setError("Ma'lumotlar topilmadi");
            }
            
        })
        .catch(() => setError("Ma'lumotlarni yuklashda xatolik"))
        .finally(() => setLoading(false));
    console.log(news_data);
}, [i18n.language]);

  return (
    <div className={classes.mainContainer}>
            <div data-aos="fade-up" className={classes["newsSection"]}>
                
                <h1 className={classes["page-title"]}>
                    {"Yangiliklar"}
                </h1>
                    <div className={newsClasses.facultyList}>
                        {currentNews.length > 0 ? (
                            currentNews.map((new_data) => (
                                <Link
                                    key={new_data.id}
                                    to={`/news/${new_data.id}`}
                                    className={newsClasses.facultyCard}
                                >
                                    <img
                                        src={new_data?.image || "/default-image.jpg"}
                                        alt=" "
                                        className={newsClasses.facultyImage}
                                    />
                                    <div className={newsClasses.facultyInfo}>
                                        <h3>
                                            {new_data?.title_uz}
                                            </h3>
                                    </div>
                                    <div className={newsClasses.newsMetadata}>
                                        <span>
                                        {moment(new_data.posted_time)
                                            .locale(i18n.language)
                                            .format("DD-MMMM, HH:mm")}
                                        </span>
                                        <span>{new_data.view_count} views</span>
                                    </div>
                                    <div className={newsClasses.viewMore}>
                                        <span>
                                            {"Batafsil"}
                                        </span>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className={newsClasses["center_div"]}>
                        <Pagination
                            onChange={(e, value) => setPageApi(value)}
                            count={Math.ceil((news_data?.length || 0) / itemsPerPage)}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
                </div>
        </div>
  );
};

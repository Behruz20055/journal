import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import styles from "./Articles.module.css";
import { testUrl } from "../../shared/routes/configs/testUrl";

const Articles = () => {
  const { t, i18n } = useTranslation();
  const [magazine, setMagazine] = useState(null);
  const [articles, setArticles] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`${testUrl}api/journals/magazines/${id}`)
      .then(res => res.json())
      .then(data => setMagazine(data))
      .catch(err => console.error("Error fetching magazine:", err));
    fetch(`${testUrl}api/journals/articles/${id}`)
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error("Error fetching articles:", err));
  }, [id]);

  if (!magazine) {
    return <div>Loading...</div>;
  }

  const titleKey = `title_${i18n.language}`;

  return (
    <div className={styles.articlesPage}>
      <div>
        <div className={styles.header}>
          <h1>{magazine[titleKey]}</h1>
        </div>

        <div className={styles.journalInfo}>
          <div className={styles.journalCover}>
            <img src={magazine.image} alt="Journal Cover" />
          </div>
          <div className={styles.journalDetails}>
            <div className={styles.downloadSection}>
              <p>
                <strong>Hozirgi soni (pdf):</strong>
                <br />
                <a href={magazine.file_upload} target="_blank" rel="noopener noreferrer">
                  Yuklab olish
                </a>
              </p>
              <p>
                <strong>Mundarija (pdf):</strong>
                <br />
                <a href={magazine.mundarija} target="_blank" rel="noopener noreferrer">
                  Yuklab olish
                </a>
              </p>
              <p>
                <strong>Nashr qilingan sana:</strong>
                <br />
                {magazine.date}
              </p>
            </div>
            <div className={styles.aboutSection}>
              <p>
                <strong>Jurnal haqida:</strong>
              </p>
              <ul>
                <li>
                  <a href="/">
                    <i className="fas fa-book-open"></i> Batafsil
                  </a>
                </li>
                <li>
                  <a href="/ethics">
                    <i className="fas fa-list-alt"></i> Maqola yuborish talablari
                  </a>
                </li>
                <li>
                  <a href="/editorial">
                    <i className="fas fa-users"></i> Tahririyat kengashi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.articlesSectionHeader}>
          <i className="fas fa-list-ul"></i> Ushbu son maqolalari
        </div>

        <div className={styles.articleList}>
          {articles.map(article => (
            <Link to={`/articles/${article.id}`} key={article.id} className={styles.articleLink}>
              <div className={styles.articleItem}>
                <div className={styles.articleMain}>
                  <div className={styles.articleTitle}>{article[`title_${i18n.language}`]}</div>
                  <div className={styles.articleAuthors}>{article.author}</div>
                </div>
                <div className={styles.articleMeta}>
                  <div className={styles.articlePages}>{article.pages}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
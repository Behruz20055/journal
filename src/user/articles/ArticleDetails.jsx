import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { testUrl } from '../../shared/routes/configs/testUrl';
import styles from './ArticleDetails.module.css';
import { FaDownload } from 'react-icons/fa';

const ArticleDetails = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [article, setArticle] = useState(null);
  const [magazine, setMagazine] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`${testUrl}api/journals/article/${id}`)
        .then(res => res.json())
        .then(data => {
          setArticle(data);
          if (data.magazine) {
            fetch(`${testUrl}api/journals/magazines/${data.magazine}`)
              .then(res => res.json())
              .then(magData => setMagazine(magData))
              .catch(err => console.error('Error fetching magazine:', err));
          }
        })
        .catch(err => console.error(`Error fetching article ${id}:`, err));
    }
  }, [id, i18n.language]);

  const processHtml = (htmlString) => {
    if (!htmlString) return '';
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    const paragraphs = Array.from(doc.querySelectorAll('p'));
    const combinedText = paragraphs.map(p => p.textContent.trim()).join(' ');
    return `<p>${combinedText}</p>`;
  };

  if (!article || !magazine) {
    return <div>Loading...</div>;
  }

  const abstractKey = `abstract_${i18n.language}`;
  const abstract = article[abstractKey] || article.abstract_uz;

  const magazineTitleKey = `title_${i18n.language}`;
  const magazineTitle = magazine[magazineTitleKey] || magazine.title_uz;

  const literatureKey = `literature_${i18n.language}`;
  const literature = article[literatureKey] || article.literature;

  const keywordKey = `key_word_${i18n.language}`;
  const keywords = article[keywordKey] || article.key_word;


  return (
    <div className={styles.container}>
      <h2 className={styles.magazineTitle}>{`${magazineTitle}, ${magazine.year}`}</h2>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{t('article_topic')}</h3>
        <div className={styles.articleHeader}>
            <p className={styles.mainTitle}>{article[`title_${i18n.language}`]} ({article.pages})</p>
            <a href={article.file} target="_blank" rel="noopener noreferrer" className={styles.downloadIcon}>
                <FaDownload />
            </a>
        </div>
      </div>

      {article.doi_link ? <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{t('doi_link')}</h3>
        <p><a href={article.doi_link}>{article.doi_link}</a></p>
      </div> : null}

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{t('authors')}</h3>
        <p>{article.author}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{t('institution')}</h3>
        <p>{article.company}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{t('abstract')}</h3>
        <div className={styles.contentBlock} dangerouslySetInnerHTML={{ __html: processHtml(abstract) }} />
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{t('keywords')}</h3>
        <div className={styles.contentBlock} dangerouslySetInnerHTML={{ __html: processHtml(keywords) }} />
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{t('references')}</h3>
        <div className={styles.contentBlock} dangerouslySetInnerHTML={{ __html: processHtml(literature) }} />
      </div>
    </div>
  );
};

export default ArticleDetails;
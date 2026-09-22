import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageHero.module.css';

export default function PageHero({ tag, title, desc, breadcrumb, children }) {
  return (
    <>
      {breadcrumb && (
        <div className={styles.bc}>
          <Link to="/">Accueil</Link>
          <span>›</span>
          <span>{breadcrumb}</span>
        </div>
      )}
      <div className={styles.hero}>
        <div className={styles.inner}>
          {tag && <div className={styles.tag}>{tag}</div>}
          <h1 className={styles.h1} dangerouslySetInnerHTML={{ __html: title }} />
          {desc && <p className={styles.desc}>{desc}</p>}
          {children}
        </div>
      </div>
    </>
  );
}

import React from 'react';
import styles from './PageHero.module.css';

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.grid} aria-hidden="true" />
    </section>
  );
}

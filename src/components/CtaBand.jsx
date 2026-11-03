import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CtaBand.module.css';

export default function CtaBand({ title, subtitle }) {
  const navigate = useNavigate();
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.sub}>{subtitle}</p>}
        </div>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>
            Demander un devis
          </button>
          <a href="tel:+221777886318" className={styles.btnPhone}>
            +221 77 788 63 18
          </a>
        </div>
      </div>
    </section>
  );
}

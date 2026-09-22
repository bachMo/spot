import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CtaBand.module.css';

export default function CtaBand({ title, subtitle, showPhone = true }) {
  const navigate = useNavigate();
  return (
    <div className={styles.band}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className={styles.btns}>
          <button className={styles.btnJaune} onClick={() => navigate('/contact')}>
            Demander un devis
          </button>
          {showPhone && (
            <a href="tel:+221777886318" className={styles.btnOutline}>
              📞 77 788 63 18
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

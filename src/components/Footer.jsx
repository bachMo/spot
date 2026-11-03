import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
];

const SERVICES = [
  'Énergie & Électricité',
  'Climatisation & Maintenance',
  'Plomberie & Étanchéité',
  'BTP & Services Techniques',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoS}>S</span>POT
            </div>
            <p className={styles.tagline}>Solutions Polyvalentes<br />en Optimisation Technique</p>
            <address className={styles.address}>
              Dakar, Sénégal
            </address>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Navigation</div>
            <ul className={styles.colList}>
              {LINKS.map(({ label, to }) => (
                <li key={to}><Link to={to} className={styles.colLink}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Expertises</div>
            <ul className={styles.colList}>
              {SERVICES.map((s) => (
                <li key={s} className={styles.colText}>{s}</li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Contact</div>
            <ul className={styles.colList}>
              <li>
                <a href="tel:+221777886318" className={styles.colLink}>+221 77 788 63 18</a>
              </li>
              <li>
                <a href="mailto:hamidousy96@gmail.com" className={styles.colLink}>hamidousy96@gmail.com</a>
              </li>
            </ul>
            <Link to="/contact" className={styles.footerCta}>Demander un devis</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© {new Date().getFullYear()} SPOT Sénégal. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}

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
      <div className={styles.top}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoMark}>S</div>
              <div>
                <span className={styles.logoText}>SPOT</span>
                <span className={styles.logoSub}>Solutions Polyvalentes en Optimisation Technique</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Expertise technique au service de vos projets — énergie, électricité, climatisation, plomberie et bâtiment à Dakar et au Sénégal.
            </p>
            <div className={styles.contact}>
              <a href="tel:+221777886318" className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.13 1 .37 1.97.72 2.9a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0122 16.92z"/>
                </svg>
                +221 77 788 63 18
              </a>
              <a href="mailto:contact@spot-senegal.com" className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                contact@spot-senegal.com
              </a>
              <span className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Dakar, Sénégal
              </span>
            </div>
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
            <div className={styles.colTitle}>Nos domaines</div>
            <ul className={styles.colList}>
              {SERVICES.map((s) => (
                <li key={s} className={styles.colText}>{s}</li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Intervention</div>
            <p className={styles.colText}>Intervention rapide partout au Sénégal.</p>
            <p className={styles.colText} style={{ marginTop: '8px' }}>WhatsApp Business disponible.</p>
            <a href="tel:+221777886318" className={styles.footerCta}>
              Nous appeler
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {new Date().getFullYear()} SPOT — Solutions Polyvalentes en Optimisation Technique. Tous droits réservés.</span>
          <span>Dakar, Sénégal</span>
        </div>
      </div>
    </footer>
  );
}

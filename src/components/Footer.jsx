import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';

const navLinks = [
  { to: '/',             label: 'Accueil' },
  { to: '/services',     label: 'Énergie solaire' },
  { to: '/services',     label: 'Électricité bâtiment' },
  { to: '/services',     label: 'Électricité industrielle' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/about',        label: 'À propos' },
  { to: '/contact',      label: 'Contact & Devis' },
];

const socials = [
  { label: 'f',  title: 'Facebook' },
  { label: 'IG', title: 'Instagram' },
  { label: 'in', title: 'LinkedIn' },
  { label: 'WA', title: 'WhatsApp' },
  { label: 'YT', title: 'YouTube' },
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* Bloc marque */}
        <div className={styles.brand}>
          <div className={styles.logo}>SP<span>O</span>T</div>
          <p className={styles.desc}>
            Votre expert en énergie solaire et électricité au Sénégal.
            Installation, maintenance et optimisation depuis 2016.
          </p>
          <div className={styles.contacts}>
            {[
              { icon: '📞', text: '+221 77 788 63 18' },
              { icon: '💬', text: 'WhatsApp disponible' },
              { icon: '✉️', text: 'contact@spot-energie.sn' },
              { icon: '📍', text: 'Dakar, Sénégal' },
              { icon: '🕐', text: 'Lun–Sam · 8h00–18h00' },
            ].map(({ icon, text }) => (
              <div key={text} className={styles.crow}>
                <span className={styles.cicon}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className={styles.socials}>
            {socials.map(({ label, title }) => (
              <a key={title} href="#top" className={styles.social} title={title}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className={styles.colTitle}>Navigation</div>
          <div className={styles.links}>
            {navLinks.map(({ to, label }) => (
              <Link key={label} to={to} className={styles.flink}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Horaires */}
        <div>
          <div className={styles.colTitle}>Horaires & Urgences</div>
          <div className={styles.horaires}>
            <p>
              <strong>Lundi – Vendredi</strong><br />
              8h00 – 18h00<br /><br />
              <strong>Samedi</strong><br />
              9h00 – 14h00<br /><br />
              <strong>SAV urgences</strong><br />
              7j/7 · 24h/24
            </p>
          </div>
          <button className={styles.devisBtn} onClick={() => navigate('/contact')}>
            Devis gratuit →
          </button>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2026 SPOT Énergie · Solaire Performance Optimisation et Teneur · Dakar, Sénégal
        </p>
        <div className={styles.legal}>
          <a href="#top">Mentions légales</a>
          <a href="#top">Confidentialité</a>
          <a href="#top">CGV</a>
        </div>
      </div>
    </footer>
  );
}

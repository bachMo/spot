import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Nav.module.css';

const links = [
  { to: '/',              label: 'Accueil' },
  { to: '/services',      label: 'Services' },
  { to: '/realisations',  label: 'Réalisations' },
  { to: '/about',         label: 'À propos' },
  { to: '/contact',       label: 'Contact' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Fermer menu mobile au resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Fermer menu à chaque changement de route
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          SP<span>O</span>T<sup>Énergie</sup>
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`${styles.link} ${pathname === to ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
          <button className={styles.devis} onClick={() => navigate('/contact')}>
            Devis gratuit →
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        {links.map(({ to, label }) => (
          <Link key={to} to={to} className={styles.mobileLink}>
            {label}
          </Link>
        ))}
        <button className={styles.devis} onClick={() => navigate('/contact')}>
          Devis gratuit →
        </button>
      </div>
    </>
  );
}

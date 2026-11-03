import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleDevis = () => {
    setOpen(false);
    navigate('/contact');
  };

  return (
    <>
      <nav className={`${styles.nav}${scrolled ? ' ' + styles.navScrolled : ''}`}>
        <div className={styles.navInner}>
          <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
            <div className={styles.logoMark}>S</div>
            <div>
              <span className={styles.logoText}>SPOT</span>
              <span className={styles.logoSub}>Solutions Polyvalentes</span>
            </div>
          </NavLink>

          <div className={styles.links}>
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link}${isActive ? ' ' + styles.linkActive : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button className={styles.navCta} onClick={handleDevis}>
            Devis gratuit
          </button>

          <div
            className={`${styles.burger}${open ? ' ' + styles.burgerOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu}${open ? ' ' + styles.mobileMenuOpen : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <button className={styles.mobileCta} onClick={handleDevis}>
          Demander un devis gratuit
        </button>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import projects from '../data/projects';
import styles from './Realisations.module.css';

const filters = [
  { key: 'all',        label: 'Tous les projets' },
  { key: 'solaire',    label: 'Énergie solaire' },
  { key: 'batiment',   label: 'Bâtiment' },
  { key: 'industriel', label: 'Industriel' },
];

const stats = [
  { n: '250+', l: 'Projets réalisés' },
  { n: '15 MW', l: 'Capacité installée' },
  { n: '40+', l: 'Entreprises clientes' },
  { n: '8', l: 'Régions couvertes' },
];

export default function Realisations() {
  const [active, setActive] = useState('all');
  const navigate = useNavigate();

  const visible = projects.filter(p => active === 'all' || p.cat === active);

  return (
    <main>
      <PageHero
        breadcrumb="Réalisations"
        tag="Portfolio"
        title="Nos réalisations<br/>parlent pour nous."
        desc="Plus de 250 projets depuis 2016 — du système solaire résidentiel à l'installation industrielle complète."
      >
        <div className={styles.heroStats}>
          {stats.map(({ n, l }) => (
            <div key={l} className={styles.hstat}>
              <div className={styles.hstatN}>{n}</div>
              <div className={styles.hstatL}>{l}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.filterBar}>
            {filters.map(({ key, label }) => (
              <button
                key={key}
                className={`${styles.fbtn} ${active === key ? styles.fbtnActive : ''}`}
                onClick={() => setActive(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {visible.map((p) => (
              <div
                key={p.id}
                className={styles.card}
                onClick={() => navigate(`/realisations/${p.id}`)}
              >
                <div className={styles.cardImg}>
                  <div className={styles.cardEmoji}>{p.emoji}</div>
                  <div className={styles.cardBadge}>{p.catLabel}</div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardCat}>{p.catLabel}</div>
                  <div className={styles.cardTitle}>{p.title}</div>
                  <div className={styles.cardMeta}>
                    <span>📍 {p.lieu}</span>
                    <span>📅 {p.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Votre projet sera notre prochaine réalisation."
        subtitle="Contactez-nous pour une étude gratuite."
        showPhone={false}
      />
    </main>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { PROJECTS, DOMAINES } from '../data/projects';
import styles from './Realisations.module.css';

const FILTERS = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'energie', label: 'Énergie & Électricité' },
  { id: 'clim', label: 'Climatisation' },
  { id: 'plomb', label: 'Plomberie & Étanchéité' },
  { id: 'btp', label: 'BTP' },
];

export default function Realisations() {
  const [active, setActive] = useState('all');
  const navigate = useNavigate();

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.domaine === active);

  return (
    <main>
      <PageHero
        eyebrow="Réalisations"
        title="250+ projets livrés."
        subtitle="De Dakar à Diamniadio — chantiers réels, équipes terrain, délais tenus."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.filterBar}>
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={`${styles.filterBtn} ${active === f.id ? styles.filterActive : ''}`}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((p) => (
              <button
                key={p.id}
                className={styles.card}
                onClick={() => navigate(`/realisations/${p.id}`)}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardDomain}>{DOMAINES[p.domaine]?.label}</span>
                  <span className={styles.cardYear}>{p.annee}</span>
                </div>
                <div className={styles.cardImg} aria-hidden="true">
                  <div className={styles.cardImgInner} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>{p.titre}</div>
                  <div className={styles.cardLieu}>{p.lieu}</div>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <div className={styles.cardTags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.cardTag}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.cardArrow}>Voir le projet →</div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.empty}>Aucun projet dans cette catégorie.</div>
          )}
        </div>
      </section>
    </main>
  );
}

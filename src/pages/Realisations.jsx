import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { PROJECTS, DOMAINES } from '../data/projects';
import styles from './Realisations.module.css';

const FILTERS = [
  { key: 'all', label: 'Tous les projets' },
  { key: 'energie', label: 'Énergie & Électricité' },
  { key: 'clim', label: 'Climatisation' },
  { key: 'plomb', label: 'Plomberie' },
  { key: 'btp', label: 'BTP' },
];

export default function Realisations() {
  const [active, setActive] = useState('all');

  const visible = active === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.domaine === active);

  return (
    <main>
      <PageHero
        eyebrow="Réalisations"
        title="250+ projets livrés à travers le Sénégal."
        subtitle="Énergie solaire, électricité, climatisation, plomberie, BTP — nos équipes interviennent sur tous types de chantiers."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.filterBar}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`${styles.filterBtn} ${active === f.key ? styles.filterActive : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {visible.map((p) => (
              <Link key={p.id} to={`/realisations/${p.id}`} className={styles.card}>
                <div className={styles.cardImg}>
                  <div className={styles.cardImgInner}>
                    <div className={styles.cardPlaceholder}>
                      {p.domaine === 'energie' && '⚡'}
                      {p.domaine === 'clim' && '❄️'}
                      {p.domaine === 'plomb' && '🔧'}
                      {p.domaine === 'btp' && '🏗️'}
                    </div>
                  </div>
                  <div className={styles.cardTag} style={{ background: DOMAINES[p.domaine]?.color }}>
                    {DOMAINES[p.domaine]?.label}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>{p.lieu}</span>
                    <span>{p.annee}</span>
                  </div>
                  <div className={styles.cardTitle}>{p.titre}</div>
                  <div className={styles.cardDesc}>{p.desc}</div>
                  <div className={styles.cardTags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.cardCta}>Voir le projet →</div>
                </div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <div className={styles.empty}>Aucun projet dans cette catégorie pour le moment.</div>
          )}
        </div>
      </section>

      <CtaBand
        title="Votre projet rejoint bientôt cette liste."
        subtitle="Contactez-nous pour une étude technique gratuite."
      />
    </main>
  );
}

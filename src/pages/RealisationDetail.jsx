import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CtaBand from '../components/CtaBand';
import { PROJECTS, DOMAINES } from '../data/projects';
import styles from './RealisationDetail.module.css';

export default function RealisationDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <main className={styles.notFound}>
        <div className={styles.notFoundInner}>
          <div className={styles.notFoundCode}>404</div>
          <div className={styles.notFoundMsg}>Projet introuvable.</div>
          <Link to="/realisations" className={styles.backBtn}>← Retour aux réalisations</Link>
        </div>
      </main>
    );
  }

  const domaine = DOMAINES[project.domaine];
  const others = PROJECTS.filter((p) => p.id !== project.id && p.domaine === project.domaine).slice(0, 3);

  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Link to="/realisations" className={styles.back}>← Toutes les réalisations</Link>
          <div className={styles.heroTag} style={{ background: domaine?.color }}>{domaine?.label}</div>
          <h1 className={styles.heroTitle}>{project.titre}</h1>
          <div className={styles.heroMeta}>
            <span>{project.lieu}</span>
            <span>·</span>
            <span>{project.annee}</span>
            {project.surface !== '—' && (
              <>
                <span>·</span>
                <span>{project.surface}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          <div className={styles.mainCol}>
            <div className={styles.imgBlock}>
              <div className={styles.imgPlaceholder}>
                {project.domaine === 'energie' && '⚡'}
                {project.domaine === 'clim' && '❄️'}
                {project.domaine === 'plomb' && '🔧'}
                {project.domaine === 'btp' && '🏗️'}
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionLabel}>Présentation du projet</div>
              <p className={styles.sectionText}>{project.desc}</p>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionLabel}>Détails de l'intervention</div>
              <p className={styles.sectionText}>{project.details}</p>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <div className={styles.sideTitle}>Informations</div>
              <div className={styles.sideRow}>
                <span className={styles.sideKey}>Lieu</span>
                <span className={styles.sideVal}>{project.lieu}</span>
              </div>
              <div className={styles.sideRow}>
                <span className={styles.sideKey}>Année</span>
                <span className={styles.sideVal}>{project.annee}</span>
              </div>
              {project.surface !== '—' && (
                <div className={styles.sideRow}>
                  <span className={styles.sideKey}>Surface</span>
                  <span className={styles.sideVal}>{project.surface}</span>
                </div>
              )}
              <div className={styles.sideRow}>
                <span className={styles.sideKey}>Domaine</span>
                <span className={styles.sideVal}>{domaine?.label}</span>
              </div>
            </div>

            <div className={styles.sideCard}>
              <div className={styles.sideTitle}>Tags</div>
              <div className={styles.tagList}>
                {project.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>

            <Link to="/contact" className={styles.contactBtn}>
              Discuter d'un projet similaire →
            </Link>
          </aside>
        </div>
      </div>

      {others.length > 0 && (
        <div className={styles.related}>
          <div className={styles.relatedInner}>
            <div className={styles.relatedLabel}>Projets similaires</div>
            <div className={styles.relatedGrid}>
              {others.map((p) => (
                <Link key={p.id} to={`/realisations/${p.id}`} className={styles.relCard}>
                  <div className={styles.relImg}>
                    {p.domaine === 'energie' && '⚡'}
                    {p.domaine === 'clim' && '❄️'}
                    {p.domaine === 'plomb' && '🔧'}
                    {p.domaine === 'btp' && '🏗️'}
                  </div>
                  <div className={styles.relBody}>
                    <div className={styles.relTitle}>{p.titre}</div>
                    <div className={styles.relMeta}>{p.lieu} · {p.annee}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <CtaBand
        title="Vous avez un projet similaire ?"
        subtitle="Contactez-nous pour une étude technique gratuite."
      />
    </main>
  );
}

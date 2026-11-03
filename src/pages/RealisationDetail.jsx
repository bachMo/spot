import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS, DOMAINES } from '../data/projects';
import CtaBand from '../components/CtaBand';
import ProjectIllustration from '../components/ProjectIllustration';
import styles from './RealisationDetail.module.css';

export default function RealisationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <main className={styles.notFound}>
        <div className={styles.notFoundInner}>
          <div className={styles.notFoundCode}>404</div>
          <h1 className={styles.notFoundTitle}>Projet introuvable</h1>
          <p className={styles.notFoundDesc}>Ce projet n'existe pas ou a été retiré.</p>
          <button className={styles.backBtn} onClick={() => navigate('/realisations')}>
            ← Voir tous les projets
          </button>
        </div>
      </main>
    );
  }

  const related = PROJECTS.filter((p) => p.domaine === project.domaine && p.id !== project.id).slice(0, 3);

  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <button className={styles.back} onClick={() => navigate('/realisations')}>
            ← Réalisations
          </button>
          <div className={styles.heroMeta}>
            <span className={styles.heroDomain}>{DOMAINES[project.domaine]?.label}</span>
            <span className={styles.heroYear}>{project.annee}</span>
          </div>
          <h1 className={styles.heroTitle}>{project.titre}</h1>
          <div className={styles.heroLieu}>{project.lieu}</div>
          {project.surface !== '—' && (
            <div className={styles.heroSurface}>{project.surface}</div>
          )}
        </div>
        <ProjectIllustration
          domaine={project.domaine}
          id={`hero-${project.id}`}
          className={styles.heroImg}
        />
      </div>

      <div className={styles.layout}>
        <div className={styles.layoutInner}>
          <div className={styles.main}>
            <section className={styles.descSection}>
              <h2 className={styles.sectionTitle}>Le projet</h2>
              <p className={styles.descText}>{project.desc}</p>
            </section>

            <section className={styles.detailSection}>
              <h2 className={styles.sectionTitle}>Détails techniques</h2>
              <p className={styles.detailText}>{project.details}</p>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <div className={styles.sideLabel}>Domaine</div>
              <div className={styles.sideValue}>{DOMAINES[project.domaine]?.label}</div>
            </div>
            <div className={styles.sideCard}>
              <div className={styles.sideLabel}>Année</div>
              <div className={styles.sideValue}>{project.annee}</div>
            </div>
            <div className={styles.sideCard}>
              <div className={styles.sideLabel}>Lieu</div>
              <div className={styles.sideValue}>{project.lieu}</div>
            </div>
            {project.surface !== '—' && (
              <div className={styles.sideCard}>
                <div className={styles.sideLabel}>Surface</div>
                <div className={styles.sideValue}>{project.surface}</div>
              </div>
            )}
            <div className={styles.sideTags}>
              {project.tags.map((t) => (
                <span key={t} className={styles.sideTag}>{t}</span>
              ))}
            </div>
            <button className={styles.sideBtn} onClick={() => navigate('/contact')}>
              Projet similaire ?
            </button>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedTitle}>Autres projets en {DOMAINES[project.domaine]?.label}</h2>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <button
                  key={p.id}
                  className={styles.relatedCard}
                  onClick={() => navigate(`/realisations/${p.id}`)}
                >
                  <ProjectIllustration
                    domaine={p.domaine}
                    id={`rel-${p.id}`}
                    className={styles.relatedCardImg}
                  />
                  <div className={styles.relatedCardTitle}>{p.titre}</div>
                  <div className={styles.relatedCardLieu}>{p.lieu} · {p.annee}</div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Ce type de projet vous intéresse ?"
        subtitle="Décrivez-nous votre besoin, nous vous répondons sous 48h."
      />
    </main>
  );
}

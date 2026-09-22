import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects';
import CtaBand from '../components/CtaBand';
import styles from './RealisationDetail.module.css';

export default function RealisationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const p = projects.find(pr => pr.id === id);

  if (!p) return (
    <div className={styles.notFound}>
      <p>Réalisation introuvable.</p>
      <button onClick={() => navigate('/realisations')} className={styles.back}>
        ← Retour aux réalisations
      </button>
    </div>
  );

  return (
    <main>
      {/* HEADER VERT */}
      <div className={styles.top}>
        <div className={styles.topInner}>
          <button className={styles.backBtn} onClick={() => navigate('/realisations')}>
            ← Retour aux réalisations
          </button>
          <div className={styles.cat}>{p.catLabel}</div>
          <h1 className={styles.h1}>{p.titleFull}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}>📍 <strong>{p.lieu}</strong></div>
            <div className={styles.metaItem}>📅 <strong>{p.date}</strong></div>
            <div className={styles.metaItem}>⏱ Durée : <strong>{p.duree}</strong></div>
            <div className={styles.metaItem}>💰 Budget : <strong>{p.budget}</strong></div>
          </div>
        </div>
      </div>

      {/* GALERIE */}
      <div className={styles.gallery}>
        <div className={styles.galleryInner}>
          <div className={styles.imgMain}>{p.emoji}</div>
          <div className={styles.imgSide}>
            <div className={styles.imgSm}>{p.e2}</div>
            <div className={styles.imgSm}>{p.e3}</div>
          </div>
        </div>
      </div>

      {/* CORPS */}
      <div className={styles.body}>
        <div className={styles.bodyInner}>
          {/* Colonne principale */}
          <div className={styles.main}>
            <h2 className={styles.st}>Contexte et enjeux</h2>
            <p className={styles.txt}>{p.contexte}</p>
            <div className={styles.challenge}>
              <p dangerouslySetInnerHTML={{ __html: p.challenge }} />
            </div>

            <h2 className={styles.st}>Déroulement du chantier</h2>
            <div className={styles.steps}>
              {p.steps.map((s, i) => (
                <div key={i} className={styles.step}>
                  <div className={styles.stepN}>{i + 1}</div>
                  <div className={styles.stepB}>
                    <strong>{s.title}</strong> — {s.desc}
                  </div>
                </div>
              ))}
            </div>

            <h2 className={styles.st}>Matériel utilisé</h2>
            <div className={styles.matGrid}>
              {p.materiel.map((m) => (
                <div key={m.label} className={styles.matItem}>
                  <span className={styles.matEmoji}>{m.emoji}</span>
                  <span className={styles.matLabel}>{m.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.cta}>
              <button className={styles.btnDark} onClick={() => navigate('/contact')}>
                Démarrer un projet similaire →
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>📋 Fiche technique</div>
              <div className={styles.cardBody}>
                {p.fiche.map(({ label, value }) => (
                  <div key={label} className={styles.row}>
                    <span className={styles.rowLabel}>{label}</span>
                    <span className={styles.rowVal}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>📈 Résultats obtenus</div>
              <div className={styles.kpiWrap}>
                {p.kpi.map(({ n, label }) => (
                  <div key={label} className={styles.kpiItem}>
                    <div className={styles.kpiN}>{n}</div>
                    <div className={styles.kpiL}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <CtaBand
        title="Un projet similaire ? Parlons-en."
        subtitle="Devis gratuit sous 48 heures."
      />
    </main>
  );
}

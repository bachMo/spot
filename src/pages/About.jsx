import React, { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import styles from './About.module.css';

const TIMELINE = [
  { year: '2016', title: 'Fondation', desc: 'Création de SPOT à Dakar par une équipe de techniciens spécialisés en énergie et bâtiment.' },
  { year: '2018', title: 'Expansion', desc: 'Ouverture du pôle climatisation et lancement des premiers contrats de maintenance industrielle.' },
  { year: '2020', title: 'Solaire', desc: 'Démarrage des installations photovoltaïques. Premier parc de 50 kWc pour un complexe hôtelier.' },
  { year: '2023', title: 'Croissance', desc: 'Franchissement des 200 projets livrés. Extension de l\'équipe à 40 techniciens certifiés.' },
  { year: '2025', title: "Aujourd'hui", desc: "SPOT est aujourd'hui l'une des références du secteur technique au Sénégal, avec plus de 250 projets livrés." },
];

const VALUES = [
  { t: 'Rigueur', d: 'Chaque installation est documentée, contrôlée et réceptionnée selon un protocole strict avant remise au client.' },
  { t: 'Proximité', d: 'Interlocuteur unique, suivi personnalisé et réactivité SAV sous 24h pour tous nos clients actifs.' },
  { t: 'Expertise', d: 'Des techniciens formés par métier — électriciens, frigoristes, plombiers, maçons — jamais généralistes par défaut.' },
  { t: 'Durabilité', d: 'Nous privilégions des solutions pérennes : matériaux Tier 1, équipements à faible coût de maintenance.' },
];

function useVisible(threshold) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: threshold || 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function TimelineItem({ year, title, desc, index }) {
  const [ref, visible] = useVisible(0.3);
  return (
    <div
      ref={ref}
      className={`${styles.timelineItem} ${visible ? styles.timelineVisible : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={styles.timelineLeft}>
        <div className={styles.timelineYear}>{year}</div>
        <div className={styles.timelineLine} />
      </div>
      <div className={styles.timelineRight}>
        <div className={styles.timelineTitle}>{title}</div>
        <div className={styles.timelineDesc}>{desc}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="À propos"
        title="Construire juste. Durer longtemps."
        subtitle="Depuis 2016, SPOT accompagne particuliers, promoteurs et industriels sur leurs projets techniques à Dakar et dans les régions."
      />

      <section className={styles.intro}>
        <div className={styles.inner}>
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <p className={styles.sectionEye}>Notre histoire</p>
              <h2 className={styles.introH2}>
                Une équipe de terrain,<br />pas un bureau d'études.
              </h2>
            </div>
            <div className={styles.introRight}>
              <p>SPOT — Solutions Polyvalentes en Optimisation Technique — est née d'un constat simple : le marché sénégalais manquait de prestataires techniques capables d'intervenir sur plusieurs corps de métier avec le même niveau d'exigence.</p>
              <p>Fondée par des techniciens de terrain, l'entreprise a toujours mis l'exécution avant la communication. Résultat : plus de 250 chantiers livrés, un taux de satisfaction mesuré, et une équipe qui grandit par recommandation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.inner}>
          <p className={styles.sectionEye}>Chronologie</p>
          <h2 className={styles.sectionH2}>Neuf ans de chantiers.</h2>
          <div className={styles.timeline}>
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.year} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.inner}>
          <p className={styles.sectionEye}>Nos valeurs</p>
          <h2 className={styles.sectionH2}>Ce qui guide notre travail.</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map(({ t, d }, i) => (
              <div key={t} className={styles.valueCard}>
                <div className={styles.valueIndex}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.valueTitle}>{t}</div>
                <div className={styles.valueDesc}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Travailler avec SPOT"
        subtitle="Contactez-nous pour discuter de votre projet."
      />
    </main>
  );
}

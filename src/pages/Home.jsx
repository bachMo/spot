import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CtaBand from '../components/CtaBand';
import styles from './Home.module.css';

const DOMAINS = [
  {
    id: 'energie',
    num: '01',
    title: 'Énergie & Électricité',
    desc: 'Solaire, courant fort/faible, tableaux TGBT, éclairage, mise aux normes SENELEC.',
    items: ['Panneaux solaires & stockage', 'Électricité bâtiment & industrielle', 'Armoires et tableaux de commande', 'Mise aux normes & audits'],
  },
  {
    id: 'clim',
    num: '02',
    title: 'Climatisation & Maintenance',
    desc: 'Systèmes split, VRV, VMC et contrats de maintenance préventive et curative.',
    items: ['Climatiseurs split & multi-split', 'Systèmes VRV / VRF centralisés', 'Ventilation mécanique contrôlée', 'Maintenance préventive & curative'],
  },
  {
    id: 'plomb',
    num: '03',
    title: 'Plomberie & Étanchéité',
    desc: 'Réseaux sanitaires, alimentation eau, étanchéité toiture et façades.',
    items: ['Réseaux eau froide & eau chaude', 'Appareils sanitaires & robinetterie', 'Étanchéité toiture-terrasse', 'Traitement des infiltrations'],
  },
  {
    id: 'btp',
    num: '04',
    title: 'BTP & Services Techniques',
    desc: 'Gros œuvre, second œuvre, travaux de finition et construction clé en main.',
    items: ['Gros œuvre & maçonnerie', 'Cloisons, faux-plafonds, revêtements', 'Menuiserie aluminium & PVC', 'Construction clé en main'],
  },
];

const STATS = [
  { n: 250, suffix: '+', label: 'Projets livrés' },
  { n: 8, suffix: ' ans', label: "d'expérience" },
  { n: 4, suffix: '', label: 'Domaines d\'expertise' },
  { n: 100, suffix: '%', label: 'Satisfaction client' },
];

function useCountUp(target, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(id); }
      else setVal(start);
    }, 30);
    return () => clearInterval(id);
  }, [active, target]);
  return val;
}

function StatItem({ n, suffix, label }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const val = useCountUp(n, active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.statItem}>
      <div className={styles.statN}>{val}{suffix}</div>
      <div className={styles.statL}>{label}</div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [activeDomain, setActiveDomain] = useState(0);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroPill}>Dakar, Sénégal</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine1}>Solutions</span>
            <span className={styles.heroLine2}>Techniques</span>
            <span className={styles.heroLine3}>Polyvalentes.</span>
          </h1>
          <p className={styles.heroSub}>
            SPOT intervient sur vos chantiers en énergie, climatisation, plomberie et BTP — de l'étude à la livraison clé en main.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.heroBtn} onClick={() => navigate('/contact')}>
              Demander un devis gratuit
            </button>
            <button className={styles.heroLink} onClick={() => navigate('/realisations')}>
              Voir nos projets
            </button>
          </div>
        </div>
        <div className={styles.scrollHint} aria-hidden="true">
          <span />
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.inner}>
          <div className={styles.statsRow}>
            {STATS.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      <section className={styles.domainsSection}>
        <div className={styles.inner}>
          <div className={styles.domainsSplit}>
            <div className={styles.domainsLeft}>
              <p className={styles.sectionEye}>Nos expertises</p>
              <h2 className={styles.sectionH2}>Quatre domaines,<br />une seule équipe.</h2>
              <p className={styles.sectionP}>
                De l'étude technique à la mise en service, SPOT vous accompagne à chaque étape avec des équipes spécialisées par métier.
              </p>
              <button className={styles.sectionBtn} onClick={() => navigate('/services')}>
                Découvrir nos services
              </button>
            </div>
            <div className={styles.domainsRight}>
              {DOMAINS.map((d, i) => (
                <button
                  key={d.id}
                  className={`${styles.domainRow} ${activeDomain === i ? styles.domainActive : ''}`}
                  onClick={() => setActiveDomain(i)}
                >
                  <span className={styles.domainNum}>{d.num}</span>
                  <div className={styles.domainContent}>
                    <div className={styles.domainTitle}>{d.title}</div>
                    {activeDomain === i && (
                      <div className={styles.domainExpand}>
                        <p className={styles.domainDesc}>{d.desc}</p>
                        <ul className={styles.domainItems}>
                          {d.items.map((it) => <li key={it}>{it}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                  <span className={styles.domainArrow}>{activeDomain === i ? '−' : '+'}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.inner}>
          <p className={styles.sectionEye}>Pourquoi SPOT</p>
          <h2 className={styles.sectionH2}>Ce qui nous distingue.</h2>
          <div className={styles.whyGrid}>
            {[
              { t: 'Expertise locale', d: 'Techniciens formés sur le terrain sénégalais, matériaux adaptés au climat et aux normes locales.' },
              { t: 'Devis en 48h', d: 'Étude technique gratuite et devis détaillé remis en 48 heures, sans frais cachés.' },
              { t: 'Garantie 2 ans', d: 'Garantie main-d\'œuvre sur toutes nos installations. SAV disponible sous 24h.' },
              { t: 'Clé en main', d: 'Un seul interlocuteur pour l\'ensemble du projet, du diagnostic à la réception des travaux.' },
            ].map(({ t, d }) => (
              <div key={t} className={styles.whyCard}>
                <div className={styles.whyBar} aria-hidden="true" />
                <div className={styles.whyTitle}>{t}</div>
                <div className={styles.whyDesc}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Votre projet mérite une expertise solide."
        subtitle="Étude technique gratuite, devis précis sous 48 heures."
      />
    </main>
  );
}

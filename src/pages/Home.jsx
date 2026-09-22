import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CtaBand from '../components/CtaBand';
import styles from './Home.module.css';

const services = [
  {
    icon: '☀️',
    title: 'Énergie solaire',
    desc: 'Dimensionnement, installation et suivi de vos systèmes photovoltaïques sur mesure.',
    items: ['Installation panneaux monocristallins', 'Systèmes hybrides et off-grid', 'Batteries lithium et stockage', 'Maintenance et monitoring'],
  },
  {
    icon: '🏗️',
    title: 'Électricité bâtiment',
    desc: 'Courant fort et faible pour villas, bureaux et immeubles — neufs ou en rénovation.',
    items: ['Tableaux et TGBT', 'Câblage et mise aux normes', 'Éclairage LED et économique', 'Domotique et automatismes'],
  },
  {
    icon: '⚙️',
    title: 'Électricité industrielle',
    desc: 'Solutions robustes pour usines, entrepôts et infrastructures à Dakar et en région.',
    items: ['Armoires de commande', 'Câblage industriel et bus terrain', 'Moteurs et variateurs', 'Maintenance préventive'],
  },
];

const whyCards = [
  { n: '01', title: 'Expertise certifiée', desc: 'Techniciens agréés SENELEC, installations conformes aux normes sénégalaises NFS et standards IEC. Chaque chantier supervisé par un ingénieur.' },
  { n: '02', title: 'Devis transparent en 48h', desc: 'Étude technique gratuite et devis détaillé sans frais cachés, remis sous 48 heures. Aucune mauvaise surprise.' },
  { n: '03', title: 'Garantie & SAV 24h', desc: 'Garantie main-d\'œuvre 2 ans sur toutes nos installations. Équipe SAV disponible sous 24h partout à Dakar.' },
  { n: '04', title: 'Matériel premium', desc: 'Panneaux Tier 1, onduleurs Victron et SolarEdge, câbles VDE certifiés — uniquement du matériel reconnu et durable.' },
];

const testimonials = [
  { initials: 'AM', q: '« SPOT a installé notre système solaire de 30 kWc en 5 jours. Travail soigné, équipe pro. Nos factures SENELEC ont baissé de 70%. Je recommande vivement. »', name: 'Amadou Mbodj', role: 'Directeur, Hôtel Les Flamboyants · Saly' },
  { initials: 'FK', q: '« Installation électrique complète de notre entrepôt à Diamniadio. Délais respectés, devis précis, pas de surprises. L\'armoire fonctionne parfaitement 18 mois après. »', name: 'Fatou Konaté', role: 'Responsable technique, DHL Sénégal' },
  { initials: 'PS', q: '« Mise aux normes complète de notre villa aux Almadies. Le chef de chantier a été très professionnel et pédagogique. Je recommande SPOT les yeux fermés. »', name: 'Papa Saliou Ndiaye', role: 'Particulier · Almadies, Dakar' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>Dakar, Sénégal · Certifié SENELEC</div>
            <h1 className={styles.h1}>
              L'énergie solaire<br />et électrique,
            </h1>
            <p className={styles.h1Sub}>installée avec expertise.</p>
            <p className={styles.heroP}>
              SPOT conçoit, installe et entretient vos systèmes solaires et électriques pour les particuliers, les PME et l'industrie à Dakar et en région.
            </p>
            <div className={styles.heroBtns}>
              <button className={styles.btnDark} onClick={() => navigate('/contact')}>
                Demander un devis gratuit
              </button>
              <button className={styles.btnLine} onClick={() => navigate('/realisations')}>
                Voir nos réalisations
              </button>
            </div>
            <div className={styles.stats}>
              {[
                { n: '250+', l: 'Installations réalisées' },
                { n: '8 ans', l: "d'expérience" },
                { n: '98%', l: 'Satisfaction client' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className={styles.statN}>{n}</div>
                  <div className={styles.statL}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bento */}
          <div className={styles.bento}>
            <div className={`${styles.bentoCard} ${styles.bentoDark}`}>
              <div className={styles.bentoIcon}>☀️</div>
              <div className={`${styles.bentoTitle} ${styles.bentoTitleWhite}`}>Énergie solaire</div>
              <div className={`${styles.bentoSub} ${styles.bentoSubWhite}`}>Panneaux, onduleurs, batteries de stockage</div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoPale}`}>
              <div className={styles.bentoIcon}>⚡</div>
              <div className={`${styles.bentoTitle} ${styles.bentoTitleDark}`}>Élec. industrielle</div>
              <div className={`${styles.bentoSub} ${styles.bentoSubMuted}`}>Armoires, moteurs, variateurs</div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoPale} ${styles.bentoSpan2}`}>
              <div className={styles.bentoIcon}>🏠</div>
              <div className={`${styles.bentoTitle} ${styles.bentoTitleDark}`}>Électricité bâtiment</div>
              <div className={`${styles.bentoSub} ${styles.bentoSubMuted}`}>Tableaux, câblage, éclairage, domotique — mise aux normes complète</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${styles.section} ${styles.sectionGris}`}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.secTag}>Nos expertises</div>
            <h2 className={styles.secH2}>Trois domaines,<br />une seule équipe.</h2>
            <p className={styles.secDesc}>De l'étude technique à la mise en service, SPOT vous accompagne à chaque étape.</p>
          </div>
          <div className={styles.svcGrid}>
            {services.map((s) => (
              <div key={s.title} className={styles.svcCard}>
                <div className={styles.svcIcon}>{s.icon}</div>
                <div className={styles.svcTitle}>{s.title}</div>
                <div className={styles.svcDesc}>{s.desc}</div>
                <ul className={styles.svcList}>
                  {s.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <Link to="/services" className={styles.svcMore}>Voir le détail →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className={`${styles.section} ${styles.sectionBlanc}`}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.secTag}>Pourquoi SPOT</div>
            <h2 className={styles.secH2}>Ce qui nous distingue.</h2>
            <p className={styles.secDesc}>Fiabilité, expertise locale et réactivité — nos trois engagements envers chaque client.</p>
          </div>
          <div className={styles.whyGrid}>
            {whyCards.map((c) => (
              <div key={c.n} className={styles.whyCard}>
                <div className={styles.whyNum}>{c.n}</div>
                <div>
                  <div className={styles.whyTitle}>{c.title}</div>
                  <div className={styles.whyDesc}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className={`${styles.section} ${styles.sectionGris}`}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.secTag}>Témoignages</div>
            <h2 className={styles.secH2}>Ce que disent nos clients.</h2>
          </div>
          <div className={styles.testiGrid}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testiCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testiQ}>{t.q}</p>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAv}>{t.initials}</div>
                  <div>
                    <div className={styles.testiName}>{t.name}</div>
                    <div className={styles.testiRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Votre projet mérite une expertise solide."
        subtitle="Étude technique gratuite et devis précis sous 48 heures."
      />
    </main>
  );
}

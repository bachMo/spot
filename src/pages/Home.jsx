import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CtaBand from '../components/CtaBand';
import styles from './Home.module.css';

const DOMAINS = [
  {
    icon: '⚡',
    title: 'Énergie & Électricité',
    items: ['Installations solaires', 'Pompage solaire', 'Éclairage public', 'Tableaux électriques', 'Groupes électrogènes'],
  },
  {
    icon: '❄️',
    title: 'Climatisation & Maintenance',
    items: ['Climatisation', 'Froid industriel', 'Entretien & dépannage', 'Maintenance préventive', 'Contrats de maintenance'],
  },
  {
    icon: '🔧',
    title: 'Plomberie & Étanchéité',
    items: ['Plomberie bâtiment', 'Réseaux d\'eau', 'Sanitaires', 'Étanchéité toitures', 'Traitement infiltrations'],
  },
  {
    icon: '🏗️',
    title: 'BTP & Services Techniques',
    items: ['Rénovation bâtiments', 'Petits travaux', 'Travaux d\'aménagement', 'Études techniques', 'Assistance & conseil'],
  },
];

const WHY = [
  { n: '01', title: 'Qualité', desc: 'Des prestations conformes aux normes, avec des matériaux et équipements sélectionnés pour leur durabilité et leur performance.' },
  { n: '02', title: 'Sécurité', desc: 'Le respect des règles et normes de sécurité est non-négociable. Chaque intervention protège nos équipes et nos clients.' },
  { n: '03', title: 'Innovation', desc: 'Des solutions techniques modernes, efficaces et adaptées aux réalités et aux besoins spécifiques de nos clients.' },
  { n: '04', title: 'Engagement', desc: 'Un partenaire fiable, disponible et à votre écoute — avant, pendant et après chaque intervention.' },
];

const VALUES = [
  { icon: '🏆', title: 'Expertise', sub: 'Une équipe qualifiée et expérimentée.' },
  { icon: '⚡', title: 'Performance', sub: 'Des solutions efficaces et durables.' },
  { icon: '⏱️', title: 'Respect des délais', sub: 'Organisation rigoureuse pour livrer dans les temps.' },
  { icon: '🌱', title: 'Durabilité', sub: 'Interventions responsables pour un impact positif.' },
];

const TESTIMONIALS = [
  { initials: 'AM', q: '« SPOT a installé notre système solaire en 5 jours. Travail soigné, équipe professionnelle. Nos factures ont baissé de 70%. Je recommande vivement. »', name: 'Amadou Mbodj', role: 'Directeur, Hôtel Les Flamboyants · Saly' },
  { initials: 'FK', q: '« Installation électrique complète de notre entrepôt à Diamniadio. Délais respectés, devis précis, pas de mauvaises surprises. »', name: 'Fatou Konaté', role: 'Responsable technique, DHL Sénégal' },
  { initials: 'PS', q: '« Mise aux normes complète de notre villa. Le chef de chantier a été très professionnel et pédagogique. SPOT les yeux fermés. »', name: 'Papa Saliou Ndiaye', role: 'Particulier · Almadies, Dakar' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroTag}>Dakar, Sénégal · Intervention rapide partout au Sénégal</div>
            <h1 className={styles.h1}>
              L'excellence technique<br />
              <span className={styles.h1Em}>au service</span><br />
              de vos projets.
            </h1>
            <p className={styles.heroP}>
              SPOT accompagne les particuliers, entreprises, industries et institutions avec des solutions techniques fiables, durables et adaptées à leurs besoins.
            </p>
            <div className={styles.heroBtns}>
              <button className={styles.btnPrimary} onClick={() => navigate('/contact')}>
                Demander un devis gratuit
              </button>
              <button className={styles.btnSecondary} onClick={() => navigate('/realisations')}>
                Voir nos réalisations
              </button>
            </div>
            <div className={styles.stats}>
              {[
                { n: '250+', l: 'Projets réalisés' },
                { n: '8 ans', l: "d'expérience" },
                { n: '4', l: 'domaines d\'activité' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className={styles.statN}>{n}</div>
                  <div className={styles.statL}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bento}>
            <div className={`${styles.bentoCard} ${styles.bentoDark}`}>
              <div className={styles.bentoIcon}>⚡</div>
              <div className={`${styles.bentoTitle} ${styles.bentoTitleWhite}`}>Énergie & Électricité</div>
              <div className={`${styles.bentoSub} ${styles.bentoSubWhite}`}>Solaire, éclairage, tableaux, groupes électrogènes</div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoPale}`}>
              <div className={styles.bentoIcon}>❄️</div>
              <div className={`${styles.bentoTitle} ${styles.bentoTitleDark}`}>Climatisation</div>
              <div className={`${styles.bentoSub} ${styles.bentoSubMuted}`}>Froid & maintenance</div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoPale}`}>
              <div className={styles.bentoIcon}>🔧</div>
              <div className={`${styles.bentoTitle} ${styles.bentoTitleDark}`}>Plomberie</div>
              <div className={`${styles.bentoSub} ${styles.bentoSubMuted}`}>Réseaux & étanchéité</div>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoPale} ${styles.bentoSpan2}`}>
              <div className={styles.bentoIcon}>🏗️</div>
              <div className={`${styles.bentoTitle} ${styles.bentoTitleDark}`}>BTP & Services Techniques</div>
              <div className={`${styles.bentoSub} ${styles.bentoSubMuted}`}>Rénovation, construction, études techniques et conseil</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionBlanc}`}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.secTag}>Nos domaines d'activité</div>
            <h2 className={styles.secH2}>Quatre expertises,<br />une seule équipe.</h2>
            <p className={styles.secDesc}>De l'étude à la mise en service, SPOT vous accompagne à chaque étape de vos projets techniques.</p>
          </div>
          <div className={styles.domainsGrid}>
            {DOMAINS.map((d) => (
              <div key={d.title} className={styles.domainCard}>
                <div className={styles.domainIconWrap}>{d.icon}</div>
                <div className={styles.domainTitle}>{d.title}</div>
                <ul className={styles.domainList}>
                  {d.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valueBand}>
        <div className={styles.valueGrid}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.valueItem}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <div className={styles.valueTitle}>{v.title}</div>
              <div className={styles.valueSub}>{v.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGris}`}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.secTag}>Pourquoi SPOT</div>
            <h2 className={styles.secH2}>Ce qui nous distingue.</h2>
            <p className={styles.secDesc}>Fiabilité, expertise locale et réactivité — nos engagements envers chaque client.</p>
          </div>
          <div className={styles.whyGrid}>
            {WHY.map((c) => (
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

      <section className={`${styles.section} ${styles.sectionBlanc}`}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.secTag}>Témoignages</div>
            <h2 className={styles.secH2}>Ce que disent nos clients.</h2>
          </div>
          <div className={styles.testiGrid}>
            {TESTIMONIALS.map((t) => (
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
        subtitle="Étude technique gratuite — réponse sous 48 heures partout au Sénégal."
      />
    </main>
  );
}

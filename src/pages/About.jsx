import React from 'react';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import styles from './About.module.css';

const STATS = [
  { n: '250+', l: 'Projets réalisés' },
  { n: '8 ans', l: "d'expérience" },
  { n: '4', l: 'domaines d\'expertise' },
  { n: '100%', l: 'Sénégal couvert' },
];

const TIMELINE = [
  { y: '2016', t: 'Création de SPOT', d: 'Fondation de l\'entreprise à Dakar, spécialisée initialement en électricité bâtiment.' },
  { y: '2018', t: 'Expansion solaire', d: 'Développement de l\'activité énergie solaire face à la demande croissante du marché sénégalais.' },
  { y: '2020', t: 'Couverture nationale', d: 'Extension des interventions à toutes les régions du Sénégal.' },
  { y: '2022', t: 'Diversification', d: 'Intégration des activités climatisation, plomberie et BTP pour offrir une offre complète.' },
  { y: '2024', t: 'SPOT aujourd\'hui', d: 'Plus de 250 projets réalisés, une équipe expérimentée, et une présence solide sur le marché sénégalais.' },
];

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="À propos"
        title="SPOT — Solutions Polyvalentes en Optimisation Technique."
        subtitle="Fondée à Dakar, SPOT accompagne particuliers, entreprises et institutions dans leurs projets techniques depuis 2016."
      />

      <section className={styles.missionSection}>
        <div className={styles.inner}>
          <div className={styles.missionGrid}>
            <div className={styles.missionText}>
              <div className={styles.eyebrow}>Notre mission</div>
              <h2 className={styles.missionH2}>Fiables, durables,<br />adaptés à vos besoins.</h2>
              <p className={styles.missionP}>
                SPOT est une entreprise sénégalaise spécialisée dans les solutions techniques polyvalentes. Nous intervenons dans quatre domaines complémentaires : l'énergie et l'électricité, la climatisation et la maintenance, la plomberie et l'étanchéité, et le BTP.
              </p>
              <p className={styles.missionP}>
                Notre approche repose sur une écoute attentive des besoins de chaque client, une expertise technique rigoureuse, et un engagement fort en matière de qualité, de sécurité et de respect des délais.
              </p>
            </div>
            <div className={styles.statsGrid}>
              {STATS.map(({ n, l }) => (
                <div key={l} className={styles.statCard}>
                  <div className={styles.statN}>{n}</div>
                  <div className={styles.statL}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.secTag}>Notre histoire</div>
            <h2 className={styles.secH2}>8 ans d'évolution<br />et de croissance.</h2>
          </div>
          <div className={styles.timeline}>
            {TIMELINE.map((item, i) => (
              <div key={item.y} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <div className={styles.timelineYear}>{item.y}</div>
                </div>
                <div className={styles.timelineLine}>
                  <div className={styles.timelineDot} />
                  {i < TIMELINE.length - 1 && <div className={styles.timelineVert} />}
                </div>
                <div className={styles.timelineRight}>
                  <div className={styles.timelineTitle}>{item.t}</div>
                  <div className={styles.timelineDesc}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.secTag}>Nos valeurs</div>
            <h2 className={styles.secH2}>Ce qui guide chacune<br />de nos interventions.</h2>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { icon: '🏆', t: 'Qualité', d: 'Des prestations conformes aux normes, avec des matériaux et équipements sélectionnés pour leur durabilité.' },
              { icon: '🛡️', t: 'Sécurité', d: 'Le respect des normes de sécurité est non-négociable. Chaque intervention protège nos équipes et nos clients.' },
              { icon: '💡', t: 'Innovation', d: 'Des solutions techniques modernes et efficaces, adaptées aux réalités spécifiques du Sénégal.' },
              { icon: '🤝', t: 'Engagement', d: 'Un partenaire fiable, disponible et à votre écoute — avant, pendant et après chaque intervention.' },
            ].map((v) => (
              <div key={v.t} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <div className={styles.valueTitle}>{v.t}</div>
                <div className={styles.valueDesc}>{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Faites confiance à l'expertise SPOT."
        subtitle="Contactez-nous pour une étude technique gratuite."
      />
    </main>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import styles from './About.module.css';

const team = [
  { initials: 'MD', name: 'Mamadou Diallo', role: 'Directeur technique & Fondateur', bio: 'Ingénieur électricien, 15 ans d\'expérience. Certifié SolarEdge et Victron. Plus de 50 installations industrielles supervisées.' },
  { initials: 'FS', name: 'Fatima Sow', role: 'Ingénieure solaire', bio: 'Master énergies renouvelables (UCAD). Spécialiste dimensionnement et systèmes hybrides. 8 ans d\'expérience terrain.' },
  { initials: 'IO', name: 'Ibrahima Ouédraogo', role: 'Chef de chantier industriel', bio: 'Habilitation B2V H2V. Spécialiste armoires de commande et variateurs Schneider/ABB. 12 ans de terrain.' },
];

const timeline = [
  { year: '2016', dot: '16', title: 'Création de SPOT', desc: 'Fondation à Dakar par 3 ingénieurs. Premiers projets résidentiels solaires dans la banlieue dakaroise.' },
  { year: '2018', dot: '18', title: 'Agrément SENELEC', desc: 'Obtention de l\'agrément SENELEC et premières certifications fabricants (Victron Energy, Canadian Solar).' },
  { year: '2020', dot: '20', title: 'Extension industrielle', desc: 'Lancement de la division électricité industrielle. 1er contrat majeur : usine textile de Thiès (500 kW).' },
  { year: '2022', dot: '22', title: '100ème installation', desc: 'Cap symbolique des 100 projets. Ouverture d\'un bureau à Saint-Louis pour couvrir le nord du Sénégal.' },
  { year: '2024', dot: '24', title: '250 projets, 15 MW installés', desc: 'SPOT dépasse les 250 réalisations et 15 MW de capacité photovoltaïque installée. 18 collaborateurs.' },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <main>
      <PageHero
        breadcrumb="À propos"
        tag="Notre histoire"
        title="SPOT, l'expertise<br/>énergétique sénégalaise."
        desc="Fondée en 2016 à Dakar, SPOT est aujourd'hui une référence en installation solaire et électrique au Sénégal."
      />

      {/* QUI SOMMES-NOUS */}
      <section className={`${styles.section} ${styles.blanc}`}>
        <div className={styles.inner}>
          <div className={styles.split}>
            <div>
              <div className={styles.tag}>Qui sommes-nous</div>
              <h2 className={styles.h2}>Née à Dakar,<br />construite sur la confiance.</h2>
              <p className={styles.p}>SPOT (Solaire Performance Optimisation et Teneur) a été fondée en 2016 par des ingénieurs sénégalais passionnés par la transition énergétique. Notre vision : rendre l'énergie solaire et l'électricité de qualité accessibles à tous les Sénégalais.</p>
              <p className={styles.p}>Aujourd'hui, notre équipe de 18 techniciens et ingénieurs certifiés réalise des projets allant de l'installation résidentielle de 3 kWc aux infrastructures industrielles de plusieurs mégawatts, partout au Sénégal.</p>
              <div className={styles.btns}>
                <button className={styles.btnDark} onClick={() => navigate('/contact')}>Travailler avec nous</button>
                <button className={styles.btnLine} onClick={() => navigate('/realisations')}>Nos réalisations</button>
              </div>
            </div>
            <div className={styles.vis}>
              <div className={styles.statGrid}>
                {[{ n: '2016', l: 'Création' }, { n: '18', l: 'Techniciens' }, { n: '250+', l: 'Projets' }, { n: '15 MW', l: 'Installés' }].map(({ n, l }) => (
                  <div key={l} className={styles.stat}>
                    <div className={styles.statN}>{n}</div>
                    <div className={styles.statL}>{l}</div>
                  </div>
                ))}
              </div>
              <div className={styles.mission}>
                <p>« Accélérer la transition énergétique au Sénégal en offrant des installations solaires et électriques fiables, durables et accessibles à tous. »</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className={`${styles.section} ${styles.gris}`}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.tag}>L'équipe</div>
            <h2 className={styles.h2}>Des experts à votre service.</h2>
            <p className={styles.secDesc}>Une équipe pluridisciplinaire d'ingénieurs et techniciens certifiés, formés au Sénégal et à l'étranger.</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((m) => (
              <div key={m.name} className={styles.teamCard}>
                <div className={styles.teamAv}>{m.initials}</div>
                <div className={styles.teamName}>{m.name}</div>
                <div className={styles.teamRole}>{m.role}</div>
                <div className={styles.teamBio}>{m.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={`${styles.section} ${styles.blanc}`}>
        <div className={styles.inner}>
          <div className={styles.secHd}>
            <div className={styles.tag}>Notre parcours</div>
            <h2 className={styles.h2}>8 ans de croissance.</h2>
          </div>
          <div className={styles.tl}>
            {timeline.map((t) => (
              <div key={t.year} className={styles.tlItem}>
                <div className={styles.tlDot}>{t.dot}</div>
                <div>
                  <div className={styles.tlYear}>{t.year}</div>
                  <div className={styles.tlTitle}>{t.title}</div>
                  <div className={styles.tlDesc}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Rejoignez nos 250+ clients satisfaits."
        subtitle="Étude technique gratuite — réponse sous 48 heures."
        showPhone={false}
      />
    </main>
  );
}

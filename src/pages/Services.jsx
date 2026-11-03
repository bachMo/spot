import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import styles from './Services.module.css';

const TABS = [
  {
    id: 'energie',
    label: 'Énergie & Électricité',
    intro: 'Du solaire résidentiel aux infrastructures industrielles, nos équipes maîtrisent l\'ensemble de la chaîne électrique.',
    services: [
      { t: 'Installation solaire', d: 'Dimensionnement sur mesure, fourniture et pose de systèmes photovoltaïques hybrides ou off-grid. Onduleurs Victron, panneaux monocristallins Tier 1, batteries lithium.' },
      { t: 'Électricité bâtiment', d: 'Tableaux, TGBT, câblage courant fort et faible, éclairage LED, domotique pour villas, bureaux et immeubles neufs ou en rénovation.' },
      { t: 'Électricité industrielle', d: 'Armoires de commande, câblage industriel, moteurs et variateurs de vitesse pour usines, entrepôts et ateliers.' },
      { t: 'Mise aux normes', d: 'Diagnostic et mise en conformité des installations existantes selon les normes SENELEC et standards IEC.' },
    ],
  },
  {
    id: 'clim',
    label: 'Climatisation & Maintenance',
    intro: 'Confort thermique garanti pour tous types de bâtiments, avec des solutions dimensionnées pour le climat sénégalais.',
    services: [
      { t: 'Climatiseurs split & multi-split', d: 'Installation, remplacement et mise en service de climatiseurs pour usage résidentiel et tertiaire. Marques Daikin, Mitsubishi, Gree.' },
      { t: 'Systèmes VRV / VRF', d: 'Solutions centralisées pour hôtels, immeubles de bureaux et établissements de santé avec gestion individuelle de chaque zone.' },
      { t: 'Ventilation (VMC)', d: 'Ventilation mécanique contrôlée pour parkings, salles de bain, cuisines industrielles et espaces confinés.' },
      { t: 'Contrats de maintenance', d: 'Maintenance préventive trimestrielle ou semestrielle, nettoyage, recharge en fluide frigorigène et diagnostics électroniques.' },
    ],
  },
  {
    id: 'plomb',
    label: 'Plomberie & Étanchéité',
    intro: 'Réseaux sanitaires fiables et étanchéité durable, réalisés avec des matériaux adaptés au contexte local.',
    services: [
      { t: 'Réseaux sanitaires', d: 'Installation complète des réseaux eau froide, eau chaude sanitaire et évacuations pour constructions neuves et rénovations.' },
      { t: 'Appareils et robinetterie', d: 'Fourniture et pose d\'appareils sanitaires (Grohe, Hansgrohe, Roca), robinetterie et équipements de plomberie.' },
      { t: 'Étanchéité toiture-terrasse', d: 'Étanchéité bicouche et monocouche pour toitures-terrasses, balcons et terrasses, avec garantie décennale.' },
      { t: 'Traitement des infiltrations', d: 'Diagnostic et traitement des infiltrations sur façades, soubassements et parkings enterrés.' },
    ],
  },
  {
    id: 'btp',
    label: 'BTP & Services Techniques',
    intro: 'Maîtrise d\'œuvre complète ou corps d\'état séparés — SPOT coordonne l\'ensemble de votre projet de construction.',
    services: [
      { t: 'Gros œuvre', d: 'Fondations, dalles, voiles béton, charpentes métalliques et bardage pour constructions industrielles et tertiaires.' },
      { t: 'Second œuvre', d: 'Cloisons légères, faux-plafonds, revêtements de sols et murs, menuiserie aluminium et PVC.' },
      { t: 'Peinture & finitions', d: 'Travaux de peinture intérieure et extérieure, enduits, ravalement de façades et finitions décoratives.' },
      { t: 'Construction clé en main', d: 'Gestion complète du projet : études, permis, approvisionnement, exécution et réception des travaux.' },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Quatre métiers, une seule exigence."
        subtitle="Des équipes spécialisées qui interviennent de l'étude technique à la mise en service."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.tabBar}>
            {TABS.map((t, i) => (
              <button
                key={t.id}
                className={`${styles.tabBtn} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabNum}>{String(i + 1).padStart(2, '0')}</span>
                {t.label}
              </button>
            ))}
          </div>

          <div className={styles.panel} key={tab.id}>
            <div className={styles.panelIntro}>{tab.intro}</div>
            <div className={styles.serviceGrid}>
              {tab.services.map(({ t, d }) => (
                <div key={t} className={styles.serviceCard}>
                  <div className={styles.serviceDot} aria-hidden="true" />
                  <div>
                    <div className={styles.serviceTitle}>{t}</div>
                    <div className={styles.serviceDesc}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Un projet dans ce domaine ?"
        subtitle="Contactez-nous pour une étude technique gratuite."
      />
    </main>
  );
}

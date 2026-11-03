import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'energie',
    icon: '⚡',
    title: 'Énergie & Électricité',
    desc: 'Solutions complètes pour vos besoins en énergie solaire et en électricité — du particulier à l\'industrie. Installations certifiées, matériel premium, suivi garanti.',
    items: [
      { label: 'Installations solaires', detail: 'Dimensionnement, fourniture et installation de systèmes photovoltaïques sur mesure pour particuliers, PME et industries.' },
      { label: 'Pompage solaire', detail: 'Systèmes de pompage alimentés par énergie solaire pour l\'agriculture, l\'industrie et l\'adduction d\'eau.' },
      { label: 'Éclairage public', detail: 'Conception et installation de systèmes d\'éclairage public autonomes ou raccordés au réseau.' },
      { label: 'Installations électriques bâtiment & industriel', detail: 'Tableaux TGBT, câblage, mise aux normes NFS et IEC pour tous types de bâtiments.' },
      { label: 'Tableaux électriques', detail: 'Conception, fabrication et installation de tableaux de distribution et armoires de commande.' },
      { label: 'Groupes électrogènes', detail: 'Fourniture, installation et maintenance de groupes électrogènes de toutes puissances.' },
    ],
  },
  {
    id: 'clim',
    icon: '❄️',
    title: 'Climatisation & Maintenance',
    desc: 'De l\'installation à la maintenance préventive et corrective, SPOT assure le confort thermique de vos espaces avec des équipements efficaces et économes en énergie.',
    items: [
      { label: 'Climatisation', detail: 'Installation de systèmes split, multi-split, VRV/VRF pour bureaux, commerces, hôtels et industries.' },
      { label: 'Froid industriel', detail: 'Chambres froides, groupes de froid industriels, systèmes de réfrigération pour l\'agroalimentaire.' },
      { label: 'Entretien & dépannage', detail: 'Interventions rapides 7j/7 pour le dépannage et l\'entretien de vos équipements de climatisation.' },
      { label: 'Maintenance préventive & corrective', detail: 'Contrats de maintenance programmée pour maximiser la durée de vie de vos équipements.' },
      { label: 'Contrats de maintenance', detail: 'Programmes de maintenance annuelle sur mesure avec rapports d\'intervention détaillés.' },
    ],
  },
  {
    id: 'plomb',
    icon: '🔧',
    title: 'Plomberie & Étanchéité',
    desc: 'Installations sanitaires, réseaux d\'eau et solutions d\'étanchéité pour protéger vos bâtiments durablement contre les infiltrations et les dégâts des eaux.',
    items: [
      { label: 'Plomberie bâtiment', detail: 'Installation, rénovation et mise aux normes de vos réseaux d\'eau froide et chaude.' },
      { label: 'Réseaux d\'eau', detail: 'Conception et installation de réseaux d\'alimentation en eau pour tous types de constructions.' },
      { label: 'Sanitaires', detail: 'Fourniture et pose de tous équipements sanitaires — salles de bain, cuisines, locaux techniques.' },
      { label: 'Étanchéité toitures-terrasses', detail: 'Traitement des toitures-terrasses, balcons et sous-sols contre les infiltrations d\'eau.' },
      { label: 'Réservoirs, sous-sols, balcons', detail: 'Étanchéification de réservoirs d\'eau, cuves, sous-sols et espaces humides.' },
      { label: 'Traitement des infiltrations', detail: 'Diagnostic et traitement des infiltrations avec garantie décennale sur les travaux d\'étanchéité.' },
    ],
  },
  {
    id: 'btp',
    icon: '🏗️',
    title: 'BTP & Services Techniques',
    desc: 'Travaux de construction, rénovation et aménagement avec des études techniques rigoureuses et une expertise pluridisciplinaire pour tous vos projets de bâtiment.',
    items: [
      { label: 'Rénovation de bâtiments', detail: 'Réhabilitation complète ou partielle de bâtiments résidentiels, tertiaires et industriels.' },
      { label: 'Petits travaux de construction', detail: 'Maçonnerie, carrelage, faux plafonds, cloisons et tous travaux de second œuvre.' },
      { label: 'Travaux d\'aménagement', detail: 'Aménagement intérieur et extérieur — bureaux, commerces, entrepôts et espaces publics.' },
      { label: 'Études techniques', detail: 'Études de faisabilité, métrés, plans d\'exécution et suivi de chantier.' },
      { label: 'Assistance & conseil technique', detail: 'Accompagnement technique depuis la conception jusqu\'à la réception des travaux.' },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState('energie');
  const current = SERVICES.find((s) => s.id === active);

  return (
    <main>
      <PageHero
        eyebrow="Nos services"
        title="Solutions techniques complètes pour tous vos projets."
        subtitle="Quatre domaines d'expertise, une seule équipe qualifiée et disponible partout au Sénégal."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.tabs}>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                className={`${styles.tab}${active === s.id ? ' ' + styles.tabActive : ''}`}
                onClick={() => setActive(s.id)}
              >
                <span className={styles.tabIcon}>{s.icon}</span>
                <span className={styles.tabLabel}>{s.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.panel}>
            <div className={styles.panelLeft}>
              <div className={styles.panelIconWrap}>{current.icon}</div>
              <h2 className={styles.panelTitle}>{current.title}</h2>
              <p className={styles.panelDesc}>{current.desc}</p>
              <a href="/contact" className={styles.panelCta}>Demander un devis →</a>
            </div>
            <div className={styles.panelRight}>
              <ul className={styles.itemList}>
                {current.items.map((item) => (
                  <li key={item.label} className={styles.item}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemDot} />
                      <span className={styles.itemLabel}>{item.label}</span>
                    </div>
                    <p className={styles.itemDetail}>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Un projet ? Parlons-en."
        subtitle="Étude technique gratuite et devis précis sous 48 heures."
      />
    </main>
  );
}

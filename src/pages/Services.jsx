import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import styles from './Services.module.css';

const services = [
  {
    tag: 'Service 01',
    title: 'Énergie solaire\nphotovoltaïque',
    emoji: '☀️',
    label: 'Énergie solaire photovoltaïque',
    desc: `Du dimensionnement à la mise en service, SPOT réalise des installations solaires sur mesure pour particuliers, entreprises et institutions. Nos systèmes sont conçus pour le climat sénégalais : ensoleillement maximal, haute durabilité.`,
    items: [
      { t: 'Panneaux monocristallins Tier 1', d: 'Canadian Solar, Jinko, rendement ≥ 21%. Montage aluminium anti-corrosion.' },
      { t: 'Systèmes hybrides', d: 'Couplage réseau SENELEC + solaire, basculement automatique, zéro coupure perçue.' },
      { t: 'Off-grid complet', d: 'Autonomie totale, batteries lithium LiFePO4. Idéal pour sites isolés.' },
      { t: 'Monitoring temps réel', d: 'Application mobile, alertes automatiques, rapport mensuel de production.' },
      { t: 'Contrats de maintenance', d: 'Nettoyage, inspection annuelle, garantie de performance.' },
    ],
    alt: false,
  },
  {
    tag: 'Service 02',
    title: 'Électricité\nbâtiment',
    emoji: '🏗️',
    label: 'Électricité bâtiment',
    desc: `Villas, immeubles, bureaux, hôtels — SPOT réalise l'intégralité de vos installations électriques courant fort et faible, neuves ou en rénovation, dans le respect des normes sénégalaises.`,
    items: [
      { t: 'Tableaux électriques et TGBT', d: 'Schneider, Legrand, ABB. Conception, fourniture, installation.' },
      { t: 'Câblage et mise aux normes', d: 'Câbles certifiés, chemins de câbles, conformité NFS.' },
      { t: 'Éclairage LED intelligent', d: 'Conception photométrique, détecteurs, variation d\'intensité.' },
      { t: 'Courant faible', d: 'Vidéosurveillance, interphonie, réseau informatique, contrôle d\'accès.' },
      { t: 'Domotique KNX', d: 'Automatisation volets, climatisation, éclairage. Compatible KNX et Zigbee.' },
    ],
    alt: true,
  },
  {
    tag: 'Service 03',
    title: 'Électricité\nindustrielle',
    emoji: '⚙️',
    label: 'Électricité industrielle',
    desc: `SPOT intervient sur vos sites de production, entrepôts et infrastructures tertiaires. Nos techniciens sont formés aux environnements contraignants : haute puissance, continuité de service, sécurité renforcée.`,
    items: [
      { t: 'Armoires de commande et puissance', d: 'Conception, câblage, tests FAT, mise en service sur site.' },
      { t: 'Câblage industriel', d: 'Chemins de câbles, bus terrain Modbus, Profibus, Ethernet IP.' },
      { t: 'Moteurs et variateurs', d: 'Installation, paramétrage, maintenance. ABB et Schneider.' },
      { t: 'Éclairage industriel LED', d: 'Ateliers, parkings. Économies jusqu\'à 60% sur la facture énergétique.' },
      { t: 'Maintenance préventive et curative', d: 'Contrats annuels, interventions d\'urgence 7j/7.' },
    ],
    alt: false,
  },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <main>
      <PageHero
        breadcrumb="Services"
        tag="Nos expertises"
        title="Trois domaines,<br/>une seule équipe."
        desc="SPOT couvre l'intégralité de vos besoins énergétiques — installation, maintenance, mise aux normes et optimisation."
      />

      {services.map((s) => (
        <div key={s.tag} className={`${styles.sdWrap} ${s.alt ? styles.sdAlt : styles.sdBlanc}`}>
          <div className={`${styles.sdInner} ${s.alt ? styles.sdInnerRev : ''}`}>
            <div className={styles.sdVis}>
              <div className={styles.sdVisIcon}>{s.emoji}</div>
              <div className={styles.sdVisLabel}>{s.label}</div>
            </div>
            <div className={styles.sdInfo}>
              <div className={styles.sdTag}>{s.tag}</div>
              <h2 className={styles.sdH3}>{s.title.split('\n').map((l, i) => (
                <span key={i}>{l}{i < s.title.split('\n').length - 1 && <br />}</span>
              ))}</h2>
              <p className={styles.sdDesc}>{s.desc}</p>
              <div className={styles.sdItems}>
                {s.items.map((it) => (
                  <div key={it.t} className={styles.sdItem}>
                    <div><strong>{it.t}</strong> — {it.d}</div>
                  </div>
                ))}
              </div>
              <button className={styles.btnDark} onClick={() => navigate('/contact')}>
                Demander un devis →
              </button>
            </div>
          </div>
        </div>
      ))}

      <CtaBand
        title="Un projet en tête ? Parlons-en."
        subtitle="Étude technique gratuite sous 48 heures."
      />
    </main>
  );
}

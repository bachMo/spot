import React, { useState } from 'react';
import styles from './Factures.module.css';

const FACTURES = [
  { id: 'F-2024-001', client: 'Complexe Sportif de Dakar', service: 'Énergie solaire', date: '15/01/2024', montant: '4 800 000', statut: 'payé' },
  { id: 'F-2024-002', client: 'Hôtel Teranga Saly', service: 'Climatisation VRV', date: '03/02/2024', montant: '7 200 000', statut: 'payé' },
  { id: 'F-2024-003', client: 'Résidence Les Almadies', service: 'Plomberie & Étanchéité', date: '20/03/2024', montant: '2 350 000', statut: 'payé' },
  { id: 'F-2024-004', client: 'Immeuble Plateau Business', service: 'Électricité bâtiment', date: '08/04/2024', montant: '3 100 000', statut: 'en attente' },
  { id: 'F-2024-005', client: 'Villa Mermoz — M. Diallo', service: 'Solaire off-grid', date: '22/05/2024', montant: '1 950 000', statut: 'payé' },
  { id: 'F-2024-006', client: 'Entrepôt Logistique Diamniadio', service: 'BTP clé en main', date: '14/06/2024', montant: '12 400 000', statut: 'en attente' },
  { id: 'F-2024-007', client: 'Centre Commercial Yoff', service: 'Maintenance climatisation', date: '01/07/2024', montant: '680 000', statut: 'retard' },
  { id: 'F-2024-008', client: 'Clinique Pasteur Dakar', service: 'Électricité industrielle', date: '18/08/2024', montant: '5 600 000', statut: 'payé' },
];

const STATUS_LABELS = {
  all: 'Toutes',
  payé: 'Payées',
  'en attente': 'En attente',
  retard: 'En retard',
};

export default function Factures() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? FACTURES : FACTURES.filter((f) => f.statut === filter);

  const total = (list) =>
    list.reduce((acc, f) => acc + parseInt(f.montant.replace(/\s/g, ''), 10), 0)
      .toLocaleString('fr-FR');

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoS}>S</span>
          <span className={styles.logoPOT}>POT</span>
        </div>
        <div className={styles.headerTitle}>Gestion des factures</div>
        <div className={styles.headerAccess}>Accès interne</div>
      </div>

      <div className={styles.inner}>
        <div className={styles.statsRow}>
          {[
            { l: 'Total factures', v: FACTURES.length },
            { l: 'Montant total', v: `${total(FACTURES)} FCFA` },
            { l: 'Payées', v: FACTURES.filter((f) => f.statut === 'payé').length },
            { l: 'En attente / retard', v: FACTURES.filter((f) => f.statut !== 'payé').length },
          ].map(({ l, v }) => (
            <div key={l} className={styles.stat}>
              <div className={styles.statV}>{v}</div>
              <div className={styles.statL}>{l}</div>
            </div>
          ))}
        </div>

        <div className={styles.toolbar}>
          <div className={styles.filters}>
            {Object.entries(STATUS_LABELS).map(([k, v]) => (
              <button
                key={k}
                className={`${styles.filterBtn} ${filter === k ? styles.filterActive : ''}`}
                onClick={() => setFilter(k)}
              >
                {v}
              </button>
            ))}
          </div>
          <div className={styles.count}>{filtered.length} facture{filtered.length !== 1 ? 's' : ''}</div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Référence</th>
                <th>Client</th>
                <th>Service</th>
                <th>Date</th>
                <th>Montant (FCFA)</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((f) => (
                <tr key={f.id}>
                  <td className={styles.tdRef}>{f.id}</td>
                  <td>{f.client}</td>
                  <td className={styles.tdService}>{f.service}</td>
                  <td>{f.date}</td>
                  <td className={styles.tdMontant}>{f.montant}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[`badge_${f.statut.replace(' ', '_')}`]}`}>
                      {f.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

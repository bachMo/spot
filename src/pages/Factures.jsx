import React, { useState } from 'react';
import styles from './Factures.module.css';

const INVOICES = [
  { id: 'FAC-2024-018', client: 'Complexe sportif Dakar', date: '2024-10-14', montant: '4 850 000', statut: 'payée' },
  { id: 'FAC-2024-017', client: 'Hôtel Les Teranga', date: '2024-09-28', montant: '2 340 000', statut: 'payée' },
  { id: 'FAC-2024-016', client: 'Résidence Almadies', date: '2024-09-05', montant: '1 120 000', statut: 'en attente' },
  { id: 'FAC-2024-015', client: 'Immeuble Plateau', date: '2024-08-22', montant: '3 200 000', statut: 'payée' },
  { id: 'FAC-2024-014', client: 'M. Ndiaye — Villa Mermoz', date: '2024-07-30', montant: '680 000', statut: 'payée' },
  { id: 'FAC-2024-013', client: 'Entrepôt Diamniadio', date: '2024-07-15', montant: '8 970 000', statut: 'retard' },
];

export default function Factures() {
  const [filter, setFilter] = useState('all');

  const visible = filter === 'all'
    ? INVOICES
    : INVOICES.filter((f) => f.statut === filter);

  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <div className={styles.logo}>SPOT</div>
          <div className={styles.pageTitle}>Gestion des factures</div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.statsRow}>
          {[
            { l: 'Total émis', v: `${INVOICES.length} factures` },
            { l: 'Payées', v: `${INVOICES.filter(f => f.statut === 'payée').length}` },
            { l: 'En attente', v: `${INVOICES.filter(f => f.statut === 'en attente').length}` },
            { l: 'En retard', v: `${INVOICES.filter(f => f.statut === 'retard').length}` },
          ].map(({ l, v }) => (
            <div key={l} className={styles.statCard}>
              <div className={styles.statV}>{v}</div>
              <div className={styles.statL}>{l}</div>
            </div>
          ))}
        </div>

        <div className={styles.tableSection}>
          <div className={styles.tableHead}>
            <div className={styles.tableTitle}>Factures</div>
            <div className={styles.filterRow}>
              {['all', 'payée', 'en attente', 'retard'].map((s) => (
                <button
                  key={s}
                  className={`${styles.filterBtn} ${filter === s ? styles.filterActive : ''}`}
                  onClick={() => setFilter(s)}
                >
                  {s === 'all' ? 'Toutes' : s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Référence</th>
                <th>Client</th>
                <th>Date</th>
                <th>Montant (FCFA)</th>
                <th>Statut</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {visible.map((inv) => (
                <tr key={inv.id}>
                  <td className={styles.tdRef}>{inv.id}</td>
                  <td>{inv.client}</td>
                  <td className={styles.tdDate}>{inv.date}</td>
                  <td className={styles.tdMontant}>{inv.montant}</td>
                  <td>
                    <span className={`${styles.badge} ${styles[`badge_${inv.statut.replace(' ', '_')}`]}`}>
                      {inv.statut}
                    </span>
                  </td>
                  <td>
                    <button className={styles.actionBtn}>PDF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {visible.length === 0 && (
            <div className={styles.empty}>Aucune facture pour ce filtre.</div>
          )}
        </div>
      </div>
    </main>
  );
}

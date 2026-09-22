import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Factures.module.css';

const fmt = (n) => Math.round(n).toLocaleString('fr-FR') + ' FCFA';

let nextId = 3;

const defaultItems = [
  { id: 1, desc: 'Installation système solaire 5 kWc (panneaux + onduleur + câblage)', qty: 1, price: 3500000 },
  { id: 2, desc: "Main-d'œuvre et frais de déplacement", qty: 1, price: 450000 },
];

const today = new Date();
const due   = new Date(); due.setDate(due.getDate() + 30);
const toISO = (d) => d.toISOString().split('T')[0];
const toFR  = (s) => s ? new Date(s).toLocaleDateString('fr-FR') : '—';

export default function Factures() {
  const [items, setItems]     = useState(defaultItems);
  const [facNum, setFacNum]   = useState('SPOT-2025-001');
  const [facDate, setFacDate] = useState(toISO(today));
  const [facDue, setFacDue]   = useState(toISO(due));
  const [cliName, setCliName] = useState('');
  const [cliTel, setCliTel]   = useState('');
  const [cliAddr, setCliAddr] = useState('');
  const [cliEmail, setCliEmail] = useState('');
  const [tva, setTva]         = useState(18);
  const [note, setNote]       = useState('');
  const [toast, setToast]     = useState(false);
  const previewRef            = useRef();

  const ht     = items.reduce((s, i) => s + i.qty * i.price, 0);
  const tvaAmt = ht * tva / 100;
  const ttc    = ht + tvaAmt;

  const addItem = () => {
    setItems(prev => [...prev, { id: nextId++, desc: '', qty: 1, price: 0 }]);
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const updateItem = (id, field, val) => {
    setItems(prev => prev.map(i =>
      i.id === id ? { ...i, [field]: field === 'desc' ? val : (parseFloat(val) || 0) } : i
    ));
  };

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  const reset = () => {
    if (!window.confirm('Réinitialiser toute la facture ?')) return;
    setItems(defaultItems);
    setCliName(''); setCliTel(''); setCliAddr(''); setCliEmail('');
    setFacNum('SPOT-2025-001'); setNote('');
    showToast();
  };

  const print = () => window.print();

  return (
    <div className={styles.page}>
      {/* Barre interne */}
      <div className={styles.bar}>
        <span className={styles.barLabel}>🔒 Espace interne SPOT — Générateur de factures</span>
        <Link to="/" className={styles.barBack}>← Retour au site</Link>
      </div>

      <div className={styles.wrap}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>⚡ Générateur de factures SPOT</h1>
          <span className={styles.headerSub}>Usage interne</span>
        </div>

        {/* ── FORMULAIRE ── */}
        <div className={styles.form}>
          <div className={styles.grid3}>
            <div className={styles.fg}>
              <label className={styles.fl}>N° de facture</label>
              <input className={styles.fi} value={facNum} onChange={e => setFacNum(e.target.value)} />
            </div>
            <div className={styles.fg}>
              <label className={styles.fl}>Date d'émission</label>
              <input className={styles.fi} type="date" value={facDate} onChange={e => setFacDate(e.target.value)} />
            </div>
            <div className={styles.fg}>
              <label className={styles.fl}>Date d'échéance</label>
              <input className={styles.fi} type="date" value={facDue} onChange={e => setFacDue(e.target.value)} />
            </div>
          </div>

          <div className={styles.sectionTitle}>Client</div>
          <div className={styles.grid2}>
            <div className={styles.fg}><label className={styles.fl}>Nom / Société</label><input className={styles.fi} placeholder="Nom du client" value={cliName} onChange={e => setCliName(e.target.value)} /></div>
            <div className={styles.fg}><label className={styles.fl}>Téléphone</label><input className={styles.fi} placeholder="+221 77 000 00 00" value={cliTel} onChange={e => setCliTel(e.target.value)} /></div>
            <div className={styles.fg}><label className={styles.fl}>Adresse</label><input className={styles.fi} placeholder="Adresse du client" value={cliAddr} onChange={e => setCliAddr(e.target.value)} /></div>
            <div className={styles.fg}><label className={styles.fl}>Email</label><input className={styles.fi} placeholder="email@client.com" value={cliEmail} onChange={e => setCliEmail(e.target.value)} /></div>
          </div>

          <div className={styles.sectionTitle}>Prestations</div>
          <div className={styles.itemsHeader}>
            <span>Description</span><span>Qté</span><span>Prix unit.</span><span>Total HT</span><span />
          </div>
          {items.map((it) => (
            <div key={it.id} className={styles.itemRow}>
              <input className={styles.ii} placeholder="Description de la prestation" value={it.desc} onChange={e => updateItem(it.id, 'desc', e.target.value)} />
              <input className={styles.ii} type="number" min="1" value={it.qty} onChange={e => updateItem(it.id, 'qty', e.target.value)} />
              <input className={styles.ii} type="number" min="0" value={it.price} onChange={e => updateItem(it.id, 'price', e.target.value)} />
              <div className={styles.itotal}>{fmt(it.qty * it.price)}</div>
              <button className={styles.idel} onClick={() => removeItem(it.id)}>✕</button>
            </div>
          ))}
          <button className={styles.addBtn} onClick={addItem}>+ Ajouter une ligne</button>

          <div className={styles.grid2} style={{ marginTop: 14 }}>
            <div className={styles.fg}><label className={styles.fl}>TVA (%)</label><input className={styles.fi} type="number" value={tva} onChange={e => setTva(parseFloat(e.target.value) || 0)} /></div>
            <div className={styles.fg}><label className={styles.fl}>Note de bas de page</label><input className={styles.fi} placeholder="Conditions de paiement..." value={note} onChange={e => setNote(e.target.value)} /></div>
          </div>

          <div className={styles.actions}>
            <button className={`${styles.fb} ${styles.fbSec}`} onClick={reset}>🔄 Réinitialiser</button>
            <button className={`${styles.fb} ${styles.fbJaune}`} onClick={print}>🖨️ Imprimer / PDF</button>
          </div>
        </div>

        {/* ── APERÇU FACTURE ── */}
        <div className={styles.doc} ref={previewRef} id="facture-preview">
          <div className={styles.docTop}>
            <div>
              <div className={styles.docLogo}>SP<span>O</span>T</div>
              <div className={styles.docTagline}>Solaire Performance Optimisation et Teneur</div>
              <div className={styles.docCoords}>
                📍 Dakar, Sénégal<br />
                📞 +221 77 788 63 18<br />
                ✉️ contact@spot-energie.sn<br />
                NINEA : 007XXXXXXX
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className={styles.docFacTitle}>FACTURE</div>
              <div className={styles.docFacNum}>{facNum || '—'}</div>
              <div className={styles.docFacDate}>Date : {toFR(facDate)}</div>
              <div className={styles.docFacDate}>Échéance : {toFR(facDue)}</div>
            </div>
          </div>

          <div className={styles.docParties}>
            <div>
              <div className={styles.partyLabel}>Émetteur</div>
              <div className={styles.partyName}>SPOT Énergie</div>
              <div className={styles.partyDetails}>Dakar, Sénégal<br />+221 77 788 63 18</div>
            </div>
            <div>
              <div className={styles.partyLabel}>Facturé à</div>
              <div className={styles.partyName}>{cliName || '—'}</div>
              <div className={styles.partyDetails}>
                {[cliAddr, cliTel, cliEmail].filter(Boolean).join('\n').split('\n').map((l, i) => (
                  <span key={i}>{l}<br /></span>
                )) || '—'}
              </div>
            </div>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '45%' }}>Description</th>
                <th style={{ width: '8%' }}>Qté</th>
                <th style={{ width: '22%' }}>Prix unitaire</th>
                <th style={{ width: '22%' }}>Total HT</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr><td colSpan={4} style={{ textAlign: 'center', color: 'var(--t3)', padding: '20px' }}>Aucune prestation</td></tr>
              ) : items.map((it) => (
                <tr key={it.id}>
                  <td>{it.desc || '—'}</td>
                  <td style={{ textAlign: 'right' }}>{it.qty}</td>
                  <td style={{ textAlign: 'right' }}>{fmt(it.price)}</td>
                  <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--t1)' }}>{fmt(it.qty * it.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.totals}>
            <div className={styles.totalsBlock}>
              <div className={styles.totRow}><span>Sous-total HT</span><span>{fmt(ht)}</span></div>
              <div className={styles.totRow}><span>TVA ({tva}%)</span><span>{fmt(tvaAmt)}</span></div>
              <div className={`${styles.totRow} ${styles.totTotal}`}><span>Total TTC</span><span>{fmt(ttc)}</span></div>
            </div>
          </div>

          <div className={styles.docFoot}>
            <p>
              Merci de votre confiance · Paiement par virement, Orange Money (+221 77 788 63 18) ou espèces
              {note && <><br />{note}</>}
            </p>
          </div>
        </div>
      </div>

      {toast && <div className={styles.toast}>✓ Facture mise à jour</div>}
    </div>
  );
}

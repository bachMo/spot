import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import styles from './Contact.module.css';

const infos = [
  { icon: '📞', label: 'Téléphone', val: '+221 77 788 63 18', sub: 'Lun–Sam · 8h–18h' },
  { icon: '💬', label: 'WhatsApp', val: '+221 77 788 63 18', sub: 'Réponse rapide garantie' },
  { icon: '✉️', label: 'Email', val: 'contact@spot-energie.sn', sub: 'Réponse sous 24h' },
  { icon: '📍', label: 'Adresse', val: 'Dakar, Sénégal', sub: 'Intervention dans toute la région' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <PageHero
        breadcrumb="Contact"
        tag="Contact"
        title="Parlons de<br/>votre projet."
        desc="Remplissez le formulaire ou appelez-nous directement. Notre équipe vous répond sous 24 heures."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.layout}>
            {/* Infos */}
            <div>
              <h3 className={styles.infoTitle}>Nos coordonnées</h3>
              <div className={styles.cards}>
                {infos.map(({ icon, label, val, sub }) => (
                  <div key={label} className={styles.card}>
                    <div className={styles.cardIcon}>{icon}</div>
                    <div>
                      <div className={styles.cardLabel}>{label}</div>
                      <div className={styles.cardVal}>{val}</div>
                      <div className={styles.cardSub}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.mapPlaceholder}>
                <span>🗺️</span>
                <p>Dakar, Sénégal — Intervention nationale</p>
              </div>
            </div>

            {/* Formulaire */}
            <div className={styles.formWrap}>
              <div className={styles.formTitle}>Demande de devis</div>
              <div className={styles.formSub}>Gratuit et sans engagement — réponse sous 48h</div>

              {sent ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h4>Demande envoyée !</h4>
                  <p>Nous vous recontactons sous 24 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.row2}>
                    <div className={styles.fg}>
                      <label className={styles.fl}>Prénom & Nom</label>
                      <input className={styles.fi} type="text" placeholder="Mamadou Diallo" required />
                    </div>
                    <div className={styles.fg}>
                      <label className={styles.fl}>Téléphone / WhatsApp</label>
                      <input className={styles.fi} type="tel" placeholder="+221 77 000 00 00" required />
                    </div>
                  </div>
                  <div className={styles.fg}>
                    <label className={styles.fl}>Email (optionnel)</label>
                    <input className={styles.fi} type="email" placeholder="exemple@email.com" />
                  </div>
                  <div className={styles.fg}>
                    <label className={styles.fl}>Type de projet</label>
                    <select className={`${styles.fi} ${styles.fselect}`}>
                      <option value="">Choisir un service...</option>
                      <option>Installation solaire résidentielle</option>
                      <option>Installation solaire commerciale</option>
                      <option>Électricité bâtiment neuf</option>
                      <option>Rénovation électrique</option>
                      <option>Électricité industrielle</option>
                      <option>Maintenance / dépannage</option>
                    </select>
                  </div>
                  <div className={styles.fg}>
                    <label className={styles.fl}>Localisation</label>
                    <input className={styles.fi} type="text" placeholder="Quartier, ville..." />
                  </div>
                  <div className={styles.fg}>
                    <label className={styles.fl}>Description du projet</label>
                    <textarea
                      className={`${styles.fi} ${styles.fta}`}
                      placeholder="Décrivez votre projet : surface, besoins, contraintes..."
                    />
                  </div>
                  <button type="submit" className={styles.submit}>
                    Envoyer ma demande →
                  </button>
                  <p className={styles.privacy}>Vos données sont confidentielles et ne seront jamais partagées.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

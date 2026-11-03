import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import styles from './Contact.module.css';

const INITIAL = { nom: '', email: '', tel: '', sujet: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = Object.entries(form)
      .map(([k, v]) => `${k}: ${v}`)
      .join('%0A');
    window.location.href = `mailto:hamidousy96@gmail.com?subject=Demande de devis — ${form.sujet || 'SPOT'}&body=${body}`;
    setSent(true);
  };

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Discutons de votre projet."
        subtitle="Étude technique gratuite et devis détaillé sous 48 heures. Intervention rapide partout au Sénégal."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Nos coordonnées</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>📞</div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardLabel}>Téléphone & WhatsApp</div>
                    <a href="tel:+221777886318" className={styles.cardVal}>+221 77 788 63 18</a>
                    <div className={styles.cardSub}>WhatsApp Business disponible</div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>✉️</div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardLabel}>Email</div>
                    <a href="mailto:contact@spot-senegal.com" className={styles.cardVal}>contact@spot-senegal.com</a>
                    <div className={styles.cardSub}>Réponse sous 24h ouvrées</div>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>📍</div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardLabel}>Adresse</div>
                    <div className={styles.cardVal}>Dakar, Sénégal</div>
                    <div className={styles.cardSub}>Intervention partout au Sénégal</div>
                  </div>
                </div>
              </div>
              <div className={styles.infoNote}>
                <div className={styles.noteIcon}>⏱️</div>
                <div>
                  <strong>Devis sous 48h</strong>
                  <p>Après réception de votre demande, notre équipe vous contacte pour une étude technique gratuite.</p>
                </div>
              </div>
            </div>

            <div className={styles.formWrap}>
              {sent ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✅</div>
                  <h3>Demande envoyée !</h3>
                  <p>Votre client mail vient de s'ouvrir. Notre équipe vous répondra sous 48 heures.</p>
                  <button className={styles.successBtn} onClick={() => setSent(false)}>Nouvelle demande</button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={submit}>
                  <h2 className={styles.formTitle}>Demande de devis gratuit</h2>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="nom">Nom complet *</label>
                      <input className={styles.input} id="nom" name="nom" type="text" required placeholder="Votre nom" value={form.nom} onChange={set} />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="tel">Téléphone *</label>
                      <input className={styles.input} id="tel" name="tel" type="tel" required placeholder="+221 7X XXX XX XX" value={form.tel} onChange={set} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.input} id="email" name="email" type="email" placeholder="votre@email.com" value={form.email} onChange={set} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="sujet">Type de projet *</label>
                    <select className={styles.input} id="sujet" name="sujet" required value={form.sujet} onChange={set}>
                      <option value="">Sélectionnez un domaine</option>
                      <option>Énergie & Électricité</option>
                      <option>Climatisation & Maintenance</option>
                      <option>Plomberie & Étanchéité</option>
                      <option>BTP & Services Techniques</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">Description du projet *</label>
                    <textarea className={`${styles.input} ${styles.textarea}`} id="message" name="message" required rows={5} placeholder="Décrivez votre projet, sa localisation et vos contraintes..." value={form.message} onChange={set} />
                  </div>
                  <button className={styles.submit} type="submit">Envoyer ma demande →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

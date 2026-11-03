import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import styles from './Contact.module.css';

const SERVICES = [
  'Énergie & Électricité',
  'Climatisation & Maintenance',
  'Plomberie & Étanchéité',
  'BTP & Services Techniques',
  'Autre',
];

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', tel: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('https://formsubmit.co/ajax/hamidousy96@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nom: form.nom,
          Email: form.email,
          Téléphone: form.tel,
          Service: form.service,
          Message: form.message,
          _subject: `Demande SPOT — ${form.service || 'Non précisé'}`,
          _replyto: form.email,
          _to: 'hamidousy96@gmail.com',
        }),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        subtitle="Devis gratuit sous 48h. Nos équipes vous répondent directement."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.layout}>
            <div className={styles.formWrap}>
              {sent ? (
                <div className={styles.thanks}>
                  <div className={styles.thanksIcon} aria-hidden="true">✓</div>
                  <div className={styles.thanksTitle}>Message envoyé</div>
                  <p className={styles.thanksDesc}>Nous vous répondrons sous 48 heures ouvrables. Merci de votre confiance.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="nom">Nom complet</label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        placeholder="Votre nom"
                        className={styles.input}
                        value={form.nom}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="votre@email.com"
                        className={styles.input}
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="tel">Téléphone</label>
                      <input
                        id="tel"
                        name="tel"
                        type="tel"
                        placeholder="+221 77 000 00 00"
                        className={styles.input}
                        value={form.tel}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="service">Domaine</label>
                      <select
                        id="service"
                        name="service"
                        className={styles.select}
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Sélectionner un domaine</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">Décrivez votre projet</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Localisation, nature des travaux, superficie, délais souhaités…"
                      className={styles.textarea}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.submit}
                    disabled={sending}
                  >
                    {sending ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  </button>
                </form>
              )}
            </div>

            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Téléphone</div>
                <a href="tel:+221777886318" className={styles.infoValue}>+221 77 788 63 18</a>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Email</div>
                <a href="mailto:hamidousy96@gmail.com" className={styles.infoValue}>hamidousy96@gmail.com</a>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Zone d'intervention</div>
                <div className={styles.infoValue}>Dakar et régions du Sénégal</div>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Horaires</div>
                <div className={styles.infoValue}>Lun–Sam, 8h–18h</div>
              </div>
              <div className={styles.infoNote}>
                Devis gratuit · Réponse sous 48h · Intervention rapide
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

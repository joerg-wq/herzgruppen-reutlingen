import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';
import { toast } from 'sonner';
import { fadeInUp, stagger } from '@/lib/animations';

export default function Join() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    dateOfBirth: '',
    street: '',
    zipCode: '',
    city: '',
    phone: '',
    email: '',
    preferredLocation: '',
    message: '',
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.lastName || !formData.firstName || !formData.email) {
      setError('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }

    if (!formData.privacy) {
      setError('Bitte akzeptieren Sie die Datenschutzerklärung.');
      return;
    }

    try {
      setIsLoading(true);
      const mailto = CONTACT_EMAIL;
      const subject = encodeURIComponent('Interesse an Herzgruppe – Kontaktaufnahme');
      const bodyLines = [
        'Guten Tag,',
        '',
        'ich interessiere mich für die Teilnahme an einer Herzgruppe und bitte um Kontaktaufnahme.',
        '',
        `Name: ${formData.lastName}`,
        `Vorname: ${formData.firstName}`,
        `Geburtsdatum: ${formData.dateOfBirth || '-'}`,
        '',
        `Straße: ${formData.street || '-'}`,
        `PLZ / Ort: ${formData.zipCode || '-'} ${formData.city || '-'}`,
        '',
        `Telefon: ${formData.phone || '-'}`,
        `E-Mail: ${formData.email}`,
        '',
        `Bevorzugter Standort: ${formData.preferredLocation || '-'}`,
        '',
        formData.message ? `Nachricht:\n${formData.message}` : '',
        '',
        'Mit freundlichen Grüßen',
        `${formData.firstName} ${formData.lastName}`,
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));

      window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;

      setSubmitted(true);
      toast.success('E-Mail vorbereitet. Bitte prüfen und absenden.');
      setFormData({
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        street: '',
        zipCode: '',
        city: '',
        phone: '',
        email: '',
        preferredLocation: '',
        message: '',
        privacy: false,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Mitmachen
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Sie möchten in einer Herzgruppe im Kreis Reutlingen trainieren? Melden Sie hier Ihr Interesse – wir setzen uns mit Ihnen in Verbindung.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8 text-foreground"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                So kommen Sie in eine Herzgruppe
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
                {/* Desktop connecting line */}
                <div className="hidden md:block absolute top-7 left-[calc(10%+28px)] right-[calc(10%+28px)] h-0.5 bg-primary/20" />

                {[
                  {
                    number: '1',
                    title: 'Interesse melden',
                    description:
                      'Füllen Sie unser Kontaktformular aus oder rufen Sie uns an. Das ist noch keine formelle Anmeldung.',
                  },
                  {
                    number: '2',
                    title: 'Rehasportverordnung holen',
                    description:
                      'Ihr Hausarzt oder Kardiologe stellt eine Verordnung für Rehasport aus (Formular 56).',
                  },
                  {
                    number: '3',
                    title: 'Krankenkasse genehmigt',
                    description:
                      'Lassen Sie die Verordnung bestätigen. Viele Kassen verzichten auf eine Vorab-Genehmigung – Sie können sofort starten.',
                  },
                  {
                    number: '4',
                    title: 'Ärztliche Freigabe vor Ort',
                    description:
                      'Der anwesende Arzt befürwortet Ihre Teilnahme und legt gemeinsam mit Ihnen die Belastung fest.',
                  },
                  {
                    number: '5',
                    title: 'Regelmäßig trainieren',
                    description:
                      'Sie unterschreiben bei jeder Stunde auf Ihrer Teilnehmerliste – wir rechnen direkt mit den Kostenträgern ab.',
                  },
                ].map((step) => (
                  <motion.div
                    key={step.number}
                    className="bg-white p-5 rounded-xl border border-border text-center relative card-hover"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto shadow-md relative z-10">
                      {step.number}
                    </div>
                    <h4 className="font-semibold text-base mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Formular 56 Hinweis */}
              <motion.div
                className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-5 max-w-3xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <p className="text-base text-foreground">
                  <strong>Gut zu wissen:</strong> Die eigentliche Anmeldung erfolgt über die Rehasportverordnung (Formular 56) Ihres Arztes.{' '}
                  <a
                    href="https://www.dmrz.de/wissen/ratgeber/rehasportverordnung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Mehr zur Rehasportverordnung <ExternalLink size={14} />
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section id="formular" className="section-padding bg-secondary/5 scroll-mt-24">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-3">Vielen Dank für Ihr Interesse!</h3>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        Ihr E-Mail-Programm sollte sich geöffnet haben. Bitte prüfen Sie die vorbefüllte Nachricht und senden Sie sie ab. Wir melden uns bei Ihnen.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          size="lg"
                          className="text-base py-3 h-auto"
                        >
                          Neue Anfrage
                        </Button>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="inline-flex"
                        >
                          <Button variant="ghost" size="lg" className="text-base py-3 h-auto">
                            <Mail className="w-5 h-5 mr-2" />
                            E-Mail erneut öffnen
                          </Button>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div id="form-error" role="alert" className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
                          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                          <p className="text-base text-red-800">{error}</p>
                        </div>
                      )}

                      {/* Hint */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-base text-foreground">
                        <p className="font-semibold mb-2">Unverbindliche Interessensbekundung</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Dies ist <strong>keine formelle Anmeldung</strong>, sondern eine Kontaktanfrage an den Verein.</li>
                          <li>Ihre Angaben werden nicht auf einem Server gespeichert, sondern nur in einer vorbefüllten E-Mail geöffnet.</li>
                          <li>Die eigentliche Anmeldung erfolgt später mit einer Rehasportverordnung (Formular 56).</li>
                        </ul>
                      </div>

                      {/* Personal Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Persönliche Daten</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="field-lastName" className="block text-base font-medium mb-2">Name *</label>
                            <input
                              id="field-lastName"
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              aria-required="true"
                              aria-describedby={error ? 'form-error' : undefined}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="field-firstName" className="block text-base font-medium mb-2">Vorname *</label>
                            <input
                              id="field-firstName"
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              aria-required="true"
                              aria-describedby={error ? 'form-error' : undefined}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              required
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label htmlFor="field-dateOfBirth" className="block text-base font-medium mb-2">Geburtsdatum</label>
                          <input
                            id="field-dateOfBirth"
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Adresse</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="field-street" className="block text-base font-medium mb-2">Straße & Hausnummer</label>
                            <input
                              id="field-street"
                              type="text"
                              name="street"
                              value={formData.street}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label htmlFor="field-zipCode" className="block text-base font-medium mb-2">PLZ</label>
                              <input
                                id="field-zipCode"
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                                maxLength={5}
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label htmlFor="field-city" className="block text-base font-medium mb-2">Ort</label>
                              <input
                                id="field-city"
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Kontaktdaten</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="field-phone" className="block text-base font-medium mb-2">Telefon</label>
                            <input
                              id="field-phone"
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label htmlFor="field-email" className="block text-base font-medium mb-2">E-Mail *</label>
                            <input
                              id="field-email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              aria-required="true"
                              aria-describedby={error ? 'form-error' : undefined}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Preferences */}
                      <div>
                        <label htmlFor="field-preferredLocation" className="text-lg font-semibold mb-4 block">Bevorzugter Standort</label>
                        <select
                          id="field-preferredLocation"
                          name="preferredLocation"
                          value={formData.preferredLocation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Keine besondere Angabe</option>
                          <option value="Reutlingen">Herzsport Reutlingen</option>
                          <option value="Pfullingen">Herzsport Pfullingen</option>
                          <option value="Neckar-Schönbuch">Herzsport Neckar-Schönbuch</option>
                          <option value="Metzingen">Herzsport Metzingen</option>
                          <option value="Dettingen">Herzsport Dettingen</option>
                          <option value="Bad Urach">Herzsport Bad Urach</option>
                          <option value="Münsingen">Herzsport Münsingen</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="field-message" className="block text-base font-medium mb-2">Nachricht (optional)</label>
                        <textarea
                          id="field-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="z.B. Fragen, besondere Wünsche oder Hinweise"
                        />
                      </div>

                      {/* Privacy */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                        <label htmlFor="field-privacy" className="flex items-start gap-3">
                          <input
                            id="field-privacy"
                            type="checkbox"
                            name="privacy"
                            checked={formData.privacy}
                            onChange={handleChange}
                            aria-required="true"
                            className="mt-1 w-4 h-4"
                            required
                          />
                          <span className="text-base text-foreground">
                            Ich akzeptiere die{' '}
                            <Link href="/datenschutz">
                              <span className="text-primary hover:underline cursor-pointer">Datenschutzerklärung</span>
                            </Link> *
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        className="w-full bg-accent hover:bg-accent/85 active:scale-[0.97] text-accent-foreground text-base py-3 h-auto shadow-md transition-all"
                      >
                        {isLoading ? 'Wird gesendet...' : 'Interesse melden'}
                        {!isLoading && <ArrowRight className="ml-2" size={18} />}
                      </Button>
                    </form>
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8 text-foreground"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Häufig gestellte Fragen
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: 'Benötige ich eine ärztliche Verordnung?',
                    answer: 'Ja, für die Teilnahme benötigen Sie eine Rehasportverordnung (Formular 56) von Ihrem Arzt. Über unser Formular melden Sie erst einmal Ihr Interesse – die Verordnung bringen Sie dann zum Einstieg mit.',
                  },
                  {
                    question: 'Muss ich auf die Genehmigung der Kasse warten?',
                    answer: 'Viele Krankenkassen verzichten auf eine Vorab-Genehmigung. Sie können oft sofort starten. Fragen Sie bei Ihrer Kasse nach oder schauen Sie auf wbrs-online.net.',
                  },
                  {
                    question: 'Kann ich meine Gruppe später wechseln?',
                    answer: 'Ja, Sie können jederzeit mit uns Kontakt aufnehmen, um Ihre bevorzugte Gruppe zu ändern.',
                  },
                  {
                    question: 'Welche Kosten entstehen?',
                    answer: 'Die Kosten werden von den meisten Krankenkassen übernommen. Kontaktieren Sie uns für Details.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl border border-border card-hover"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <h4 className="font-semibold text-base mb-2">{item.question}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

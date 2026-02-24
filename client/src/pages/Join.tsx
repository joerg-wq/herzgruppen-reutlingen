import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Mail, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';
import { toast } from 'sonner';
import { fadeInUp, stagger } from '@/lib/animations';

export default function Join() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    medicalCondition: '',
    doctorRecommendation: '',
    preferredLocation: '',
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

    if (!formData.firstName || !formData.lastName || !formData.email) {
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
      const subject = encodeURIComponent('Anmeldung Herzgruppe');
      const bodyLines = [
        'Guten Tag,',
        '',
        'ich möchte mich für die Herzgruppe anmelden.',
        '',
        `Vorname: ${formData.firstName}`,
        `Nachname: ${formData.lastName}`,
        `E-Mail: ${formData.email}`,
        `Telefon: ${formData.phone || '-'}`,
        `Geburtsdatum: ${formData.dateOfBirth || '-'}`,
        '',
        'Medizinische Informationen:',
        formData.medicalCondition || '-',
        '',
        'Ärztliche Empfehlung / Verordnung:',
        formData.doctorRecommendation || '-',
        '',
        `Bevorzugter Standort: ${formData.preferredLocation || '-'}`,
        '',
        'Hinweis: Bitte fügen Sie Ihrer E-Mail die ärztliche Empfehlung / Verordnung als Anhang hinzu, sofern vorhanden.',
        '',
        'Mit freundlichen Grüßen',
        `${formData.firstName} ${formData.lastName}`,
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));

      window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;

      setSubmitted(true);
      toast.success('E-Mail-Anmeldung vorbereitet. Bitte prüfen und absenden.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        medicalCondition: '',
        doctorRecommendation: '',
        preferredLocation: '',
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

      <main className="flex-1">
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
                Teilnahme & Anmeldung
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Melden Sie sich für eine ambulante Herzgruppe im Kreis Reutlingen an. Mit einer ärztlichen Verordnung (z.&nbsp;B. Formular&nbsp;56) können Sie am Rehasport teilnehmen.
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
                So funktioniert die Anmeldung
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
                {/* Desktop connecting line */}
                <div className="hidden md:block absolute top-7 left-[calc(10%+28px)] right-[calc(10%+28px)] h-0.5 bg-primary/20" />

                {[
                  {
                    number: '1',
                    title: 'Ärztliche Verordnung holen',
                    description:
                      'Ihr Hausarzt oder Kardiologe stellt eine Verordnung für Rehasport/Herzsport (z. B. Formular 56) aus.',
                  },
                  {
                    number: '2',
                    title: 'Krankenkasse genehmigt',
                    description:
                      'Lassen Sie die Verordnung von Ihrer Krankenkasse bestätigen (Stempel und Gültigkeitsdauer). Erstverordnungen gelten in der Regel für zwei Jahre.',
                  },
                  {
                    number: '3',
                    title: 'Kontakt aufnehmen',
                    description:
                      'Melden Sie sich bei der Geschäftsstelle oder kommen Sie mit der genehmigten Verordnung zu einer Gruppenstunde.',
                  },
                  {
                    number: '4',
                    title: 'Ärztliche Freigabe vor Ort',
                    description:
                      'Der anwesende Arzt/die anwesende Ärztin befürwortet Ihre Teilnahme und legt mit Ihnen gemeinsam die Belastung fest.',
                  },
                  {
                    number: '5',
                    title: 'Regelmäßig teilnehmen',
                    description:
                      'Sie unterschreiben bei jeder Stunde auf Ihrer Teilnehmerliste – auf dieser Basis rechnen wir direkt mit den Kostenträgern ab.',
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
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-secondary/5">
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
                      <h3 className="text-2xl font-bold mb-3">Anmeldung erfolgreich!</h3>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        Vielen Dank für Ihre Anmeldung. Ihr E-Mail-Programm sollte sich geöffnet haben – bitte prüfen Sie die vorbefüllte Nachricht, ergänzen Sie ggf. Anhänge (z.B. ärztliche Verordnung) und senden Sie die E-Mail ab.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          size="lg"
                          className="text-base py-3 h-auto"
                        >
                          Neue Anmeldung
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
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3">
                          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                          <p className="text-base text-red-800">{error}</p>
                        </div>
                      )}

                      {/* Hint */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-base text-foreground">
                        <p className="font-semibold mb-2">Wichtige Hinweise zur Anmeldung</p>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          <li>Mit * markierte Felder sind Pflichtfelder.</li>
                          <li>Ihre Angaben werden nicht auf einem Server gespeichert, sondern nur in einer vorbefüllten E-Mail geöffnet.</li>
                          <li>Die E-Mail können Sie vor dem Absenden jederzeit prüfen, bearbeiten und um Anhänge (z.B. ärztliche Verordnung) ergänzen.</li>
                        </ul>
                      </div>

                      {/* Personal Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Persönliche Daten</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-base font-medium mb-2">Vorname *</label>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-base font-medium mb-2">Nachname *</label>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Kontaktdaten</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-base font-medium mb-2">E-Mail *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-base font-medium mb-2">Telefon</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Medical Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Medizinische Informationen</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-base font-medium mb-2">Geburtsdatum</label>
                            <input
                              type="date"
                              name="dateOfBirth"
                              value={formData.dateOfBirth}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-base font-medium mb-2">Herzerkrankung / Diagnose</label>
                            <textarea
                              name="medicalCondition"
                              value={formData.medicalCondition}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="z.B. Herzinfarkt, Herzschwäche, etc."
                            />
                          </div>
                          <div>
                            <label className="block text-base font-medium mb-2">Ärztliche Empfehlung / Verordnung</label>
                            <textarea
                              name="doctorRecommendation"
                              value={formData.doctorRecommendation}
                              onChange={handleChange}
                              rows={2}
                              className="w-full px-4 py-3 border border-border rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="Name und Kontakt des Arztes"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Preferences */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Präferenzen</h3>
                        <div>
                          <label className="block text-base font-medium mb-2">Bevorzugte Herzgruppe (optional)</label>
                          <select
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
                            <option value="Bad Urach (Schlaganfallgruppe)">Schlaganfallgruppe Bad Urach</option>
                          </select>
                        </div>
                      </div>

                      {/* Privacy */}
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            name="privacy"
                            checked={formData.privacy}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4"
                            required
                          />
                          <span className="text-base text-foreground">
                            Ich akzeptiere die{' '}
                            <Link href="/datenschutz">
                              <span className="text-primary hover:underline cursor-pointer">Datenschutzerklärung</span>
                            </Link>
                            {' '}und{' '}
                            <span className="text-primary">Nutzungsbedingungen</span> *
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 h-auto"
                      >
                        {isLoading ? 'Wird eingereicht...' : 'Anmeldung einreichen'}
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
                    question: 'Benötige ich eine ärztliche Empfehlung?',
                    answer: 'Ja, eine ärztliche Empfehlung oder Verordnung ist erforderlich. Dies ist ein wichtiger Sicherheitsaspekt für Ihr Training.',
                  },
                  {
                    question: 'Wie lange dauert die Überprüfung?',
                    answer: 'Normalerweise benötigen wir 3-5 Werktage zur Überprüfung Ihrer Unterlagen.',
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

import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Upload, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';
import { toast } from 'sonner';

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
  const [documentFile, setDocumentFile] = useState<File | null>(null);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Datei ist zu groß. Maximum 5MB.');
        return;
      }
      setDocumentFile(file);
      setError('');
    }
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
      // In der statischen Version speichern wir die Daten nicht serverseitig.
      // Stattdessen öffnen wir eine vorbefüllte E-Mail an die Geschäftsstelle.
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
      setDocumentFile(null);
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
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-8 md:py-10">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Teilnahme & Anmeldung
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Melden Sie sich für eine ambulante Herzgruppe im Kreis Reutlingen an. Mit einer ärztlichen Verordnung (z.&nbsp;B. Formular&nbsp;56) können Sie am Rehasport teilnehmen.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-8 md:py-10">
          <div className="container">
              <h2 className="text-2xl md:py-3xl font-bold mb-6 text-foreground">
                So funktioniert die Anmeldung
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
                <div key={step.number} className="bg-white p-4 rounded-lg border border-border text-center">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 md:py-10 bg-secondary/5">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Anmeldung erfolgreich!</h3>
                    <p className="text-muted-foreground mb-6">
                      Vielen Dank für Ihre Anmeldung. Ihr E-Mail-Programm sollte sich geöffnet haben – bitte prüfen Sie die vorbefüllte Nachricht, ergänzen Sie ggf. Anhänge (z.B. ärztliche Verordnung) und senden Sie die E-Mail ab.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="outline"
                      >
                        Neue Anmeldung
                      </Button>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex"
                      >
                        <Button variant="ghost">
                          <Mail className="w-4 h-4 mr-2" />
                          E-Mail erneut öffnen
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                        <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-red-800">{error}</p>
                      </div>
                    )}

                    {/* Hint: Datenschutz & E-Mail-Versand */}
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm text-foreground">
                      <p className="font-semibold mb-1">Wichtige Hinweise zur Anmeldung</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Mit * markierte Felder sind Pflichtfelder.</li>
                        <li>Ihre Angaben werden nicht auf einem Server gespeichert, sondern nur in einer vorbefüllten E-Mail geöffnet.</li>
                        <li>Die E-Mail können Sie vor dem Absenden jederzeit prüfen und bearbeiten.</li>
                      </ul>
                    </div>

                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Persönliche Daten</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Vorname *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Nachname *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                          <label className="block text-sm font-medium mb-2">E-Mail *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Telefon</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Medical Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Medizinische Informationen</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Geburtsdatum</label>
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Herzerkrankung / Diagnose</label>
                          <textarea
                            name="medicalCondition"
                            value={formData.medicalCondition}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="z.B. Herzinfarkt, Herzschwäche, etc."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Ärztliche Empfehlung / Verordnung</label>
                          <textarea
                            name="doctorRecommendation"
                            value={formData.doctorRecommendation}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Name und Kontakt des Arztes"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preferences */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Präferenzen</h3>
                      <div>
                        <label className="block text-sm font-medium mb-2">Bevorzugte Herzgruppe (optional)</label>
                        <select
                          name="preferredLocation"
                          value={formData.preferredLocation}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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

                    {/* Document Upload */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Dokumenten-Upload (optional)</h3>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Laden Sie Ihre ärztliche Empfehlung oder Verordnung hoch (PDF, max. 5MB).
                        </p>
                        <p className="text-xs text-muted-foreground mb-4">
                          Der Upload erfolgt nur lokal in Ihrem Browser. Die Unterlagen werden nicht auf einem Server gespeichert,
                          sondern von Ihnen später als Anhang zur E-Mail hinzugefügt.
                        </p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="document-upload"
                        />
                        <label htmlFor="document-upload">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => document.getElementById('document-upload')?.click()}
                            className="cursor-pointer"
                          >
                            Datei auswählen
                          </Button>
                        </label>
                        {documentFile && (
                          <p className="text-sm text-primary mt-2">
                            ✓ {documentFile.name} ausgewählt
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Privacy */}
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="privacy"
                          checked={formData.privacy}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                        <span className="text-sm text-foreground">
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
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {isLoading ? 'Wird eingereicht...' : 'Anmeldung einreichen'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Häufig gestellte Fragen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div key={index} className="bg-white p-6 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">{item.question}</h4>
                  <p className="text-muted-foreground text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

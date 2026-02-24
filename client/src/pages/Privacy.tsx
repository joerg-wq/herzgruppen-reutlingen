import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-8 md:py-10">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Datenschutzerklärung
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-10">
          <div className="container max-w-3xl">
            <div className="space-y-6">
              {/* Einleitung */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">1. Einleitung</h2>
                <p className="text-sm text-muted-foreground">
                  Die ARGE Reutlingen e.V. nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, wie wir Ihre personenbezogenen Daten verarbeiten, wenn Sie unsere Website besuchen oder sich für eine ambulante Herzgruppe im Kreis Reutlingen anmelden.
                </p>
              </Card>

              {/* Verantwortliche Stelle */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">2. Verantwortliche Stelle</h2>
                <div className="space-y-1 text-sm text-foreground">
                  <p className="font-semibold">ARGE Reutlingen e.V.</p>
                  <p>Lindachstr. 18</p>
                  <p>72810 Gomaringen</p>
                  <p>Deutschland</p>
                  <p className="mt-4">
                    <span className="font-semibold">E-Mail:</span> <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
                  </p>
                </div>
              </Card>

              {/* Arten der Daten */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">3. Arten der verarbeiteten Daten</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Anmeldungsdaten</h3>
                    <p>
                      Bei der Anmeldung zu unseren Trainingsgruppen erfassen wir: Vorname, Nachname, E-Mail-Adresse, Telefonnummer, Geburtsdatum, Informationen zu Ihrer Herzerkrankung, ärztliche Empfehlungen und bevorzugte Trainingsstandorte. Die Übermittlung erfolgt derzeit ausschließlich per E-Mail.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Kommunikationsdaten</h3>
                    <p>
                      Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten (z.B. Name, Kontaktdaten, Inhalte der Nachricht) zur Bearbeitung Ihrer Anfrage.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Rechtsgrundlagen */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">4. Rechtsgrundlagen der Datenverarbeitung</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Einwilligung (Art. 6 Abs. 1 a DSGVO)</h3>
                    <p>
                      Wir verarbeiten Ihre Daten auf Basis Ihrer Einwilligung, die Sie bei der Anmeldung erteilen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Vertragliche Notwendigkeit (Art. 6 Abs. 1 b DSGVO)</h3>
                    <p>
                      Die Verarbeitung ist notwendig für die Erfüllung unseres Vertrags mit Ihnen zur Teilnahme an den Trainingsgruppen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Berechtigtes Interesse (Art. 6 Abs. 1 f DSGVO)</h3>
                    <p>
                      Wir verarbeiten Ihre Daten zur Verbesserung unserer Dienste und zur Sicherheit unserer Website.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Speicherdauer */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">5. Speicherdauer</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Ihre Anmeldungsdaten und E-Mails werden für die Dauer Ihrer Teilnahme an unseren Trainingsgruppen sowie entsprechend gesetzlicher Aufbewahrungsfristen gespeichert und anschließend gelöscht, sofern keine gesetzlichen Pflichten entgegenstehen.
                  </p>
                </div>
              </Card>

              {/* Weitergabe */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">6. Weitergabe von Daten</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Ihre Daten werden nicht an Dritte weitergegeben, außer:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>An Ärzte und medizinisches Personal zur medizinischen Betreuung</li>
                    <li>An Versicherungen, wenn erforderlich</li>
                    <li>An Behörden, wenn gesetzlich erforderlich</li>
                    <li>An Dienstleister, die uns bei der Website-Verwaltung unterstützen (unter Datenschutzverträgen)</li>
                  </ul>
                </div>
              </Card>

              {/* Ihre Rechte */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">7. Ihre Rechte</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><span className="font-semibold">Auskunftsrecht:</span> Sie können jederzeit Auskunft über Ihre gespeicherten Daten erhalten</li>
                    <li><span className="font-semibold">Berichtigungsrecht:</span> Sie können fehlerhafte Daten korrigieren lassen</li>
                    <li><span className="font-semibold">Löschungsrecht:</span> Sie können die Löschung Ihrer Daten verlangen (Recht auf Vergessenwerden)</li>
                    <li><span className="font-semibold">Einschränkungsrecht:</span> Sie können die Einschränkung der Verarbeitung verlangen</li>
                    <li><span className="font-semibold">Datenportabilität:</span> Sie können Ihre Daten in strukturierter Form erhalten</li>
                    <li><span className="font-semibold">Widerspruchsrecht:</span> Sie können der Verarbeitung widersprechen</li>
                  </ul>
                  <p className="mt-3">
                    Bitte kontaktieren Sie uns unter <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a> um diese Rechte auszuüben.
                  </p>
                </div>
              </Card>

              {/* Sicherheit */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">8. Datensicherheit</h2>
                <p className="text-sm text-muted-foreground">
                  Wir ergreifen umfassende technische und organisatorische Maßnahmen zum Schutz Ihrer Daten, einschließlich SSL-Verschlüsselung, sichere Server und Zugriffskontrolle. Trotz dieser Maßnahmen können wir absolute Sicherheit nicht garantieren.
                </p>
              </Card>

              {/* Cookies */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">9. Cookies und Tracking</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für die Darstellung und den Betrieb der Seite erforderlich sind. Sie können Cookies in Ihren Browsereinstellungen deaktivieren, ggf. steht die Seite dann nur eingeschränkt zur Verfügung.
                  </p>
                  <p>
                    Wir setzen keine Tracking-Tools von Drittanbietern (z.B. Google Analytics) ein.
                  </p>
                </div>
              </Card>

              {/* Externe Links */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">10. Externe Links</h2>
                <p className="text-sm text-muted-foreground">
                  Unsere Website enthält Links zu externen Websites. Wir sind nicht verantwortlich für die Datenschutzpraktiken dieser Websites. Bitte lesen Sie die Datenschutzerklärungen dieser Websites.
                </p>
              </Card>

              {/* Kontakt */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">11. Kontakt für Datenschutzfragen</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Bei Fragen zum Datenschutz kontaktieren Sie bitte:
                </p>
                <div className="space-y-1 text-sm text-foreground">
                  <p>ARGE Reutlingen e.V.</p>
                  <p>Lindachstr. 18</p>
                  <p>72810 Gomaringen</p>
                  <p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
                  </p>
                  <p>
                    <a href="tel:+497072805860" className="text-primary hover:underline">07072 / 80 58 6</a>
                  </p>
                </div>
              </Card>

              {/* Beschwerden */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">12. Beschwerden bei der Aufsichtsbehörde</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Sie haben das Recht, sich bei der Datenschutzaufsichtsbehörde zu beschweren:
                </p>
                <div className="space-y-1 text-sm text-foreground">
                  <p className="font-semibold">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI)</p>
                  <p>Königstraße 10a</p>
                  <p>70173 Stuttgart</p>
                  <p>
                    <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      www.baden-wuerttemberg.datenschutz.de
                    </a>
                  </p>
                </div>
              </Card>

              {/* Änderungen */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">13. Änderungen dieser Datenschutzerklärung</h2>
                <p className="text-sm text-muted-foreground">
                  Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht. Bitte überprüfen Sie regelmäßig diese Seite auf Aktualisierungen.
                </p>
              </Card>

              {/* Letzte Aktualisierung */}
              <div className="text-center text-sm text-muted-foreground">
                <p>Letzte Aktualisierung: Februar 2026</p>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <Link href="/">
                <Button variant="outline">
                  Zur Startseite
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

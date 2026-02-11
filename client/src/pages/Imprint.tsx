import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';

export default function Imprint() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-8 md:py-10">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Impressum
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Angaben gemäß § 5 TMG und § 7 Abs. 1 ECG
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-10">
          <div className="container max-w-3xl">
            <div className="space-y-6">
              {/* Verantwortliche Stelle */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Verantwortliche Stelle</h2>
                <div className="space-y-1 text-sm text-foreground">
                  <p className="font-semibold">ARGE Reutlingen e.V.</p>
                  <p>Ambulante Herzgruppen im Kreis Reutlingen</p>
                  <p>Lindachstr. 18</p>
                  <p>72810 Gomaringen</p>
                  <p>Deutschland</p>
                </div>
              </Card>

              {/* Kontakt */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Kontaktinformationen</h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Telefon</p>
                    <a href="tel:+497072805860" className="text-primary hover:underline">
                      07072 / 80 58 6
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-Mail</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Vertretungsberechtigte */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Vertretungsberechtigte Personen</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Der Verein wird vertreten durch die Mitglieder des Vorstands gemäß der Satzung der ARGE Reutlingen e.V.
                </p>
                <p className="text-sm text-muted-foreground">
                  Aktuelle Vorstandsmitglieder finden Sie auf der Seite <Link href="/verein"><a className="text-primary hover:underline">Verein & Vorstand</a></Link>.
                </p>
              </Card>

              {/* Registereintrag */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Registereintrag</h2>
                <div className="space-y-1 text-sm text-foreground">
                  <p><span className="font-semibold">Vereinsregister:</span> Amtsgericht Stuttgart</p>
                  <p><span className="font-semibold">Registernummer:</span> VR 350490</p>
                  <p><span className="font-semibold">Gemeinnützigkeit:</span> Der Verein ist als gemeinnützig anerkannt</p>
                </div>
              </Card>

              {/* Haftungsausschluss */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Haftungsausschluss</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Haftung für Inhalte</h3>
                    <p>
                      Die Inhalte dieser Website werden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Haftung für Links</h3>
                    <p>
                      Unsere Website enthält Links zu externen Websites. Für den Inhalt dieser externen Seiten sind wir nicht verantwortlich. Die Betreiber der verlinkten Seiten sind allein für deren Inhalte verantwortlich.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Medizinische Hinweise</h3>
                    <p>
                      Die Informationen auf dieser Website stellen keine medizinische Beratung dar. Bitte konsultieren Sie Ihren Arzt oder Ihre Ärztin vor der Teilnahme an unseren Trainingsgruppen.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Urheberrecht */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Urheberrecht und Nutzungsrechte</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des Autors oder Erstellers.
                  </p>
                  <p>
                    Downloads und Kopien dieser Website sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                </div>
              </Card>

              {/* Datenschutz */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Datenschutz</h2>
                <p className="text-sm text-muted-foreground mb-0">
                  Informationen zum Datenschutz finden Sie in unserer <Link href="/datenschutz"><a className="text-primary hover:underline">Datenschutzerklärung</a></Link>.
                </p>
              </Card>

              {/* Streitbeilegung */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Streitbeilegung</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>
                  </p>
                  <p>
                    Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </Card>

              {/* Änderungen */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Änderungen des Impressums</h2>
                <p className="text-sm text-muted-foreground">
                  Wir behalten uns das Recht vor, das Impressum jederzeit ohne Ankündigung zu ändern. Bitte überprüfen Sie regelmäßig diese Seite auf Aktualisierungen.
                </p>
              </Card>
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

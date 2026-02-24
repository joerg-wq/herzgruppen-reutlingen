import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';

export default function Accessibility() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-8 md:py-10">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Barrierefreiheit
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Informationen zur digitalen Barrierefreiheit dieser Website
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-10">
          <div className="container max-w-3xl">
            <div className="space-y-6">
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Stand der Barrierefreiheit</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Die ARGE Reutlingen e.V. ist bemüht, ihre Website im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG) und den Web Content Accessibility Guidelines (WCAG) 2.1 auf Level AA barrierefrei zugänglich zu machen.
                </p>
                <p className="text-sm text-muted-foreground">
                  Diese Website befindet sich in einem fortlaufenden Verbesserungsprozess. Wir arbeiten kontinuierlich daran, die Barrierefreiheit zu verbessern.
                </p>
              </Card>

              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Umgesetzte Maßnahmen</h2>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Semantisch korrekte HTML-Struktur mit Überschriftenhierarchie</li>
                  <li>Tastaturbedienbarkeit aller interaktiven Elemente</li>
                  <li>Sichtbare Fokusindikatoren bei Tastaturnavigation</li>
                  <li>"Zum Inhalt springen"-Link für Tastaturnutzer</li>
                  <li>Ausreichende Farbkontraste (WCAG AA)</li>
                  <li>Mindestschriftgröße von 16px für gute Lesbarkeit</li>
                  <li>Deklarierte Seitensprache (<code>lang="de"</code>)</li>
                  <li>Reduzierte Animationen bei Systemeinstellung <code>prefers-reduced-motion</code></li>
                  <li>Touch-Ziele von mindestens 44x44 Pixel</li>
                  <li>Verknüpfte Formular-Labels für Screenreader</li>
                </ul>
              </Card>

              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Bekannte Einschränkungen</h2>
                <p className="text-sm text-muted-foreground">
                  Trotz unserer Bemühungen können einige Bereiche der Website möglicherweise noch nicht vollständig barrierefrei sein. Wir arbeiten aktiv an Verbesserungen. Sollten Sie auf Barrieren stoßen, kontaktieren Sie uns bitte.
                </p>
              </Card>

              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Feedback und Kontakt</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Wenn Sie Probleme mit der Barrierefreiheit dieser Website feststellen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:
                </p>
                <div className="space-y-1 text-sm text-foreground">
                  <p>ARGE Reutlingen e.V.</p>
                  <p>Lindachstr. 18, 72810 Gomaringen</p>
                  <p>
                    E-Mail: <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
                  </p>
                  <p>
                    Telefon: <a href="tel:+497072805860" className="text-primary hover:underline">07072 / 80 58 6</a>
                  </p>
                </div>
              </Card>

              <Card className="p-5">
                <h2 className="text-xl font-bold mb-3">Durchsetzungsverfahren</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Sollten Sie nach einer Kontaktaufnahme keine zufriedenstellende Lösung erhalten, können Sie sich an die zuständige Durchsetzungsstelle wenden:
                </p>
                <div className="space-y-1 text-sm text-foreground">
                  <p className="font-semibold">Landesbehindertenbeauftragter Baden-Württemberg</p>
                  <p>Else-Josenhans-Straße 6, 70173 Stuttgart</p>
                  <p>
                    <a href="https://www.behindertenbeauftragter-bw.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      www.behindertenbeauftragter-bw.de
                    </a>
                  </p>
                </div>
              </Card>

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

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, MapPin, FileText, Users, Shield, Smile } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-8 md:py-10">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Ambulante Herzsportgruppe Pfullingen
              </h1>
              <p className="text-base text-muted-foreground mb-6">
                Rehasport für Herzpatienten in Pfullingen – mit ärztlicher Betreuung, klarer Struktur und einer Gruppe, die zusammenhält.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/locations">
                  <a>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                      Übungstermine ansehen
                    </Button>
                  </a>
                </Link>
                <Link href="/join">
                  <a>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Anmelden
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 30-Sekunden-Überblick */}
        <section className="py-6 md:py-8 bg-secondary/5 border-b border-border">
          <div className="container max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
              In 30&nbsp;Sekunden verstehen
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Drei Fragen – drei Antworten:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="p-4">
                <h3 className="text-sm font-semibold mb-2 text-foreground">
                  Für wen?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Für Menschen mit Herzerkrankung (z.B. Herzinfarkt, Herzschwäche, Rhythmusstörungen), die sicher und begleitet aktiv werden möchten.
                </p>
              </Card>
              <Card className="p-5">
                <h3 className="text-sm font-semibold mb-2 text-foreground">
                  Was bringt es?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Mehr Belastbarkeit, mehr Sicherheit im Alltag und Austausch mit anderen Betroffenen – unter fachkundiger Anleitung und ärztlicher Betreuung.
                </p>
              </Card>
              <Card className="p-5">
                <h3 className="text-sm font-semibold mb-2 text-foreground">
                  Wie komme ich rein?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Mit einer ärztlichen Empfehlung oder Verordnung. Suchen Sie einen passenden Standort aus und senden Sie uns eine Anmeldung über das Formular.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Three Feature Cards */}
        <section className="py-8 md:py-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Card 1: Was sind Herzgruppen */}
              <Card className="p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Heart className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Was sind Herzgruppen?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ambulante Herzgruppen sind spezialisierte Trainingsgruppen für Herzpatienten. Unter ärztlicher Betreuung trainieren Sie gemeinsam mit anderen Betroffenen.
                </p>
                <Link href="/about">
                  <a className="text-primary hover:underline font-medium">
                    Mehr erfahren →
                  </a>
                </Link>
              </Card>

              {/* Card 2: Übungstermine & Ort */}
              <Card className="p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="text-secondary" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Übungstermine in Pfullingen</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Das Training findet samstags zwischen 8:00 und 11:00 Uhr in der Sporthalle des Friedrich-Schiller-Gymnasiums in Pfullingen statt – mit Herzinsuffizienz-Gruppe und Herzsportgruppen.
                </p>
                <Link href="/locations">
                  <a className="text-primary hover:underline font-medium">
                    Zu den Übungsterminen →
                  </a>
                </Link>
              </Card>

              {/* Card 3: Anmeldung */}
              <Card className="p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <FileText className="text-accent" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Anmeldung & Kontakt</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Die Anmeldung ist einfach und unkompliziert. Kontaktieren Sie uns oder füllen Sie unser Online-Formular aus.
                </p>
                <Link href="/join">
                  <a className="text-primary hover:underline font-medium">
                    Jetzt anmelden →
                  </a>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* How a Session Works */}
        <section className="py-8 md:py-10 bg-secondary/5">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              So läuft eine Trainingseinheit ab
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  number: '1',
                  title: 'Ankommen & Vorbereitung',
                  description: 'Sie kommen 15 Minuten vor Beginn an. Unser Team begrüßt Sie und nimmt Ihre Vitalwerte auf.',
                },
                {
                  number: '2',
                  title: 'Aufwärmen',
                  description: 'Mit leichten Bewegungsübungen und Stretching bereiten wir Ihren Körper auf das Training vor.',
                },
                {
                  number: '3',
                  title: 'Haupttraining',
                  description: 'Unter Anleitung trainieren Sie mit anderen Teilnehmern. Das Tempo ist individuell anpassbar.',
                },
                {
                  number: '4',
                  title: 'Austausch & Entspannung',
                  description: 'Nach dem Training gibt es Zeit für Entspannung und zum Austausch mit anderen Teilnehmern.',
                },
              ].map((step, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-border">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mb-3">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-base mb-1">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-snug">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Whom & What to Bring */}
        <section className="py-8 md:py-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For Whom */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="text-primary" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold">Für wen geeignet?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Unsere Herzgruppen sind für Menschen gedacht, die eine Herzerkrankung haben oder hatten und wieder aktiv werden möchten. Typische Teilnehmer sind:
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    'Nach Herzinfarkt oder Herzoperation',
                    'Mit Herzschwäche oder Herzrhythmusstörungen',
                    'Nach Bypass- oder Stent-Operation',
                    'Mit erhöhtem Blutdruck oder Cholesterin',
                    'Die ihre Fitness und Lebensqualität verbessern möchten',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Bring */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="text-secondary" size={18} />
                  </div>
                  <h3 className="text-xl font-semibold">Was Sie wissen sollten</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Für die Teilnahme benötigen Sie eine ärztliche Empfehlung oder Verordnung. Dies ist ein wichtiger Sicherheitsaspekt.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-sm mb-2">Wichtige Voraussetzungen:</h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>✓ Ärztliche Freigabe oder Verordnung</li>
                    <li>✓ Sportgeeignete Kleidung und Schuhe</li>
                    <li>✓ Handtuch und Trinkflasche</li>
                    <li>✓ Krankenversicherungskarte</li>
                    <li>✓ Alle aktuellen Medikamente</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  Alle unsere Gruppen sind vom Württembergischen Behinderten- und Rehabilitationssportverband (WBRS) zertifiziert. Dies ermöglicht die Abrechnung mit Krankenkassen und Rentenversicherung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-8 md:py-10 bg-secondary/5">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">
              Sicherheit und Qualität
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <Shield className="text-primary" size={32} />,
                  title: 'Zertifiziert & Versichert',
                  description: 'Die Herzsportgruppe Pfullingen ist über den Württembergischen Behinderten- und Rehabilitationssportverband (WBRS) zertifiziert. So ist die Abrechnung mit Krankenkassen und Rentenversicherung möglich.',
                },
                {
                  icon: <Smile className="text-secondary" size={32} />,
                  title: '35+ Jahre Erfahrung',
                  description: 'Seit vielen Jahren trainieren in Pfullingen Herzpatienten regelmäßig gemeinsam – getragen vom Erfahrungsschatz der ARGE Reutlingen e.V.',
                },
                {
                  icon: <Users className="text-accent" size={32} />,
                  title: 'Gemeinschaft & Unterstützung',
                  description: 'Trainieren Sie mit anderen Betroffenen. Der Austausch mit Gleichgesinnten ist Teil des Erfolgs.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border border-border text-center">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-10">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Bereit, wieder aktiv zu werden?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Kontaktieren Sie uns noch heute. Unser Team hilft Ihnen gerne bei der Anmeldung und beantwortet alle Ihre Fragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/locations">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                    Standorte ansehen
                  </Button>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                    Kontakt aufnehmen
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

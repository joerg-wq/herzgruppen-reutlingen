import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Zap, Users, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Herzgruppen verstehen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Erfahren Sie, was ambulante Herzgruppen sind, wie sie funktionieren und welche Vorteile sie bieten.
            </p>
          </div>
        </section>

        {/* What are Cardiac Groups */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Was sind ambulante Herzgruppen?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ambulante Herzgruppen sind spezialisierte Trainingsgruppen für Menschen mit Herzerkrankungen. Sie bieten ein strukturiertes, ärztlich überwachtes Trainingsprogramm, das es Patienten ermöglicht, ihre körperliche Fitness und Lebensqualität zu verbessern.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Im Gegensatz zu Rehabilitationskliniken, in denen Sie stationär untergebracht sind, trainieren Sie bei ambulanten Herzgruppen in Ihrer Nähe und können zu Hause leben. Das Training ist regelmäßig und kontinuierlich – nicht nur für ein paar Wochen.
              </p>
              <p className="text-lg text-muted-foreground">
                Die Gruppen werden von ausgebildeten Trainern geleitet und sind medizinisch betreut. Alle Trainer haben spezielle Qualifikationen für die Arbeit mit Herzpatienten.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Vorteile der Herzgruppen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Zap className="text-primary" size={28} />,
                  title: 'Verbesserte Belastbarkeit',
                  description: 'Durch regelmäßiges Training steigt Ihre körperliche Leistungsfähigkeit. Sie können alltägliche Aktivitäten wieder leichter bewältigen.',
                },
                {
                  icon: <Heart className="text-secondary" size={28} />,
                  title: 'Herzgesundheit',
                  description: 'Das Training stärkt Ihr Herz-Kreislauf-System, senkt den Blutdruck und verbessert die Blutfettwerte.',
                },
                {
                  icon: <Users className="text-accent" size={28} />,
                  title: 'Soziale Unterstützung',
                  description: 'Sie treffen andere Menschen mit ähnlichen Erfahrungen. Der Austausch mit Gleichgesinnten ist psychologisch wertvoll.',
                },
                {
                  icon: <TrendingUp className="text-primary" size={28} />,
                  title: 'Lebensqualität',
                  description: 'Viele Teilnehmer berichten von mehr Energie, besserer Stimmung und größerer Unabhängigkeit im Alltag.',
                },
              ].map((benefit, index) => (
                <Card key={index} className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Medical Supervision */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Sicherheit & Medizinische Betreuung</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Wie funktioniert die medizinische Betreuung?</h3>
                <ul className="space-y-4">
                  {[
                    'Vor Trainingsbeginn werden Ihre Vitalwerte (Blutdruck, Puls, EKG) gemessen',
                    'Trainingsintensität wird individuell angepasst',
                    'Geschultes Personal ist während des Trainings anwesend',
                    'Notfallausrüstung (Defibrillator) ist vorhanden',
                    'Regelmäßige Überprüfung Ihres Fortschritts',
                    'Enge Zusammenarbeit mit Ihrem Hausarzt',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Notfallkonzept</h3>
                <p className="text-muted-foreground mb-6">
                  Die Sicherheit unserer Teilnehmer hat oberste Priorität. Jede Trainingsgruppe verfügt über:
                </p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Automatisierte externe Defibrillatoren (AED)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Erste-Hilfe-Ausrüstung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Geschultes Personal mit Erste-Hilfe-Zertifikat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Klare Notfallprotokolle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Regelmäßige Schulungen und Trainings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Training Structure */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Trainingsstruktur</h2>
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground mb-8">
                Ein typisches Trainingsprogramm dauert etwa 60 Minuten und besteht aus folgenden Komponenten:
              </p>
              <div className="space-y-6">
                {[
                  {
                    time: '10 Minuten',
                    title: 'Ankommen & Vitalwerte',
                    description: 'Messung von Blutdruck und Puls, Begrüßung und Vorbereitung',
                  },
                  {
                    time: '10 Minuten',
                    title: 'Aufwärmen',
                    description: 'Leichte Bewegungsübungen, Stretching und Mobilisierung',
                  },
                  {
                    time: '30 Minuten',
                    title: 'Haupttraining',
                    description: 'Ausdauertraining (z.B. Gehen, Radfahren) und Krafttraining mit individueller Anpassung',
                  },
                  {
                    time: '10 Minuten',
                    title: 'Abwärmen & Entspannung',
                    description: 'Beruhigung des Herzrhythmus, Stretching und Entspannungsübungen',
                  },
                ].map((phase, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-sm">
                        {phase.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 md:p-12 border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Zertifizierung & Qualitätssicherung</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Alle Herzgruppen der ARGE Reutlingen sind vom Württembergischen Behinderten- und Rehabilitationssportverband (WBRS) zertifiziert. Dies bedeutet:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Einhaltung strenger Qualitätskriterien',
                  'Regelmäßige Überprüfung und Zertifizierung',
                  'Geschultes und qualifiziertes Personal',
                  'Abrechnung mit Krankenkassen möglich',
                  'Abrechnung mit Rentenversicherung möglich',
                  'Kontinuierliche Weiterbildung der Trainer',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit zu starten?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Finden Sie die richtige Gruppe für Sie und melden Sie sich an. Unser Team hilft Ihnen gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/locations">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                    Standorte finden
                  </Button>
                </a>
              </Link>
              <Link href="/join">
                <a>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                    Jetzt anmelden
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

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
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-8 md:py-10">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Was ist eine ambulante Herzgruppe?
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Ärztlich betreuter Rehasport in fester Gruppe – Ziele, Ablauf und Sicherheit.
            </p>
          </div>
        </section>

        {/* What are Cardiac Groups */}
        <section className="py-8 md:py-10">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">So funktioniert eine ambulante Herzgruppe</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Ambulante Herzgruppen sind ärztlich betreute Rehasport-Gruppen für Menschen mit Herzerkrankungen. Sie trainieren wohnortnah in einer festen Gruppe und verbessern langfristig Belastbarkeit, Sicherheit und Lebensqualität im Alltag.
              </p>
              <p className="text-sm text-muted-foreground">
                Die Einheiten sind strukturiert aufgebaut und werden von speziell geschulten Übungsleiterinnen und Übungsleitern durchgeführt. Eine medizinische Betreuung stellt sicher, dass das Training individuell angepasst und sicher durchgeführt wird.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-8 md:py-10 bg-secondary/5">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Vorteile der Herzgruppen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Card key={index} className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-snug">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Medical Supervision */}
        <section className="py-8 md:py-10">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sicherheit & Medizinische Betreuung</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Wie funktioniert die medizinische Betreuung?</h3>
                <ul className="space-y-2 text-sm">
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
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-4">Notfallkonzept</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Die Sicherheit unserer Teilnehmer hat oberste Priorität. Jede Trainingsgruppe verfügt über:
                </p>
                <ul className="space-y-2 text-sm text-foreground">
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
        <section className="py-8 md:py-10 bg-secondary/5">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Trainingsstruktur
            </h2>
            <p className="text-sm text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
              Ein typisches Trainingsprogramm dauert etwa 60 Minuten und besteht aus folgenden Komponenten:
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  time: '10 Minuten',
                  title: 'Ankommen & Vitalwerte',
                  description: 'Messung von Blutdruck und Puls, Begrüßung und Vorbereitung.',
                },
                {
                  time: '10 Minuten',
                  title: 'Aufwärmen',
                  description: 'Leichte Bewegungsübungen, Stretching und Mobilisierung.',
                },
                {
                  time: '30 Minuten',
                  title: 'Haupttraining',
                  description: 'Ausdauertraining (z.B. Gehen, Radfahren) und Krafttraining mit individueller Anpassung.',
                },
                {
                  time: '10 Minuten',
                  title: 'Abwärmen & Entspannung',
                  description: 'Beruhigung des Herzrhythmus, Stretching und Entspannungsübungen.',
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-stretch bg-white rounded-lg border border-border px-4 py-3"
                >
                  <div className="flex-shrink-0 flex items-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xs text-center leading-tight">
                      {phase.time}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-8 md:py-10">
          <div className="container">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-5 md:p-8 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Zertifizierung & Qualitätssicherung</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Alle Herzgruppen der ARGE Reutlingen unterliegen klar definierten Qualitätskriterien des Rehasports. Dies bedeutet:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
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
        <section className="py-8 md:py-10 bg-secondary/5">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Bereit zu starten?</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Finden Sie die richtige Gruppe für Sie und melden Sie sich an. Unser Team hilft Ihnen gerne.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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

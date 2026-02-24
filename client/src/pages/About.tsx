import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Zap, Users, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { fadeInUp, stagger } from '@/lib/animations';

function WaveDivider({ flip, className }: { flip?: boolean; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className ?? ''}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`w-full h-[40px] md:h-[60px] block ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,30 C200,55 400,5 600,30 C800,55 1000,5 1200,30 L1200,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default function About() {
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
                Was ist eine ambulante Herzgruppe?
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Ärztlich betreuter Rehasport in fester Gruppe – Ziele, Ablauf und Sicherheit.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* What are Cardiac Groups */}
        <WaveDivider className="text-secondary/5 -mb-px" />
        <section className="bg-secondary/5 section-padding">
          <div className="container">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-5"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                So funktioniert eine ambulante Herzgruppe
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-4 leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Ambulante Herzgruppen sind ärztlich betreute Rehasport-Gruppen für Menschen mit Herzerkrankungen. Sie trainieren wohnortnah in einer festen Gruppe und verbessern langfristig Belastbarkeit, Sicherheit und Lebensqualität im Alltag.
              </motion.p>
              <motion.p
                className="text-base text-muted-foreground leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Die Einheiten sind strukturiert aufgebaut und werden von speziell geschulten Übungsleiterinnen und Übungsleitern durchgeführt. Eine medizinische Betreuung stellt sicher, dass das Training individuell angepasst und sicher durchgeführt wird.
              </motion.p>
            </motion.div>
          </div>
        </section>
        <WaveDivider flip className="text-secondary/5 -mt-px" />

        {/* Benefits */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Vorteile der Herzgruppen
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Zap className="text-primary" size={24} />,
                    title: 'Verbesserte Belastbarkeit',
                    description: 'Durch regelmäßiges Training steigt Ihre körperliche Leistungsfähigkeit. Sie können alltägliche Aktivitäten wieder leichter bewältigen.',
                  },
                  {
                    icon: <Heart className="text-secondary" size={24} />,
                    title: 'Herzgesundheit',
                    description: 'Das Training stärkt Ihr Herz-Kreislauf-System, senkt den Blutdruck und verbessert die Blutfettwerte.',
                  },
                  {
                    icon: <Users className="text-accent" size={24} />,
                    title: 'Soziale Unterstützung',
                    description: 'Sie treffen andere Menschen mit ähnlichen Erfahrungen. Der Austausch mit Gleichgesinnten ist psychologisch wertvoll.',
                  },
                  {
                    icon: <TrendingUp className="text-primary" size={24} />,
                    title: 'Lebensqualität',
                    description: 'Viele Teilnehmer berichten von mehr Energie, besserer Stimmung und größerer Unabhängigkeit im Alltag.',
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="p-6 h-full card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold mb-2">{benefit.title}</h3>
                          <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Safety & Medical Supervision */}
        <WaveDivider className="text-secondary/5 -mb-px" />
        <section className="bg-secondary/5 section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Sicherheit & Medizinische Betreuung
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                  <h3 className="text-xl font-semibold mb-5">Wie funktioniert die medizinische Betreuung?</h3>
                  <ul className="space-y-3 text-base">
                    {[
                      'Vor Trainingsbeginn werden Ihre Vitalwerte (Blutdruck, Puls, EKG) gemessen',
                      'Trainingsintensität wird individuell angepasst',
                      'Geschultes Personal ist während des Trainings anwesend',
                      'Notfallausrüstung (Defibrillator) ist vorhanden',
                      'Regelmäßige Überprüfung Ihres Fortschritts',
                      'Enge Zusammenarbeit mit Ihrem Hausarzt',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-0.5 text-lg">&#10003;</span>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-primary/5 border border-primary/20 rounded-xl p-6"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-5">Notfallkonzept</h3>
                  <p className="text-base text-muted-foreground mb-5">
                    Die Sicherheit unserer Teilnehmer hat oberste Priorität. Jede Trainingsgruppe verfügt über:
                  </p>
                  <ul className="space-y-3 text-base text-foreground">
                    {[
                      'Automatisierte externe Defibrillatoren (AED)',
                      'Erste-Hilfe-Ausrüstung',
                      'Geschultes Personal mit Erste-Hilfe-Zertifikat',
                      'Klare Notfallprotokolle',
                      'Regelmäßige Schulungen und Trainings',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary font-bold">&#8226;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        <WaveDivider flip className="text-secondary/5 -mt-px" />

        {/* Training Structure */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4 text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Trainingsstruktur
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-8 text-center max-w-2xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Ein typisches Trainingsprogramm dauert etwa 60 Minuten und besteht aus folgenden Komponenten:
              </motion.p>
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
                  <motion.div
                    key={index}
                    className="flex gap-4 items-stretch bg-white rounded-xl border border-border px-5 py-4 card-hover"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex-shrink-0 flex items-center">
                      <div className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xs text-center leading-tight">
                        {phase.time}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-base mb-1">{phase.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certification */}
        <WaveDivider className="text-secondary/5 -mb-px" />
        <section className="bg-secondary/5 section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8 border border-primary/20"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-5">Zertifizierung & Qualitätssicherung</h2>
                <p className="text-base text-muted-foreground mb-5">
                  Alle Herzgruppen der ARGE Reutlingen unterliegen klar definierten Qualitätskriterien des Rehasports. Dies bedeutet:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base">
                  {[
                    'Einhaltung strenger Qualitätskriterien',
                    'Regelmäßige Überprüfung und Zertifizierung',
                    'Geschultes und qualifiziertes Personal',
                    'Abrechnung mit Krankenkassen möglich',
                    'Abrechnung mit Rentenversicherung möglich',
                    'Kontinuierliche Weiterbildung der Trainer',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5 text-lg">&#10003;</span>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </ul>
                <p className="mt-5 text-base text-muted-foreground">
                  Ausführliche Informationen zum Rehasport in Herzsportgruppen finden Sie in der{' '}
                  <a
                    href="https://www.wbrs-online.net/reha-sport/downloads/sonstiges/266-rehabilitationssport-in-herzsportgruppen-und-herzinsuffizienzgruppen/file"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Broschüre des WBRS (PDF) <ExternalLink size={14} />
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <WaveDivider flip className="text-secondary/5 -mt-px" />

        {/* CTA */}
        <section className="section-padding">
          <div className="container text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Bereit zu starten?
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-8 max-w-xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Finden Sie die richtige Gruppe für Sie und melden Sie sich an. Unser Team hilft Ihnen gerne.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <Link href="/locations">
                  <a>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-base px-8 py-3 h-auto shadow-md">
                      Standorte finden
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </a>
                </Link>
                <Link href="/join#formular">
                  <a>
                    <Button size="lg" className="bg-accent hover:bg-accent/85 active:scale-[0.97] text-accent-foreground w-full sm:w-auto text-base px-8 py-3 h-auto shadow-md transition-all">
                      Jetzt mitmachen
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

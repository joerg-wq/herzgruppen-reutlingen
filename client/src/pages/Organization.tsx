import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';
import { fadeInUp, stagger } from '@/lib/animations';

/** Normalisiert eine deutsche Telefonnummer für tel:-Links (ohne Leerzeichen/Schrägstrich). */
function normalizePhoneForLink(display: string): string {
  const digits = display.replace(/\D/g, '');
  if (digits.startsWith('0')) return `+49${digits.slice(1)}`;
  if (!digits.startsWith('49')) return `+49${digits}`;
  return `+${digits}`;
}

export default function Organization() {
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
                Verein &amp; Vorstand
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Erfahren Sie mehr über die ARGE Reutlingen und unser Vorstandsteam.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* About Organization */}
        <section className="section-padding">
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
                Über die ARGE Reutlingen
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-5 leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Die Arbeitsgemeinschaft für ambulante Herzgruppen im Kreis Reutlingen e.V. (ARGE RT) ist ein gemeinnütziger Verein, der Herzgruppen im gesamten Kreis unterstützt und koordiniert.
              </motion.p>
              <motion.p
                className="text-base text-muted-foreground leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Seit über 35 Jahren fördern wir den Aufbau und die Betreuung von Herzgruppen in der Region und achten auf klare Qualitätsstandards im Rehasport.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-secondary/5">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-10"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Unsere Mission &amp; Werte
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Gesundheit fördern',
                    description: 'Wir unterstützen Herzpatienten dabei, ihre körperliche Fitness und Lebensqualität zu verbessern durch regelmäßiges, sicheres Training.',
                  },
                  {
                    title: 'Gemeinschaft schaffen',
                    description: 'Wir bringen Menschen mit ähnlichen Erfahrungen zusammen, um Unterstützung, Verständnis und Freundschaft zu fördern.',
                  },
                  {
                    title: 'Qualität sichern',
                    description: 'Wir garantieren hohe Standards in der Betreuung, Ausbildung und Zertifizierung aller unserer Herzgruppen.',
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="p-6 h-full card-hover">
                      <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{value.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Board Members */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-10"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Der Vorstand der ARGE RT
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    role: 'Vorsitzender',
                    name: 'Dr. med. Martin Jauernig',
                    address: 'Albstr. 2, 72764 Reutlingen',
                    phone: '07121 / 20 38 30',
                  },
                  {
                    role: 'Schriftführer',
                    name: 'Hartmut Fach',
                    address: 'Kontakt über Geschäftsstelle',
                    phone: '',
                  },
                  {
                    role: 'Kassenwart',
                    name: 'Bernhard Walker',
                    address: 'Kontakt über Geschäftsstelle',
                    phone: '',
                  },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="p-6 h-full card-hover">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-primary">&#128100;</span>
                      </div>
                      <h3 className="text-base font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                      <div className="space-y-3 text-base text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                          <span>{member.address}</span>
                        </div>
                        {member.phone && (
                          <div className="flex items-start gap-3">
                            <Phone size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                            <a href={`tel:${normalizePhoneForLink(member.phone)}`} className="hover:text-primary">
                              {member.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Headquarters */}
        <section className="section-padding bg-secondary/5">
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
                Geschäftsstelle
              </motion.h2>
              <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                <Card className="p-6 md:p-8 max-w-2xl card-hover">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-5">ARGE Reutlingen e.V.</h3>
                      <div className="space-y-4 text-base text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <MapPin className="text-primary flex-shrink-0 mt-0.5" size={20} />
                          <div>
                            <p className="font-medium text-foreground">Lindachstr. 18</p>
                            <p>72810 Gomaringen</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="text-primary flex-shrink-0 mt-0.5" size={20} />
                          <a href="tel:+497072805860" className="font-medium text-foreground hover:text-primary">
                            07072 / 80 58 6
                          </a>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="text-primary flex-shrink-0 mt-0.5" size={20} />
                          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-foreground hover:text-primary">
                            {CONTACT_EMAIL}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-border pt-6">
                      <p className="text-base text-muted-foreground mb-3">
                        <strong>Registriert unter:</strong> VR 350490 beim Amtsgericht Stuttgart
                      </p>
                      <p className="text-base text-muted-foreground">
                        <strong>Steuernummer:</strong> 78042/02157 FA. Reutlingen
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="section-padding">
          <div className="container">
            <motion.div
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
                Unsere Verantwortung
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-8 max-w-3xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Die ARGE Reutlingen ist verantwortlich für die Verwaltung und Betreuung folgender Herzgruppen:
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Herzsport Reutlingen', cityParam: 'Reutlingen' },
                  { label: 'Herzsport Bad Urach', cityParam: 'Bad Urach' },
                  { label: 'Herzsport Pfullingen', cityParam: 'Pfullingen' },
                  { label: 'Herzsport Neckar-Schönbuch', cityParam: '' },
                  { label: 'Herzsport Metzingen', cityParam: 'Metzingen' },
                  { label: 'Herzsport Dettingen/E.', cityParam: 'Dettingen/E.' },
                  { label: 'Schlaganfallgruppe Bad Urach', cityParam: '' },
                ].map((group, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="p-5 border-l-4 border-primary flex flex-col gap-2 card-hover">
                      <h3 className="text-base font-semibold text-foreground">{group.label}</h3>
                      {group.cityParam && (
                        <a
                          href={`/locations?city=${encodeURIComponent(group.cityParam)}`}
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                        >
                          Zu den Terminen in {group.cityParam}
                          <ArrowRight size={14} />
                        </a>
                      )}
                    </Card>
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

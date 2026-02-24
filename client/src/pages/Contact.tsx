import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';
import { fadeInUp, stagger } from '@/lib/animations';

export default function Contact() {
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
                Kontakt
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Kontakt zur ARGE Reutlingen – Ihrer Anlaufstelle für alle ambulanten Herzgruppen im Kreis Reutlingen.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              {/* Main Contact */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
                <Card className="p-6 h-full card-hover">
                  <h2 className="text-xl font-bold mb-6">Geschäftsstelle ARGE Reutlingen e.V.</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                        <p className="text-base text-muted-foreground">
                          ARGE Reutlingen e.V.
                          <br />
                          Lindachstr. 18
                          <br />
                          72810 Gomaringen
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                        <a href="tel:+497072805860" className="text-base text-primary hover:underline">
                          07072 / 80 58 6
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-base text-primary hover:underline">
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Office Hours */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
                <Card className="p-6 h-full card-hover">
                  <h2 className="text-xl font-bold mb-6">Sprechzeiten</h2>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Telefonische Erreichbarkeit</h3>
                      <p className="text-base text-muted-foreground">
                        <strong>Montag – Freitag</strong>
                        <br />
                        09:00 – 12:00 Uhr
                        <br />
                        14:00 – 17:00 Uhr
                      </p>
                      <p className="text-base text-muted-foreground mt-4">
                        Außerhalb dieser Zeiten können Sie uns eine E-Mail schreiben oder eine Nachricht hinterlassen.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-secondary/5">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
              >
                <motion.h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-center"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  Kontaktformular
                </motion.h2>
                <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                  <Card className="p-6 card-hover">
                    <p className="text-base text-muted-foreground mb-5">
                      Füllen Sie das Formular aus und wir werden uns in Kürze bei Ihnen melden.
                    </p>
                    <Link href="/join">
                      <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-3 h-auto">
                        Zum Kontaktformular
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Link */}
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
                Häufig gestellte Fragen
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-8 max-w-xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Viele Fragen können Sie in unserem FAQ-Bereich finden.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <Link href="/faq">
                  <Button size="lg" className="bg-accent hover:bg-accent/85 active:scale-[0.97] text-accent-foreground text-base px-8 py-3 h-auto shadow-md transition-all">
                    Zu den FAQ
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
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

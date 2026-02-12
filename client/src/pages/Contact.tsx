import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-8 md:py-10">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Kontakt
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Kontakt zur ARGE Reutlingen – Ihrer Anlaufstelle für alle ambulanten Herzgruppen im Kreis Reutlingen.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-8 md:py-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Main Contact */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-5">Geschäftsstelle ARGE Reutlingen e.V.</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        ARGE Reutlingen e.V.
                        <br />
                        Lindachstr. 18
                        <br />
                        72810 Gomaringen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                      <a href="tel:+497072805860" className="text-primary hover:underline">
                        07072 / 80 58 6
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">E-Mail</h3>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Office Hours */}
              <Card className="p-5">
                <h2 className="text-xl font-bold mb-5">Sprechzeiten</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <Clock className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Telefonische Erreichbarkeit</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Montag - Freitag:</strong> 09:00 - 12:00 Uhr</li>
                        <li><strong>Montag - Freitag:</strong> 14:00 - 17:00 Uhr</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">
                        Außerhalb dieser Zeiten können Sie uns eine E-Mail schreiben oder eine Nachricht hinterlassen.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-8 md:py-10 bg-secondary/5">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Kontaktformular</h2>
              <Card className="p-5">
                <p className="text-sm text-muted-foreground mb-4">
                  Füllen Sie das Formular aus und wir werden uns in Kürze bei Ihnen melden.
                </p>
                <Link href="/join">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Zum Anmeldeformular
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="py-8 md:py-10">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Viele Fragen können Sie in unserem FAQ-Bereich finden.
            </p>
            <Link href="/faq">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Zu den FAQ
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

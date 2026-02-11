import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_EMAIL } from '@/config';

export default function Organization() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Verein &amp; Vorstand
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Erfahren Sie mehr über die ARGE Reutlingen und unser Vorstandsteam.
            </p>
          </div>
        </section>

        {/* About Organization */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Über die ARGE Reutlingen</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Die Arbeitsgemeinschaft für ambulante Herzgruppen im Kreis Reutlingen e.V. (ARGE RT) ist ein gemeinnütziger Verein, der sich der Unterstützung von Herzpatienten verschrieben hat.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Seit über 35 Jahren kümmern wir uns um die Gründung, den Aufbau und die Verwaltung von Herzgruppen in der Region. Unser Ziel ist es, Herzpatienten die Möglichkeit zu geben, ihre körperliche und psychische Gesundheit durch regelmäßiges, ärztlich überwachtes Training zu verbessern.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Die ARGE RT ist verantwortlich für den Betrieb und Fortbestand der Herzgruppen und überwacht die Einhaltung strenger Qualitätskriterien. Alle unsere Gruppen sind vom Württembergischen Behinderten- und Rehabilitationssportverband (WBRS) zertifiziert.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-20 bg-secondary/5">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Unsere Mission &amp; Werte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <Card key={index} className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Der Vorstand der ARGE RT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  address: 'Adresse wird derzeit aktualisiert',
                  phone: '',
                },
                {
                  role: 'Kassenwart',
                  name: 'Bernhard Walker',
                  address: 'Adresse wird derzeit aktualisiert',
                  phone: '',
                },
              ].map((member, index) => (
                <Card key={index} className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">👤</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="flex-shrink-0 mt-1" />
                      <span>{member.address}</span>
                    </div>
                    {member.phone && (
                      <div className="flex items-start gap-2">
                        <Phone size={16} className="flex-shrink-0 mt-1" />
                        <a href={`tel:${member.phone}`} className="hover:text-primary">
                          {member.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Headquarters */}
        <section className="py-16 md:py-20 bg-secondary/5">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Geschäftsstelle</h2>
            <Card className="p-8 max-w-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">ARGE Reutlingen e.V.</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-medium text-foreground">Lindachstr. 18</p>
                        <p>72810 Gomaringen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                      <a href="tel:+497072805860" className="font-medium text-foreground hover:text-primary">
                        07072 / 80 58 6
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                      <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-foreground hover:text-primary">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Registriert unter:</strong> VR 350490 beim Amtsgericht Stuttgart
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Steuernummer:</strong> 78042/02157 FA. Reutlingen
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Unsere Verantwortung</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Die ARGE Reutlingen ist verantwortlich für die Verwaltung und Betreuung folgender Herzgruppen:
            </p>
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
                <Card key={index} className="p-6 border-l-4 border-primary flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{group.label}</h3>
                  {group.cityParam && (
                    <a
                      href={`/locations?city=${encodeURIComponent(group.cityParam)}`}
                      className="text-sm text-primary hover:underline"
                    >
                      Zu den Terminen in {group.cityParam}
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

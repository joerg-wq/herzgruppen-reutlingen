import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MapPinned, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { fadeInUp, stagger } from '@/lib/animations';

interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  weekday: string;
  time: string;
  type: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  notes: string;
  maps_url?: string;
}

export default function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [onlyHeartFailure, setOnlyHeartFailure] = useState<boolean>(false);

  useEffect(() => {
    fetch('/data/locations.json')
      .then(res => res.json())
      .then((data: Location[]) => {
        setLocations(data);

        try {
          const params = new URLSearchParams(window.location.search);
          const cityParam = params.get('city') ?? '';
          const typeParam = params.get('type') ?? '';

          setSelectedCity(cityParam);
          setOnlyHeartFailure(typeParam === 'herzinsuffizienz');
          setFilteredLocations(data);
        } catch {
          setFilteredLocations(data);
        }
      })
      .catch(err => console.error('Error loading locations:', err));
  }, []);

  useEffect(() => {
    let filtered = locations;

    if (selectedCity) {
      filtered = filtered.filter(loc => loc.city === selectedCity);
    }

    if (selectedDay) {
      filtered = filtered.filter(loc => loc.weekday === selectedDay);
    }

    if (onlyHeartFailure) {
      filtered = filtered.filter(
        loc => loc.type === 'herzinsuffizienz' || loc.type === 'schlaganfall'
      );
    }

    const dayOrder: Record<string, number> = {
      Montag: 1,
      Dienstag: 2,
      Mittwoch: 3,
      Donnerstag: 4,
      Freitag: 5,
      Samstag: 6,
      Sonntag: 7,
    };

    filtered = [...filtered].sort((a, b) => {
      const cityCompare = a.city.localeCompare(b.city, 'de');
      if (cityCompare !== 0) return cityCompare;

      const dayA = dayOrder[a.weekday] ?? 99;
      const dayB = dayOrder[b.weekday] ?? 99;
      if (dayA !== dayB) return dayA - dayB;

      return a.time.localeCompare(b.time, 'de');
    });

    setFilteredLocations(filtered);
  }, [selectedCity, selectedDay, onlyHeartFailure, locations]);

  const cities = Array.from(new Set(locations.map(loc => loc.city)));
  const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

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
                Standorte &amp; Übungstermine
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Herzgruppen im gesamten Kreis Reutlingen. Wählen Sie den Standort, der zu Ihnen passt.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-padding bg-secondary/5 border-b border-border">
          <div className="container">
            <h2 className="text-xl font-bold mb-5">Gruppen filtern</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* City Filter */}
              <div>
                <label className="block text-base font-medium text-foreground mb-3">
                  Nach Ort filtern
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Alle Orte</option>
                  {cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day Filter */}
              <div>
                <label className="block text-base font-medium text-foreground mb-3">
                  Nach Wochentag filtern
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Alle Wochentage</option>
                  {days.map(day => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <span className="block text-base font-medium text-foreground mb-3">
                  Spezielle Gruppen
                </span>
                <label className="inline-flex items-center gap-2 text-base text-foreground">
                  <input
                    type="checkbox"
                    checked={onlyHeartFailure}
                    onChange={(e) => setOnlyHeartFailure(e.target.checked)}
                    className="rounded border-border w-4 h-4"
                  />
                  <span>Nur Herzinsuffizienz- / Schlaganfallgruppen anzeigen</span>
                </label>
              </div>
            </div>
            {(selectedCity || selectedDay || onlyHeartFailure) && (
              <button
                onClick={() => {
                  setSelectedCity('');
                  setSelectedDay('');
                  setOnlyHeartFailure(false);
                }}
                className="mt-5 text-primary hover:underline text-base font-medium"
              >
                Filter zurücksetzen
              </button>
            )}
          </div>
        </section>

        {/* Locations List */}
        <section className="section-padding">
          <div className="container">
            {filteredLocations.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-5">
                  Keine Gruppen mit den gewählten Filtern gefunden.
                </p>
                <button
                  onClick={() => {
                    setSelectedCity('');
                    setSelectedDay('');
                  }}
                  className="text-primary hover:underline font-medium text-base"
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
              >
                {filteredLocations.map(location => (
                  <motion.div
                    key={location.id}
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="p-6 card-hover h-full flex flex-col">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {location.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {location.city} &middot; {location.weekday}, {location.time}
                          </p>
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ${
                            location.type === 'herzinsuffizienz'
                              ? 'bg-primary/10 text-primary'
                              : location.type === 'schlaganfall'
                              ? 'bg-accent/10 text-accent-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {location.type === 'herzinsuffizienz'
                            ? 'Herzinsuffizienz-Gruppe'
                            : location.type === 'schlaganfall'
                            ? 'Schlaganfallgruppe'
                            : 'Herzsport-Gruppe'}
                        </span>
                      </div>

                      <div className="space-y-3 mb-4 flex-1">
                        <div className="flex items-start gap-3">
                          <MapPin className="text-primary flex-shrink-0 mt-0.5" size={18} />
                          <div>
                            <p className="font-medium text-base text-foreground">{location.address}</p>
                            {(() => {
                              const mapsHref =
                                location.maps_url ||
                                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                  `${location.address}, ${location.city}`
                                )}`;
                              return (
                                <p className="mt-1">
                                  <a
                                    href={mapsHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                                  >
                                    <MapPinned size={14} />
                                    In Google Maps öffnen
                                  </a>
                                </p>
                              );
                            })()}
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                          <div>
                            <p className="font-medium text-base text-foreground">{location.weekday}</p>
                            <p className="text-base text-muted-foreground">{location.time}</p>
                          </div>
                        </div>

                        {location.contact_name && (
                          <div className="flex items-start gap-3">
                            <span className="text-primary flex-shrink-0 mt-0.5 font-bold">&#128100;</span>
                            <div>
                              <p className="font-medium text-base text-foreground">{location.contact_name}</p>
                              <p className="text-sm text-muted-foreground">Ansprechpartner</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Contact */}
                      <div className="border-t border-border pt-4 mb-4">
                        <p className="text-base font-medium text-foreground mb-3">Kontakt:</p>
                        <div className="space-y-2 text-base">
                          <a
                            href={`tel:${location.contact_phone}`}
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <Phone size={16} />
                            {location.contact_phone}
                          </a>
                          <a
                            href={`mailto:${location.contact_email}`}
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <Mail size={16} />
                            {location.contact_email}
                          </a>
                        </div>
                      </div>

                      {/* Notes */}
                      {location.notes && (
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-4">
                          <p className="text-base text-foreground">
                            {location.notes.split(/((?:https?:\/\/)?[\w.-]+\.[a-z]{2,}(?:\/\S*)?)/gi).map((part, i) =>
                              /^(?:https?:\/\/)?[\w.-]+\.[a-z]{2,}/i.test(part) ? (
                                <a
                                  key={i}
                                  href={part.startsWith('http') ? part : `http://${part}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  {part}
                                </a>
                              ) : (
                                <span key={i}>{part}</span>
                              )
                            )}
                          </p>
                        </div>
                      )}

                      {/* CTA */}
                      <Link href="/join#formular">
                        <a>
                          <Button size="lg" className="w-full bg-accent hover:bg-accent/85 active:scale-[0.97] text-accent-foreground text-base py-3 h-auto shadow-md transition-all">
                            Jetzt mitmachen
                            <ArrowRight className="ml-2" size={18} />
                          </Button>
                        </a>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Info Section */}
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
                Weitere Informationen
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                  <h3 className="text-lg font-semibold mb-3">Wie melde ich mich an?</h3>
                  <p className="text-base text-muted-foreground mb-3 leading-relaxed">
                    Der Einstieg ist einfach: Kontaktieren Sie die Gruppe direkt zu den angegebenen Übungszeiten oder melden Sie Ihr Interesse über unser Online-Formular. Sie benötigen eine ärztliche Freigabe oder Verordnung.
                  </p>
                  <p className="text-base text-muted-foreground mb-5 leading-relaxed">
                    Tipp: Kommen Sie einfach zu einer der angegebenen Gruppenstunden – die Ansprechpartner vor Ort beraten Sie gern zu Einstieg und Formalitäten.
                  </p>
                  <Link href="/join#formular">
                    <a className="text-primary hover:underline font-medium inline-flex items-center gap-1 text-base">
                      Zum Kontaktformular <ArrowRight size={16} />
                    </a>
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                  <h3 className="text-lg font-semibold mb-3">Kosten &amp; Abrechnung</h3>
                  <p className="text-base text-muted-foreground mb-3 leading-relaxed">
                    Die Kosten werden in der Regel von Ihrer Krankenkasse oder Rentenversicherung übernommen.
                  </p>
                  <p className="text-base text-muted-foreground mb-5 leading-relaxed">
                    Viele Kassen verzichten auf eine vorherige Genehmigung – Sie können sofort starten.{' '}
                    <a
                      href="https://www.wbrs-online.net/reha-sport/infos-zum-rehasport/genehmigungsverzicht"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Liste der Kassen mit Genehmigungsverzicht (WBRS)
                    </a>
                  </p>
                  <Link href="/faq">
                    <a className="text-primary hover:underline font-medium inline-flex items-center gap-1 text-base">
                      Zu den FAQ <ArrowRight size={16} />
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

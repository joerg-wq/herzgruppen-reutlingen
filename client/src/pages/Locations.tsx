import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VenueCard from '@/components/VenueCard';
import { Link } from 'wouter';
import { fadeInUp, stagger } from '@/lib/animations';
import { groupByVenue, filterVenues } from '@/lib/groupLocations';
import type { Location, Venue } from '@/lib/groupLocations';

export default function Locations() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  useEffect(() => {
    fetch('/data/locations.json')
      .then(res => res.json())
      .then((data: Location[]) => {
        const grouped = groupByVenue(data);
        setVenues(grouped);

        try {
          const params = new URLSearchParams(window.location.search);
          const cityParam = params.get('city') ?? '';
          const typeParam = params.get('type') ?? '';
          setSelectedCity(cityParam);
          if (['herzgruppe', 'herzinsuffizienz', 'schlaganfall'].includes(typeParam)) {
            setSelectedType(typeParam);
          }
        } catch {
          // ignore
        }
      })
      .catch(err => console.error('Error loading locations:', err));
  }, []);

  useEffect(() => {
    setFilteredVenues(filterVenues(venues, selectedCity, selectedDay, selectedType));
  }, [selectedCity, selectedDay, selectedType, venues]);

  const cities = Array.from(new Set(venues.map(v => v.city))).sort((a, b) => a.localeCompare(b, 'de'));
  const days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

  const hasFilter = selectedCity || selectedDay || selectedType;

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
                Standorte &amp; Übungstermine
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                {venues.length} Standorte im Kreis Reutlingen. Wählen Sie den Ort, der zu Ihnen passt.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-padding bg-secondary/5 border-b border-border">
          <div className="container">
            <h2 className="text-xl font-bold mb-5">Standorte filtern</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* City Filter */}
              <div>
                <label htmlFor="filter-city" className="block text-base font-medium text-foreground mb-3">
                  Nach Ort filtern
                </label>
                <select
                  id="filter-city"
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
                <label htmlFor="filter-day" className="block text-base font-medium text-foreground mb-3">
                  Nach Wochentag filtern
                </label>
                <select
                  id="filter-day"
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
                <label htmlFor="filter-type" className="block text-base font-medium text-foreground mb-3">
                  Nach Gruppentyp filtern
                </label>
                <select
                  id="filter-type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Alle Gruppentypen</option>
                  <option value="herzgruppe">Herzsport</option>
                  <option value="herzinsuffizienz">Herzinsuffizienz</option>
                  <option value="schlaganfall">Schlaganfall</option>
                </select>
              </div>
            </div>
            {hasFilter && (
              <button
                onClick={() => {
                  setSelectedCity('');
                  setSelectedDay('');
                  setSelectedType('');
                }}
                className="mt-5 text-primary hover:underline text-base font-medium"
              >
                Filter zurücksetzen
              </button>
            )}
          </div>
        </section>

        {/* Venues List */}
        <section className="section-padding">
          <div className="container">
            {filteredVenues.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-5">
                  Keine Standorte mit den gewählten Filtern gefunden.
                </p>
                <button
                  onClick={() => {
                    setSelectedCity('');
                    setSelectedDay('');
                    setSelectedType('');
                  }}
                  className="text-primary hover:underline font-medium text-base"
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              <motion.div
                key={`${selectedCity}-${selectedDay}-${selectedType}`}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                {filteredVenues.map(venue => (
                  <motion.div
                    key={venue.key}
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <VenueCard venue={venue} />
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

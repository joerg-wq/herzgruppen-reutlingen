import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MapPinned } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

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
}

export default function Locations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [onlyHeartFailure, setOnlyHeartFailure] = useState<boolean>(false);

  useEffect(() => {
    // Load locations from JSON
    fetch('/data/locations.json')
      .then(res => res.json())
      .then((data: Location[]) => {
        setLocations(data);

        // Initial Filter aus URL-Parametern (z.B. ?city=Reutlingen&type=herzinsuffizienz)
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
      filtered = filtered.filter(loc => loc.type === 'herzinsuffizienz');
    }

    // Sortierung nach Stadt und Wochentag
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
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-8 md:py-10">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Standorte &amp; Termine
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Finden Sie die Herzgruppe in Ihrer Nähe und die passende Trainingszeit.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 bg-secondary/5 border-b border-border">
          <div className="container">
            <h2 className="text-xl font-bold mb-4">Gruppen filtern</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* City Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Nach Ort filtern
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                <label className="block text-sm font-medium text-foreground mb-3">
                  Nach Wochentag filtern
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                <span className="block text-sm font-medium text-foreground mb-3">
                  Spezielle Gruppen
                </span>
                <label className="inline-flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={onlyHeartFailure}
                    onChange={(e) => setOnlyHeartFailure(e.target.checked)}
                    className="rounded border-border"
                  />
                  <span>Nur Herzinsuffizienz-Gruppen anzeigen</span>
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
                className="mt-4 text-primary hover:underline text-sm font-medium"
              >
                Filter zurücksetzen
              </button>
            )}
          </div>
        </section>

        {/* Locations List */}
        <section className="py-12 md:py-16">
          <div className="container">
            {filteredLocations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  Keine Gruppen mit den gewählten Filtern gefunden.
                </p>
                <button
                  onClick={() => {
                    setSelectedCity('');
                    setSelectedDay('');
                  }}
                  className="text-primary hover:underline font-medium"
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLocations.map(location => (
                  <Card key={location.id} className="p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {location.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {location.city} · {location.weekday}, {location.time}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          location.type === 'herzinsuffizienz'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {location.type === 'herzinsuffizienz'
                          ? 'Herzinsuffizienz-Gruppe'
                          : 'Herzsport-Gruppe'}
                      </span>
                    </div>

                    {/* Adresse immer sichtbar; Maps-Link optional (falls Link nicht funktioniert, bleibt Adresse nutzbar) */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <div>
                          <p className="font-medium text-foreground">{location.address}, {location.city}</p>
                          {(() => {
                            const mapsQuery = `${location.address}, ${location.city}`;
                            const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
                            return (
                              <p className="mt-1">
                                <a
                                  href={mapsHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                                >
                                  <MapPinned size={12} />
                                  In Google Maps öffnen
                                </a>
                              </p>
                            );
                          })()}
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="text-secondary flex-shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium text-foreground">{location.weekday}</p>
                          <p className="text-sm text-muted-foreground">{location.time}</p>
                        </div>
                      </div>

                      {location.contact_name && (
                        <div className="flex items-start gap-3">
                          <span className="text-primary flex-shrink-0 mt-1 font-bold">👤</span>
                          <div>
                            <p className="font-medium text-foreground">{location.contact_name}</p>
                            <p className="text-xs text-muted-foreground">Ansprechpartner</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contact */}
                    <div className="border-t border-border pt-4 mb-4">
                      <p className="text-sm font-medium text-foreground mb-3">Kontakt:</p>
                      <div className="space-y-2 text-sm">
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
                      <div className="bg-primary/5 border border-primary/20 rounded p-3 mb-4">
                        <p className="text-sm text-foreground">{location.notes}</p>
                      </div>
                    )}

                    {/* CTA */}
                    <Link href="/join">
                      <a>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          Anmelden
                        </Button>
                      </a>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 md:py-10 bg-secondary/5">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Weitere Informationen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Wie melde ich mich an?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Die Anmeldung ist einfach: Kontaktieren Sie die Gruppe direkt oder füllen Sie unser Online-Formular aus. Sie benötigen eine ärztliche Freigabe oder Verordnung.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Beispiel: In Pfullingen findet eine Rehasport-Gruppe für Herzinsuffizienz sowie parallel dazu Herzsportgruppen samstags zwischen 8:00 und 11:00 Uhr in der Sporthalle des Friedrich-Schiller-Gymnasiums statt. Das Motto dort lautet: Bewegung, Gemeinschaft und Lebensfreude.
                </p>
                <Link href="/join">
                  <a className="text-primary hover:underline font-medium">
                    Zum Anmeldeformular →
                  </a>
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Kosten &amp; Abrechnung</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Die Kosten werden in der Regel von Ihrer Krankenkasse oder Rentenversicherung übernommen. Alle unsere Gruppen sind WBRS-zertifiziert.
                </p>
                <Link href="/faq">
                  <a className="text-primary hover:underline font-medium">
                    Zu den FAQ →
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

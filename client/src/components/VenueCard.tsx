import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MapPinned, ArrowRight, Stethoscope, User } from 'lucide-react';
import { Link } from 'wouter';
import TimeSlotRow from './TimeSlotRow';
import type { Venue } from '@/lib/groupLocations';

interface VenueCardProps {
  venue: Venue;
}

function typeBadgeClass(type: string): string {
  switch (type) {
    case 'herzinsuffizienz':
      return 'bg-primary/10 text-primary';
    case 'schlaganfall':
      return 'bg-secondary/15 text-secondary';
    default:
      return 'bg-muted text-muted-foreground';
  }
}

function typeBadgeLabel(type: string): string {
  switch (type) {
    case 'herzinsuffizienz':
      return 'Herzinsuffizienz';
    case 'schlaganfall':
      return 'Schlaganfall';
    default:
      return 'Herzsport';
  }
}

export default function VenueCard({ venue }: VenueCardProps) {
  const totalGroups = venue.slots.reduce((sum, s) => sum + s.groupCount, 0);

  return (
    <Card className="p-6 card-hover h-full flex flex-col">
      {/* Header: Venue name + type badges */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {venue.venueName}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            {venue.city} &middot; {totalGroups} {totalGroups === 1 ? 'Gruppe' : 'Gruppen'}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {Array.from(venue.types).map(type => (
            <span
              key={type}
              className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium ${typeBadgeClass(type)}`}
            >
              {typeBadgeLabel(type)}
            </span>
          ))}
        </div>
      </div>

      {/* Address + Maps link */}
      <div className="flex items-start gap-3 mt-3 mb-4">
        <MapPin className="text-primary flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
        <div>
          <p className="font-medium text-base text-foreground">{venue.address}</p>
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1"
          >
            <MapPinned size={14} aria-hidden="true" />
            In Google Maps öffnen
          </a>
        </div>
      </div>

      {/* Time slots */}
      <div className="flex-1">
        <div className="border-t border-border pt-3 pb-2">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            {venue.weekday}
          </p>
          <div className="divide-y divide-border/50">
            {venue.slots.map(slot => (
              <TimeSlotRow key={slot.time + slot.types.map(t => t.type).join()} slot={slot} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="border-t border-border pt-4 mt-3 mb-4">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Kontakt</p>
        <div className="space-y-2 text-base">
          {venue.contactName && (
            <div className="flex items-center gap-2 text-foreground">
              <User size={16} className="text-primary flex-shrink-0" aria-hidden="true" />
              <span>{venue.contactName}</span>
            </div>
          )}
          <a
            href={`tel:${venue.contactPhone}`}
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Phone size={16} className="flex-shrink-0" aria-hidden="true" />
            {venue.contactPhone}
          </a>
          <a
            href={`mailto:${venue.contactEmail}`}
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Mail size={16} className="flex-shrink-0" aria-hidden="true" />
            {venue.contactEmail}
          </a>
          {venue.doctor && (
            <div className="flex items-center gap-2 text-foreground">
              <Stethoscope size={16} className="text-primary flex-shrink-0" aria-hidden="true" />
              <span>Arzt: {venue.doctor}</span>
            </div>
          )}
        </div>
      </div>

      {/* Notes */}
      {venue.notes.length > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-4">
          {venue.notes.map((note, i) => (
            <p key={i} className="text-base text-foreground">
              {note.split(/((?:https?:\/\/)?[\w.-]+\.[a-z]{2,}(?:\/\S*)?)/gi).map((part, j) =>
                /^(?:https?:\/\/)?[\w.-]+\.[a-z]{2,}/i.test(part) ? (
                  <a
                    key={j}
                    href={part.startsWith('http') ? part : `http://${part}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {part}
                  </a>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </p>
          ))}
        </div>
      )}

      {/* CTA */}
      <Link href="/join#formular">
        <a>
          <Button size="lg" className="w-full bg-accent hover:bg-accent/85 active:scale-[0.97] text-accent-foreground text-base py-3 h-auto shadow-md transition-all">
            Jetzt mitmachen
            <ArrowRight className="ml-2" size={18} aria-hidden="true" />
          </Button>
        </a>
      </Link>
    </Card>
  );
}

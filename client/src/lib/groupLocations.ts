export interface Location {
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

export interface TimeSlot {
  time: string;
  types: SlotType[];
  groupCount: number;
  subtype?: string;
}

export interface SlotType {
  type: string;
  label: string;
}

export interface Venue {
  key: string;
  venueName: string;
  city: string;
  address: string;
  weekday: string;
  mapsUrl: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  doctor: string;
  notes: string[];
  slots: TimeSlot[];
  types: Set<string>;
}

const DAY_ORDER: Record<string, number> = {
  Montag: 1,
  Dienstag: 2,
  Mittwoch: 3,
  Donnerstag: 4,
  Freitag: 5,
  Samstag: 6,
  Sonntag: 7,
};

function extractDoctor(notes: string): string {
  const match = notes.match(/Verantwortliche[r]?\s+(?:Arzt|Ärztin):\s*([^.]+)/);
  return match ? match[1].trim() : '';
}

function extractVenueName(address: string): string {
  // Take the part before the first comma as the venue name
  const parts = address.split(',');
  return parts[0].trim();
}

function parseSubtype(name: string): string | undefined {
  if (/Übungsgruppe/i.test(name)) return 'Übungsgruppe';
  if (/Trainingsgruppe/i.test(name)) return 'Trainingsgruppe';
  return undefined;
}

function typeLabel(type: string): string {
  switch (type) {
    case 'herzinsuffizienz': return 'Herzinsuffizienz';
    case 'schlaganfall': return 'Schlaganfall';
    default: return 'Herzsport';
  }
}

export function groupByVenue(locations: Location[]): Venue[] {
  const map = new Map<string, {
    locations: Location[];
    city: string;
    address: string;
    weekday: string;
  }>();

  for (const loc of locations) {
    const key = `${loc.address}|${loc.weekday}`;
    if (!map.has(key)) {
      map.set(key, { locations: [], city: loc.city, address: loc.address, weekday: loc.weekday });
    }
    map.get(key)!.locations.push(loc);
  }

  const venues: Venue[] = [];

  for (const [key, group] of Array.from(map.entries())) {
    const first = group.locations[0];
    const doctor = extractDoctor(first.notes);
    const venueName = extractVenueName(group.address);

    // Collect unique non-link notes (excluding doctor, parallel info)
    const noteSet = new Set<string>();
    for (const loc of group.locations) {
      const cleaned = loc.notes
        .replace(/Verantwortliche[r]?\s+(?:Arzt|Ärztin):\s*[^.]+\.\s*/g, '')
        .replace(/Zweite\s+(parallele\s+)?(Gruppe|Übungsgruppe|Trainingsgruppe|Herzinsuffizienz-Gruppe)[^.]*\.\s*/gi, '')
        .trim();
      if (cleaned) noteSet.add(cleaned);
    }

    // Build time slots: group by time
    const slotMap = new Map<string, Location[]>();
    for (const loc of group.locations) {
      if (!slotMap.has(loc.time)) {
        slotMap.set(loc.time, []);
      }
      slotMap.get(loc.time)!.push(loc);
    }

    const slots: TimeSlot[] = [];
    const venueTypes = new Set<string>();

    for (const [time, locs] of Array.from(slotMap.entries())) {
      // Collect unique types at this time
      const typeMap = new Map<string, number>();
      let subtype: string | undefined;

      for (const loc of locs) {
        const t = loc.type;
        typeMap.set(t, (typeMap.get(t) ?? 0) + 1);
        venueTypes.add(t);
        if (!subtype) subtype = parseSubtype(loc.name);
      }

      const types: SlotType[] = [];
      for (const [t] of Array.from(typeMap.entries())) {
        types.push({ type: t, label: typeLabel(t) });
      }

      slots.push({
        time,
        types,
        groupCount: locs.length,
        subtype,
      });
    }

    // Sort slots by time
    slots.sort((a, b) => a.time.localeCompare(b.time, 'de'));

    venues.push({
      key,
      venueName,
      city: group.city,
      address: group.address,
      weekday: group.weekday,
      mapsUrl: first.maps_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${group.address}, ${group.city}`)}`,
      contactName: first.contact_name,
      contactEmail: first.contact_email,
      contactPhone: first.contact_phone,
      doctor,
      notes: Array.from(noteSet),
      slots,
      types: venueTypes,
    });
  }

  // Sort: city (alphabetical), then weekday order
  venues.sort((a, b) => {
    const cityCompare = a.city.localeCompare(b.city, 'de');
    if (cityCompare !== 0) return cityCompare;
    return (DAY_ORDER[a.weekday] ?? 99) - (DAY_ORDER[b.weekday] ?? 99);
  });

  return venues;
}

export function filterVenues(
  venues: Venue[],
  city: string,
  day: string,
  onlySpecial: boolean,
): Venue[] {
  let result = venues;

  if (city) {
    result = result.filter(v => v.city === city);
  }

  if (day) {
    result = result.filter(v => v.weekday === day);
  }

  if (onlySpecial) {
    // Filter slots within each venue, keep venue if it has matching slots
    result = result
      .map(v => ({
        ...v,
        slots: v.slots.filter(s =>
          s.types.some(t => t.type === 'herzinsuffizienz' || t.type === 'schlaganfall')
        ),
      }))
      .filter(v => v.slots.length > 0);
  }

  return result;
}

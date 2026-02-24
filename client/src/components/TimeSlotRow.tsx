import type { TimeSlot } from '@/lib/groupLocations';

interface TimeSlotRowProps {
  slot: TimeSlot;
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

export default function TimeSlotRow({ slot }: TimeSlotRowProps) {
  const groupLabel = slot.groupCount === 1
    ? '1 Gruppe'
    : `${slot.groupCount} Gruppen`;

  return (
    <div className="flex items-center justify-between gap-3 py-2 text-base">
      <span className="font-medium text-foreground whitespace-nowrap min-w-[140px]">
        {slot.time}
      </span>
      <div className="flex items-center gap-2 flex-wrap flex-1">
        {slot.types.map(t => (
          <span
            key={t.type}
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${typeBadgeClass(t.type)}`}
          >
            {t.label}
          </span>
        ))}
        {slot.subtype && (
          <span className="text-xs text-muted-foreground">
            ({slot.subtype})
          </span>
        )}
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap">
        {groupLabel}
      </span>
    </div>
  );
}

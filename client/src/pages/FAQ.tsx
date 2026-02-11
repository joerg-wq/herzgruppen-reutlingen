import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'Kosten & Abrechnung',
      items: [
        {
          q: 'Was kostet die Teilnahme an einer Herzgruppe?',
          a: 'Die Kosten werden in der Regel von Ihrer Krankenkasse oder Rentenversicherung übernommen. Dies ist möglich, weil alle unsere Gruppen vom Württembergischen Behinderten- und Rehabilitationssportverband (WBRS) zertifiziert sind. Sie müssen lediglich eine ärztliche Verordnung vorlegen.',
        },
        {
          q: 'Übernimmt meine Krankenkasse die Kosten?',
          a: 'Ja, in der Regel übernehmen gesetzliche Krankenkassen die Kosten für zertifizierte Herzgruppen. Private Krankenkassen regeln dies individuell. Sprechen Sie mit Ihrer Krankenkasse oder Ihrem Arzt für Details.',
        },
        {
          q: 'Kann ich die Kosten von der Rentenversicherung erstattet bekommen?',
          a: 'Ja, wenn Sie eine Verordnung von der Rentenversicherung haben, können die Kosten erstattet werden. Dies ist besonders relevant, wenn Sie sich in einer Rehabilitationsmaßnahme befinden oder eine solche abgeschlossen haben.',
        },
      ],
    },
    {
      category: 'Einstieg & Voraussetzungen',
      items: [
        {
          q: 'Benötige ich eine ärztliche Freigabe?',
          a: 'Ja, eine ärztliche Freigabe oder Verordnung ist erforderlich. Dies ist ein wichtiger Sicherheitsaspekt, um sicherzustellen, dass das Training für Ihren Gesundheitszustand geeignet ist. Sprechen Sie mit Ihrem Hausarzt oder Kardiologen.',
        },
        {
          q: 'Kann ich auch ohne vorherige Reha-Maßnahme teilnehmen?',
          a: 'Ja, Sie benötigen nicht zwingend eine vorherige Reha-Maßnahme. Wichtig ist nur, dass Sie eine ärztliche Freigabe haben und eine Herzerkrankung diagnostiziert wurde.',
        },
        {
          q: 'Wann kann ich mit dem Training beginnen?',
          a: 'Das hängt von Ihrem persönlichen Gesundheitszustand ab. Nach einem Herzinfarkt oder einer Operation sollten Sie mindestens 4-6 Wochen warten, bevor Sie mit einem Trainingsprogramm beginnen. Ihr Arzt wird Ihnen den richtigen Zeitpunkt empfehlen.',
        },
      ],
    },
    {
      category: 'Sicherheit & Betreuung',
      items: [
        {
          q: 'Ist das Training sicher?',
          a: 'Ja, das Training in unseren Herzgruppen ist sehr sicher. Jede Trainingseinheit wird von geschultem Personal geleitet, die Vitalwerte werden überwacht, und Notfallausrüstung ist vorhanden. Das Training wird individuell an Ihre Leistungsfähigkeit angepasst.',
        },
        {
          q: 'Was passiert, wenn ich während des Trainings Probleme bekomme?',
          a: 'Unser Personal ist geschult, um mit medizinischen Notfällen umzugehen. Jede Gruppe hat Erste-Hilfe-Ausrüstung und einen automatisierten externen Defibrillator (AED). Im Notfall wird sofort der Rettungsdienst gerufen.',
        },
        {
          q: 'Kann ich meine Medikamente weiterhin nehmen?',
          a: 'Ja, Sie sollten Ihre Medikamente wie verschrieben weiterhin nehmen. Bitte informieren Sie das Trainerpersonal über alle Ihre Medikamente, damit sie Ihre Trainingsintensität entsprechend anpassen können.',
        },
      ],
    },
    {
      category: 'Training & Aktivitäten',
      items: [
        {
          q: 'Wie intensiv ist das Training?',
          a: 'Das Training ist individuell anpassbar. Es beginnt mit leichten Übungen und wird je nach Ihrem Fortschritt und Ihrer Leistungsfähigkeit gesteigert. Sie bestimmen das Tempo mit - es gibt keinen Druck, schneller zu werden.',
        },
        {
          q: 'Was muss ich zum Training mitbringen?',
          a: 'Bringen Sie sportgeeignete Kleidung und Schuhe, ein Handtuch, eine Trinkflasche, Ihre Krankenversicherungskarte und alle Ihre Medikamente mit.',
        },
        {
          q: 'Kann ich die Gruppe wechseln?',
          a: 'Ja, Sie können die Gruppe wechseln, wenn dies für Sie besser passt. Kontaktieren Sie die neue Gruppe und informieren Sie die alte Gruppe über Ihren Wechsel.',
        },
      ],
    },
    {
      category: 'Allgemein',
      items: [
        {
          q: 'Wie lange sollte ich in einer Herzgruppe trainieren?',
          a: 'Das Trainingsprogramm ist langfristig angelegt. Viele Teilnehmer trainieren über Jahre hinweg. Das regelmäßige Training ist wichtig, um die Vorteile zu erhalten und Ihre Gesundheit zu verbessern.',
        },
        {
          q: 'Kann ich auch als Angehöriger teilnehmen?',
          a: 'Die Herzgruppen sind primär für Herzpatienten konzipiert. Angehörige können aber oft zu speziellen Informationsveranstaltungen oder Ausflügen teilnehmen. Fragen Sie Ihre Gruppe danach.',
        },
        {
          q: 'Gibt es auch Gruppen für Schlaganfallpatienten?',
          a: 'Ja, die ARGE Reutlingen betreut auch eine Schlaganfallgruppe in Bad Urach. Kontaktieren Sie uns für weitere Informationen.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-12 md:py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Häufig gestellte Fragen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Finden Sie Antworten auf die wichtigsten Fragen zur Teilnahme an unseren Herzgruppen.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <div className="space-y-8">
              {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">{section.category}</h2>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => {
                      const isOpen = openItems.includes(itemIndex);

                      return (
                        <Card
                          key={itemIndex}
                          className="overflow-hidden border border-border"
                        >
                          <button
                            onClick={() => toggleItem(itemIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/5 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-foreground text-left">
                              {item.q}
                            </h3>
                            <ChevronDown
                              size={24}
                              className={`flex-shrink-0 text-primary transition-transform ${
                                isOpen ? 'transform rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 py-4 border-t border-border bg-secondary/5">
                              <p className="text-muted-foreground">{item.a}</p>
                            </div>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-secondary/5">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Weitere Fragen?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Wenn Sie eine Frage haben, die hier nicht beantwortet wird, kontaktieren Sie uns gerne direkt.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

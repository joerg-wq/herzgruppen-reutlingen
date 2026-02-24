import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { fadeInUp, stagger } from '@/lib/animations';

function faqKey(sectionIndex: number, itemIndex: number) {
  return `${sectionIndex}-${itemIndex}`;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = faqKey(sectionIndex, itemIndex);
    setOpenItems(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const faqs: { category: string; items: { q: string; a: string; link?: { href: string; label: string } }[] }[] = [
    {
      category: 'Einstieg & Voraussetzungen',
      items: [
        {
          q: 'Wer kann am Herzsport teilnehmen?',
          a: 'Teilnahmeberechtigt sind Patienten mit chronischen Herz-Kreislauf-Erkrankungen. Vor dem ersten Training findet ein persönliches Gespräch mit dem Herzsportgruppenarzt statt, um auf Basis Ihrer Befunde (z. B. Belastungs-EKG, Echokardiographie) die richtige Belastung festzulegen.',
        },
        {
          q: 'Benötige ich eine ärztliche Verordnung?',
          a: 'Ja, Sie benötigen eine Rehasportverordnung (Muster 56) von Ihrem Hausarzt oder Kardiologen. Dieses Formular ist der Schlüssel zur Kostenübernahme und dokumentiert, dass der Herzsport medizinisch notwendig und für Sie sicher ist.',
        },
        {
          q: 'Kann ich auch ohne vorherige Reha-Maßnahme teilnehmen?',
          a: 'Ja, Sie benötigen nicht zwingend eine vorherige Reha-Maßnahme. Wichtig ist nur, dass Sie eine ärztliche Verordnung haben und eine Herzerkrankung diagnostiziert wurde.',
        },
        {
          q: 'Wann kann ich mit dem Training beginnen?',
          a: 'Das hängt von Ihrem Gesundheitszustand ab. Nach einem Herzinfarkt oder einer Operation sollten Sie mindestens 4–6 Wochen warten. Ihr Arzt wird Ihnen den richtigen Zeitpunkt empfehlen.',
        },
      ],
    },
    {
      category: 'Kosten & Abrechnung',
      items: [
        {
          q: 'Was kostet die Teilnahme an einer Herzgruppe?',
          a: 'Die Kosten werden in der Regel von Ihrer Krankenkasse oder Rentenversicherung übernommen. Voraussetzung ist eine ärztliche Verordnung für Rehasport (Muster 56).',
        },
        {
          q: 'Übernimmt meine Krankenkasse die Kosten?',
          a: 'Ja, gesetzliche Krankenkassen übernehmen in der Regel die Kosten für zertifizierte Herzgruppen. Private Krankenkassen regeln dies individuell – sprechen Sie mit Ihrer Kasse für Details.',
        },
        {
          q: 'Kann ich die Kosten von der Rentenversicherung erstattet bekommen?',
          a: 'Ja, wenn Sie eine Verordnung von der Rentenversicherung haben, können die Kosten erstattet werden. Dies ist besonders relevant, wenn Sie sich in einer Rehabilitationsmaßnahme befinden oder eine solche abgeschlossen haben.',
        },
        {
          q: 'Muss ich auf die Genehmigung meiner Krankenkasse warten?',
          a: 'Viele Krankenkassen verzichten auf eine vorherige Genehmigung – Sie können dann sofort starten. Ob Ihre Kasse dazugehört, erfahren Sie beim WBRS.',
          link: { href: 'https://www.wbrs-online.net/reha-sport/infos-zum-rehasport/genehmigungsverzicht', label: 'Übersicht Genehmigungsverzicht (WBRS)' },
        },
      ],
    },
    {
      category: 'Ärztliche Betreuung & Qualifikation',
      items: [
        {
          q: 'Muss immer ein Arzt während des Trainings anwesend sein?',
          a: 'Es gibt zwei Durchführungsvarianten: Bei der klassischen Variante ist der Arzt ständig im Übungsraum anwesend. Bei der neuen Variante (seit 2021) visitiert der Arzt mindestens alle 6 Wochen – dafür ist eine qualifizierte Rettungskraft (z. B. Notfallsanitäter) ständig vor Ort. Bei Herzinsuffizienzgruppen bleibt die ständige ärztliche Anwesenheit aufgrund des höheren Risikos ausnahmslos vorgeschrieben.',
        },
        {
          q: 'Welche Aufgaben hat der Herzsportgruppenarzt?',
          a: 'Der Arzt prüft Ihre Untersuchungsbefunde, beurteilt Ihre Belastbarkeit und legt in Abstimmung mit der Übungsleitung Ihre individuellen Belastungsvorgaben schriftlich fest. Zudem berät er Sie zu Medikation und Lebensstil. Die Ärzte sind Fachärzte für Innere Medizin, Kardiologie oder Sportmedizin.',
        },
        {
          q: 'Welche Qualifikation hat die Übungsleitung?',
          a: 'Unsere Übungsleitung besitzt die Lizenz „Übungsleiter B Innere Medizin". Diese Spezialausbildung umfasst tiefgehendes Wissen über Kardiologie und Notfallmanagement – weit über das hinaus, was ein normaler Fitnesstrainer mitbringt.',
        },
      ],
    },
    {
      category: 'Sicherheit & Notfallmanagement',
      items: [
        {
          q: 'Ist das Training sicher?',
          a: 'Ja, das Training ist sehr sicher. Jede Einheit wird von geschultem Personal geleitet und Notfallausrüstung ist vorhanden. Die Trainingsintensität wird individuell an Ihre Leistungsfähigkeit angepasst.',
        },
        {
          q: 'Welche Notfallausrüstung ist vorhanden?',
          a: 'Jede Gruppe verfügt über einen netzunabhängigen, tragbaren Defibrillator (AED) und einen professionellen Notfallkoffer. Der AED ist ein lebensrettendes Instrument bei Herzrhythmusstörungen und überbrückt die Zeit bis zum Eintreffen des Rettungsdienstes.',
        },
        {
          q: 'Wie schnell ist im Notfall Hilfe vor Ort?',
          a: 'Unsere Sicherheitskette ist auf Unverzüglichkeit ausgelegt. Im Ernstfall wird parallel zum internen Alarm immer sofort der Notruf 112 abgesetzt. Die Rettungskraft oder der Arzt trifft ohne Verzögerung im Übungsraum ein – orientiert an der regionalen 8-Minuten-Hilfsfrist.',
        },
        {
          q: 'Welche Qualifikation hat das Notfallpersonal?',
          a: 'Wenn kein Arzt im Raum ist, übernehmen hochqualifizierte Fachkräfte die Sicherheit – z. B. Notfallsanitäter, Rettungsassistenten, Physician Assistants oder Fachkrankenpflegekräfte für Intensivpflege.',
        },
        {
          q: 'Werden Notfälle regelmäßig geübt?',
          a: 'Ja, mindestens zweimal pro Jahr finden verpflichtende Notfallübungen statt. Das Team trainiert die medizinischen Handgriffe und auch Sie als Teilnehmer lernen die Funktionsweise des AED kennen.',
        },
        {
          q: 'Kann ich meine Medikamente weiterhin nehmen?',
          a: 'Ja, nehmen Sie Ihre Medikamente wie verschrieben weiterhin. Bitte informieren Sie das Trainerpersonal über Ihre Medikation, damit die Trainingsintensität entsprechend angepasst werden kann.',
        },
      ],
    },
    {
      category: 'Gruppen & Training',
      items: [
        {
          q: 'Was ist der Unterschied zwischen Herzsport- und Herzinsuffizienzgruppe?',
          a: 'Die Einteilung erfolgt nach dem Risikoprofil. Herzinsuffizienzgruppen sind für Patienten mit schweren Einschränkungen (z. B. NYHA III oder dauerhaften Rhythmusstörungen) konzipiert – hier ist die ständige ärztliche Anwesenheit vorgeschrieben, die Gruppengröße kleiner (max. 12) und das Belastungsniveau wird besonders feinfühlig angepasst. Herzsportgruppen sind für Patienten mit stabilem Krankheitsverlauf (max. 20 Teilnehmer).',
        },
        {
          q: 'Wie groß sind die Gruppen?',
          a: 'Eine reguläre Herzsportgruppe umfasst maximal 20 Teilnehmer. Bei Herzinsuffizienzgruppen ist die Zahl auf maximal 12 begrenzt, da hier die medizinische Überwachung noch engmaschiger erfolgt.',
        },
        {
          q: 'Wie lange dauert eine Übungseinheit?',
          a: 'Jede Einheit dauert etwa 60 Minuten: Aufwärmphase, gezieltes Haupt­training und Abwärmen mit Entspannungsübungen.',
        },
        {
          q: 'Wie intensiv ist das Training?',
          a: 'Das Training ist individuell anpassbar. Es beginnt mit leichten Übungen und wird je nach Fortschritt und Leistungsfähigkeit gesteigert. Sie bestimmen das Tempo mit – es gibt keinen Druck.',
        },
        {
          q: 'Was muss ich zum Training mitbringen?',
          a: 'Sportgeeignete Kleidung und Schuhe, ein Handtuch, eine Trinkflasche, Ihre Krankenversicherungskarte und Ihre Medikamente.',
        },
      ],
    },
    {
      category: 'Allgemein',
      items: [
        {
          q: 'Was genau ist Rehasport in Herzgruppen?',
          a: 'Ärztlich betreutes Training für Menschen mit Herzerkrankungen. Neben der Stärkung von Ausdauer und Kraft geht es um Risikofaktorenmanagement und psychosoziale Unterstützung – der Austausch mit Gleichgesinnten wirkt oft genauso heilend wie die Bewegung selbst.',
          link: { href: 'https://www.wbrs-online.net/reha-sport/downloads/sonstiges/266-rehabilitationssport-in-herzsportgruppen-und-herzinsuffizienzgruppen/file', label: 'Broschüre herunterladen (PDF)' },
        },
        {
          q: 'Wie lange sollte ich in einer Herzgruppe trainieren?',
          a: 'Das Programm ist langfristig angelegt. Viele Teilnehmer trainieren über Jahre hinweg. Regelmäßiges Training ist wichtig, um die gesundheitlichen Vorteile zu erhalten.',
        },
      ],
    },
  ];

  // Inject FAQPage JSON-LD for Google Rich Snippets
  useEffect(() => {
    const allItems = faqs.flatMap(section =>
      section.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      }))
    );
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allItems,
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                Häufig gestellte Fragen
              </motion.h1>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Finden Sie Antworten auf die wichtigsten Fragen zur Teilnahme an den ambulanten Herzgruppen im Kreis Reutlingen.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-padding">
          <div className="container max-w-3xl">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              {faqs.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  variants={fadeInUp}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-xl font-bold mb-5 text-foreground">{section.category}</h2>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => {
                      const key = faqKey(sectionIndex, itemIndex);
                      const isOpen = openItems.includes(key);

                      return (
                        <Card
                          key={key}
                          className="overflow-hidden border border-border"
                        >
                          <button
                            onClick={() => toggleItem(sectionIndex, itemIndex)}
                            className="w-full px-5 py-4 flex items-center justify-between hover:bg-secondary/5 transition-colors text-left"
                          >
                            <h3 className="text-base font-semibold text-foreground pr-3">
                              {item.q}
                            </h3>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown
                                size={20}
                                className="flex-shrink-0 text-primary"
                              />
                            </motion.div>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 py-4 border-t border-border bg-secondary/5">
                                  <p className="text-base text-muted-foreground leading-relaxed">{item.a}</p>
                                  {item.link && (
                                    <a
                                      href={item.link.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-primary hover:underline text-base mt-2"
                                    >
                                      {item.link.label} <ExternalLink size={14} />
                                    </a>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-secondary/5">
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
                Weitere Fragen?
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-8 max-w-xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Wenn Sie eine Frage haben, die hier nicht beantwortet wird, kontaktieren Sie uns gerne direkt.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <Link href="/contact">
                  <a>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-3 h-auto shadow-md">
                      Kontakt aufnehmen
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </a>
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

import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
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

  const faqs = [
    {
      category: 'Kosten & Abrechnung',
      items: [
        {
          q: 'Was kostet die Teilnahme an einer Herzgruppe?',
          a: 'Die Kosten werden in der Regel von Ihrer Krankenkasse oder Rentenversicherung übernommen. Voraussetzung ist in der Regel eine ärztliche Verordnung (z. B. für Rehasport).',
        },
        {
          q: 'Übernimmt meine Krankenkasse die Kosten?',
          a: 'Ja, in der Regel übernehmen gesetzliche Krankenkassen die Kosten für zertifizierte Herzgruppen. Private Krankenkassen regeln dies individuell. Sprechen Sie mit Ihrer Krankenkasse oder Ihrem Arzt für Details.',
        },
        {
          q: 'Kann ich die Kosten von der Rentenversicherung erstattet bekommen?',
          a: 'Ja, wenn Sie eine Verordnung von der Rentenversicherung haben, können die Kosten erstattet werden. Dies ist besonders relevant, wenn Sie sich in einer Rehabilitationsmaßnahme befinden oder eine solche abgeschlossen haben.',
        },
        {
          q: 'Muss ich auf die Genehmigung meiner Krankenkasse warten?',
          a: 'Viele Krankenkassen verzichten auf eine vorherige Genehmigung der Rehasportverordnung – Sie können dann sofort mit dem Training beginnen, ohne auf einen Genehmigungsbescheid zu warten. Ob Ihre Kasse dazugehört, erfahren Sie in der Übersicht des WBRS: wbrs-online.net/reha-sport/infos-zum-rehasport/genehmigungsverzicht',
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
          a: 'Das Training ist individuell anpassbar. Es beginnt mit leichten Übungen und wird je nach Ihrem Fortschritt und Ihrer Leistungsfähigkeit gesteigert. Sie bestimmen das Tempo mit – es gibt keinen Druck, schneller zu werden.',
        },
        {
          q: 'Was muss ich zum Training mitbringen?',
          a: 'Bringen Sie sportgeeignete Kleidung und Schuhe, ein Handtuch, eine Trinkflasche, Ihre Krankenversicherungskarte und alle Ihre Medikamente mit.',
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
      ],
    },
  ];

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

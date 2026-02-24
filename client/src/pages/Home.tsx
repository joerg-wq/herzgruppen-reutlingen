import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, MapPin, FileText, Users, Shield, Smile, ArrowRight, Activity, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { fadeInUp, stagger } from '@/lib/animations';

function HeroIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <svg viewBox="0 0 400 360" className="w-full h-auto" aria-hidden="true">
        {/* Background circles */}
        <circle cx="200" cy="180" r="150" fill="oklch(0.65 0.2 15 / 0.08)" />
        <circle cx="200" cy="180" r="110" fill="oklch(0.65 0.2 15 / 0.06)" />

        {/* Heart shape */}
        <motion.path
          d="M200 280 C200 280 100 200 100 150 C100 110 130 80 165 80 C185 80 200 95 200 95 C200 95 215 80 235 80 C270 80 300 110 300 150 C300 200 200 280 200 280Z"
          fill="oklch(0.65 0.2 15 / 0.15)"
          stroke="oklch(0.65 0.2 15)"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* EKG line through heart */}
        <motion.polyline
          points="60,175 120,175 140,175 155,145 170,210 185,155 200,175 215,175 230,175 245,150 255,200 265,165 280,175 340,175"
          fill="none"
          stroke="oklch(0.65 0.2 15)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Pulse animation dot */}
        <motion.circle
          cx="200"
          cy="175"
          r="5"
          fill="oklch(0.65 0.2 15)"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Person silhouettes in movement */}
        {/* Person 1 - walking */}
        <g transform="translate(110, 230)">
          <circle cx="0" cy="-30" r="10" fill="oklch(0.55 0.15 250 / 0.6)" />
          <line x1="0" y1="-20" x2="0" y2="10" stroke="oklch(0.55 0.15 250 / 0.6)" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="-10" x2="-12" y2="0" stroke="oklch(0.55 0.15 250 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="-10" x2="12" y2="-2" stroke="oklch(0.55 0.15 250 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="10" x2="-10" y2="30" stroke="oklch(0.55 0.15 250 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="10" x2="10" y2="30" stroke="oklch(0.55 0.15 250 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Person 2 - arms up (exercise) */}
        <g transform="translate(200, 225)">
          <circle cx="0" cy="-35" r="11" fill="oklch(0.65 0.2 15 / 0.6)" />
          <line x1="0" y1="-24" x2="0" y2="10" stroke="oklch(0.65 0.2 15 / 0.6)" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="-14" x2="-15" y2="-28" stroke="oklch(0.65 0.2 15 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="-14" x2="15" y2="-28" stroke="oklch(0.65 0.2 15 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="10" x2="-10" y2="32" stroke="oklch(0.65 0.2 15 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="10" x2="10" y2="32" stroke="oklch(0.65 0.2 15 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Person 3 - jogging */}
        <g transform="translate(290, 232)">
          <circle cx="0" cy="-30" r="10" fill="oklch(0.7 0.15 145 / 0.6)" />
          <line x1="0" y1="-20" x2="0" y2="10" stroke="oklch(0.7 0.15 145 / 0.6)" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="-10" x2="-14" y2="-4" stroke="oklch(0.7 0.15 145 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="-10" x2="14" y2="-16" stroke="oklch(0.7 0.15 145 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="10" x2="-12" y2="28" stroke="oklch(0.7 0.15 145 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="10" x2="12" y2="28" stroke="oklch(0.7 0.15 145 / 0.6)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </motion.div>
  );
}

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

function WaveDivider({ flip, className }: { flip?: boolean; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className ?? ''}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`w-full h-[40px] md:h-[60px] block ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,30 C200,55 400,5 600,30 C800,55 1000,5 1200,30 L1200,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 section-padding">
          {/* Decorative blur circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-16 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                {/* Eyebrow Badge */}
                <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-5">
                    ARGE Reutlingen e.V.
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  Ambulante Herzgruppen im Kreis Reutlingen
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  Rehasport in Herzgruppen – ärztlich begleitet und wohnortnah im Kreis Reutlingen.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                >
                  <Link href="/locations">
                    <a>
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-base px-8 py-3 h-auto shadow-md">
                        Standort & Termine finden
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </a>
                  </Link>
                  <Link href="/join#formular">
                    <a>
                      <Button size="lg" className="bg-accent hover:bg-accent/85 active:scale-[0.97] text-accent-foreground w-full sm:w-auto text-base px-8 py-3 h-auto shadow-md transition-all">
                        Jetzt mitmachen
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </a>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Hero Illustration - hidden on mobile, shown on lg+ */}
              <div className="hidden lg:block">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Kurz erklärt */}
        <WaveDivider className="text-secondary/5 -mb-px" />
        <section className="bg-secondary/5 section-padding">
          <div className="container max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-3 text-foreground"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Kurz erklärt
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-6"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Die wichtigsten Fragen auf einen Blick:
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    q: 'Für wen?',
                    a: 'Für Menschen mit Herzerkrankung (z.B. Herzinfarkt, Herzschwäche, Rhythmusstörungen), die sicher und begleitet aktiv werden möchten.',
                  },
                  {
                    q: 'Was bringt es?',
                    a: 'Mehr Belastbarkeit, mehr Sicherheit im Alltag und Austausch mit anderen Betroffenen – unter fachkundiger Anleitung und ärztlicher Betreuung.',
                  },
                  {
                    q: 'Wie komme ich rein?',
                    a: 'Mit einer ärztlichen Empfehlung oder Verordnung. Suchen Sie einen passenden Standort aus und melden Sie Ihr Interesse über unser Kontaktformular.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="p-6 h-full card-hover">
                      <h3 className="text-base font-semibold mb-2 text-foreground">
                        {item.q}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <WaveDivider flip className="text-secondary/5 -mt-px" />

        {/* Three Feature Cards */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              {/* Card 1: Was sind Herzgruppen */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
                <Card className="p-6 h-full card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Was sind Herzgruppen?</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Ambulante Herzgruppen sind spezialisierte Trainingsgruppen für Herzpatienten. Unter ärztlicher Betreuung trainieren Sie gemeinsam mit anderen Betroffenen.
                  </p>
                  <Link href="/about">
                    <a className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                      Mehr erfahren <ArrowRight size={16} />
                    </a>
                  </Link>
                </Card>
              </motion.div>

              {/* Card 2: Standorte & Übungstermine */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
                <Card className="p-6 h-full card-hover">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Standorte & Übungstermine</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Herzgruppen im gesamten Kreis Reutlingen – von Reutlingen und Pfullingen über Metzingen und Dettingen bis Bad Urach und Münsingen.
                  </p>
                  <Link href="/locations">
                    <a className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                      Zu den Übungsterminen <ArrowRight size={16} />
                    </a>
                  </Link>
                </Card>
              </motion.div>

              {/* Card 3: Mitmachen */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
                <Card className="p-6 h-full card-hover">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="text-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Mitmachen & Kontakt</h3>
                  <p className="text-base text-muted-foreground mb-4">
                    Der Einstieg ist einfach und unkompliziert. Melden Sie Ihr Interesse – wir kümmern uns um den Rest.
                  </p>
                  <Link href="/join#formular">
                    <a className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                      Jetzt mitmachen <ArrowRight size={16} />
                    </a>
                  </Link>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How a Session Works – Timeline */}
        <WaveDivider className="text-secondary/5 -mb-px" />
        <section className="bg-secondary/5 section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-10 text-foreground text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                So läuft eine Trainingseinheit ab
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Desktop connecting line */}
                <div className="hidden md:block absolute top-7 left-[calc(16.7%+28px)] right-[calc(16.7%+28px)] h-0.5 bg-primary/20" />

                {[
                  {
                    number: '1',
                    title: 'Aufwärmen',
                    description: 'Die Übungsleitung begrüßt Sie und startet mit leichten Bewegungsübungen und Stretching.',
                  },
                  {
                    number: '2',
                    title: 'Haupttraining',
                    description: 'Unter Anleitung trainieren Sie mit anderen Teilnehmern. Das Tempo ist individuell anpassbar.',
                  },
                  {
                    number: '3',
                    title: 'Abwärmen & Austausch',
                    description: 'Entspannungsübungen zum Abschluss und Zeit für den Austausch mit Gleichgesinnten.',
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-5 rounded-xl border border-border text-center relative"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-md relative z-10">
                      {step.number}
                    </div>
                    <h4 className="font-semibold text-base mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <WaveDivider flip className="text-secondary/5 -mt-px" />

        {/* For Whom & What to Bring */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              {/* For Whom */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="text-primary" size={22} />
                  </div>
                  <h3 className="text-xl font-semibold">Für wen geeignet?</h3>
                </div>
                <p className="text-base text-muted-foreground mb-5">
                  Unsere Herzgruppen sind für Menschen gedacht, die eine Herzerkrankung haben oder hatten und wieder aktiv werden möchten. Typische Teilnehmer sind:
                </p>
                <ul className="space-y-3 text-base">
                  {[
                    'Nach Herzinfarkt oder Herzoperation',
                    'Mit Herzschwäche oder Herzrhythmusstörungen',
                    'Nach Bypass- oder Stent-Operation',
                    'Mit erhöhtem Blutdruck oder Cholesterin',
                    'Die ihre Fitness und Lebensqualität verbessern möchten',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5 text-lg">&#10003;</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What to Bring */}
              <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Shield className="text-secondary" size={22} />
                  </div>
                  <h3 className="text-xl font-semibold">Was Sie wissen sollten</h3>
                </div>
                <p className="text-base text-muted-foreground mb-5">
                  Für die Teilnahme benötigen Sie eine ärztliche Empfehlung oder Verordnung. Dies ist ein wichtiger Sicherheitsaspekt.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-5">
                  <h4 className="font-semibold text-base mb-3">Wichtige Voraussetzungen:</h4>
                  <ul className="space-y-2.5 text-base text-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">&#10003;</span> Ärztliche Freigabe oder Verordnung
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">&#10003;</span> Sportgeeignete Kleidung und Schuhe
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">&#10003;</span> Handtuch und Trinkflasche
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">&#10003;</span> Krankenversicherungskarte
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">&#10003;</span> Alle aktuellen Medikamente
                    </li>
                  </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  Unsere Herzgruppen erfüllen die anerkannten Qualitätskriterien des Rehasports. So ist die Abrechnung mit Krankenkassen und Rentenversicherung möglich.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <WaveDivider className="text-secondary/5 -mb-px" />
        <section className="bg-secondary/5 section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Sicherheit und Qualität
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Shield className="text-primary" size={36} />,
                    title: 'Zertifiziert & Versichert',
                    description: 'Alle Herzgruppen im Kreis Reutlingen erfüllen die Qualitätsanforderungen des Rehasports. So ist die Abrechnung mit Krankenkassen und Rentenversicherung möglich.',
                  },
                  {
                    icon: <Smile className="text-secondary" size={36} />,
                    title: '35+ Jahre Erfahrung',
                    description: 'Die ARGE Reutlingen besteht seit über 35 Jahren und hat umfangreiche Erfahrung in der Betreuung von Herzpatienten im gesamten Kreis.',
                  },
                  {
                    icon: <Users className="text-accent" size={36} />,
                    title: 'Gemeinschaft & Unterstützung',
                    description: 'Trainieren Sie mit anderen Betroffenen. Der Austausch mit Gleichgesinnten ist Teil des Erfolgs.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl border border-border text-center card-hover"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <WaveDivider flip className="text-secondary/5 -mt-px" />

        {/* Stats Counter */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-10 text-foreground text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Herzgruppen in Zahlen
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { end: 35, suffix: '+', label: 'Jahre Erfahrung', icon: <Shield className="text-primary" size={28} /> },
                  { end: 7, suffix: '', label: 'Standorte im Kreis', icon: <MapPin className="text-secondary" size={28} /> },
                  { end: 29, suffix: '', label: 'Herzgruppen', icon: <Heart className="text-primary" size={28} /> },
                  { end: 29, suffix: '', label: 'Trainingseinheiten / Woche', icon: <Activity className="text-accent" size={28} /> },
                ].map((stat, index) => {
                  const { count, ref } = useCountUp(stat.end);
                  return (
                    <motion.div
                      key={index}
                      ref={ref}
                      className="text-center p-6 rounded-xl bg-white border border-border card-hover"
                      variants={fadeInUp}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                        {count}{stat.suffix}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <WaveDivider className="text-secondary/5 -mb-px" />
        <section className="bg-secondary/5 section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-3 text-foreground text-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Das sagen unsere Teilnehmer
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground mb-10 text-center max-w-xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Erfahrungen von Menschen, die den Schritt gewagt haben.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    quote: 'Nach meinem Herzinfarkt hatte ich Angst vor Bewegung. In der Herzgruppe habe ich gelernt, meinem Körper wieder zu vertrauen. Die ärztliche Betreuung gibt mir Sicherheit.',
                    name: 'Maria K.',
                    age: 67,
                    city: 'Reutlingen',
                  },
                  {
                    quote: 'Seit drei Jahren bin ich dabei und fühle mich fitter als je zuvor. Der Austausch mit Gleichgesinnten ist mindestens genauso wichtig wie das Training selbst.',
                    name: 'Hans-Peter W.',
                    age: 72,
                    city: 'Metzingen',
                  },
                  {
                    quote: 'Die Herzgruppe ist für mich ein fester Termin in der Woche geworden. Man merkt, dass die Übungsleiter wirklich wissen, was sie tun. Ich kann es nur empfehlen.',
                    name: 'Ingrid S.',
                    age: 64,
                    city: 'Pfullingen',
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl border border-border card-hover relative"
                    variants={fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
                    <p className="text-base text-foreground leading-relaxed mb-5 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{testimonial.name}, {testimonial.age}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.city}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <WaveDivider flip className="text-secondary/5 -mt-px" />

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
          <div className="container text-center relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.div
                className="flex justify-center mb-5"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="text-primary" size={32} />
                </div>
              </motion.div>

              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Bereit, wieder aktiv zu werden?
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                Kontaktieren Sie uns noch heute. Unser Team hilft Ihnen gerne beim Einstieg und beantwortet alle Ihre Fragen.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <Link href="/locations">
                  <a>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-base px-8 py-3 h-auto shadow-md">
                      Standorte ansehen
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <Button size="lg" className="bg-accent hover:bg-accent/85 active:scale-[0.97] text-accent-foreground w-full sm:w-auto text-base px-8 py-3 h-auto shadow-md transition-all">
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

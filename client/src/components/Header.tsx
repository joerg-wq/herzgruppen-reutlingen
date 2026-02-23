import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SITE_NAME } from '@/config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  const navItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Herzgruppen verstehen', href: '/about' },
    { label: 'Standorte & Termine', href: '/locations' },
    { label: 'Verein & Vorstand', href: '/organization' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/contact' },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 border-b transition-colors duration-300"
      animate={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.6)',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
        boxShadow: scrolled
          ? '0 4px 20px -4px rgba(0,0,0,0.08)'
          : '0 0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.3 }}
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/">
          <a
            className="flex items-center gap-3 group"
            aria-label={`Zur Startseite der ARGE Reutlingen – ${SITE_NAME}`}
          >
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-xl font-bold text-primary-foreground">&#9829;</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                ARGE Reutlingen e.V.
              </p>
              <p className="text-base font-semibold text-foreground">
                {SITE_NAME}
              </p>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="px-3 py-2 text-[0.9rem] font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <Link href="/join">
            <a>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                Anmelden
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label={isMenuOpen ? 'Hauptmenü schließen' : 'Hauptmenü öffnen'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link href={item.href}>
                    <a
                      className="block px-4 py-2.5 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.04, duration: 0.2 }}
                className="pt-2"
              >
                <Link href="/join">
                  <a onClick={() => setIsMenuOpen(false)}>
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Anmelden
                    </Button>
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

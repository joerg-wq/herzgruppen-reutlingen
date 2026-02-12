import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Startseite', href: '/' },
    { label: 'Herzsport verstehen', href: '/about' },
    { label: 'Übungstermine', href: '/locations' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/">
          <a
            className="flex items-center gap-3 group"
            aria-label="Zur Startseite der ambulanten Herzsportgruppe Pfullingen"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">♥</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                Herzsportgruppe Pfullingen
              </p>
              <p className="text-sm font-semibold text-foreground">
                Rehasport für Herzpatienten
              </p>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <Link href="/join">
            <a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Anmelden
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
          aria-label={isMenuOpen ? "Hauptmenü schließen" : "Hauptmenü öffnen"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Kontakt
                </Button>
              </a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

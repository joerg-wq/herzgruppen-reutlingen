import { Link } from 'wouter';
import { CONTACT_EMAIL } from '@/config';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-12">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">Ambulante Herzsportgruppe Pfullingen</h3>
            <p className="text-sm opacity-90 leading-snug">
              Herzsport und Rehasport für Herzpatienten in Pfullingen – mit ärztlicher Betreuung und qualifizierten Übungsleiterinnen und Übungsleitern.
            </p>
            <p className="text-xs opacity-75 mt-2">
              Trägerverein: ARGE Reutlingen e.V.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:underline opacity-90 hover:opacity-100">Startseite</a>
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  <a className="hover:underline opacity-90 hover:opacity-100">Standorte</a>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <a className="hover:underline opacity-90 hover:opacity-100">Anmeldung</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="hover:underline opacity-90 hover:opacity-100">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-1.5 text-sm opacity-90">
              <li>
                <strong>Trainingsort:</strong>
                <br />
                Sporthalle des Friedrich-Schiller-Gymnasiums
                <br />
                72793 Pfullingen
              </li>
              <li>
                <strong>Geschäftsstelle (Trägerverein):</strong>
                <br />
                07072 / 80 58 6
              </li>
              <li>
                <strong>E-Mail:</strong>
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Rechtliches</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/impressum">
                  <a className="hover:underline opacity-90 hover:opacity-100">Impressum</a>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz">
                  <a className="hover:underline opacity-90 hover:opacity-100">Datenschutz</a>
                </Link>
              </li>
              <li>
                <p className="text-xs opacity-80">
                  <span className="font-semibold">Über diese Website:</span> Informationsangebot der ambulanten Herzsportgruppe Pfullingen (getragen durch die ARGE Reutlingen e.V.).
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm opacity-75 gap-2">
            <p>
              &copy; {new Date().getFullYear()} Ambulate Herzsportgruppe Pfullingen / ARGE Reutlingen e.V.
            </p>
            <p>Zertifiziert durch WBRS | VR 350490 beim Amtsgericht Stuttgart</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

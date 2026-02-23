import { Link } from 'wouter';
import { CONTACT_EMAIL, SITE_NAME } from '@/config';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-12">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{SITE_NAME}</h3>
            <p className="text-base opacity-90 leading-relaxed">
              Ambulante Herzgruppen im Kreis Reutlingen – Rehasport, Gemeinschaft und Lebensqualität unter ärztlicher Betreuung.
            </p>
            <p className="text-sm opacity-75 mt-3">
              Trägerverein: ARGE Reutlingen e.V.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link href="/">
                  <a className="opacity-90 hover:opacity-100 hover:underline underline-offset-2 transition-opacity">Startseite</a>
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  <a className="opacity-90 hover:opacity-100 hover:underline underline-offset-2 transition-opacity">Standorte</a>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <a className="opacity-90 hover:opacity-100 hover:underline underline-offset-2 transition-opacity">Anmeldung</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="opacity-90 hover:opacity-100 hover:underline underline-offset-2 transition-opacity">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-2.5 text-base opacity-90">
              <li>
                <strong>Geschäftsstelle:</strong>
                <br />
                ARGE Reutlingen e.V.
                <br />
                Lindachstr. 18
                <br />
                72810 Gomaringen
              </li>
              <li>
                <strong>Telefon:</strong>
                <br />
                <a href="tel:+497072805860" className="hover:underline underline-offset-2">
                  07072 / 80 58 6
                </a>
              </li>
              <li>
                <strong>E-Mail:</strong>
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link href="/impressum">
                  <a className="opacity-90 hover:opacity-100 hover:underline underline-offset-2 transition-opacity">Impressum</a>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz">
                  <a className="opacity-90 hover:opacity-100 hover:underline underline-offset-2 transition-opacity">Datenschutz</a>
                </Link>
              </li>
              <li>
                <p className="text-sm opacity-80 leading-relaxed">
                  <span className="font-semibold">Über diese Website:</span> Informationsangebot der ambulanten Herzgruppen im Kreis Reutlingen (ARGE Reutlingen e.V.).
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75 gap-3">
            <p>
              &copy; {new Date().getFullYear()} {SITE_NAME} / ARGE Reutlingen e.V.
            </p>
            <p>Zertifiziert durch WBRS | VR 350490 beim Amtsgericht Stuttgart</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

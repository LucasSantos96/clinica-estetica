import { InstagramIcon, WhatsAppIcon } from '../icons';
import { footerLinks, instagramUrl, whatsappUrl } from '../content';

export default function FooterSection() {
  return (
    <div className="footer-grid">
      <div>
        <div className="footer-logo">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M14 5 C15.5 10 20 11 23 14 C20 17 15.5 18 14 23 C12.5 18 8 17 5 14 C8 11 12.5 10 14 5Z" stroke="#E8736A" strokeWidth="1" fill="none" />
          </svg>
          Clínica estética
        </div>
        <p className="footer-tagline">Cuidado, beleza e bem-estar para realizar o que há de melhor em você.</p>
      </div>

      <div className="footer-col">
        <h4>Navegação</h4>
        <ul className="footer-links">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-col">
        <h4>Siga-nos</h4>
        <div className="footer-social">
          <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href={whatsappUrl} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

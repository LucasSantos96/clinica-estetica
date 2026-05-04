import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { MapPinIllustration } from '../icons';
import { contactItems } from '../content';

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=-22.87239055765889,-42.00048918715419';

const ContactItem = function ContactItem({ item }) {
  const Icon = item.icon;

  return (
    <div className="contact-item reveal">
      <div className="contact-ico">
        <Icon />
      </div>
      <div>
        <div className="contact-info-label">{item.label}</div>
        <div className="contact-info-val">{item.value}</div>
      </div>
    </div>
  );
};

export default function ContactSection() {
  const mapRef = useRef(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    const node = mapRef.current;
    if (!node || shouldLoadMap) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: '200px 0px',
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <>
      <SectionHeader label="Fale conosco" title="Estamos aqui para você" subtitle="Entre em contato pelo WhatsApp ou venha nos visitar." />

      <div className="contact-grid">
        <div>
          {contactItems.map((item) => (
            <ContactItem key={item.label} item={item} />
          ))}
        </div>

        <div className="map-column">
          <div className="map-placeholder reveal" ref={mapRef}>
            {shouldLoadMap ? (
              <iframe
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19330.862114477437!2d-42.00048918715419!3d-22.87239055765889!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1777910842016!5m2!1sen!2sbr"
                title="Mapa da clínica"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : null}
            <div className="map-pin-wrap">
              <MapPinIllustration />
            </div>
          </div>

          <div className="map-actions reveal">
            <a className="btn-outline map-button" href={MAP_URL} target="_blank" rel="noopener noreferrer">
              Ver no mapa
              <ExternalLink className="button-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

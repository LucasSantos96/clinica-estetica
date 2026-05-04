import { memo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { services } from '../content';

const ServiceCard = memo(function ServiceCard({ service }) {
  const ServiceIcon = service.icon;

  return (
    <article className="service-card reveal">
      <div className={`service-card-img ${service.imageClass}`}>
        <img
          className="service-card-photo"
          src={service.imageUrl}
          alt={service.title}
          width="800"
          height="640"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="service-card-body">
        <div className="service-icon">
          <ServiceIcon />
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </article>
  );
});

export default function ServicesSection() {
  return (
    <>
      <SectionHeader
        label="Nossos serviços"
        title={
          <>
            Tratamentos para valorizar
            <br />
            seus traços
          </>
        }
        subtitle="Escolha o cuidado ideal com orientação profissional."
      />

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </>
  );
}

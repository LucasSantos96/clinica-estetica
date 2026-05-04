import { memo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../content';

const TestimonialCard = memo(function TestimonialCard({ testimonial }) {
  return (
    <article className="test-card reveal">
      <div className="test-stars">★★★★★</div>
      <p className="test-text">"{testimonial.text}"</p>
      <div className="test-author">
        <div className="test-avatar">
          <img className="test-media" src={testimonial.imageUrl} alt={testimonial.name} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
        </div>
        <div>
          <div className="test-name">{testimonial.name}</div>
          <div className="test-role">{testimonial.role}</div>
        </div>
      </div>
    </article>
  );
});

export default function TestimonialsSection() {
  return (
    <>
      <SectionHeader label="Depoimentos" title="O que nossas clientes dizem" subtitle="Histórias reais de quem confia no nosso cuidado." />

      <div className="test-grid">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} testimonial={item} />
        ))}
      </div>
    </>
  );
}

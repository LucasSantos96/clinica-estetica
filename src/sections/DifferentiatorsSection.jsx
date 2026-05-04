import { memo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { differentiators } from '../content';

const DifferentiatorCard = memo(function DifferentiatorCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="diff-card reveal">
      <div className="diff-icon">
        <Icon />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
});

export default function DifferentiatorsSection() {
  return (
    <>
      <SectionHeader
        label="Nossos diferenciais"
        title={
          <>
            Tudo pensado para você ter
            <br />
            a melhor experiência
          </>
        }
        subtitle="Do agendamento ao pós-tratamento, cada detalhe importa."
      />

      <div className="diff-grid">
        {differentiators.map((item) => (
          <DifferentiatorCard key={item.title} item={item} />
        ))}
      </div>
    </>
  );
}

import SectionHeader from '../components/SectionHeader';
import { AwardIcon, ShieldCheckIcon } from '../icons';

export default function AboutSection() {
  return (
    <>
      <div className="about-img-wrap reveal">
        <div className="about-blob">
          <img
            className="about-photo"
            src="https://i.pinimg.com/1200x/ab/fe/07/abfe078be97eab73bd51d6114da1da3d.jpg"
            alt="Profissional da clínica estética em atendimento"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-float">
          <div className="about-float-row">
            <div className="about-stat">
              <div className="about-stat-num">+8</div>
              <div className="about-stat-label">
                anos de
                <br />
                experiência
              </div>
            </div>
            <div className="about-stat">
              <div className="about-stat-num">500+</div>
              <div className="about-stat-label">
                clientes
                <br />
                satisfeitas
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content reveal">
        <SectionHeader
          label="Sobre a clínica"
          title={
            <>
              Beleza que nasce do cuidado
              <br />
              e da <span className="accent">confiança.</span>
            </>
          }
          align="left"
        />
        <p>
          Há mais de 8 anos, nossa missão é cuidar de pessoas, realizando sua beleza natural com segurança, ética e resultados que respeitam a individualidade de cada uma.
        </p>
        <p>Aqui, você encontra acolhimento, escuta e tratamentos personalizados para você se sentir ainda melhor em sua própria pele.</p>
        <div className="about-badges">
          <div className="about-badge">
            <div className="about-badge-icon">
              <ShieldCheckIcon />
            </div>
            <span>Atendimento humanizado</span>
          </div>
          <div className="about-badge">
            <div className="about-badge-icon">
              <AwardIcon />
            </div>
            <span>Profissional certificada</span>
          </div>
        </div>
      </div>
    </>
  );
}

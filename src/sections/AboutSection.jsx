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
            width="800"
            height="800"
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
              Cuidado estético com
              <br />
              critério e <span className="accent">naturalidade.</span>
            </>
          }
          align="left"
        />
        <p>
          Há mais de 8 anos, unimos escuta, técnica e planejamento para indicar o tratamento certo para cada rosto.
        </p>
        <p>O objetivo é simples: valorizar seus traços com segurança, sem exageros e com orientação em cada etapa.</p>
        <div className="about-badges">
          <div className="about-badge">
            <div className="about-badge-icon">
              <ShieldCheckIcon />
            </div>
            <span>Atendimento individual</span>
          </div>
          <div className="about-badge">
            <div className="about-badge-icon">
              <AwardIcon />
            </div>
            <span>Protocolos seguros</span>
          </div>
        </div>
      </div>
    </>
  );
}

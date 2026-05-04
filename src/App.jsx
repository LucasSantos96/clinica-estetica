import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { navLinks, instagramUrl, whatsappUrl } from './content';
import { AwardIcon, HeartIcon, InstagramIcon, WhatsAppIcon } from './icons';

const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const ResultsSection = lazy(() => import('./sections/ResultsSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const DifferentiatorsSection = lazy(() => import('./sections/DifferentiatorsSection'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));
const FooterSection = lazy(() => import('./sections/FooterSection'));

function App() {
  useRevealObserver();

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <DeferredSection id="servicos" className="services">
          <Suspense fallback={null}>
            <ServicesSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="resultados" className="section--white">
          <Suspense fallback={null}>
            <ResultsSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="sobre" className="about">
          <Suspense fallback={null}>
            <AboutSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="diferenciais" className="section--white">
          <Suspense fallback={null}>
            <DifferentiatorsSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="depoimentos" className="testimonials">
          <Suspense fallback={null}>
            <TestimonialsSection />
          </Suspense>
        </DeferredSection>

        <section className="cta-section deferred-section">
          <h2 className="section-title cta-title reveal">
            Seu momento de cuidado
            <br />
            <span className="cta-accent">começa agora</span>
          </h2>
          <p className="cta-sub reveal">
            Agende pelo WhatsApp e dê o primeiro passo para realizar sua beleza com segurança e leveza.
          </p>
          <a href={whatsappUrl} className="btn-white reveal" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="button-icon" />
            Agendar agora
          </a>
        </section>

        <DeferredSection id="contato" className="section--white">
          <Suspense fallback={null}>
            <ContactSection />
          </Suspense>
        </DeferredSection>
      </main>

      <footer className="deferred-section">
        <DeferredSection className="footer-block">
          <Suspense fallback={null}>
            <FooterSection />
          </Suspense>
        </DeferredSection>

        <div className="footer-bottom">
          <span className="footer-copy">© 2024 Clínica estética. Todos os direitos reservados.</span>
          <span className="footer-copy">Feito com cuidado ♥</span>
        </div>
      </footer>
    </>
  );
}

function DeferredSection({ id, className, children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: '320px 0px',
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id={id} className={`${className} deferred-section`} ref={ref}>
      {isVisible ? children : null}
    </section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-40px 0px 0px 0px',
      },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#home" className="logo" aria-label="Clínica estética">
        <img className="logo-icon" src="/favicon.png" alt="" aria-hidden="true" />
        Clínica estética
      </a>

      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="nav-icons">
        <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href={whatsappUrl} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-blob-dec b1" />
      <div className="hero-blob-dec b2" />
      <div className="hero-blob-dec b3" />

      <svg className="leaf-dec l1" width="60" height="90" viewBox="0 0 60 90" fill="none" aria-hidden="true">
        <path d="M30 90 C30 90 10 68 10 45 C10 22 18 6 30 3 C42 6 50 22 50 45 C50 68 30 90 30 90Z" stroke="#C9504A" strokeWidth="1.5" fill="none" />
        <path d="M30 45 C30 45 6 38 3 22" stroke="#C9504A" strokeWidth="1" fill="none" />
        <path d="M30 45 C30 45 54 38 57 22" stroke="#C9504A" strokeWidth="1" fill="none" />
      </svg>

      <svg className="leaf-dec l2" width="40" height="60" viewBox="0 0 40 60" fill="none" aria-hidden="true">
        <path d="M20 60 C20 60 6 45 6 30 C6 15 12 4 20 2 C28 4 34 15 34 30 C34 45 20 60 20 60Z" stroke="#C9504A" strokeWidth="1.2" fill="none" />
      </svg>

      <div className="hero-image-wrap anim anim-d3">
        <div className="hero-img-blob">
          <img
            className="hero-photo"
            src="/hero.png"
            alt="Profissional da clínica estética atendendo uma cliente"
            width="3840"
            height="5760"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="floating-card fc-1">
          <div className="fc-icon">
            <HeartIcon />
          </div>
          <div className="fc-label">Satisfação</div>
          <div className="fc-value">98% aprovação</div>
        </div>
        <div className="floating-card fc-2">
          <div className="fc-icon">
            <AwardIcon />
          </div>
          <div className="fc-label">Experiência</div>
          <div className="fc-value">+8 anos</div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-tag anim anim-d1">Cuidado & beleza natural</div>
        <h1 className="anim anim-d2">
          Realce sua beleza
          <br />
          com cuidado,
          <br />
          leveza e <span className="accent">naturalidade</span>
        </h1>
        <p className="hero-sub anim anim-d3">
          Tratamentos estéticos e cuidados faciais pensados para valorizar sua autoestima com um atendimento acolhedor e personalizado.
        </p>
        <div className="hero-actions anim anim-d4">
          <a href={whatsappUrl} className="btn-primary" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="button-icon" />
            Agendar WhatsApp
          </a>
          <a href="#resultados" className="btn-outline">
            Ver resultados
          </a>
        </div>
        <div className="hero-rating anim anim-d5">
          <span className="stars">★★★★★</span>
          <span className="rating-score">4.9</span>
          <span>· +500 clientes atendidas</span>
        </div>
      </div>
    </section>
  );
}

function useRevealObserver() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add('visible');
            }, Number(entry.target.dataset.delay || 0));
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const observeNode = (node) => {
      if (!(node instanceof Element)) {
        return;
      }

      if (node.matches('.reveal')) {
        revealObserver.observe(node);
      }

      node.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el);
      });
    };

    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach(observeNode);
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);
}

export default App;

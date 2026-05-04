import { memo, useEffect, useMemo, useRef } from 'react';
import SectionHeader from '../components/SectionHeader';
import { results } from '../content';

const ResultCard = memo(function ResultCard({ imageUrl, alt }) {
  return (
    <article className="result-card reveal">
      <div className="result-placeholder">
        <img className="result-photo" src={imageUrl} alt={alt} loading="lazy" decoding="async" />
      </div>
      <div className="result-divider" />
      <div className="result-labels">
        <span className="result-tag tag-before">Antes</span>
        <span className="result-tag tag-after">Depois</span>
      </div>
    </article>
  );
});

const ResultsCarousel = memo(function ResultsCarousel({ items }) {
  const viewportRef = useRef(null);
  const loopedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const autoScrollSpeed = 0.04;
    let frameId = 0;
    let resumeTimer = 0;
    let lastTime = performance.now();
    let isPaused = false;
    let distanceAccumulator = 0;

    const getLoopWidth = () => viewport.scrollWidth / 2;

    const pause = () => {
      isPaused = true;
      window.clearTimeout(resumeTimer);
    };

    const resumeSoon = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        isPaused = false;
        lastTime = performance.now();
      }, 900);
    };

    const adjustLoop = () => {
      const loopWidth = getLoopWidth();
      if (!loopWidth) {
        return;
      }

      if (viewport.scrollLeft >= loopWidth) {
        viewport.scrollLeft -= loopWidth;
      } else if (viewport.scrollLeft < 0) {
        viewport.scrollLeft += loopWidth;
      }
    };

    const onScroll = () => {
      adjustLoop();
    };

    const onPointerDown = () => {
      pause();
    };

    const onPointerUp = () => {
      resumeSoon();
    };

    const tick = (time) => {
      if (!prefersReducedMotion && !isPaused && document.visibilityState === 'visible') {
        const delta = time - lastTime;
        distanceAccumulator += delta * autoScrollSpeed;
        const step = Math.floor(distanceAccumulator);

        if (step > 0) {
          viewport.scrollLeft += step;
          distanceAccumulator -= step;
          adjustLoop();
        }
      }

      lastTime = time;
      frameId = window.requestAnimationFrame(tick);
    };

    viewport.addEventListener('scroll', onScroll, { passive: true });
    viewport.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });
    window.addEventListener('blur', pause);
    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(resumeTimer);
      viewport.removeEventListener('scroll', onScroll);
      viewport.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('blur', pause);
    };
  }, [items]);

  return (
    <div className="results-carousel" ref={viewportRef} aria-label="Carrossel de resultados antes e depois">
      <div className="results-carousel-track">
        {loopedItems.map((result, index) => (
          <ResultCard key={`${result.imageUrl}-${index}`} imageUrl={result.imageUrl} alt={result.alt} />
        ))}
      </div>
    </div>
  );
});

export default function ResultsSection() {
  return (
    <>
      <SectionHeader
        label="Resultados reais"
        title={
          <>
            Transformações que refletem
            <br />
            cuidado, técnica e naturalidade
          </>
        }
        subtitle="Cada resultado é único — como cada cliente."
      />

      <ResultsCarousel items={results} />
    </>
  );
}

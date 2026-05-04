import { memo } from 'react';

function SectionHeader({ label, title, subtitle, align = 'center' }) {
  const leftAligned = align === 'left';

  return (
    <>
      <div className={`section-label reveal${leftAligned ? ' section-label--left' : ''}`}>{label}</div>
      <h2 className={`section-title reveal${leftAligned ? ' section-title--left' : ''}`}>{title}</h2>
      {subtitle ? <p className="section-sub reveal">{subtitle}</p> : null}
    </>
  );
}

export default memo(SectionHeader);

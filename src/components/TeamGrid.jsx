import React from 'react';
import TiltCard, { CardSpotlight } from '../common/TiltCard';

const initials = (name) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
};

const TeamGrid = ({ team = [] }) => {
  if (team.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-darkBlue/25 px-6 py-10 text-center">
        <p className="text-[14px] italic text-darkBlue/45">Team profiles coming soon.</p>
      </div>
    );
  }

  return (
    <div
      className="grid gap-5"
      style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))' }}
    >
      {team.map((member, index) => (
        <TiltCard
          key={member.id || member.email || member.name}
          max={4}
          spotlight
          className="group h-full"
        >
          <article className="relative flex h-full flex-wrap gap-7 overflow-hidden rounded-[28px] border border-darkBlue/[0.07] bg-white/80 p-[18px] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_30px_60px_-40px_rgba(10,20,51,0.35)]">
            <CardSpotlight color="rgba(21,112,239,.14)" />

            <div
              className="relative h-[196px] w-[168px] shrink-0 overflow-hidden rounded-[20px]"
              style={{ background: 'linear-gradient(160deg,#DCE8FC,#BCD3F8)' }}
            >
              {member.photoDataUrl ? (
                <img
                  src={member.photoDataUrl}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="grid h-full w-full place-items-center text-[36px] font-semibold text-white/80">
                  {initials(member.name)}
                </span>
              )}
            </div>

            <div className="relative flex min-w-0 flex-1 flex-col py-2.5 pl-0 pr-2.5" style={{ minWidth: '240px' }}>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-trBlue">
                  {member.role}
                </span>
                <span className="font-mono text-[12px] text-haze">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h4 className="mt-2.5 text-[clamp(24px,2.2vw,30px)] font-semibold leading-[1.1] tracking-[-0.025em] text-darkBlue">
                {member.name}
              </h4>

              {member.bio && (
                <p className="mt-3 whitespace-pre-line text-[15px] leading-[1.6] text-muted">
                  {member.bio}
                </p>
              )}

              <div className="mt-auto flex flex-col border-t border-dashed border-darkBlue/[0.12] pt-6">
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="flex items-baseline gap-3.5 py-1.5 text-[15px] text-slate transition-colors hover:text-trBlue"
                  >
                    <span className="w-10 shrink-0 font-mono text-[11px] tracking-[0.1em] text-haze">TEL</span>
                    {member.phone}
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-baseline gap-3.5 break-all py-1.5 text-[15px] text-slate transition-colors hover:text-trBlue"
                  >
                    <span className="w-10 shrink-0 font-mono text-[11px] tracking-[0.1em] text-haze">MAIL</span>
                    {member.email}
                  </a>
                )}
              </div>
            </div>
          </article>
        </TiltCard>
      ))}
    </div>
  );
};

export default TeamGrid;

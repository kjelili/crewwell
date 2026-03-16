import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

const slides = [
  {
    title: 'CrewWell',
    subtitle: 'Daily workforce pulse and safety readiness monitor',
    points: ['Fast mobile check-ins', 'Anonymous or named entries', 'Real-time trend visibility'],
  },
  {
    title: 'Operational Awareness',
    subtitle: 'Insights grouped by crew and site',
    points: ['Stress and fatigue averages', 'Safety readiness signal', 'Recent check-ins table'],
  },
  {
    title: 'Actionable Guidance',
    subtitle: 'Manager recommendations generated from risk patterns',
    points: ['Detect rising stress/fatigue', 'Flag readiness risks early', 'Support practical interventions'],
  },
];

const slideDuration = 100;

export const CrewWellDemo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const activeSlide = Math.min(Math.floor(frame / slideDuration), slides.length - 1);
  const localFrame = frame % slideDuration;
  const entrance = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, mass: 0.7 },
  });
  const opacity = interpolate(localFrame, [0, 12, 80, 99], [0, 1, 1, 0], { extrapolateRight: 'clamp' });

  const slide = slides[activeSlide];

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Manrope, sans-serif',
        color: '#e5ecff',
        background:
          'radial-gradient(1000px 450px at 15% -10%, rgba(21,97,157,0.45) 0%, transparent 60%), radial-gradient(900px 420px at 90% 0%, rgba(65,209,255,0.20) 0%, transparent 60%), #060b14',
      }}
    >
      <div
        style={{
          width: 1400,
          border: '1px solid #274879',
          borderRadius: 30,
          padding: '72px 84px',
          background: 'linear-gradient(170deg, rgba(17,31,61,0.92), rgba(15,23,42,0.98))',
          opacity,
          transform: `translateY(${interpolate(entrance, [0, 1], [20, 0])}px)`,
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        }}
      >
        <p style={{ margin: 0, color: '#41d1ff', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
          CrewWell Product Demo
        </p>
        <h1 style={{ margin: '20px 0 16px', fontSize: 72, lineHeight: 1.1 }}>{slide.title}</h1>
        <p style={{ margin: '0 0 28px', color: '#b6c2e5', fontSize: 34 }}>{slide.subtitle}</p>
        <ul style={{ margin: 0, paddingLeft: 30, display: 'grid', gap: 14, fontSize: 32 }}>
          {slide.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </AbsoluteFill>
  );
};

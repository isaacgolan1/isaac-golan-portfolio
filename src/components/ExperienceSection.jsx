import { useState } from 'react'

const ENTRIES = [
  {
    title: 'Technical Sales Engineer',
    org: 'CaptiveAire Systems',
    location: 'New York, NY',
    period: 'March 2026 - Present',
    description:
      'Specify and sell HVAC RTU/DOAS systems (3–60 tons) and CASLink building automation to mechanical contractors across NYC. Drive sales, technical solutions, and build lasting client relationships.',
  },
  {
    title: 'Reactor Systems Internship',
    org: 'Advanced Energy Research',
    location: 'San Francisco, CA',
    period: 'Summer 2025',
    description:
      'Designed thermal systems and analyzed nuclear reactor thermal hydraulics using computational fluid dynamics. Developed CFD models and presented findings to engineering team.',
  },
  {
    title: 'Mechanical Engineering Internship',
    org: 'Multi-disciplinary Product Design',
    location: 'San Francisco, CA',
    period: 'Summer 2024',
    description:
      'Designed, prototyped, and tested mechanical products from concept through manufacturing. Worked with CAD software and collaborated with cross-functional teams.',
  },
  {
    title: 'Computational Heat Transfer',
    org: 'Academic Project',
    location: 'San Luis Obispo, CA',
    period: 'Spring 2025',
    description:
      'Developed finite element analysis models and solved transient heat transfer problems numerically. Used COMSOL and MATLAB for simulations and analysis.',
  },
  {
    title: 'Atrium Radiant Heating System',
    org: 'Design Project',
    location: 'San Luis Obispo, CA',
    period: 'Winter 2025',
    description:
      'Designed an efficient radiant heating system for large atrium spaces with thermal analysis. Optimized for comfort and energy efficiency in high-ceiling environments.',
  },
  {
    title: 'Mathematics Teaching',
    org: 'Tutoring & Workshops',
    location: 'San Luis Obispo, CA',
    period: 'Ongoing',
    description:
      'High school and undergraduate mathematics tutoring, workshop facilitation, and curriculum development. Focus on making complex concepts accessible and engaging.',
  },
]

function ExperienceCard({ entry, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="cursor-pointer border-b border-black/10 bg-white transition-all duration-200 last:border-b-0 hover:translate-x-1 hover:bg-hover"
    >
      <div className="relative min-h-18 px-6">
        <div className="pt-3">
          <h3 className="text-[16px] font-bold tracking-[-0.4px] text-ink">
            {entry.title}
          </h3>
          <p className="mt-1 text-[12px] text-[#999]">{entry.org}</p>
        </div>

        <div className="absolute inset-x-0 top-8 grid grid-cols-3 px-6 text-[12px] text-[#666]">
          <span className="text-left"></span>
          <span className="text-center">{entry.location}</span>
          <span className="pr-12 text-center">{entry.period}</span>
        </div>
      </div>

      <div
        className={`grid px-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[13px] leading-relaxed text-[#888]">
            {entry.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-[60px]">
      <h2 className="px-6 text-[24px] font-bold text-ink md:px-10">
        Experience &amp; Projects
      </h2>

      <div className="mt-8 grid grid-cols-3 px-6 text-[12px] font-medium tracking-[0.5px] text-[#999] uppercase">
        <span className="text-left">Role</span>
        <span className="text-center">Location</span>
        <span className="pr-12 text-center">Period</span>
      </div>

      <div className="mt-2 border border-black/10">
        {ENTRIES.map((entry, index) => (
          <ExperienceCard
            key={entry.title}
            entry={entry}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex((current) => (current === index ? null : index))
            }
          />
        ))}
      </div>
    </section>
  )
}

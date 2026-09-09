import { useState } from 'react'

const PROFESSIONAL_EXPERIENCE = [
  {
    title: 'Technical Sales Engineer',
    org: 'CaptiveAire Systems',
    location: 'New York, NY',
    period: 'March 2026 - Present',
    description: [
      'Execute full sales-cycle activities including lead generation, proposal development, and account management for mechanical contractor and engineering firm customers',
      'Deliver technical presentations and product demos for Paragon HVAC (RTU/DOAS), full building ventilation systems, makeup air, and CASLink building management software to mechanical contractors, estimators, and engineers.',
      'Translate building control and thermodynamic systems into clear, persona-aware solution storytelling',
      'Provide applications engineering support and technical troubleshooting for HVAC design, specification, and procurement across active accounts and project installations',
    ],
  },
  {
    title: 'Reactor Systems Engineering Intern',
    org: 'Kairos Power',
    location: 'San Francisco, CA',
    period: 'Summer 2025',
    description:
      'Designed thermal systems and analyzed nuclear reactor thermal hydraulics using computational fluid dynamics. Developed CFD models and presented findings to engineering team.',
  },
  {
    title: 'Mechanical Engineering Intern',
    org: 'Meyers+ Engineers',
    location: 'San Francisco, CA',
    period: 'Summer 2024',
    description:
      'Designed, prototyped, and tested mechanical products from concept through manufacturing. Worked with CAD software and collaborated with cross-functional teams.',
  },
  {
    title: 'Mathematics Teaching',
    org: 'Tutoring & Workshops',
    location: 'San Luis Obispo, CA',
    period: 'Winter 2022 - Spring 2025',
    description:
      'High school and undergraduate mathematics tutoring, workshop facilitation, and curriculum development. Focus on making complex concepts accessible and engaging.',
  },
]

const PROJECTS = [
  {
    title: 'Heat Exchanger Simulation & Analysis',
    org: 'Computational Heat Transfer',
    location: 'San Luis Obispo, CA',
    period: 'Spring 2025',
    description:
      'Developed finite element analysis models and solved transient heat transfer problems numerically. Used COMSOL and MATLAB for simulations and analysis.',
  },
  {
    title: 'Atrium Radiant Heating System',
    org: 'Thermal System Design',
    location: 'San Luis Obispo, CA',
    period: 'Winter 2025',
    description:
      'Designed an efficient radiant heating system for large atrium spaces with thermal analysis. Optimized for comfort and energy efficiency in high-ceiling environments.',
  },
]

function EntryCard({ entry, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="cursor-pointer border-b border-black/10 bg-white transition-all duration-200 last:border-b-0 hover:translate-x-1 hover:bg-hover"
    >
      <div className="flex min-h-20 flex-col justify-center px-6 py-3">
        <h3 className="text-[17px] font-bold tracking-[-0.4px] text-ink">
          {entry.title}
        </h3>
        <p className="mt-1 text-[13px] text-[#888]">{entry.org}</p>

        <div className="mt-1 grid grid-cols-3 text-[13px] text-[#555]">
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
          {Array.isArray(entry.description) ? (
            <ul className="space-y-2">
              {entry.description.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-[14px] leading-relaxed text-[#555]"
                >
                  <span className="text-[#999]">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[14px] leading-relaxed text-[#555]">
              {entry.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function EntryGroup({ title, entries, roleLabel = 'Role' }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div>
      <h2 className="px-6 text-[24px] font-bold text-ink md:px-10">{title}</h2>

      <div className="mt-8 grid grid-cols-3 px-6 text-[13px] font-medium tracking-[0.5px] text-[#999] uppercase">
        <span className="text-left">{roleLabel}</span>
        <span className="text-center">Location</span>
        <span className="pr-12 text-center">Period</span>
      </div>

      <div className="mt-2 border border-black/10">
        {entries.map((entry, index) => (
          <EntryCard
            key={entry.title}
            entry={entry}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex((current) => (current === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section className="py-[60px]">
      <EntryGroup title="Professional Experience" entries={PROFESSIONAL_EXPERIENCE} />
      <div className="mt-14">
        <EntryGroup title="Projects" entries={PROJECTS} roleLabel="Project" />
      </div>
    </section>
  )
}

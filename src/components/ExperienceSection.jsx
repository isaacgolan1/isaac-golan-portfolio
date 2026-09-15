import { Link } from 'react-router-dom'
import { PROFESSIONAL_EXPERIENCE, PROJECTS } from '../data/entries'

function EntryCard({ entry, basePath }) {
  return (
    <Link
      to={`${basePath}/${entry.slug}`}
      className="flex min-h-16 flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-black/10 bg-white px-6 py-4 transition-all duration-200 last:border-b-0 hover:translate-x-1 hover:bg-hover"
    >
      <h3 className="text-[17px] font-bold tracking-[-0.4px] text-ink">
        {entry.title}
      </h3>
      <p className="text-[13px] text-[#666]">
        {entry.org} · {entry.location} · {entry.period}
      </p>
    </Link>
  )
}

function EntryGroup({ title, entries, basePath }) {
  return (
    <div>
      <h2 className="px-6 text-[24px] font-bold text-ink md:px-10">{title}</h2>

      <div className="mt-6 border border-black/10">
        {entries.map((entry) => (
          <EntryCard key={entry.slug} entry={entry} basePath={basePath} />
        ))}
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section className="py-[60px]">
      <EntryGroup
        title="Professional Experience"
        entries={PROFESSIONAL_EXPERIENCE}
        basePath="/experience"
      />
      <div className="mt-14">
        <EntryGroup title="Projects" entries={PROJECTS} basePath="/projects" />
      </div>
    </section>
  )
}

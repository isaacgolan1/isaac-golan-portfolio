import { Link, useParams } from 'react-router-dom'

export default function EntryDetailPage({ entries, backTo, backLabel }) {
  const { slug } = useParams()
  const entry = entries.find((item) => item.slug === slug)

  if (!entry) {
    return (
      <div className="mx-auto w-full max-w-[990px] px-6 py-16 md:px-10">
        <Link to={backTo} className="text-[13px] text-[#666] hover:text-ink">
          ← {backLabel}
        </Link>
        <p className="mt-8 text-[16px] text-ink">Entry not found.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-[990px] px-6 py-16 md:px-10">
      <Link to={backTo} className="text-[13px] text-[#666] hover:text-ink">
        ← {backLabel}
      </Link>

      <h1 className="mt-8 text-[32px] font-bold tracking-[-0.4px] text-ink">
        {entry.title}
      </h1>
      <p className="mt-2 text-[15px] text-[#666]">
        {entry.org} · {entry.location} · {entry.period}
      </p>

      {entry.logo && (
        <img
          src={entry.logo}
          alt={`${entry.org} logo`}
          className="mt-6 h-10 w-auto"
        />
      )}

      {entry.intro && (
        <p className="mt-6 text-[15px] leading-relaxed text-[#555]">
          {entry.intro}
        </p>
      )}

      <div className="mt-10 border-t border-black/10 pt-10">
        {Array.isArray(entry.description) ? (
          <ul className="space-y-3">
            {entry.description.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-[15px] leading-relaxed text-[#555]"
              >
                <span className="text-[#999]">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[15px] leading-relaxed text-[#555]">
            {entry.description}
          </p>
        )}
      </div>

      {entry.note && (
        <p className="mt-10 text-[15px] font-bold text-ink">{entry.note}</p>
      )}

      {entry.sections?.map((section) => (
        <div key={section.title} className="mt-10 border-t border-black/10 pt-10">
          <h2 className="text-[20px] font-bold text-ink">{section.title}</h2>
          {section.content && (
            <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

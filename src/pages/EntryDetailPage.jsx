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

      {entry.logo &&
        (entry.logoUrl ? (
          <a
            href={entry.logoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block"
          >
            <img
              src={entry.logo}
              alt={`${entry.org} logo`}
              className="h-10 w-auto transition-opacity hover:opacity-80"
            />
          </a>
        ) : (
          <img
            src={entry.logo}
            alt={`${entry.org} logo`}
            className="mt-6 h-10 w-auto"
          />
        ))}

      {entry.intro && (
        <p className="mt-6 text-[15px] leading-relaxed text-[#555]">
          {entry.intro}
        </p>
      )}

      {entry.disclaimer && (
        <p className="mt-4 text-[13px] italic text-[#888]">
          {entry.disclaimer}
        </p>
      )}

      {entry.description && (
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
          ) : typeof entry.description === 'object' ? (
            <>
              <p className="text-[15px] leading-relaxed text-[#555]">
                {entry.description.text}
              </p>
              {entry.description.items && (
                <ul className="mt-3 space-y-3">
                  {entry.description.items.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[15px] leading-relaxed text-[#555]"
                    >
                      <span className="text-[#999]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <p className="text-[15px] leading-relaxed text-[#555]">
              {entry.description}
            </p>
          )}
        </div>
      )}

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
          {section.items && (
            <ul className="mt-3 space-y-3">
              {section.items.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-[15px] leading-relaxed text-[#555]"
                >
                  <span className="text-[#999]">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          {section.image &&
            (section.demoUrl ? (
              <a
                href={section.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="mt-6 w-full rounded border border-black/10 transition-opacity hover:opacity-90"
                />
              </a>
            ) : (
              <img
                src={section.image}
                alt={section.title}
                className="mt-6 w-full rounded border border-black/10"
              />
            ))}
          {section.demoUrl && (
            <a
              href={section.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border border-black/10 bg-white px-5 py-2.5 text-[13px] font-medium text-ink transition-all duration-200 hover:bg-hover"
            >
              Visit Demo →
            </a>
          )}

          {section.subsections?.map((subsection) => (
            <div key={subsection.heading} className="mt-6">
              <h3 className="text-[16px] font-bold text-ink">
                {subsection.heading}
              </h3>
              {subsection.content && (
                <p className="mt-2 text-[15px] leading-relaxed text-[#555]">
                  {subsection.content}
                </p>
              )}
              {subsection.items && (
                <ul className="mt-2 space-y-3">
                  {subsection.items.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[15px] leading-relaxed text-[#555]"
                    >
                      <span className="text-[#999]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}

      {entry.gallery && (
        <div className="mt-10 grid grid-cols-1 items-end gap-6 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {entry.gallery.map((item) => (
            <figure key={item.image}>
              <img
                src={item.image}
                alt={item.caption ?? ''}
                className="max-h-[320px] w-auto rounded border border-black/10 object-contain"
              />
              {item.caption && (
                <figcaption className="mt-2 text-[13px] text-[#666]">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {entry.pdf && (
        <div className="mt-10 border-t border-black/10 pt-10">
          <iframe
            src={entry.pdf}
            title={`${entry.title} PDF`}
            className="h-[80vh] w-full rounded border border-black/10"
          />
          <a
            href={entry.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[13px] text-[#666] hover:text-ink"
          >
            Open PDF in new tab →
          </a>
        </div>
      )}

      {entry.pdfs?.map((item) => (
        <div key={item.url} className="mt-10 border-t border-black/10 pt-10">
          {item.label && (
            <h2 className="mb-3 text-[20px] font-bold text-ink">
              {item.label}
            </h2>
          )}
          <iframe
            src={item.url}
            title={item.label || `${entry.title} PDF`}
            className="h-[80vh] w-full rounded border border-black/10"
          />
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-[13px] text-[#666] hover:text-ink"
          >
            Open PDF in new tab →
          </a>
        </div>
      ))}
    </div>
  )
}

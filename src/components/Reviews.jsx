import { useState } from 'react'

const TYPE_LABELS = { book: 'Book', tv: 'TV', movie: 'Movie' }

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'book', label: 'Books' },
  { key: 'tv', label: 'TV' },
  { key: 'movie', label: 'Movies' },
]

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

// Split the ISO string instead of using new Date(iso), which parses as UTC
// midnight and shows the previous day in US time zones.
function formatFinished(iso) {
  const [year, month] = iso.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}

function Stars({ rating }) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)))

  return (
    <span
      role="img"
      aria-label={`${filled} out of 5`}
      className="text-[14px] tracking-[1px] text-ink"
    >
      {'★'.repeat(filled)}
      <span className="text-[#ccc]">{'★'.repeat(5 - filled)}</span>
    </span>
  )
}

export function ReviewItem({ review }) {
  const typeLabel = TYPE_LABELS[review.type] ?? 'Review'

  return (
    <article className="flex gap-5 border-b border-black/10 bg-white px-6 py-5 last:border-b-0">
      {review.cover ? (
        <img
          src={review.cover}
          alt={`${review.title} cover`}
          className="h-[120px] w-20 shrink-0 rounded border border-black/10 object-cover"
        />
      ) : (
        <div className="flex h-[120px] w-20 shrink-0 items-center justify-center rounded border border-black/10 bg-paper text-[11px] tracking-[0.5px] text-muted uppercase">
          {typeLabel}
        </div>
      )}

      <div className="min-w-0">
        <h3 className="text-[17px] font-bold tracking-[-0.4px] text-ink">
          {review.title}
        </h3>
        <p className="mt-0.5 text-[13px] text-[#666]">
          {review.creator} · {review.year} · {typeLabel}
        </p>
        <div className="mt-2 flex items-baseline gap-3">
          <Stars rating={review.rating} />
          <span className="text-[13px] text-[#999]">
            Finished {formatFinished(review.finished)}
          </span>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
          {review.text}
        </p>
      </div>
    </article>
  )
}

export function ReviewList({ reviews, limit, showTabs = true }) {
  const [tab, setTab] = useState('all')

  const shown = reviews
    .filter((review) => tab === 'all' || review.type === tab)
    .sort((a, b) => b.finished.localeCompare(a.finished))
    .slice(0, limit)

  return (
    <div>
      {showTabs && (
        <div className="mb-4 flex flex-wrap gap-2">
          {TABS.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              aria-pressed={tab === item.key}
              className={`rounded border px-3 py-1 text-[13px] transition-colors ${
                tab === item.key
                  ? 'border-ink bg-ink text-white'
                  : 'border-black/10 bg-white text-[#666] hover:bg-hover hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <div className="border border-black/10">
        {shown.length > 0 ? (
          shown.map((review) => <ReviewItem key={review.slug} review={review} />)
        ) : (
          <p className="bg-white px-6 py-5 text-[15px] text-[#666]">
            No reviews yet.
          </p>
        )}
      </div>
    </div>
  )
}

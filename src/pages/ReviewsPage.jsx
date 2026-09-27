import { Link } from 'react-router-dom'
import { ReviewList } from '../components/Reviews'
import { REVIEWS } from '../data/reviews'

export default function ReviewsPage() {
  return (
    <div className="mx-auto w-full max-w-[990px] px-6 py-16 md:px-10">
      <Link to="/" className="text-[13px] text-[#666] hover:text-ink">
        ← Back
      </Link>

      <h1 className="mt-8 text-[32px] font-bold tracking-[-0.4px] text-ink">
        Reviews
      </h1>

      <div className="mt-10">
        <ReviewList reviews={REVIEWS} />
      </div>
    </div>
  )
}

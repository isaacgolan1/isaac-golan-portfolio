import FluidSimulation from './FluidSimulation'
import heroArtwork from '../assets/186937@2x.jpg'

const CONTACTS = [
  {
    label: 'Email',
    value: 'isaac@isaacgolan.com',
    href: 'mailto:isaac@isaacgolan.com',
  },
  {
    label: 'Phone',
    value: '(949) 300-7177',
    href: 'tel:+19493007177',
  },
  {
    label: 'LinkedIn',
    value: 'isaac-golan',
    href: 'https://www.linkedin.com/in/isaac-golan/',
    external: true,
  },
]

export default function HeroSection() {
  return (
    <section className="bento-grid grid grid-cols-1 md:grid-cols-3">
      {/* Left: bio card */}
      <div className="bento-cell flex min-h-[200px] flex-col justify-between bg-white p-6">
        <div>
          <h2 className="text-[20px] font-bold text-ink">
            Technical Sales Engineer
          </h2>
          <ul className="mt-3 space-y-1 text-[15px] leading-relaxed text-[#444]">
            <li className="flex gap-2">
              <span className="text-[#999]">•</span>
              <span>Solutions Engineering</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#999]">•</span>
              <span>Business Development</span>
            </li>
            
            <li className="flex gap-2">
              <span className="text-[#999]">•</span>
              <span>Account Management</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#999]">•</span>
              <span>Technical Support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top-middle: name */}
      <div className="bento-cell flex items-center justify-center bg-white p-6">
        <h1 className="text-center text-[44px] leading-none font-bold tracking-tight text-ink uppercase">
          Isaac Golan
        </h1>
      </div>

      {/* Top-right: contact stack */}
      <div className="bento-cell flex flex-col bg-white">
        {CONTACTS.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noopener noreferrer' : undefined}
            className="flex flex-1 flex-col justify-center border-b border-black/10 px-6 py-3 transition-all duration-200 last:border-b-0 hover:-translate-y-0.5 hover:bg-hover"
          >
            <span className="text-[12px] tracking-[0.5px] text-[#999] uppercase">
              {contact.label}
            </span>
            <span className="mt-0.5 text-[15px] font-medium text-ink">
              {contact.value}
            </span>
          </a>
        ))}
      </div>

      {/* Bottom-left: fluid simulation */}
      <div className="bento-cell h-56 min-h-[200px] w-full overflow-hidden bg-white">
        <FluidSimulation />
      </div>

      {/* Bottom-middle: education */}
      <div className="bento-cell flex h-56 flex-col justify-center bg-white p-6">
        <span className="text-[12px] tracking-[0.5px] text-[#999] uppercase">
          Education
        </span>
        <p className="mt-2 text-[16px] font-bold text-ink">
          California Polytechnic State University, San Luis Obispo
        </p>
        <p className="text-[14px] text-[#555]">
          Mechanical Engineering, Minor in Mathematics
        </p>
        <p className="mt-3 text-[14px] font-medium text-ink">
          FE Mechanical (Passed), EIT
        </p>
      </div>

      {/* Bottom-right: artwork */}
      <div className="bento-cell h-56 overflow-hidden bg-white">
        <img
          src={heroArtwork}
          alt="M.C. Escher-style staircase illustration"
          className="h-full w-full object-cover object-[center_15%]"
        />
      </div>
    </section>
  )
}

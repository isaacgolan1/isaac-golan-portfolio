import captiveAireLogo from '../assets/CASLogo.png'
import troubleshootingGuideScreenshot from '../assets/troubleshooting-guide-screenshot.png'
import kairosLogo from '../assets/Kairos-logo.png'
import grappleImage from '../assets/grapple.png'
import diabloPoolImage from '../assets/diablo-pool.jpg'

export const PROFESSIONAL_EXPERIENCE = [
  {
    slug: 'technical-sales-engineer',
    title: 'Technical Sales Engineer',
    org: 'CaptiveAire Systems',
    location: 'New York, NY',
    period: 'March 2026 - Present',
    logo: captiveAireLogo,
    logoUrl: 'https://captiveaire.com/',
    intro:
      "CaptiveAire is the nation's leading manufacturer of commercial kitchen ventilation systems, and now provides a complete solution of fans, heaters, ductwork, and HVAC equipment. For over 45 years, we've led the industry with innovative technologies, unmatched service, competitive pricing, and rapid lead times.",
    description: [
      'Execute full sales-cycle activities: lead generation, proposal development, and account management for mechanical contractor and engineering firms',
      'Deliver technical presentations and product demos for Paragon HVAC (RTU/DOAS), full building ventilation systems, and CASLink building management software.',
      'Applications engineering support and technical troubleshooting for design, specification, and procurement across active accounts and projects.',
    ],
    note: 'Internally, I build applications used by multiple local sales regions.',
    sections: [
      {
        title: 'Field Troubleshooting Application',
        content:
          'My boss told me he was paying $20/month for a decision tree service. I created him a working demo in 3 prompts.',
        image: troubleshootingGuideScreenshot,
        demoUrl: 'https://paragon-troubleshooting-guide.vercel.app/',
      },
    ],
  },
  {
    slug: 'reactor-systems-engineering-intern',
    title: 'Reactor Systems Engineering Intern',
    org: 'Kairos Power',
    location: 'San Francisco, CA',
    period: 'Summer 2025',
    logo: kairosLogo,
    logoUrl: 'https://www.kairospower.com/',
    intro:
      'Summer intern 2025 at Kairos Power, an advanced nuclear energy company developing small modular reactors (SMRs). Their approach: rapid iteration and vertical integration to deliver clean, affordable, safe energy.',
    disclaimer:
      '(Proprietary and export-controlled work—this page captures my experiences and key takeaways.)',
    sections: [
      {
        title: 'Spent Fuel Pool Lifting Mechanisms',
        subsections: [
          {
            heading: 'The Challenge',
            content:
              'Spent nuclear fuel is intensely radioactive. Handling it requires failsafe systems: robust shielding to protect workers, precise remote handling to prevent mechanical failure or contamination, and mechanisms that meet extreme reliability and redundancy standards.',
          },
          {
            heading: 'What I Did',
            items: [
              'Designed lifting mechanism concepts',
              'Built multiple 3D-printed prototypes to test geometry, kinematics, and load capacity',
              'Designed and constructed test stands to simulate real canister lifting conditions',
              'Ran iterative tests to identify failure modes, refine tolerances, and validate improvements',
            ],
          },
          {
            heading: 'What I Learned',
            items: [
              'Mechanical design, prototyping, and experimental validation in a safety-critical environment',
              'Nuclear fuel handling fundamentals: radiation shielding, load control, failsafe design',
              'How rapid iteration applies to high-consequence work',
          
            ],
          },
        ],
      },
    ],
    gallery: [
      { image: grappleImage, caption: 'GE BWR Grapple' },
      {
        image: diabloPoolImage,
        caption: 'Diablo Canyon Power Plant Spent Fuel Pool',
      },
    ],
  },
  {
    slug: 'mechanical-engineering-intern',
    title: 'Mechanical Engineering Intern',
    org: 'Meyers+ Engineers',
    location: 'San Francisco, CA',
    period: 'Summer 2024',
    description:
      'Designed, prototyped, and tested mechanical products from concept through manufacturing. Worked with CAD software and collaborated with cross-functional teams.',
  },
  {
    slug: 'instructional-student-assistant',
    title: 'Instructional Student Assistant',
    org: 'Cal Poly Mathematics Department',
    location: 'San Luis Obispo, CA',
    period: 'Winter 2022 - Spring 2025',
    description:
      'High school and undergraduate mathematics tutoring, workshop facilitation, and curriculum development. Focus on making complex concepts accessible and engaging.',
  },
]

export const PROJECTS = [
  {
    slug: 'heat-exchanger-simulation-analysis',
    title: 'Heat Exchanger Simulation & Analysis',
    org: 'Computational Heat Transfer',
    location: 'San Luis Obispo, CA',
    period: 'Spring 2025',
    description:
      'Developed finite element analysis models and solved transient heat transfer problems numerically. Used COMSOL and MATLAB for simulations and analysis.',
  },
  {
    slug: 'atrium-radiant-heating-system',
    title: 'Atrium Radiant Heating System',
    org: 'Thermal System Design',
    location: 'San Luis Obispo, CA',
    period: 'Winter 2025',
    description:
      'Designed an efficient radiant heating system for large atrium spaces with thermal analysis. Optimized for comfort and energy efficiency in high-ceiling environments.',
  },
]

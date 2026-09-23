import captiveAireLogo from '../assets/CASLogo.png'
import troubleshootingGuideScreenshot from '../assets/troubleshooting-guide-screenshot.png'
import kairosLogo from '../assets/Kairos-logo.png'
import grappleImage from '../assets/grapple.png'
import diabloPoolImage from '../assets/diablo-pool.jpg'
import meyersPlusLogo from '../assets/meyersPlus_engineers2.png'
import teachingImage1 from '../assets/img1.avif'
import teachingImage2 from '../assets/img2.avif'
import teachingImage3 from '../assets/img3.avif'

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
      "I interned at Kairos Power in summer 2025, an advanced nuclear energy company developing a fluoride salt-cooled high-temperature reactor. Kairos' emphasis on rapid iteration and vertical integration shaped my professional development. I remain humbled to have shared a room with some of the smartest people I have ever met.",
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
    logo: meyersPlusLogo,
    logoUrl: 'https://www.meyersplus.com/',
    intro:
      'Construction design consulting firm specializing in mechanical, electrical, plumbing, and fire protection systems for commercial and residential projects. Gained hands-on experience applying engineering fundamentals to real building systems.',
    sections: [
      {
        title: 'Design, Energy Modeling, Project Management',
        items: [
          "Collaborated on building energy simulations (IES) and code compliance analysis",
          "Applied thermodynamics to optimize glazing, insulation, and HVAC equipment selection",
          "Produced AutoCAD/Revit drawings and load calculations for mechanical systems",
          "Aided in VRF system design"
        ],
      },
    ],
  },
  {
    slug: 'teaching-and-tutoring',
    title: 'Teaching and Tutoring',
    org: 'Cal Poly Mathematics Department',
    location: 'San Luis Obispo, CA',
    period: 'Winter 2022 - Spring 2025',
    intro: "I have a passion for teaching; it is intoxicating and truly fun. I'm extremely proud of the impact I've made on 100s of students, on and off the transcript. Students have achieved jumps of 3 letter grades after my workshops and private tutoring. ",
    description: {
      text: 'The majority of my focus was on my workshop, a bi-weekly 1.5 hour meeting with students from one undergraduate course. I worked with professors to prepare materials, activities, a Canvas course page, grading, and lesson plans for up to 20 students. I held this position for three years and have facilitated workshops for:',
      items: [
        'Calculus I',
        'Calculus for Business and Economics',
        'Calculus II',
        'Linear Analysis I (Intro Differential Equations & Linear Algebra)',
      ],
    },
    sections: [
      {
        title: 'Student Testimonials',
        items: [
          '"He was very understanding of our knowledge in linear analysis and helped us succeed in the class. He was very helpful and one can tell that he enjoyed being here."',
          '"Great leader and was super chill and non-teacher like so it made our little workshop group super comfortable and in terms of the actual calculus and learning and was able to simplify really well and easier for me to understand."',
          '"Isaac was well prepared for workshop and made sure the problems we did were relevant to our class lectures."',
        ],
      },
    ],
    gallery: [
      { image: teachingImage1 },
      { image: teachingImage2 },
      { image: teachingImage3 },
    ],
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
      '',
    pdf: '/Computational-Heat-Transfer-Tube-Bank-Analysis.pdf',
  },
  {
    slug: 'atrium-radiant-heating-system',
    title: 'Atrium Radiant Heating System',
    org: 'Thermal System Design',
    location: 'San Luis Obispo, CA',
    period: 'Winter 2025',
    description:
      'Designed an efficient radiant heating system for a large atrium space. Optimized for comfort and energy efficiency in high-ceiling environments.',
    pdfs: [
      {
        url: '/Atrium-Radiant-System-Presentation.pdf',
        label: 'Presentation',
      },
      { url: '/Atrium-Radiant-System-Report.pdf', label: 'Report' },
    ],
  },
]

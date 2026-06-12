export const site = {
  name: 'Christopher Zhang',
  firstName: 'Christopher',
  lastName: 'Zhang',
  title: 'Mechanical Engineer',
  tagline: 'MS Mechanical Engineering · Northeastern University · 2026',
  email: 'chriszhang1122@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chris-zhang-79618a227/',
  resumePath: '/resume.pdf',
  resumeFilename: 'Christopher_Zhang_Resume.pdf',
  headshot: '/Images/DSCN2420.JPG',
  aboutPhoto: '/Images/IMG_6831.jpg',
} as const;

export const navItems = [
  { id: 'hero', num: '00', label: 'Home' },
  { id: 'about', num: '01', label: 'About' },
  { id: 'experience', num: '02', label: 'Experience' },
  { id: 'projects', num: '03', label: 'Projects' },
  { id: 'contact', num: '04', label: 'Contact' },
] as const;

export const skills = [
  'CAD / SolidWorks',
  'FEA',
  'GD&T',
  'Control Systems',
  'Power Electronics',
  'Embedded Systems',
  'Prototyping',
  'MATLAB',
  'LTSpice',
  'P&IDs',
  'Commissioning',
  'Python',
] as const;

export const aboutParagraphs = [
  "Hi! I'm Christopher Zhang, a mechatronics-focused mechanical engineer who recently completed my MS at Northeastern University (May 2026). I've designed, prototyped, and built hardware across contexts ranging from energy commissioning in the field to electromechanical systems on the bench.",
  "My interests sit at the intersection of mechanisms, controls, and instrumentation. I'm drawn to problems where the physical and electrical worlds meet, and where the answer has to work in the real world, not just in simulation.",
  "Previously, I co-op'd at Instron as an Applications Engineer and at ICO Energy & Engineering as a Commissioning Engineer, executing startup and acceptance testing of industrial energy systems in the field.",
  'Outside engineering, I build things in wood. Furniture and shop fixtures demand the same precision as machined parts, just with hand tools and grain direction instead of tolerances and toolpaths.',
];

export const experienceCards = [
  {
    logo: '/Images/Instron_logo.png',
    alt: 'Instron logo',
    role: 'Applications Engineer',
    date: 'July – December 2023',
  },
  {
    logo: '/Images/ICO_logo.png',
    alt: 'ICO Energy logo',
    role: 'Commissioning Engineer',
    date: 'July – December 2024',
  },
] as const;

export const experienceEntries = [
  {
    company: 'Instron (ITW)',
    location: 'Co-op · Norwood, MA',
    role: 'Applications Engineer Co-op',
    bullets: [
      'Developed and validated custom test methods (tensile, compression, flexure, fatigue) for aerospace, medical device, and industrial polymer clients to ASTM and ISO standards',
      'Configured Bluehill software profiles, calibration routines, and reporting templates across diverse specimen geometries and load cells',
      'Performed fixture setup, extensometer integration, and load-displacement data analysis to support client troubleshooting',
      'Engaged with clients across 20+ hours of Factory Acceptance Testing procedures',
    ],
  },
  {
    company: 'ICO Energy & Engineering',
    location: 'Co-op · Boston, MA',
    role: 'Commissioning Engineer Co-op',
    bullets: [
      'Executed pre-commissioning and commissioning procedures for pumps, motors, valves, and instrumentation on industrial energy systems',
      'Verified as-built conditions against P&ID and single-line diagrams, flagging discrepancies for engineering resolution',
      'Conducted FAT and SAT with operations teams and client representatives; documented punch-lists and test records',
      'Coordinated with subcontractors and site supervisors to resolve commissioning hold points under schedule pressure',
    ],
  },
] as const;

export const contactIntro = {
  heading: "Let's build something together.",
  body: "I'm actively looking for full-time mechanical engineering roles in the Greater Boston area — particularly in medical devices, semiconductor equipment, defense/aerospace, and EV technology. If you're working on hardware that matters, I'd like to hear about it.",
};

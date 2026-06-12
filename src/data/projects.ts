export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  pullQuote?: string;
  stats?: ProjectStat[];
  tags?: string[];
}

export interface Project {
  slug: string;
  num: string;
  type: string;
  title: string;
  shortTitle: string;
  summary: string;
  tagline: string;
  chips: string[];
  meta: { label: string; value: string }[];
  sections: ProjectSection[];
  prevSlug?: string;
  nextSlug?: string;
}

export const projects: Project[] = [
  {
    slug: 'wheelchair',
    num: '01',
    type: 'Design & Prototyping',
    title: 'Canine Rehabilitation Wheelchair',
    shortTitle: 'Canine Wheelchair',
    summary:
      'Custom mobility aid for dogs with hind-limb paralysis — designed, fabricated, and validated with real veterinary feedback.',
    tagline:
      'A custom mobility aid for dogs with hind-limb paralysis — designed from scratch, fabricated, and iterated with real veterinary input to restore locomotive independence.',
    chips: ['SolidWorks', 'FEA', 'Fabrication'],
    meta: [
      { label: 'Context', value: 'Graduate Design Project' },
      { label: 'Institution', value: 'Northeastern University' },
      { label: 'Role', value: 'Lead Designer' },
      { label: 'Tools', value: 'SolidWorks · FEA · Manual Fab' },
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          "Dogs with degenerative myelopathy, intervertebral disc disease, or spinal injury progressively lose use of their hind limbs. Without intervention, they drag their rear quarters along the ground — abrading skin, developing sores, and losing the ability to exercise and relieve themselves independently. Off-the-shelf wheelchairs exist, but they're expensive, ship in fixed sizes, and often fit poorly for non-standard breeds.",
          'The goal: design a wheelchair that could be built and adjusted to fit any medium-to-large dog without requiring breed-specific custom fabrication for every animal.',
        ],
      },
      {
        heading: 'Design approach',
        paragraphs: [
          'The frame was designed in SolidWorks around three independently adjustable dimensions: torso length, chassis width (hip span), and ride height. Each axis uses a slip-tube-and-clamp configuration — no tools needed for fit adjustment.',
          'Material selection balanced weight against stiffness. The primary structure uses aluminum tubing for the main rails. Cross-members at the saddle and rear wheel axle are steel for strength at the load points.',
        ],
        pullQuote:
          'Adjustability without tools was the core design constraint — every fitting session should take minutes, not a shop visit.',
      },
      {
        heading: 'Structural validation',
        paragraphs: [
          'Before committing to final material choices, the assembly was subjected to finite element analysis with loading conditions derived from estimated dog mass (15–35 kg) and dynamic gait forces.',
          'FEA identified stress concentrations at the saddle-to-main-rail junction. A gusset plate and larger-diameter cross-tube dropped peak von Mises stress below the aluminum yield limit with a 2.5× safety factor.',
        ],
      },
      {
        heading: 'Iteration & testing',
        paragraphs: ['The project ran through three distinct prototype iterations, each tested with veterinary input:'],
        list: [
          'Prototype 1: Established basic geometry. Identified saddle too far aft — fixed in P2 by moving saddle mount 40 mm forward.',
          'Prototype 2: Corrected saddle position. Resolved wheel camber issue with revised axle geometry.',
          'Prototype 3: Final geometry with foam grip wrap and harness routing. Passed veterinary sign-off.',
        ],
        stats: [
          { value: '3', label: 'Physical prototypes fabricated and tested' },
          { value: '2.5×', label: 'Structural safety factor via FEA' },
          { value: '3-axis', label: 'Independent fit adjustability — no tools' },
          { value: '✓ Vet', label: 'Passed veterinary sign-off for extended use' },
        ],
        tags: [
          'SolidWorks',
          'Finite Element Analysis',
          'GD&T',
          'Manual fabrication',
          'User-centered design',
          'Iterative prototyping',
          'Material selection',
          'Load path analysis',
        ],
      },
    ],
    nextSlug: 'launcher',
  },
  {
    slug: 'launcher',
    num: '02',
    type: 'Capstone · Mechatronics',
    title: 'Automated Soccer Ball Launcher',
    shortTitle: 'Soccer Ball Launcher',
    summary:
      'Full mechatronic launcher for athletic training — dual flywheels, closed-loop speed control, servo pitch adjustment, and a gravity-fed hopper.',
    tagline:
      'A full mechatronic system for athletic training — dual counter-rotating flywheels, closed-loop speed control, servo-actuated pitch adjustment, and a gravity-fed hopper.',
    chips: ['Mechatronics', 'Arduino', 'Controls'],
    meta: [
      { label: 'Context', value: 'Senior Capstone' },
      { label: 'Role', value: 'Mechanical & Controls Lead' },
      { label: 'Tools', value: 'SolidWorks · Arduino · MATLAB' },
      { label: 'Result', value: '±5° repeatability · Field tested' },
    ],
    sections: [
      {
        heading: 'The brief',
        paragraphs: [
          'Solo soccer training is limited by the need for a second person to pass or cross the ball. A consistent, programmable launcher removes that dependency — enabling a single player to drill receiving, shooting off crosses, or first-touch repetitions at any time.',
        ],
      },
      {
        heading: 'Flywheel mechanism design',
        paragraphs: [
          'The flywheel gap was the critical geometric parameter. Using a nip-force model, the gap was set to produce approximately 18 N of nip force at the nominal ball diameter.',
          'Flywheel mass was sized so a single ball pass drops wheel speed by less than 5% — keeping consistent exit velocity across the full hopper load.',
        ],
        pullQuote:
          'Closed-loop speed control turned a bench prototype into a field-ready training tool.',
      },
      {
        heading: 'Controls & electronics',
        paragraphs: [
          'Each motor is driven by a BLDC ESC receiving PWM from the Arduino. The PI controller runs at 100 Hz with integral gain eliminating steady-state error within 0.5 s.',
          'A serial terminal interface sets target RPM, pitch angle, ball count, and inter-shot interval with live status feedback at 10 Hz.',
        ],
      },
      {
        heading: 'Field testing & results',
        list: [
          'Launch angle repeatability: ±5° across 20 consecutive shots',
          'Exit velocity range: 20–65 km/h controlled by flywheel RPM setpoint',
          'Spin control: neutral, topspin, and backspin modes with measurable ball curve',
          '8-ball sequence time: ~24 seconds at 3-second intervals',
        ],
        stats: [
          { value: '±5°', label: 'Launch angle repeatability' },
          { value: '3', label: 'Spin modes: neutral, top, back' },
          { value: '65 km/h', label: 'Maximum exit velocity' },
          { value: 'PI', label: 'Closed-loop speed control with encoder feedback' },
        ],
        tags: [
          'Mechatronic system design',
          'Arduino / embedded C',
          'Closed-loop motor control',
          'SolidWorks',
          'Mechanism design',
          'Field testing & validation',
          'PI controller tuning',
        ],
      },
    ],
    prevSlug: 'wheelchair',
    nextSlug: 'buckconverter',
  },
  {
    slug: 'buckconverter',
    num: '03',
    type: 'Graduate Coursework',
    title: 'Buck Converter Feedback Control Design',
    shortTitle: 'Buck Converter',
    summary:
      'Small-signal modeling, transfer function derivation, and PI controller synthesis for a DC–DC buck converter — verified in LTSpice.',
    tagline:
      'Small-signal modeling from first principles, PI controller synthesis, and full LTSpice verification of a DC–DC buck converter voltage-mode feedback loop.',
    chips: ['Power Electronics', 'LTSpice', 'MATLAB'],
    meta: [
      { label: 'Context', value: 'Graduate Coursework' },
      { label: 'Course', value: 'Power Electronics & Control' },
      { label: 'Tools', value: 'LTSpice · MATLAB · Oscilloscope' },
      { label: 'Result', value: '>45° phase margin · Zero SS error' },
    ],
    sections: [
      {
        heading: 'Background',
        paragraphs: [
          'DC–DC buck converters are everywhere in electromechanical systems — motor drives, embedded sensor boards, EV battery management units. Getting the feedback control right is the difference between a stable regulated output and one that oscillates or drifts under load.',
        ],
      },
      {
        heading: 'Small-signal modeling',
        paragraphs: [
          'State-space averaging replaces the switch with its duty-cycle-weighted average behavior, producing a continuous-time linear model around a chosen operating point.',
          'The LC double-pole dominates the phase response. The ESR zero from capacitor series resistance partially recovers phase at higher frequencies.',
        ],
        pullQuote:
          'From physics to Bode plot to verified simulation — the full control design pipeline in one project.',
      },
      {
        heading: 'Controller design',
        paragraphs: [
          'A PI compensator was selected to add integral action while placing the compensator zero to recover phase near the target crossover frequency.',
        ],
        list: [
          'Selected crossover frequency below switching frequency / 10',
          'Placed compensator zero below LC resonance to recover phase',
          'Tuned proportional gain for ~60° phase margin target',
          'Verified load step response and line regulation in LTSpice',
        ],
      },
      {
        heading: 'Hardware lab',
        paragraphs: [
          'The course included a hardware buck converter lab where the control design was implemented on a physical board and verified with an oscilloscope. Switching waveforms and output ripple were measured against analytical predictions.',
        ],
        stats: [
          { value: '>45°', label: 'Phase margin with PI compensator' },
          { value: '0', label: 'Steady-state error to DC load steps' },
          { value: 'SSA', label: 'Derived via state-space averaging' },
          { value: '3', label: 'LTSpice verification cases passed' },
        ],
        tags: [
          'Power electronics',
          'Small-signal modeling',
          'Transfer function derivation',
          'Bode plot analysis',
          'PI controller design',
          'LTSpice simulation',
          'MATLAB',
          'Feedback control theory',
        ],
      },
    ],
    prevSlug: 'launcher',
    nextSlug: 'woodworking',
  },
  {
    slug: 'woodworking',
    num: '04',
    type: 'Personal Projects',
    title: 'Woodworking — Furniture & Shop Fixtures',
    shortTitle: 'Woodworking',
    summary:
      'Self-directed builds from furniture to custom fixtures — hand tools, joinery, and finishing where engineering precision meets craft.',
    tagline:
      "Self-directed builds — furniture, shop fixtures, and everything in between. Where engineering precision meets material intuition and there's no undo button.",
    chips: ['Fabrication', 'Joinery', 'Material Selection'],
    meta: [
      { label: 'Context', value: 'Personal Projects' },
      { label: 'Focus', value: 'Furniture & shop fixtures' },
      { label: 'Approach', value: 'Hand tools + precision layout' },
    ],
    sections: [
      {
        heading: 'Why woodworking belongs on an engineering portfolio',
        paragraphs: [
          "Woodworking is tolerance work without a CNC machine. Joinery that fits cleanly requires the same spatial reasoning as machined interfaces — you're working by hand to a layout line instead of a CAD datum.",
          'The material adds grain direction, seasonal movement, and species-specific behavior. A 12-inch wide panel can expand 1/4" seasonally in New England — that has to be designed in.',
        ],
        pullQuote:
          'Every build starts with a plan, requires correct operation sequencing, and ends with a fit check — just like DFM on machined parts.',
      },
      {
        heading: 'What these builds develop',
        list: [
          'Spatial reasoning and tolerance intuition without CAD feedback',
          'Material selection under real constraints (hardness, movement, finish compatibility)',
          'Sequencing irreversible operations — same discipline as machining setups',
          'Problem-solving when the fit is off and there is no undo button',
        ],
        tags: [
          'Hand tool fabrication',
          'Joinery',
          'Material selection',
          'Layout & measurement',
          'Finishing',
          'Design for seasonal movement',
        ],
      },
    ],
    prevSlug: 'buckconverter',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

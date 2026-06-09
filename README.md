# czhang1122.github.io
Chris Zhang's Portfolio
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Christopher — Mechanical Engineer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d0d0d;
  --bg2: #141414;
  --bg3: #1a1a1a;
  --border: #2a2a2a;
  --border2: #333;
  --text: #e8e8e2;
  --text2: #888;
  --text3: #555;
  --accent: #c8f060;
  --accent2: #8ab8ff;
  --mono: 'Space Mono', monospace;
  --sans: 'Inter', system-ui, sans-serif;
  --nav-w: 220px;
  --transition: 0.2s ease;
}

html { scroll-behavior: smooth; font-size: 15px; }

body {
  font-family: var(--sans);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* ── LAYOUT ── */
.layout {
  display: flex;
  min-height: 100vh;
}

/* ── SIDEBAR NAV ── */
aside {
  width: var(--nav-w);
  flex-shrink: 0;
  position: fixed;
  top: 0; left: 0;
  height: 100vh;
  background: var(--bg2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem 1.75rem;
  z-index: 100;
}

.nav-brand {
  font-family: var(--mono);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-bottom: 0.4rem;
}
.nav-title {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text2);
  margin-bottom: 2.5rem;
}

nav ul { list-style: none; display: flex; flex-direction: column; gap: 0; }
nav ul li a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--text2);
  text-decoration: none;
  padding: 0.55rem 0;
  border-bottom: 1px solid var(--border);
  transition: color var(--transition);
  letter-spacing: 0.04em;
}
nav ul li:first-child a { border-top: 1px solid var(--border); }
nav ul li a:hover { color: var(--accent); }
nav ul li a .nav-num { color: var(--text3); font-size: 0.65rem; }

.nav-social {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.nav-social a {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--text3);
  text-decoration: none;
  transition: color var(--transition);
  word-break: break-all;
}
.nav-social a:hover { color: var(--accent); }

/* ── MAIN ── */
main {
  margin-left: var(--nav-w);
  flex: 1;
  min-width: 0;
}

/* ── SECTION BASE ── */
section {
  padding: 5rem 4rem;
  border-bottom: 1px solid var(--border);
}
section:last-of-type { border-bottom: none; }

.section-label {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 2.5rem;
}

/* ── HERO ── */
#hero {
  padding: 5rem 4rem 4rem;
  border-bottom: 1px solid var(--border);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-top {}

.terminal-line {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text3);
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.terminal-line::before {
  content: '';
  display: inline-block;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2.5s ease infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.hero-name {
  font-family: var(--mono);
  font-size: clamp(2.8rem, 5vw, 5rem);
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.04em;
  line-height: 1.0;
  margin-bottom: 1rem;
}

.hero-role {
  font-family: var(--mono);
  font-size: 0.9rem;
  color: var(--accent);
  letter-spacing: 0.06em;
  margin-bottom: 2rem;
}

.hero-bio {
  font-size: 0.97rem;
  color: var(--text2);
  max-width: 540px;
  line-height: 1.8;
  margin-bottom: 3rem;
}
.hero-bio strong { color: var(--text); font-weight: 500; }

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.hero-tag {
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 5px 11px;
  border: 1px solid var(--border2);
  border-radius: 3px;
  color: var(--text2);
  background: var(--bg3);
  letter-spacing: 0.02em;
  transition: border-color var(--transition), color var(--transition);
}
.hero-tag:hover { border-color: var(--accent); color: var(--accent); }

.hero-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
.hero-scroll {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--text3);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
}
.hero-scroll::after {
  content: '';
  display: block;
  width: 40px; height: 1px;
  background: var(--text3);
}
.hero-photo-placeholder {
  width: 120px; height: 120px;
  border: 1px solid var(--border2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--text3);
  text-align: center;
  background: var(--bg3);
  line-height: 1.5;
  cursor: pointer;
}

/* ── ABOUT ── */
#about .about-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 4rem;
  align-items: start;
}
#about p {
  font-size: 0.97rem;
  color: var(--text2);
  line-height: 1.85;
  margin-bottom: 1.1rem;
}
#about p strong { color: var(--text); font-weight: 500; }

.about-photo-placeholder {
  width: 100%;
  aspect-ratio: 3/4;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text3);
  text-align: center;
  line-height: 1.6;
}
.about-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2rem;
}
.about-skill {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--accent2);
  border: 1px solid #1e2d40;
  background: #0f1820;
  padding: 4px 10px;
  border-radius: 3px;
  letter-spacing: 0.03em;
}

/* ── EXPERIENCE ── */
#experience .photo-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-bottom: 3.5rem;
  border-radius: 4px;
  overflow: hidden;
}
.photo-strip-item {
  aspect-ratio: 4/3;
  background: var(--bg3);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--text3);
  text-align: center;
  line-height: 1.5;
  overflow: hidden;
  position: relative;
}
.photo-strip-item img {
  width: 100%; height: 100%;
  object-fit: cover;
  position: absolute; inset: 0;
}
.photo-strip-item span { position: relative; z-index: 1; padding: 8px; }

.exp-entries { display: flex; flex-direction: column; gap: 0; }
.exp-entry {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--border);
}
.exp-entry:last-child { border-bottom: none; }
.exp-meta {
  padding-top: 2px;
}
.exp-company {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 4px;
  letter-spacing: 0.02em;
}
.exp-date {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text3);
  line-height: 1.5;
}
.exp-role {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.8rem;
}
.exp-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.exp-bullets li {
  font-size: 0.88rem;
  color: var(--text2);
  line-height: 1.65;
  padding-left: 1rem;
  position: relative;
}
.exp-bullets li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--text3);
  font-family: var(--mono);
}

/* ── PROJECTS ── */
#projects .photo-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  margin-bottom: 3rem;
  border-radius: 4px;
  overflow: hidden;
}

.project-list { display: flex; flex-direction: column; gap: 0; }
.project-item {
  border-bottom: 1px solid var(--border);
}
.project-header {
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 1.4rem 0;
  cursor: pointer;
  transition: background var(--transition);
}
.project-header:hover .project-title { color: var(--accent); }
.project-num {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--text3);
  font-weight: 700;
}
.project-title {
  font-size: 0.98rem;
  font-weight: 500;
  color: var(--text);
  transition: color var(--transition);
}
.project-toggle {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--text3);
  transition: transform var(--transition);
  user-select: none;
  flex-shrink: 0;
}
.project-toggle.open { transform: rotate(45deg); color: var(--accent); }

.project-body {
  display: none;
  padding: 0 0 2rem 3.5rem;
}
.project-body.open { display: block; }

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.25rem;
}
.project-tag {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text3);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 2px 8px;
}

.project-what { margin-bottom: 1rem; }
.project-what h4 {
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}
.project-what p {
  font-size: 0.88rem;
  color: var(--text2);
  line-height: 1.75;
}

.project-status {
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--text3);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 2px 8px;
  margin-bottom: 1rem;
}

/* ── EDUCATION ── */
#education .edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}
.edu-photo-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  margin-bottom: 3rem;
}
.edu-photo {
  aspect-ratio: 16/10;
  background: var(--bg3);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 0.62rem;
  color: var(--text3);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}
.edu-photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  position: absolute; inset: 0;
}
.edu-photo span { position: relative; z-index: 1; padding: 8px; text-align: center; }

.edu-entry {
  padding: 2rem 0;
  border-bottom: 1px solid var(--border);
}
.edu-entry:last-child { border-bottom: none; }
.edu-school {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 4px;
}
.edu-date {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text3);
  margin-bottom: 0.75rem;
}
.edu-degree {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.8rem;
}
.edu-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.edu-bullets li {
  font-size: 0.85rem;
  color: var(--text2);
  line-height: 1.6;
  padding-left: 1rem;
  position: relative;
}
.edu-bullets li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--text3);
  font-family: var(--mono);
}

/* ── FOOTER ── */
footer {
  padding: 2.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
}
.footer-name {
  font-family: var(--mono);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text);
}
.footer-copy {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text3);
}
.footer-links {
  display: flex;
  gap: 1.5rem;
}
.footer-links a {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--text3);
  text-decoration: none;
  transition: color var(--transition);
}
.footer-links a:hover { color: var(--accent); }

/* ── MOBILE ── */
@media (max-width: 860px) {
  :root { --nav-w: 0px; }
  aside { display: none; }
  main { margin-left: 0; }
  section { padding: 3rem 1.5rem; }
  #hero { padding: 3rem 1.5rem; min-height: auto; }
  #about .about-grid { grid-template-columns: 1fr; }
  .about-photo-placeholder { max-height: 220px; aspect-ratio: 3/1; }
  .exp-entry { grid-template-columns: 1fr; gap: 0.5rem; }
  #projects .photo-strip { grid-template-columns: repeat(3, 1fr); }
  .edu-photo-pair { grid-template-columns: 1fr; }
  footer { flex-direction: column; gap: 1rem; padding: 2rem 1.5rem; }
}
</style>
</head>
<body>

<div class="layout">

<!-- ── SIDEBAR ── -->
<aside>
  <div>
    <p class="nav-brand">Christopher<br>Merone</p>
    <p class="nav-title">// Mechanical Engineer</p>
    <nav>
      <ul>
        <li><a href="#hero"><span class="nav-num">00</span> Home</a></li>
        <li><a href="#about"><span class="nav-num">01</span> About</a></li>
        <li><a href="#experience"><span class="nav-num">02</span> Experience</a></li>
        <li><a href="#projects"><span class="nav-num">03</span> Projects</a></li>
        <li><a href="#education"><span class="nav-num">04</span> Education</a></li>
      </ul>
    </nav>
  </div>
  <div class="nav-social">
    <a href="mailto:your@email.com">your@email.com</a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
  </div>
</aside>

<!-- ── MAIN ── -->
<main>

<!-- HERO -->
<section id="hero">
  <div class="hero-top">
    <p class="terminal-line">MS Mechanical Engineering · Northeastern University · 2026</p>
    <h1 class="hero-name">Christopher<br>Merone</h1>
    <p class="hero-role">// Mechatronics & Electromechanical Systems</p>
    <p class="hero-bio">
      I build things that <strong>move, measure, and perform</strong>. From commissioned energy systems in the field to feedback-controlled power electronics on the bench — I work across the full stack of mechanical engineering: sketch to CAD, prototype to validation. Based in <strong>Greater Boston</strong>, open to roles in medical devices, semiconductor equipment, defense, and EV technology.
    </p>
    <div class="hero-tags">
      <span class="hero-tag">SolidWorks</span>
      <span class="hero-tag">Mechatronics</span>
      <span class="hero-tag">Control Systems</span>
      <span class="hero-tag">Power Electronics</span>
      <span class="hero-tag">Embedded Systems</span>
      <span class="hero-tag">Python / MATLAB</span>
      <span class="hero-tag">LTSpice</span>
      <span class="hero-tag">FEA</span>
      <span class="hero-tag">GD&T</span>
      <span class="hero-tag">Prototyping</span>
    </div>
  </div>
  <div class="hero-bottom">
    <p class="hero-scroll">Scroll to explore</p>
    <div class="hero-photo-placeholder" title="Replace with your headshot">
      Your photo<br>here
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <p class="section-label">// 01 — About Me</p>
  <div class="about-grid">
    <div>
      <p>Hi! My name is <strong>Christopher Merone</strong> and I am a mechatronics-focused mechanical engineer who recently completed my <strong>MS in Mechanical Engineering at Northeastern University</strong> (May 2026). I've designed, prototyped, and built hardware across contexts ranging from energy commissioning in the field to electromechanical systems on the bench.</p>
      <p>My engineering interests sit at the intersection of <strong>mechanisms, controls, and instrumentation</strong> — I'm drawn to problems where the physical and electrical worlds meet, and where the answer has to work in the real world, not just in simulation. Whether I'm deriving a transfer function, running FEA on a weldment, or standing on a job site with a P&ID, I close the loop between design intent and built reality.</p>
      <p>Previously, I completed co-ops at <strong>Instron</strong> as an Applications Engineer, working directly with universal testing machines and high-demand industrial clients, and at <strong>ICO Energy & Engineering</strong> as a Commissioning Engineer, executing startup and acceptance testing of industrial energy systems in the field.</p>
      <p>Outside of engineering, I build things in wood — furniture and shop fixtures that demand the same precision as machined parts, just with hand tools and grain direction instead of tolerances and toolpaths.</p>
      <div class="about-skills">
        <span class="about-skill">CAD / SolidWorks</span>
        <span class="about-skill">FEA</span>
        <span class="about-skill">GD&T</span>
        <span class="about-skill">Control Systems</span>
        <span class="about-skill">Power Electronics</span>
        <span class="about-skill">Embedded Systems</span>
        <span class="about-skill">Prototyping</span>
        <span class="about-skill">MATLAB</span>
        <span class="about-skill">LTSpice</span>
        <span class="about-skill">P&IDs</span>
        <span class="about-skill">Commissioning</span>
        <span class="about-skill">Python</span>
      </div>
    </div>
    <div class="about-photo-placeholder">
      Add a portrait photo here<br><br>
      <span style="font-size:0.58rem;opacity:0.6;">&lt;img src="portrait.jpg"&gt;</span>
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience">
  <p class="section-label">// 02 — Experience</p>

  <div class="photo-strip">
    <div class="photo-strip-item"><span>Instron photo 1</span></div>
    <div class="photo-strip-item"><span>Instron photo 2</span></div>
    <div class="photo-strip-item"><span>ICO Energy photo</span></div>
  </div>

  <div class="exp-entries">

    <div class="exp-entry">
      <div class="exp-meta">
        <p class="exp-company">Instron (ITW)</p>
        <p class="exp-date">Co-op<br>Norwood, MA</p>
      </div>
      <div>
        <p class="exp-role">Applications Engineer Co-op</p>
        <ul class="exp-bullets">
          <li>Developed and validated custom test methods (tensile, compression, flexure, fatigue) for aerospace, medical device, and industrial polymer clients to ASTM and ISO standards</li>
          <li>Configured Instron Bluehill software profiles, calibration routines, and reporting templates across a diverse range of specimen geometries and load cells</li>
          <li>Performed hands-on fixture setup, extensometer integration, and load-displacement data analysis to support client troubleshooting</li>
          <li>Documented application notes and internal procedures to support the broader applications and sales engineering teams</li>
          <li>Engaged with high-demand clients across 20+ hours of Factory Acceptance Testing procedures</li>
        </ul>
      </div>
    </div>

    <div class="exp-entry">
      <div class="exp-meta">
        <p class="exp-company">ICO Energy &amp; Engineering</p>
        <p class="exp-date">Co-op<br>Field Engineering</p>
      </div>
      <div>
        <p class="exp-role">Commissioning Engineer Co-op</p>
        <ul class="exp-bullets">
          <li>Executed pre-commissioning and commissioning procedures for mechanical and electrical system components including pumps, motors, valves, and instrumentation</li>
          <li>Verified as-built conditions against P&ID and single-line diagram specifications, flagging discrepancies for engineering resolution</li>
          <li>Conducted functional acceptance testing (FAT) and site acceptance testing (SAT) with operations teams and client representatives</li>
          <li>Documented punch-list items, test records, and commissioning reports in compliance with project QA requirements</li>
          <li>Coordinated directly with subcontractors, electricians, and site supervisors to resolve commissioning hold points under schedule pressure</li>
        </ul>
      </div>
    </div>

  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <p class="section-label">// 03 — Projects</p>

  <div class="photo-strip">
    <div class="photo-strip-item"><span>Wheelchair photo</span></div>
    <div class="photo-strip-item"><span>Launcher photo</span></div>
    <div class="photo-strip-item"><span>Buck converter</span></div>
    <div class="photo-strip-item"><span>Woodworking 1</span></div>
    <div class="photo-strip-item"><span>Woodworking 2</span></div>
  </div>

  <div class="project-list">

    <!-- 01 -->
    <div class="project-item">
      <div class="project-header" onclick="toggleProject(this)">
        <span class="project-num">01</span>
        <span class="project-title">Canine Rehabilitation Wheelchair</span>
        <span class="project-toggle">+</span>
      </div>
      <div class="project-body">
        <div class="project-tags">
          <span class="project-tag">SolidWorks</span>
          <span class="project-tag">FEA</span>
          <span class="project-tag">Manual Fabrication</span>
          <span class="project-tag">GD&T</span>
          <span class="project-tag">Iterative Prototyping</span>
          <span class="project-tag">Graduate Design Project</span>
        </div>
        <div class="project-what">
          <h4>What</h4>
          <p>Custom mobility wheelchair for dogs with hind-limb paralysis or paresis. The device restores locomotive independence, enabling a near-normal gait pattern while alleviating loading on the forelimbs and spine.</p>
        </div>
        <div class="project-what">
          <h4>How</h4>
          <p>Designed adjustable frame geometry in SolidWorks to accommodate a range of dog anatomies — torso length, weight, shoulder height — without requiring custom fabrication per animal. Iterated through 3+ physical prototypes with veterinary feedback, running FEA to validate structural integrity before committing to final materials. Harness load paths were carefully analyzed to prevent chafe or pressure points during extended use.</p>
        </div>
        <div class="project-what">
          <h4>Why it matters</h4>
          <p>Designed for real clinical use. The constraint of working within an actual veterinary context — where fit, weight, and ease of adjustment directly affect animal welfare — pushed the design past the theoretical and into something that performs in the field.</p>
        </div>
      </div>
    </div>

    <!-- 02 -->
    <div class="project-item">
      <div class="project-header" onclick="toggleProject(this)">
        <span class="project-num">02</span>
        <span class="project-title">Automated Soccer Ball Launcher — Capstone</span>
        <span class="project-toggle">+</span>
      </div>
      <div class="project-body">
        <div class="project-tags">
          <span class="project-tag">Mechatronics</span>
          <span class="project-tag">Closed-Loop Control</span>
          <span class="project-tag">Arduino</span>
          <span class="project-tag">SolidWorks</span>
          <span class="project-tag">Motor Control</span>
          <span class="project-tag">System Integration</span>
        </div>
        <div class="project-what">
          <h4>What</h4>
          <p>Full mechatronic launcher system for athletic training. Delivers repeatable ball trajectories at user-specified speed, angle, and spin — enabling solo drills and consistent pass simulation. Spans structural design, drive mechanism, feed system, and microcontroller-based feedback control.</p>
        </div>
        <div class="project-what">
          <h4>How</h4>
          <p>Dual counter-rotating flywheel mechanism with independent motor speed control for spin application (top, back, neutral). Servo-actuated pitch adjustment for launch angle. Gravity-fed hopper with motorized gate for sequential delivery. Arduino-based controller with encoder feedback for closed-loop wheel speed regulation; trajectory parameters set via serial UI.</p>
        </div>
        <div class="project-what">
          <h4>Key result</h4>
          <p>±5° launch angle repeatability. Full system validation through field testing. The project demonstrated end-to-end ownership of a complex mechatronic system — from first sketch through wiring, tuning, and live demonstration.</p>
        </div>
      </div>
    </div>

    <!-- 03 -->
    <div class="project-item">
      <div class="project-header" onclick="toggleProject(this)">
        <span class="project-num">03</span>
        <span class="project-title">Buck Converter Feedback Control Design</span>
        <span class="project-toggle">+</span>
      </div>
      <div class="project-body">
        <div class="project-tags">
          <span class="project-tag">Power Electronics</span>
          <span class="project-tag">Small-Signal Modeling</span>
          <span class="project-tag">PI Controller Design</span>
          <span class="project-tag">LTSpice</span>
          <span class="project-tag">MATLAB</span>
          <span class="project-tag">EECE5684</span>
        </div>
        <div class="project-what">
          <h4>What</h4>
          <p>Complete voltage-mode feedback control system for a DC–DC buck converter. Derived plant model from first principles, validated through small-signal analysis, then synthesized a PI controller meeting specified phase margin (&gt;45°) and bandwidth targets.</p>
        </div>
        <div class="project-what">
          <h4>How</h4>
          <p>Derived the small-signal averaged model using state-space averaging to produce the duty-cycle-to-output-voltage transfer function G(s). Analyzed open-loop Bode plots for gain crossover frequency and the LC double-pole. Designed a PI compensator, placed the integrator zero to target phase margin, and verified closed-loop step response and line rejection in LTSpice against MATLAB predictions. ESR effects on LC resonance informed final zero placement.</p>
        </div>
        <div class="project-what">
          <h4>Key result</h4>
          <p>Zero steady-state error with integral action; &gt;45° phase margin confirmed in simulation. Demonstrated the full pipeline from physics-based modeling through to verified closed-loop performance.</p>
        </div>
      </div>
    </div>

    <!-- 04 -->
    <div class="project-item">
      <div class="project-header" onclick="toggleProject(this)">
        <span class="project-num">04</span>
        <span class="project-title">Woodworking — Furniture & Shop Fixtures</span>
        <span class="project-toggle">+</span>
      </div>
      <div class="project-body">
        <div class="project-tags">
          <span class="project-tag">Manual Fabrication</span>
          <span class="project-tag">Joinery</span>
          <span class="project-tag">Material Selection</span>
          <span class="project-tag">Surface Finishing</span>
          <span class="project-tag">Hand Tools</span>
        </div>
        <div class="project-what">
          <h4>What</h4>
          <p>Self-directed builds ranging from furniture to custom shop fixtures — hand tools, joinery, and finishing. Where engineering discipline meets craft intuition.</p>
        </div>
        <div class="project-what">
          <h4>Why it connects to engineering</h4>
          <p>Woodworking is tolerance work without a CNC machine. Joinery that fits cleanly requires the same spatial reasoning as machined interfaces — you're just working by hand to a layout line instead of a CAD datum. Material behavior (grain direction, wood movement with humidity, fastener pull-out in different species) maps directly onto material selection judgment for engineered assemblies. Every build starts with a plan, requires sequencing operations correctly before committing, and ends with a fit check. The craft sharpens fabrication intuition that shows up in how I think about DFM.</p>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- EDUCATION -->
<section id="education">
  <p class="section-label">// 04 — Education</p>

  <div class="edu-photo-pair">
    <div class="edu-photo"><span>Campus / lab photo</span></div>
    <div class="edu-photo"><span>Project or lab photo</span></div>
  </div>

  <div>

    <div class="edu-entry">
      <p class="edu-school">Northeastern University</p>
      <p class="edu-date">2024 – 2026</p>
      <p class="edu-degree">MS Mechanical Engineering — Mechatronics Concentration</p>
      <ul class="edu-bullets">
        <li>Relevant coursework: Controls Systems Engineering (ME5659) · Power Electronics (EECE5684) · Physics-Informed Machine Learning (ME5510) · Biomechanics / Wearable Robotics</li>
        <li>ME5659: State-space analysis, Lyapunov stability, pole placement, observer design, LQR, Kalman decomposition</li>
        <li>EECE5684: Rectifier circuits, DC motor drives, inverters, forward/flyback converters, SEPIC, MOSFET loss analysis, buck/boost hardware labs</li>
        <li>ME5510: PINNs for charged particle trajectory prediction, SympNets, Poisson Neural Networks, parameter estimation</li>
      </ul>
    </div>

    <div class="edu-entry">
      <p class="edu-school">Northeastern University</p>
      <p class="edu-date">2020 – 2024</p>
      <p class="edu-degree">BS Mechanical Engineering</p>
      <ul class="edu-bullets">
        <li>Mechatronics concentration · Co-op program (2 full co-ops: Instron, ICO Energy)</li>
        <li>Relevant coursework: Mechanics of Materials · Dynamics · Fluid Mechanics · Thermal Systems · Measurement & Analysis · Statics · Differential Equations & Linear Algebra</li>
        <li>Capstone: Automated Soccer Ball Launcher (mechatronic system design, full team lead)</li>
      </ul>
    </div>

  </div>
</section>

<!-- FOOTER -->
<footer>
  <div>
    <p class="footer-name">Christopher Merone</p>
    <p style="font-family:var(--mono);font-size:0.65rem;color:var(--text3);margin-top:2px;">Mechanical Engineer</p>
  </div>
  <div class="footer-links">
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#education">Education</a>
  </div>
  <p class="footer-copy">© 2026 Christopher Merone</p>
</footer>

</main>
</div>

<script>
function toggleProject(header) {
  const body = header.nextElementSibling;
  const toggle = header.querySelector('.project-toggle');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  toggle.classList.toggle('open', !isOpen);
  toggle.textContent = isOpen ? '+' : '×';
}
</script>

</body>
</html>

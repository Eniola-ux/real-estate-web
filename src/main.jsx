import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    slug: 'jrandle centre', name: 'John Randle Centre', location: 'Onikan, Lagos', year: '2024',
    category: 'Mixed use', type: 'Completed · 12 homes',
    description: 'A cultural centre shaped around shaded courtyards, where open spaces connect people, place, and the city.',
    image: 'https://www.jrandlecentre.com/wp-content/uploads/2019/09/JKR2image00002-scaled.jpg'
  },
  {
    slug: 'kehinde-courtyard', name: 'Kehinde Courtyard', location: 'Ikeja, Lagos', year: '2026',
    category: 'Residential', type: 'In development · 24 homes',
    description: 'A contemporary home designed around a planted, communal heart.',
    image: 'https://i.pinimg.com/1200x/e0/cb/1d/e0cb1d8df1977b4c8f3e9a83e20a1bb7.jpg'
  },
  {
    slug: 'amah', name: 'Amah Studio', location: 'Lagos Island, Lagos', year: '2026',
    category: 'Mixed use', type: 'In development · Mixed use',
    description: 'Living, working and gathering spaces made for the movement and energy of the Lekki peninsula.',
    image: 'https://images.squarespace-cdn.com/content/v1/6696ea07cc88c776026e8e7d/c8de1199-223e-4531-afc4-52f1e89cb453/AMAH+BY+DANIEL+OBASI+355.jpg'
  },
  {
    slug: 'tt-house', name: 'TT House', location: 'Ikoyi, Lagos', year: '2023',
    category: 'Residential', type: 'Completed · Private residence',
    description: 'A compact residence of terraces and filtered daylight, deliberately tuned to its garden setting.',
    image: 'https://foodieinlagos.com/wp-content/uploads/2026/06/TT-Lagos-Victoria-Island-Lagos-01.jpg.jpg'
  },
  {
    slug: 'dew', name: 'Dew', location: 'Lekki, Lagos', year: '2025',
    category: 'Hospitality', type: 'Completed · Studio & café',
    description: 'A neighbourhood meeting place that combines a creative studio, café and a generous shaded veranda.',
    image: 'https://static.wixstatic.com/media/0ef0c0_ea76abcd99e342bf8ac811f68ed69984~mv2.jpg/v1/fill/w_320,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0ef0c0_ea76abcd99e342bf8ac811f68ed69984~mv2.jpg'
  },
  {
    slug: 'alara', name: 'Alara', location: 'Victoria Island, Lagos', year: '2026',
    category: 'Concept', type: 'Research project',
    description: 'A low-impact gathering pavilion exploring Nigerian fashion, deep shade and an open relationship to the lagoon.',
    image: 'https://i.pinimg.com/1200x/55/3a/7d/553a7ddaab236c8848961a0a068f6e5a.jpg'
  },
]


function Header({ navigate, isProjectPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoPulse, setLogoPulse] = useState(false)
  const go = (path) => { navigate(path); setMenuOpen(false) }
  const goHome = () => { setLogoPulse(false); requestAnimationFrame(() => setLogoPulse(true)); go('/'); window.setTimeout(() => setLogoPulse(false), 650) }
  return <header className={`topbar ${isProjectPage ? 'topbar-light' : ''}`}>
    <button className={`brand ${logoPulse ? 'logo-pulse' : ''}`} onClick={goHome} aria-label="HOME home page">HOME<span>°</span></button>
    <nav className={menuOpen ? 'nav open' : 'nav'}>
      <button onClick={() => go('/#about')}>Approach</button><button onClick={() => go(isProjectPage ? '/projects' : '/#projects')}>Projects</button><button onClick={() => go('/#contact')}>Contact</button>
    </nav>
    <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'Close' : 'Menu'}</button>
  </header>
}
function Footer() { return <footer><div className="brand">HOME<span>°</span></div><p>3 Isaac John Street, Ikeja GRA, Lagos, Nigeria.</p><p>© 2026 HOME. All rights reserved.</p></footer> }
function ContactForm() { const [sent, setSent] = useState(false); return <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@email.com" /></label><label>Tell us a little about your project<textarea required placeholder="I’d like to talk about…" rows="3" /></label><button type="submit">{sent ? 'Message received — thank you' : 'Send enquiry →'}</button></form> }
function ProjectCard({ project, navigate }) { return <article className="project"><button className="project-button" onClick={() => navigate(`/projects/${project.slug}`)} aria-label={`View ${project.name}`}><img src={project.image} alt={project.name} /><div className="project-info"><div><h3>{project.name}</h3><p>{project.location}</p></div><p>{project.type}</p></div></button></article> }

function HomePage({ navigate }) {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); return <main id="top">
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Lagos, Nigeria · Est. 2026</p>
        <h1>Built for<br /><em>living here.</em></h1><div className="hero-bottom">
          <p>Homes and places shaped by the climate, rhythm, and resourcefulness of Lagos.</p>
          <button className="round-arrow" onClick={() => scrollTo('#about')} aria-label="Explore">↓</button></div></div>
      <div className="hero-image" role="img" aria-label="Modern tropical architecture" />
    </section>

    <section className="intro section" id="about">
      <p className="eyebrow">01 — Our point of view</p><div className="intro-grid">
        <h2>Architecture that belongs to its <em>place.</em></h2>
        <div>
          <p>HOME makes thoughtful residences for a fast-growing Lagos. We bring local knowledge, passive design and careful materials together to create buildings that endure.</p>
          <a href="#contact">Work with us <span>↗</span></a>
        </div>
      </div>
    </section>

    <section className="image-break" aria-label="Lagos architectural detail">
      <div className="image-caption">Shade, air, and room to gather.</div>
    </section>

    <section className="principles section">
      <p className="eyebrow">02 — The HOME way</p>
      <div className="principle-list">
        <article><span>01</span><h3>Made for the tropics</h3><p>Deep overhangs, generous openings and materials that age gracefully in heat and rain.</p>
        </article>
        <article><span>02</span><h3>Rooted in Lagos</h3><p>Every project responds to its street, its people and the everyday patterns around it.</p>
        </article>
        <article><span>03</span><h3>Built to last</h3><p>Long-term value comes from good planning, honest craft and flexible spaces.</p>
        </article>
      </div>
    </section>

    <section className="projects section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">03 — Selected work</p><h2>A different way<br />to come <em>home.</em></h2>
      </div>
      <div className="project-grid">{projects.slice(0, 3).map((project) =>
        <ProjectCard project={project} navigate={navigate} key={project.slug} />)}
      </div>
      <button className="text-link all-projects-link" onClick={() => navigate('/projects')}>View all projects <span>↗</span>
      </button>
    </section>

    <section className="statement">
      <p>Good housing creates more than shelter. It makes room for <em>life.</em></p>
    </section>

    <section className="contact section" id="contact">
      <p className="eyebrow">04 — Start a conversation</p>
      <div className="contact-grid">
        <h2>Let’s build<br />something <em>lasting.</em></h2><ContactForm />
      </div>
    </section>

  </main>
}

function ProjectsPage({ navigate }) {
  const [filter, setFilter] = useState('All'); const filters = ['All', 'Residential', 'Hospitality', 'Mixed use', 'Concept'];
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter);
  return <main className="archive">
    <section className="archive-intro">
      <p className="eyebrow">HOME — Project archive</p>
      <h1>Places for<br /><em>life in Lagos.</em></h1>
      <p>Homes, shared spaces and ideas shaped by this city’s climate, character and constant motion.</p>
    </section>

    <section className="archive-work section">
      <div className="archive-toolbar">
        <p>{visible.length.toString().padStart(2, '0')} projects</p>
        <div className="filters">{filters.map((item) =>
          <button
            key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}
          </button>)}
        </div>
      </div>
      <div className="archive-grid">{visible.map((project, index) => <article className={`archive-card card-${index % 3}`} key={project.slug}>
        <button onClick={() => navigate(`/projects/${project.slug}`)}>
          <div className="archive-image">
            <img src={project.image} alt={project.name} />
            <span>{project.category}</span>
          </div>
          <div className="archive-info">
            <h2>{project.name}</h2> <p>{project.location} · {project.year}</p>
            <span>View project ↗</span>
          </div>
        </button>
      </article>)}
      </div>
    </section>

  </main>
}

function ProjectPage({ project, navigate }) {
  return <main className="project-detail">
    <section className="detail-hero">
      <button className="back-link"
        onClick={() => navigate('/projects')}>← All projects
      </button>
      <p className="eyebrow">{project.category} · {project.location}</p>
      <h1>{project.name}</h1> <p className="detail-summary">{project.description}</p>
      <img src={project.image} alt={project.name} />
    </section>

    <section className="detail-copy section">
      <div>
        <p className="eyebrow">Project details</p> <h2>A considered response to its <em>place.</em></h2>
      </div>
      <div className="detail-meta">
        <p>
          <span>Location</span>{project.location}</p> <p><span>Year</span>{project.year}
        </p>
        <p><span>Type</span>{project.type}</p>
      </div>
    </section>

    <section className="detail-image" style={{ backgroundImage: `url(${project.image})` }} />

    <section className="detail-next section">
      <p className="eyebrow">Keep exploring</p>
      <button className="text-link" onClick={() => navigate('/projects')}>View all projects
        <span>↗</span>
      </button>
    </section>

  </main>
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => { const sync = () => setPath(window.location.pathname); window.addEventListener('popstate', sync); return () => window.removeEventListener('popstate', sync) }, [])
  useEffect(() => { if (window.location.hash) setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' }), 50) }, [path])
  useEffect(() => {
    document.documentElement.classList.add('motion-ready')
    const sections = [...document.querySelectorAll('main > section')].filter((section) => !section.classList.contains('hero'))
    sections.forEach((section) => section.classList.add('scroll-reveal'))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.12 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [path])
  const navigate = (to) => { const [nextPath, hash = ''] = to.split('#'); const destination = nextPath || '/'; if (destination === window.location.pathname && hash) { window.history.pushState({}, '', `${destination}#${hash}`); document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: 'smooth' }); return }; window.history.pushState({}, '', `${destination}${hash ? `#${hash}` : ''}`); setPath(destination); window.scrollTo(0, 0) }
  const project = projects.find((item) => `/projects/${item.slug}` === path)
  const isProjectPage = path.startsWith('/projects')
  return <>
  <Header navigate={navigate} isProjectPage={isProjectPage} />
  {project ? <ProjectPage project={project} navigate={navigate} /> : path === '/projects' ? 
  <ProjectsPage navigate={navigate} /> : <HomePage navigate={navigate} />}
  <Footer /></>
}
createRoot(document.getElementById('root')).render(<App />)

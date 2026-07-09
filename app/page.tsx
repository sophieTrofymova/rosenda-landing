'use client';

import { useState } from 'react';
import { ArrowRight, Edit3, Network, Settings } from 'lucide-react';

const FEATURES = [
  { icon: Network, title: 'UI/UX design', text: 'Office ipsum you must be muted. Wiggle of three squad left fured nail assassin.' },
  { icon: Settings, title: 'Web-development', text: 'Office ipsum you must be muted. Wiggle of three squad left fured nail assassin.' },
  { icon: Edit3, title: 'Editing system', text: 'Office ipsum you must be muted. Wiggle of three squad left fured nail assassin.' },
];

const FAQS = [
  {
    question: 'Why is digital marketing important for my business?',
    answer:
      'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results and helps businesses improve their strategy based on real data.',
  },
  {
    question: 'How can digital marketing improve my website visibility?',
    answer:
      'It improves visibility through SEO, content strategy, paid ads, analytics, and better user experience. These tools help your website appear in front of the right audience at the right time.',
  },
  {
    question: 'How long does it take to launch a landing page?',
    answer:
      'Most landing pages can be planned, designed, developed, and launched within two to four weeks, depending on the amount of content, animations, and revisions required.',
  },
  {
    question: 'Can you help with branding and website design together?',
    answer:
      'Yes. We combine brand identity, UI/UX design, web development, and conversion strategy so your website looks consistent, professional, and ready to support your business goals.',
  },
];

const REVIEWS = [
  {
    text: 'Rosenda transformed our online presence completely. Their attention to detail, creativity, and professionalism exceeded our expectations. The final website not only looks outstanding but also performs exceptionally well and has helped us attract new clients.',
    name: 'Alison Delaurentis',
    role: 'CEO of Real Estate Agency',
    image: 'https://i.pravatar.cc/70?img=32',
  },
  {
    text: 'Working with Rosenda was smooth from start to finish. They understood our goals quickly, created a clean visual direction, and delivered a website that feels modern, fast, and easy for our customers to use.',
    name: 'Michael Carter',
    role: 'Founder of Carter Studio',
    image: 'https://i.pravatar.cc/70?img=12',
  },
  {
    text: 'The team helped us turn a vague idea into a strong digital brand. Our new landing page looks premium, communicates clearly, and has already improved the quality of leads we receive.',
    name: 'Sofia Bennett',
    role: 'Marketing Director at Nova Group',
    image: 'https://i.pravatar.cc/70?img=47',
  },
  {
    text: 'Rosenda combines strategy, design, and development perfectly. They paid attention to every detail and created a digital experience that finally represents the quality of our business.',
    name: 'Daniel Brooks',
    role: 'Managing Partner at Urban Nest',
    image: 'https://i.pravatar.cc/70?img=53',
  },
];

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#why', label: 'Why us' },
  { href: '#about', label: 'About us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
];

export default function Home() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const activeReview = REVIEWS[reviewIndex];

  const prevReview = () =>
    setReviewIndex((current) => (current === 0 ? REVIEWS.length - 1 : current - 1));

  const nextReview = () =>
    setReviewIndex((current) => (current === REVIEWS.length - 1 ? 0 : current + 1));

  return (
    <main>
      <div className="mobileOnly">
        <MobileHero />
      </div>

      <div className="desktopOnly">
        <DesktopHero />
      </div>

      <ServicesSection />
      <PortfolioSection />
      <WhySection />
      <AboutSection />
      <ReviewsSection
        review={activeReview}
        onPrev={prevReview}
        onNext={nextReview}
      />
      <FaqSection openFaq={openFaq} onToggle={setOpenFaq} />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}

function DesktopNav() {
  return (
    <header className="nav">
      <a className="logo" href="#">ROSENDA</a>

      <nav>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <a className="pill" href="#contact">
        Get in touch <ArrowRight size={14} />
      </a>
    </header>
  );
}

function DesktopHero() {
  return (
    <>
      <section className="hero">
        <video className="heroVideo" autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <DesktopNav />

        <div className="heroGrid">
          <div className="heroCopy">
            <h1 className="heroTitle">
              <span className="bigC">C</span>REATIVE
              <br />
              DIGITAL
            </h1>

            <p className="lead">
              We create powerful digital experiences that help brands grow, connect,
              and stand out. Focused on strategy, design and results.
            </p>

            <div className="stats">
              <div className="stat">
                <strong>230+</strong>
                <div className="statCard">
                  <span>Projects completed<br />for clients around<br />the world</span>
                </div>
              </div>

              <div className="stat">
                <strong>98%</strong>
                <div className="statCard">
                  <span>Clients who are<br />satisfied with our<br />work and support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="heroArt">
            <a className="want" href="#contact">
              <span><ArrowRight size={22} /></span>
              I want a website
            </a>

            <div className="brandWords">Branding<br />Agency</div>
          </div>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}

function QuoteBand({ mobile = false }) {
  if (mobile) {
    return (
      <section className="mQuote">
        <span>❝</span>
        <h2>We blend beauty and<br />functionality seamlessly</h2>
        <span>❞</span>
      </section>
    );
  }

  return (
    <section className="quote">
      <div className="quoteInner">
        <div className="quoteMark">❝</div>
        <h2>We blend beauty and<br />functionality seamlessly</h2>
        <div className="quoteMark">❞</div>
      </div>
    </section>
  );
}

function MobileHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="mHero">
        <video className="mHeroVideo" autoPlay muted loop playsInline poster="/hero-img.png">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <header className="mNav">
          <a href="#" className="mLogo">ROSENDA</a>

          <button type="button" className="mMenuBtn" onClick={() => setMenuOpen((open) => !open)}>
            <span className="mMenuIcon" aria-hidden="true">
              <span />
              <span />
            </span>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>

          {menuOpen && (
            <nav className="mMenu">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </header>

        <div className="mHeroContent">
          <h1>CREATIVE<br />DIGITAL</h1>

          <p>
            We create powerful digital experiences that help brands grow,
            connect, and stand out. Focused on strategy, design and results.
          </p>

          <a href="#contact" className="mHeroCta">
            <span><ArrowRight size={16} /></span>
            I want a website
          </a>

          <div className="mBranding">BRANDING<br />AGENCY</div>

          <div className="mStats">
            <div>
              <strong>230+</strong>
              <p>Projects completed<br />for clients around<br />the world</p>
            </div>

            <div>
              <strong>98%</strong>
              <p>Clients who are<br />satisfied with our<br />work and support</p>
            </div>
          </div>
        </div>
      </section>

      <QuoteBand mobile />
    </>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="suggest">
      <div className="sectionTitle">
        <h2 className="suggestTitle">
          <span className="bigW">W</span>E <i />
          <br />
          SUGGEST...
        </h2>
        <p>Passionate creators,<br />innovators and visionaries</p>
      </div>

      <div className="cards">
        {FEATURES.map((item, index) => {
          const Icon = item.icon;
          return (
            <article className={index === 1 ? 'card active' : 'card'} key={item.title}>
              <Icon size={72} strokeWidth={1.7} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolioTitle">
        <span className="bigO">O</span>ur
        <br />
        Wondeful Works.
      </h2>

      <div className="portfolioGrid">
        <div className="workMain">
          <img src="/portfolio1.png" alt="Agency website" className="portfolioImageMain" />
        </div>

        <div className="workInfo">
          <p>
            Office ipsum you must be muted. On stronger attached stronger streamline.
            Email what long put 30,000ft responsible effects journey note. Way this
            high-level deliverables web respectively.
          </p>

          <div className="sliderButtons">
            <button type="button">‹</button>
            <span />
            <button type="button">›</button>
          </div>
        </div>

        <div className="workCta">
          <h3>Agency<br />Website</h3>
          <a href="#">Visit website →</a>
        </div>

        <div className="verticalText">Real estate agency</div>

        <div className="workWide">
          <img src="/portfolio2.png" alt="Website showcase" className="portfolioImageWide" />
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="why">
      <div className="whyTop">
        <h2 className="whyTitle">
          We are here
          <br />
          <span>because :</span>
        </h2>
      </div>

      <div className="whyPanel">
        <article className="whyCard whyCard01">
          <strong>01</strong>
          <p>We design websites that reflect your brand, engage your audience, and turn visitors into loyal customers.</p>
        </article>

        <article className="whyCard whyCard02">
          <strong>02</strong>
          <p>Every project is crafted with attention to detail, combining modern design, usability and high performance.</p>
        </article>

        <div className="whyCircle">⌞</div>

        <article className="whyCard whyCard03">
          <strong>03</strong>
          <p>From branding and UI/UX to development and digital marketing, everything is delivered under one creative team.</p>
        </article>

        <article className="whyCard whyCard04">
          <strong>04</strong>
          <p>We build long-term partnerships by creating digital experiences that help businesses grow with confidence.</p>
        </article>

        <div className="whyLogo">ROSENDA</div>

        <a href="#contact" className="whyButton">
          GET IN TOUCH <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about">
      <h2 className="aboutTitle">
        <span className="bigA">A</span>bout <i />
        <br />
        ROSENDA Agency
      </h2>

      <div className="aboutGrid">
        <div className="aboutTeam">
          <img src="/about1.png" alt="Rosenda team" className="aboutTeamImage" />
          <div className="aboutOverlay">
            <h3>Team work</h3>
            <p>Committed and creative</p>
          </div>
        </div>

        <div className="aboutRight">
          <div className="aboutOffice">
            <img src="/about2.png" alt="Rosenda office" className="aboutOfficeImage" />
            <div className="aboutOverlay">
              <h3>Office</h3>
              <p>7 Priory Office Park, Stillorgan Rd, Blackrock, Dublin A94 N2V3</p>
            </div>
          </div>

          <div className="aboutTextGrid">
            <div>
              <h3>Who we are ?</h3>
              <p>
                We are a creative digital agency helping brands build modern
                websites, visual identities, and online experiences that connect
                with real people.
              </p>
            </div>

            <div>
              <h3>Our philosophy</h3>
              <p>
                We believe design should be clear, beautiful, and useful. Every
                project is shaped with strategy, creativity, and attention to detail.
              </p>
            </div>
          </div>

          <div className="aboutLine" />
        </div>
      </div>
    </section>
  );
}

function ReviewsSection({ review, onPrev, onNext }) {
  return (
    <section id="reviews" className="reviews">
      <div className="reviewsLeft">
        <h2 className="reviewsTitle">Quotes<br />From Clients</h2>

        <div className="reviewArrows">
          <button type="button" onClick={onPrev}>←</button>
          <span />
          <button type="button" onClick={onNext}>→</button>
        </div>
      </div>

      <div className="reviewsRight">
        <blockquote>&ldquo;{review.text}&rdquo;</blockquote>

        <div className="reviewAuthor">
          <img src={review.image} alt={review.name} />
          <div>
            <h3>{review.name}</h3>
            <p>{review.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ openFaq, onToggle }) {
  return (
    <section id="faq" className="faq">
      <div className="faqLeft">
        <h2>FAQs</h2>

        <p>
          As a creative digital agency, we provide clear answers to common
          questions about branding, design, development, and online growth.
        </p>

        <div className="faqActions">
          <a href="#contact" className="faqButton">More questions →</a>
          <a href="#contact" className="faqContact">Contact Us</a>
        </div>

        <div className="faqImage">
          <img src="/faq-img.png" alt="Rosenda team" />
        </div>
      </div>

      <div className="faqRight">
        {FAQS.map((item, index) => (
          <div className={openFaq === index ? 'faqItem active' : 'faqItem'} key={item.question}>
            <button
              type="button"
              className="faqQuestion"
              onClick={() => onToggle(openFaq === index ? -1 : index)}
            >
              <h3>{item.question}</h3>
              <span>{openFaq === index ? '−' : '+'}</span>
            </button>

            {openFaq === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="hear">
      <div className="hearLeft">
        <h2>We&rsquo;d like to<br />hear</h2>
        <p>
          Digital marketing allows businesses to reach and engage with a wider
          audience, generate leads, drive website traffic, and increase
        </p>
      </div>

      <form className="hearForm">
        <input type="email" placeholder="Your email address" />
        <button type="submit">Send <ArrowRight size={15} /></button>
      </form>

      <div className="hearRight">
        <div className="hearPhoto">
          <img src="/female.png" alt="Woman" className="hearPhotoImage" />
        </div>
        <h3>From you</h3>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerIntro">
          <h2>Let&rsquo;s chat.</h2>
          <p>Unleashing brand potential through<br />creative design and innovation.</p>
        </div>

        <div className="footerDivider" />

        <div className="footerContent">
          <div className="footerLinks">
            <div>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#why">Why us</a>
            </div>

            <div>
              <a href="#about">About us</a>
              <a href="#reviews">Reviews</a>
              <a href="#faq">FAQs</a>
            </div>
          </div>

          <div className="footerRight">
            <div className="socials">
              <a href="#">f</a>
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">◎</a>
            </div>

            <div className="footerContact">
              <p>T : +420 444 555 666</p>
              <p>F : +420 444 555 666</p>
              <p>E : info@rosenda.agency</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">© 2026 Digital Agency Rosenda Group s.r.o</div>
    </footer>
  );
}

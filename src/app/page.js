"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Resume />
      <Services />
      <Stats />
      <PortfolioSection />
      <Testimonials />
      <Contact />
    </main>
  );
}

function Hero() {
  const titles = [
    "Full Stack Developer",
    "Laravel & Symfony Expert",
    "FastAPI & React Specialist",
    "RESTful API Architect",
    "Web Scraping & Automation Expert",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeadingVisible(true), 300);
  }, []);

  useEffect(() => {
    const current = titles[index];
    let timer;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % titles.length);
      }, 500);
    } else {
      timer = setTimeout(() => {
        setText(
          deleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1),
        );
      }, deleting ? 50 : 100);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, titles]);

  return (
    <section
      id="hero"
      className="hero min-h-screen flex items-center justify-center relative"
    >
      <img
        src="/assets/img/hero-img.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(4,11,21,0.6)]" />
      <div className="relative z-10 text-center text-white">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Hi, I&apos;m <span className="text-blue-300">Nasir Haroon</span>
        </h2>
        <p className="text-xl md:text-2xl text-blue-200 min-h-[3rem]">
          <span>{text}</span>
          <span className="animate-pulse ml-0.5 text-blue-200">|</span>
        </p>
      </div>
    </section>
  );
}

function About() {
  const skills = [
    { name: "PHP / Laravel / Symfony", val: 95 },
    { name: "JavaScript / React / Vue / TypeScript", val: 85 },
    { name: "Python / FastAPI / Scrapy", val: 80 },
    { name: "PostgreSQL / MySQL / MongoDB", val: 90 },
  ];

  return (
    <section id="about" className="section py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex gap-6 items-start">
              <img
                src="/assets/img/profile-img.jpg"
                alt=""
                className="w-40 h-40 rounded-lg object-cover"
              />
              <div className="about-info">
                <p>
                  <strong>Name:</strong> Nasir Haroon
                </p>
                <p>
                  <strong>Profile:</strong> Full Stack Developer
                </p>
                <p>
                  <strong>Email:</strong> sardarnasirharoon@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +92 346 4382740
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-semibold text-lg mb-4">Skills</h5>
              {skills.map((s) => (
                <div key={s.name} className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{s.name}</span>
                    <span>{s.val}%</span>
                  </div>
                  <div className="progress-wrap">
                    <div
                      className="progress-bar"
                      style={{ width: `${s.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">About me</h4>
            <p className="text-gray-600 mb-3">
              Full Stack Developer with 5+ years of experience engineering
              scalable web applications using PHP (Laravel, Symfony, Core PHP),
              JavaScript (React, Vue), and Python (FastAPI). Adept at designing
              RESTful APIs, optimizing databases, and implementing secure,
              production-ready architectures.
            </p>
            <p className="text-gray-600 mb-3">
              Leverages AI-augmented development workflows, including spec-driven
              AI coding, MCP agent integration, and layered validation systems,
              to accelerate delivery while maintaining strict code quality and
              security standards.
            </p>
            <p className="text-gray-600">
              Continuously advancing expertise in DevOps and LLM-driven
              engineering to build modern, high-impact software solutions.
              Successfully mentored teams and delivered projects serving
              thousands of users across Belgium, France, and Spain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  const education = [
    {
      degree: "Bachelors of Science in Information Technology",
      years: "10/2017 - 08/2021",
      school: "PMAS Arid Agricultural University, Rawalpindi",
      desc: "Bachelor's degree in Information Technology with focus on software development and web technologies.",
    },
  ];

  const certs = [
    {
      name: "Agentic Coding & AI Driven Development",
      date: "05/2026",
      org: "Zeropoint IT, Islamabad",
      desc: "Mastered spec-driven AI workflows, MCP integration, and layered feedback systems to validate and guide AI-generated code.",
    },
    {
      name: "Web Designing & Development",
      date: "2017",
      org: "TEVTA Punjab Board Lahore",
      desc: "Professional certification in web design and development.",
    },
  ];

  const experience = [
    {
      title: "Symfony Developer — Zimmo (Belgian Real Estate Platform)",
      years: "02/2023 - Present",
      company: "Zeropoint IT (Pvt.) Ltd., Islamabad, Pakistan",
      items: [
        "Migrated Zimmo's legacy portal from PHP 5.4 to PHP 8.4 with the latest Symfony framework, collaborating with the Zimmo engineering team.",
        "Architected and built a modern Symfony-based crawling system for automated data collection from 50+ property sources, reducing manual data entry by 80%.",
        "Applied Domain-Driven Design (DDD) principles for clean, maintainable, and scalable architecture.",
        "Leveraged AI agent workflows (Codex, Gemini CLI, Claude Code, OpenCode, GitHub Copilot) to accelerate development.",
        "Ensured 99.9% up-time and high data accuracy for production systems serving users across Belgium, France, and Spain.",
      ],
    },
    {
      title: "Software Engineer - Laravel Developer",
      years: "05/2023 - 02/2024",
      company: "Syslab Technologies Sdn Bhd, Cyberjaya, Malaysia",
      items: [
        "Successfully delivered and collaborated in a fully remote environment, ensuring timely project deliveries.",
        "Led backend development for web applications using Laravel and CodeIgniter, serving 5k+ monthly active users.",
        "Optimized MySQL queries for fast search across listings, reducing average page load time by 40%.",
        "Built RESTful APIs with token-based authentication, integrated with React front-end teams.",
        "Mentored 4 junior developers on code structure, testing, and deployment best practices.",
      ],
    },
    {
      title: "Software Engineer - PHP Developer",
      years: "11/2021 - 06/2023",
      company: "MicroMerger Pvt. Ltd., Islamabad, Pakistan",
      items: [
        "Developed and maintained enterprise-level web platforms using PHP 8, Laravel, and CodeIgniter.",
        "Migrated legacy system to modern architectures, improving maintainability and reducing bug reports by 70%.",
        "Integrated PostgreSQL with geospatial features for government health dashboards.",
        "Automated data processing workflows using queues and cron jobs, saving 15+ hours/week in manual operations.",
      ],
    },
    {
      title: "Associate Software Engineer",
      years: "01/2021 - 11/2021",
      company: "Pace Technologies (Pvt.) Ltd., Islamabad, Pakistan",
      items: [
        "Contributed to full-stack projects using Laravel, CodeIgniter, and React.js.",
        "Built secure REST APIs for mobile app integration, handling 2k+ concurrent requests.",
        "Designed database schema optimizations that improved report generation speed by 3x.",
        "Collaborated with QA team to implement automated testing, reducing post-release bugs by 70%.",
      ],
    },
  ];

  return (
    <section id="resume" className="section py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2>Resume</h2>
          <p className="text-gray-500 mt-4">
            Full Stack Developer with 5+ years of experience in PHP, Symfony,
            Laravel, React, and FastAPI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="resume-item pb-4">
              <h4>Nasir Haroon</h4>
              <p className="text-gray-600 text-sm italic mb-3">
                Full Stack Developer with 5+ years of experience engineering
                scalable web applications using PHP (Laravel, Symfony, Core PHP),
                JavaScript (React, Vue), and Python (FastAPI).
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>House No 430/B, Railway Loco Colony Westridge, Rawalpindi</li>
                <li>+92 346 4382740</li>
                <li>sardarnasirharoon@gmail.com</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mb-4 mt-6">Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="resume-item">
                <h4>{e.degree}</h4>
                <h5>{e.years}</h5>
                <p className="text-gray-600 text-sm italic">{e.school}</p>
                <p className="text-gray-600 text-sm mt-2">{e.desc}</p>
              </div>
            ))}

            <h3 className="text-lg font-semibold mb-4 mt-6">Certifications</h3>
            {certs.map((c) => (
              <div key={c.name} className="resume-item">
                <h4>{c.name}</h4>
                <h5>{c.date}</h5>
                <p className="text-gray-600 text-sm italic">{c.org}</p>
                <p className="text-gray-600 text-sm mt-2">{c.desc}</p>
              </div>
            ))}

            <h3 className="text-lg font-semibold mb-4 mt-6">Languages</h3>
            <div className="resume-item">
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>
                  <strong>English</strong> - Proficient (C2)
                </li>
                <li>
                  <strong>Urdu</strong> - Native
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Professional Experience
            </h3>
            {experience.map((exp) => (
              <div key={exp.title} className="resume-item">
                <h4>{exp.title}</h4>
                <h5>{exp.years}</h5>
                <p className="text-gray-600 text-sm italic mb-2">{exp.company}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {exp.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      desc: "Custom web application development using PHP (Laravel, Symfony, CodeIgniter), Python (FastAPI), and Node.js with robust, scalable backend architecture.",
    },
    {
      icon: "bi-phone",
      title: "API Development",
      desc: "RESTful API design and development with PHP/Python, JSON/XML data handling, OAuth2, and third-party service integrations.",
    },
    {
      icon: "bi-database",
      title: "Database Solutions",
      desc: "Database design, optimization, and management for PostgreSQL, MySQL, and MongoDB including query optimization and indexing strategies.",
    },
    {
      icon: "bi-front",
      title: "Frontend Development",
      desc: "Responsive and dynamic user interfaces using JavaScript, React JS, Vue JS, Next JS, HTML, and CSS for seamless user experiences.",
    },
    {
      icon: "bi-robot",
      title: "Web Scraping & Automation",
      desc: "Web crawling and data extraction scripts using Python Scrapy and PHP for automated data collection and processing from dynamic web sources.",
    },
    {
      icon: "bi-people",
      title: "Code Review & Mentoring",
      desc: "Code reviews, optimization, and team mentoring to foster best practices and improve overall development productivity.",
    },
  ];

  return (
    <section id="services" className="section py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2>Services</h2>
          <p className="text-gray-500 mt-4">
            Professional web development and software engineering services
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-item">
              <div className="icon">
                <i className={s.icon} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 15, label: "Clients", icon: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-6-3a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 4a5 5 0 0 0-4.546 2.916A5.99 5.99 0 0 0 8 14a5.99 5.99 0 0 0 4.546-2.084A5 5 0 0 0 8 9" },
    { value: 30, label: "Projects", icon: "M2 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm8-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" },
    { value: 5, label: "Years Exp.", icon: "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71zM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16" },
    { value: 15, label: "Technologies", icon: "M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.5.5 0 0 1 .37-.245z" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((s, i) => {
      const increment = Math.ceil(s.value / 30);
      let current = 0;
      return setInterval(() => {
        current += increment;
        if (current >= s.value) {
          current = s.value;
          clearInterval(timers[i]);
        }
        setCounts((prev) => {
          const next = [...prev];
          next[i] = current;
          return next;
        });
      }, 50);
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section id="stats" className="py-20 bg-[#0078ff]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center text-white py-6 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d={s.icon} />
                </svg>
              </div>
              <span className="text-4xl font-bold block mb-1">
                {counts[i]}+
              </span>
              <p className="text-blue-100 uppercase tracking-wider text-sm font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="section py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2>Portfolio</h2>
          <p className="text-gray-500 mt-4">
            Showcasing my work and projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={p.url}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="w-12 h-12 bg-white text-[#0078ff] rounded-full flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all duration-200 shadow-lg"
                      title="Visit Website"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                      </svg>
                    </a>
                    <span className="w-12 h-12 bg-white text-[#0078ff] rounded-full flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all duration-200 shadow-lg cursor-default" title="View Details">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#0078ff] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-xs text-gray-400">{p.role}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1.5">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                  {p.description.split(".")[0]}.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.technologies.split(", ").slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                  {p.technologies.split(", ").length > 3 && (
                    <span className="text-xs px-2.5 py-0.5 text-gray-400">
                      +{p.technologies.split(", ").length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Zeropoint IT",
      role: "Current Employer — Zimmo Project",
      text: "Nasir led the modernization of our Zimmo real estate platform from PHP 5.4 to PHP 8.4 with Symfony. His Symfony-based crawling system for 50+ property sources and DDD architecture made a significant impact on our engineering team's productivity.",
    },
    {
      name: "Syslab Technologies",
      role: "Former Employer",
      text: "Nasir's Laravel expertise and dedication to code quality made a significant impact on our projects. He excelled at mentoring junior developers and conducting thorough code reviews.",
    },
    {
      name: "MicroMerger (Pvt.) Ltd.",
      role: "Former Employer",
      text: "Nasir played a key role in requirement analysis and database management. His work on MySQL and PostgreSQL optimization significantly improved our system performance.",
    },
    {
      name: "Pace Technologies (Pvt.) Ltd.",
      role: "Former Employer",
      text: "Nasir contributed to full-stack projects using Laravel, CodeIgniter, and React.js. He built secure REST APIs handling 2k+ concurrent requests and collaborated effectively with the QA team to implement automated testing.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section py-20 relative bg-[#0078ff]">
      <div className="absolute inset-0 bg-black/50" />
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center text-white min-h-[200px] flex flex-col justify-center">
          <h3 className="text-xl font-semibold">{t.name}</h3>
          <h4 className="text-sm text-blue-200 mb-4">{t.role}</h4>
          <p className="text-gray-100 italic text-lg leading-relaxed max-w-2xl mx-auto">
            &ldquo;{t.text}&rdquo;
          </p>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2>Contact</h2>
          <p className="text-gray-500 mt-4">
            Get in touch for web development projects and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="info-item flex items-center">
            <i className="bi bi-geo-alt text-2xl text-[#0078ff] mr-4" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600 text-sm">
                Westridge, Rawalpindi, Pakistan
              </p>
            </div>
          </div>
          <div className="info-item flex items-center">
            <i className="bi bi-telephone text-2xl text-[#0078ff] mr-4" />
            <div>
              <h3 className="font-semibold">Call Me</h3>
              <p className="text-gray-600 text-sm">+92 346 4382740</p>
            </div>
          </div>
          <div className="info-item flex items-center">
            <i className="bi bi-envelope text-2xl text-[#0078ff] mr-4" />
            <div>
              <h3 className="font-semibold">Email Me</h3>
              <p className="text-gray-600 text-sm">sardarnasirharoon@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

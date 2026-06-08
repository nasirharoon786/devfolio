export const projects = [
  {
    slug: "zimmo",
    title: "Zimmo — Belgian Real Estate Platform",
    description:
      "Zimmo is Belgium's leading real estate platform connecting buyers, sellers, and agents across the country. I collaborated closely with the Zimmo engineering team to modernize their legacy codebase, migrating the portal from PHP 5.4 to PHP 8.4 with the latest Symfony framework. I architected and built a modern Symfony-based crawling system for automated data collection from 50+ property sources, dramatically reducing manual data entry. The project followed Domain-Driven Design (DDD) principles to ensure clean, maintainable, and scalable architecture.",
    description2:
      "This modernization improved performance, security, and maintainability of the platform serving thousands of users across Belgium, France, and Spain.",
    quote:
      "Leading Belgian real estate platform modernized from PHP 5.4 to PHP 8.4 / Symfony, with a custom crawling system reducing manual data entry by 80%.",
    role: "Full Stack Developer — Symfony & Architecture",
    skills: "Symfony, PostgreSQL, MySQL, Docker, Domain Driven Design, AI Agents, Codex, Gemini CLI, Claude Code, OpenCode, GitHub Copilot, Prompt Engineering, JIRA",
    category: "Web Application",
    technologies: "Symfony, PostgreSQL, MySQL, Docker, Domain Driven Design",
    image: "/assets/Projects/Zimmo/1.png",
    images: [
      "/assets/Projects/Zimmo/1.png",
      "/assets/Projects/Zimmo/2.png",
      "/assets/Projects/Zimmo/3.png",
      "/assets/Projects/Zimmo/4.png",
      "/assets/Projects/Zimmo/5.png",
    ],
    url: "https://www.zimmo.be/",
  },
  {
    slug: "sdg3-pakistan",
    title: "SDG3 Pakistan",
    description:
      "SDG3 Pakistan is a digital platform focused on promoting health and well-being in alignment with the UN's Sustainable Development Goal 3. I contributed as a Full Stack Developer, building key features such as health data dashboards, interactive maps, and user portals for healthcare reporting.",
    description2:
      "The platform aims to support evidence-based policy-making and improve public health services across Pakistan. Built using CodeIgniter with PostgreSQL for robust data management.",
    quote:
      "A digital platform promoting health and well-being in alignment with the UN's Sustainable Development Goal 3, supporting evidence-based policy-making across Pakistan.",
    role: "Full Stack Developer",
    skills: "CodeIgniter, PostgreSQL, Trello, JavaScript",
    category: "Web Application",
    technologies: "CodeIgniter, PostgreSQL, JavaScript",
    image: "/assets/Projects/SDG3/1.png",
    images: [
      "/assets/Projects/SDG3/1.png",
      "/assets/Projects/SDG3/2.png",
      "/assets/Projects/SDG3/3.png",
      "/assets/Projects/SDG3/4.png",
      "/assets/Projects/SDG3/5.png",
    ],
    url: "https://sdg3.nhsrc.pk/home",
  },
  {
    slug: "epi-federal",
    title: "EPI - MIS Federal Pakistan",
    description:
      "The Expanded Programme on Immunization (EPI) - Federal is a centralized Management Information System (MIS) that collects and manages vaccination data from all provinces of Pakistan. This system supports real-time monitoring and decision-making through interactive dashboards and comprehensive reports.",
    description2:
      "The platform ensures improved oversight of immunization coverage nationwide. Built using PHP with CodeIgniter framework and PostgreSQL for robust data management across all provinces.",
    quote:
      "A centralized immunization MIS collecting vaccination data from all provinces of Pakistan, enabling real-time monitoring and evidence-based decision-making.",
    role: "Full Stack Developer",
    skills: "PHP, CodeIgniter, PostgreSQL, GitHub",
    category: "Web Application",
    technologies: "PHP, CodeIgniter, PostgreSQL",
    image: "/assets/Projects/EPI Federal/1.png",
    images: [
      "/assets/Projects/EPI Federal/1.png",
      "/assets/Projects/EPI Federal/2.png",
      "/assets/Projects/EPI Federal/3.png",
      "/assets/Projects/EPI Federal/4.png",
    ],
    url: "https://federal.epimis.pk/",
  },
  {
    slug: "xpertjobs",
    title: "XpertJobs",
    description:
      "XpertJobs is a leading job portal connecting professionals with top employers in Pakistan. As a Full Stack Developer, I built and maintained core features like advanced job search, user dashboards, real-time notifications, and secure authentication.",
    description2:
      "I ensured a responsive, scalable, and user-friendly experience to streamline job hunting and recruitment in the digital age.",
    quote:
      "A leading job portal connecting professionals with top employers in Pakistan, featuring advanced job search, real-time notifications, and secure authentication.",
    role: "Full Stack Developer",
    skills: "Laravel, JavaScript, MySQL, Jira",
    category: "Web Application",
    technologies: "Laravel, JavaScript, MySQL",
    image: "/assets/Projects/XpertJobs/1.png",
    images: [
      "/assets/Projects/XpertJobs/1.png",
      "/assets/Projects/XpertJobs/2.png",
      "/assets/Projects/XpertJobs/3.png",
      "/assets/Projects/XpertJobs/4.png",
    ],
    url: "https://xpertjobs.pk/",
  },
  {
    slug: "epi-punjab",
    title: "EPI - MIS Punjab",
    description:
      "EPI Punjab is an independent MIS that records vaccination data across the province through a hierarchical structure — Facility, Union Council, Tehsil, and District. District-level data is submitted to the EPI Federal system for national-level reporting.",
    description2:
      "EPI Punjab is a standalone project and operates separately from similar MIS projects in Sindh, Balochistan, KPK, GB, AJK, and Islamabad, each with shared core functions but customized features and designs based on provincial needs.",
    quote:
      "Provincial immunization MIS recording vaccination data across Punjab through a hierarchical structure from Facility to District level.",
    role: "Full Stack Developer - Team Lead",
    skills: "CodeIgniter, PostgreSQL, Cross Functional Team Leadership, GitHub, Jira",
    category: "Web Application",
    technologies: "CodeIgniter, PostgreSQL",
    image: "/assets/Projects/EPI Punjab/4.png",
    images: [
      "/assets/Projects/EPI Punjab/1.png",
      "/assets/Projects/EPI Punjab/2.png",
      "/assets/Projects/EPI Punjab/3.png",
      "/assets/Projects/EPI Punjab/4.png",
      "/assets/Projects/EPI Punjab/5.png",
      "/assets/Projects/EPI Punjab/6.png",
      "/assets/Projects/EPI Punjab/7.png",
      "/assets/Projects/EPI Punjab/8.png",
    ],
    url: "https://punjab.epimis.pk/",
  },
  {
    slug: "epi-sindh",
    title: "EPI - MIS Sindh",
    description:
      "EPI Sindh is a standalone provincial Management Information System designed to record and manage vaccination data across Sindh through a structured hierarchical approach — from Facility to Union Council, Tehsil, and District levels.",
    description2:
      "Built with customized features tailored to Sindh's specific healthcare landscape, the system operates independently while maintaining compatibility with the EPI Federal platform for national-level reporting and policy-making.",
    quote:
      "Provincial immunization MIS tailored for Sindh's healthcare infrastructure, enabling efficient vaccination tracking from facility to district level.",
    role: "Full Stack Developer",
    skills: "CodeIgniter, PostgreSQL, GitHub, Jira",
    category: "Web Application",
    technologies: "CodeIgniter, PostgreSQL",
    image:
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-30-146.png",
    images: [
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-14-411.png",
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-15-402.png",
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-22-183.png",
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-24-574.png",
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-26-245.png",
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-30-146.png",
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-30-357.png",
      "/assets/Projects/EPI Sindh/Screenshot from 2026-06-05 17-31-438.png",
    ],
    url: "https://sindh.epimis.pk/",
  },
  {
    slug: "epi-balochistan",
    title: "EPI - MIS Balochistan",
    description:
      "EPI Balochistan is a provincial Management Information System designed to track immunization data across the vast terrain of Balochistan. The system follows a facility-to-district hierarchical structure, enabling health officials to monitor vaccination coverage even in remote areas.",
    description2:
      "With features tailored to Balochistan's unique geographical challenges, the platform ensures reliable data collection and reporting while integrating seamlessly with the EPI Federal system for nationwide oversight.",
    quote:
      "Provincial immunization MIS designed for Balochistan's unique geographical landscape, enabling vaccination tracking from remote facilities to district level.",
    role: "Full Stack Developer",
    skills: "CodeIgniter, PostgreSQL, GitHub, Jira",
    category: "Web Application",
    technologies: "CodeIgniter, PostgreSQL",
    image: "/assets/Projects/EPI Balochistan/1.png",
    images: [
      "/assets/Projects/EPI Balochistan/1.png",
      "/assets/Projects/EPI Balochistan/2.png",
      "/assets/Projects/EPI Balochistan/3.png",
      "/assets/Projects/EPI Balochistan/4.png",
      "/assets/Projects/EPI Balochistan/5.png",
      "/assets/Projects/EPI Balochistan/6.png",
      "/assets/Projects/EPI Balochistan/7.png",
      "/assets/Projects/EPI Balochistan/8.png",
    ],
    url: "https://balochistan.epimis.pk/",
  },
  {
    slug: "epi-kpk",
    title: "EPI - MIS Khyber Pakhtunkhwa",
    description:
      "EPI KPK is a provincial Management Information System that records and manages immunization data across Khyber Pakhtunkhwa. The system operates through a hierarchical structure spanning Facility, Union Council, Tehsil, and District levels.",
    description2:
      "Designed to address KPK's diverse provincial requirements, the platform includes customized reporting modules and real-time dashboards that enable health officials to monitor vaccination campaigns effectively and make data-driven decisions.",
    quote:
      "Provincial immunization MIS for Khyber Pakhtunkhwa with customized reporting and real-time vaccination monitoring dashboards.",
    role: "Full Stack Developer",
    skills: "CodeIgniter, PostgreSQL, GitHub, Jira",
    category: "Web Application",
    technologies: "CodeIgniter, PostgreSQL",
    image: "/assets/Projects/EPI KPK/1.png",
    images: [
      "/assets/Projects/EPI KPK/1.png",
      "/assets/Projects/EPI KPK/2.png",
      "/assets/Projects/EPI KPK/3.png",
      "/assets/Projects/EPI KPK/4.png",
      "/assets/Projects/EPI KPK/5.png",
      "/assets/Projects/EPI KPK/6.png",
      "/assets/Projects/EPI KPK/7.png",
    ],
    url: "https://kp.epimis.pk/",
  },
  {
    slug: "epi-gb",
    title: "EPI - MIS Gilgit-Baltistan",
    description:
      "EPI Gilgit-Baltistan is a provincial Management Information System designed to manage immunization data across the mountainous region of GB. The system operates through a hierarchical structure from Facility to District level, ensuring comprehensive vaccination tracking.",
    description2:
      "Built to accommodate GB's unique geographical and administrative requirements, the platform enables health workers in remote areas to record vaccination data efficiently and supports provincial health officials with real-time dashboards for monitoring coverage.",
    quote:
      "Provincial immunization MIS tailored for Gilgit-Baltistan's mountainous terrain, enabling vaccination tracking in remote areas.",
    role: "Full Stack Developer",
    skills: "CodeIgniter, PostgreSQL, GitHub, Jira",
    category: "Web Application",
    technologies: "CodeIgniter, PostgreSQL",
    image: "/assets/Projects/EPI GB/1.png",
    images: [
      "/assets/Projects/EPI GB/1.png",
      "/assets/Projects/EPI GB/2.png",
      "/assets/Projects/EPI GB/3.png",
      "/assets/Projects/EPI GB/4.png",
      "/assets/Projects/EPI GB/5.png",
      "/assets/Projects/EPI GB/6.png",
    ],
    url: "https://gb.epimis.pk/",
  },
  {
    slug: "epi-ajk",
    title: "EPI - MIS Azad Jammu & Kashmir",
    description:
      "EPI AJK is a provincial Management Information System that manages immunization data across Azad Jammu and Kashmir. The platform follows a hierarchical structure spanning Facility, Union Council, Tehsil, and District levels for comprehensive vaccination tracking.",
    description2:
      "Built with customized features addressing AJK's specific healthcare administration needs, the system provides real-time dashboards and reporting tools that enable health officials to monitor immunization coverage and make informed decisions.",
    quote:
      "Provincial immunization MIS for Azad Jammu and Kashmir with real-time dashboards for vaccination coverage monitoring.",
    role: "Full Stack Developer",
    skills: "CodeIgniter, PostgreSQL, GitHub, Jira",
    category: "Web Application",
    technologies: "CodeIgniter, PostgreSQL",
    image: "/assets/Projects/EPI AJK/1.png",
    images: [
      "/assets/Projects/EPI AJK/1.png",
      "/assets/Projects/EPI AJK/2.png",
      "/assets/Projects/EPI AJK/3.png",
      "/assets/Projects/EPI AJK/4.png",
      "/assets/Projects/EPI AJK/5.png",
      "/assets/Projects/EPI AJK/6.png",
    ],
    url: "https://ajk.epimis.pk/",
  },
  {
    slug: "epi-islamabad",
    title: "EPI - MIS Islamabad",
    description:
      "EPI Islamabad is a federal territory Management Information System that manages immunization data for the Islamabad Capital Territory. The system operates through a structured hierarchy from healthcare facilities to the district level, ensuring comprehensive vaccination coverage tracking.",
    description2:
      "As a standalone project tailored to ICT's administrative framework, the platform includes real-time monitoring dashboards and reporting tools that enable health officials to track immunization campaigns and support evidence-based decision-making for the capital region.",
    quote:
      "Federal territory immunization MIS for Islamabad Capital Territory with real-time monitoring and comprehensive vaccination tracking.",
    role: "Full Stack Developer",
    skills: "CodeIgniter, PostgreSQL, GitHub, Jira",
    category: "Web Application",
    technologies: "CodeIgniter, PostgreSQL",
    image: "/assets/Projects/EPI Islamabad/1.png",
    images: [
      "/assets/Projects/EPI Islamabad/1.png",
      "/assets/Projects/EPI Islamabad/2.png",
      "/assets/Projects/EPI Islamabad/3.png",
      "/assets/Projects/EPI Islamabad/4.png",
      "/assets/Projects/EPI Islamabad/5.png",
      "/assets/Projects/EPI Islamabad/6.png",
      "/assets/Projects/EPI Islamabad/7.png",
      "/assets/Projects/EPI Islamabad/8.png",
    ],
    url: "https://islamabad.epimis.pk/",
  },
];

export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  highlights: string[];
  outcomes: string[];
};

export const coreServices: ServiceDetail[] = [
  {
    slug: "job-placement",
    title: "Job Placement",
    shortDescription:
      "Helping professionals land meaningful full-time roles with end-to-end support that turns jobs into long-term careers.",
    intro:
      "JobLabs placement specialists guide candidates from profile preparation to offer acceptance. We match skills, experience, and career goals with openings that create lasting growth.",
    highlights: [
      "Personalized career assessment and role targeting",
      "ATS-optimized resume and LinkedIn profile support",
      "Interview preparation and ongoing application guidance",
      "Direct connections with hiring teams and recruiters",
    ],
    outcomes: [
      "Faster interview callbacks",
      "Better role fit and long-term retention",
      "Clear next steps from application to offer",
    ],
  },
  {
    slug: "recruitment",
    title: "Recruitment & Staffing",
    shortDescription:
      "Connecting businesses with skilled professionals who fit the role and the team.",
    intro:
      "Whether you need permanent hires or flexible staffing support, JobLabs delivers screened IT and professional talent with a process built for speed and quality.",
    highlights: [
      "Permanent, contract, and contract-to-hire options",
      "Role-specific sourcing across IT and business functions",
      "Structured screening and interview coordination",
      "Fast fill timelines without lowering candidate standards",
    ],
    outcomes: [
      "Reduced time-to-hire",
      "Stronger shortlists for open roles",
      "Flexible workforce coverage when demand shifts",
    ],
  },
  {
    slug: "talent-acquisition",
    title: "Talent Acquisition",
    shortDescription:
      "Strategic hiring support to build long-term, high-performing teams.",
    intro:
      "We partner with growing companies to design hiring plans, strengthen talent pipelines, and attract professionals who match both technical needs and culture.",
    highlights: [
      "Hiring strategy and workforce planning",
      "Employer branding and candidate outreach",
      "Pipeline development for recurring roles",
      "Support for scaling engineering and operations teams",
    ],
    outcomes: [
      "Consistent hiring quality across roles",
      "Stronger talent brand in competitive markets",
      "Sustainable pipelines for future openings",
    ],
  },
  {
    slug: "background-verification",
    title: "Background Verification",
    shortDescription:
      "Comprehensive checks to ensure trust, compliance, and reliability.",
    intro:
      "JobLabs verification support helps employers hire with confidence by validating identity, employment history, education, and other critical risk factors before onboarding.",
    highlights: [
      "Identity and address verification",
      "Employment and education checks",
      "Compliance-focused reporting",
      "Smooth coordination before start dates",
    ],
    outcomes: [
      "Lower hiring risk",
      "Cleaner onboarding handoffs",
      "Stronger trust between employers and candidates",
    ],
  },
  {
    slug: "it-training",
    title: "IT Training",
    shortDescription:
      "Training that prepares candidates for real-world tech careers.",
    intro:
      "Our IT training support helps candidates build practical skills for modern roles — from interview readiness to the tools and workflows employers expect on day one.",
    highlights: [
      "Role-focused technical preparation",
      "Interview and communication coaching",
      "Guidance on in-demand technologies",
      "Support for career switchers and early professionals",
    ],
    outcomes: [
      "Stronger interview confidence",
      "Better readiness for assessments",
      "Faster transition into tech roles",
    ],
  },
  {
    slug: "accounting-taxes",
    title: "Accounting & Taxes",
    shortDescription:
      "Seamless payroll processing with full tax and regulatory compliance.",
    intro:
      "JobLabs supports companies and placed professionals with reliable payroll, tax, and compliance guidance so compensation administration stays accurate and stress-free.",
    highlights: [
      "Payroll processing support",
      "Tax and compliance coordination",
      "Clear documentation for employers and candidates",
      "Guidance during onboarding and offer finalization",
    ],
    outcomes: [
      "Fewer payroll delays and errors",
      "Clearer compliance coverage",
      "Smoother start for new hires",
    ],
  },
];

export const itStaffingServices = [
  {
    title: "Permanent Recruitment",
    description:
      "We help companies hire top technology professionals for full-time positions. Our recruitment specialists identify, screen, and present candidates who align with your technical requirements, company culture, and long-term business goals.",
  },
  {
    title: "Contract Staffing",
    description:
      "Need skilled professionals for a short-term project or specialized assignment? Our contract staffing solutions provide experienced IT experts who can quickly integrate into your team and deliver immediate value.",
  },
  {
    title: "Contract-to-Hire",
    description:
      "Evaluate a candidate's skills and cultural fit before making a permanent hiring decision. Our contract-to-hire model gives employers greater flexibility while minimizing hiring risks.",
  },
  {
    title: "Remote IT Staffing",
    description:
      "Access a global network of experienced software developers, cloud engineers, DevOps specialists, AI professionals, and IT consultants. We help businesses build high-performing remote teams without geographical limitations.",
  },
  {
    title: "Executive & Leadership Hiring",
    description:
      "Finding the right technology leaders is critical for business growth. We specialize in recruiting senior-level professionals, including CTOs, Engineering Managers, Technical Architects, Product Managers, and IT Directors.",
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    description:
      "Our RPO services provide end-to-end recruitment support, from sourcing and screening candidates to interview coordination, offer management, and onboarding, allowing your internal team to focus on strategic priorities.",
  },
  {
    title: "Talent Acquisition Consulting",
    description:
      "We work closely with organizations to develop effective hiring strategies, improve recruitment processes, strengthen employer branding, and build long-term talent pipelines for sustainable growth.",
  },
  {
    title: "Workforce Solutions",
    description:
      "Whether you're expanding your team, managing seasonal hiring, or supporting large-scale projects, our flexible workforce solutions are designed to meet your evolving business needs efficiently.",
  },
  {
    title: "Technical Screening & Candidate Assessment",
    description:
      "Our recruitment experts conduct comprehensive technical and behavioral evaluations to ensure every candidate possesses the right skills, experience, and communication abilities before being presented to your organization.",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return coreServices.find((service) => service.slug === slug);
}

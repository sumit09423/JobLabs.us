export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  image: string;
  alt: string;
  intro: string;
  sections: BlogSection[];
};

export const featuredPost: BlogPost = {
  slug: "why-most-candidates-fail-ats-screening",
  title: "Why Most Candidates Keep Getting ATS Screening Wrong",
  excerpt:
    "Resume formats, keywords, and role targeting decide who gets seen. Here is how JobLabs candidates clear ATS filters and reach real recruiters.",
  category: "Strategy",
  tags: ["News", "Insights"],
  readTime: "5 min read",
  author: "Priya Sharma",
  authorRole: "Career Coach, JobLabs",
  authorImage:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  date: "Jan 12, 2026",
  image:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80",
  alt: "Professional preparing for a career interview",
  intro:
    "Applicant Tracking Systems decide who reaches a recruiter. Many skilled professionals never get interviews because resumes are built for people first and software second. With the right structure, keywords, and targeting, candidates can clear ATS filters and compete for stronger roles.",
  sections: [
    {
      heading: "1. Clean Structure Wins",
      paragraphs: [
        "ATS tools struggle with tables, multi-column layouts, icons, and text boxes. A simple single-column resume with standard headings like Experience, Education, and Skills is far more reliable.",
        "At JobLabs, we guide candidates to formats that stay readable for both software and hiring managers, without sacrificing impact.",
      ],
    },
    {
      heading: "2. Keywords Must Match the Role",
      paragraphs: [
        "Job descriptions include the exact skills and tools companies scan for. Strong candidates mirror those terms naturally through real experience, not keyword stuffing.",
        "This is especially important in IT placement, where technologies, frameworks, and certifications often drive the first filter.",
      ],
    },
    {
      heading: "3. Role Targeting Improves Call Rates",
      paragraphs: [
        "One generic resume rarely works for every opening. Tailoring your summary and top skills to each role improves both ATS match rates and recruiter interest.",
        "JobLabs placement specialists help candidates refine targeted versions so applications stay focused and competitive.",
      ],
    },
  ],
};

export const blogPosts: BlogPost[] = [
  {
    slug: "real-cost-of-slow-hiring",
    title: "The Real Cost of Slow Hiring (It's Not What You Think)",
    excerpt:
      "Delayed hiring drains teams and budgets. Learn how staffing partners cut time-to-hire without lowering quality.",
    category: "Growth",
    tags: ["Growth", "Hiring"],
    readTime: "4 min read",
    author: "Arjun Reddy",
    authorRole: "Talent Advisor, JobLabs",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "Dec 28, 2025",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Team meeting around a table",
    intro:
      "Open roles cost more than salary. Slow hiring affects delivery, morale, and customer outcomes. Many companies underestimate those hidden costs until projects stall.",
    sections: [
      {
        heading: "1. Productivity Gaps Add Up",
        paragraphs: [
          "Every unfilled role shifts workload onto existing teams. Over time, burnout rises and quality slips.",
          "Strategic staffing support helps keep momentum while permanent hiring continues in parallel.",
        ],
      },
      {
        heading: "2. Opportunity Cost Is Real",
        paragraphs: [
          "Missed product launches and delayed client work often cost more than a recruiter partnership.",
          "JobLabs helps companies fill critical seats faster with screened talent and clear timelines.",
        ],
      },
      {
        heading: "3. Faster Hiring Can Still Be Careful",
        paragraphs: [
          "Speed without quality creates expensive mistakes. Background verification and role-fit screening keep standards high.",
          "A balanced process protects culture while reducing time-to-hire.",
        ],
      },
    ],
  },
  {
    slug: "get-more-done-without-full-recruiting-team",
    title: "How to Hire Faster Without Building a Full Recruiting Team",
    excerpt:
      "Lean companies can still scale hiring. See when temporary staffing, RPO, and IT recruitment make the most sense.",
    category: "Operations",
    tags: ["Operations", "Staffing"],
    readTime: "6 min read",
    author: "Meera Kalluri",
    authorRole: "Recruiting Lead, JobLabs",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    date: "Dec 18, 2025",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Colleagues collaborating in an office",
    intro:
      "Not every company needs a large internal recruiting team. With the right partnership model, lean organizations can hire efficiently across permanent, contract, and specialized roles.",
    sections: [
      {
        heading: "1. Flexible Models Scale With Demand",
        paragraphs: [
          "Temporary staffing covers short-term project spikes. Permanent placement builds long-term capacity.",
          "Choosing the right mix keeps payroll efficient while teams stay productive.",
        ],
      },
      {
        heading: "2. Specialized Recruiters Close Gaps Faster",
        paragraphs: [
          "IT and domain roles require niche sourcing. Dedicated recruiters already know the market and candidate pools.",
          "JobLabs brings that specialization without forcing companies to hire full internal teams.",
        ],
      },
      {
        heading: "3. Process Consistency Improves Outcomes",
        paragraphs: [
          "Clear scorecards, structured interviews, and verification standards reduce hiring variance.",
          "Partnering with one staffing team keeps quality consistent across roles and locations.",
        ],
      },
    ],
  },
  {
    slug: "what-working-with-joblabs-looks-like",
    title: "What Working With JobLabs for Placement Actually Looks Like",
    excerpt:
      "From first conversation to offer letter — a clear look at verification, training, and placement support.",
    category: "Workflow",
    tags: ["Workflow", "Placement"],
    readTime: "5 min read",
    author: "Suresh Naidu",
    authorRole: "Placement Specialist, JobLabs",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "Dec 10, 2025",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    alt: "Professionals shaking hands after an interview",
    intro:
      "Candidates often ask what happens after they join JobLabs. The process is designed to be transparent: understand goals, prepare profiles, match roles, verify backgrounds, and support through offer acceptance.",
    sections: [
      {
        heading: "1. Profile and Goal Assessment",
        paragraphs: [
          "We start with skills, experience, and career preferences. That creates a clearer target list of roles and companies.",
          "This step prevents random applications and keeps focus on opportunities that fit.",
        ],
      },
      {
        heading: "2. Training and Interview Readiness",
        paragraphs: [
          "Where needed, IT training and mock interviews strengthen readiness for real assessments.",
          "Candidates enter interviews with stronger confidence and cleaner storytelling.",
        ],
      },
      {
        heading: "3. Placement and Verification Support",
        paragraphs: [
          "Background verification and payroll readiness help make onboarding smoother for both sides.",
          "JobLabs stays involved until the offer is accepted and the next step is clear.",
        ],
      },
    ],
  },
];

export const allPosts: BlogPost[] = [featuredPost, ...blogPosts];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return allPosts.filter((post) => post.slug !== slug).slice(0, limit);
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Level = 'Beginner' | 'Intermediate' | 'Advanced';

type Course = {
  title: string;
  desc: string;
  level: Level;
  duration: string;
  icon: string;
  rating: number;
  students: number;
  highlights: string[];
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  stars: number;
};

type Plan = {
  name: string;
  price: string;
  note: string;
  badge?: string;
  highlight?: boolean;
  features: string[];
};

type FAQ = { q: string; a: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  brand = 'LearnSkills';

  heroTitle = 'Learn Skills. Build Your Future.';
  heroSubtitle =
    'Professional, project-based learning designed to help you build a strong portfolio, grow your confidence, and become job-ready. 🚀';

  primaryCTA = 'Explore Courses';
  secondaryCTA = 'Talk to an Advisor';

  stats = [
    { icon: '👩‍🎓', value: '12,500+', label: 'Students' },
    { icon: '📚', value: '45+', label: 'Courses' },
    { icon: '🧑‍🏫', value: '18', label: 'Mentors' },
    { icon: '🛠️', value: '120+', label: 'Projects' },
  ];

  tracks = [
    { icon: '🌍', name: 'All' },
    { icon: '💻', name: 'Web Development' },
    { icon: '🎨', name: 'Design' },
    { icon: '📈', name: 'Marketing' },
    { icon: '🧾', name: 'Freelancing' },
  ];

  selectedTrack = 'All';

  outcomes = [
    { icon: '📁', title: 'Portfolio Ready', desc: 'Build 3–6 projects you can showcase confidently.' },
    { icon: '🧠', title: 'Strong Fundamentals', desc: 'Learn the “why” behind concepts — not just “how”.' },
    { icon: '🎯', title: 'Career Guidance', desc: 'CV + interview preparation + freelancing roadmap.' },
    { icon: '🤝', title: 'Community Support', desc: 'Lifetime access to peer learning and mentorship.' },
  ];

  courses: Course[] = [
    {
      title: 'Complete Frontend Development',
      desc: 'HTML, CSS, JavaScript, responsive design, animations, accessibility, and UI best practices.',
      level: 'Beginner',
      duration: '8 Weeks',
      icon: '💻',
      rating: 4.7,
      students: 4500,
      highlights: ['Responsive websites', 'Modern UI layouts', 'Mini projects', 'GitHub setup'],
    },
    {
      title: 'Angular Web Development',
      desc: 'Master Angular, routing, APIs, authentication, dashboards, and deploy real apps.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '⚡',
      rating: 4.8,
      students: 3200,
      highlights: ['Components & routing', 'REST APIs', 'Auth & guards', 'Deployment'],
    },
    {
      title: 'React Fundamentals',
      desc: 'Hooks, reusable components, state management basics, and API integration.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '⚛️',
      rating: 4.6,
      students: 2700,
      highlights: ['Hooks', 'State', 'APIs', 'Reusable UI'],
    },
    {
      title: 'Node.js Backend Development',
      desc: 'Build REST APIs, authentication, databases, and deploy secure backend services.',
      level: 'Advanced',
      duration: '7 Weeks',
      icon: '🖥️',
      rating: 4.7,
      students: 1900,
      highlights: ['REST APIs', 'JWT Auth', 'Database', 'Deployment'],
    },
    {
      title: 'UI/UX Design Professional',
      desc: 'User research, wireframes, prototypes, usability testing, and professional UI flows.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '🧠',
      rating: 4.7,
      students: 1500,
      highlights: ['Figma workflow', 'UX research', 'Prototypes', 'Case study'],
    },
    {
      title: 'Graphic Design Mastery',
      desc: 'Branding, thumbnails, social creatives, and portfolio-ready visual identity.',
      level: 'Beginner',
      duration: '5 Weeks',
      icon: '🎨',
      rating: 4.5,
      students: 3100,
      highlights: ['Branding', 'Social media kit', 'Thumbnails', 'Portfolio'],
    },
    {
      title: 'Digital Marketing & SEO',
      desc: 'SEO fundamentals, content strategy, paid ads, and analytics to grow any business.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '📈',
      rating: 4.4,
      students: 2200,
      highlights: ['SEO basics', 'Content strategy', 'Paid ads', 'Analytics'],
    },
    {
      title: 'Freelancing Bootcamp',
      desc: 'Upwork/Fiverr profile, proposals, pricing strategy, and client communication.',
      level: 'Beginner',
      duration: '4 Weeks',
      icon: '🧾',
      rating: 4.6,
      students: 3800,
      highlights: ['Profile optimization', 'Winning proposals', 'Pricing', 'Client handling'],
    },
    {
      title: 'Full Stack Development',
      desc: 'Frontend + Backend + Database integration with complete deployment workflows.',
      level: 'Advanced',
      duration: '10 Weeks',
      icon: '🚀',
      rating: 4.9,
      students: 1100,
      highlights: ['Full stack project', 'Auth + DB', 'Deployment', 'Portfolio-grade'],
    },
  ];

  curriculum = [
    { icon: '✅', title: 'Concept to Practice', desc: 'Each lesson ends with a task or mini-project.' },
    { icon: '🧩', title: 'Templates & Resources', desc: 'Reusable templates to speed up learning.' },
    { icon: '🧪', title: 'Assignments & Quizzes', desc: 'Regular checkpoints to validate progress.' },
    { icon: '🧑‍🏫', title: 'Mentor Reviews', desc: 'Get feedback to improve quality and confidence.' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Ayesha Khan',
      role: 'Freelancer',
      quote: 'The roadmap and projects helped me land my first client quickly. Highly recommended!',
      stars: 5,
    },
    {
      name: 'Hassan Ali',
      role: 'Frontend Developer',
      quote: 'Professional structure, clear concepts, and strong mentor support. Great learning experience.',
      stars: 5,
    },
    {
      name: 'Umar Farooq',
      role: 'Student',
      quote: 'I finally understood how to build projects properly — from design to deployment.',
      stars: 4,
    },
  ];

  plans: Plan[] = [
    {
      name: 'Starter',
      price: 'Free',
      note: 'Best for exploring',
      features: [
        '✅ Access to intro lessons',
        '✅ Community support',
        '✅ Learning roadmap',
        '❌ Mentor feedback',
        '❌ Certificate',
      ],
    },
    {
      name: 'Pro',
      price: 'Rs 4,999',
      note: 'Most popular plan',
      badge: '⭐ Recommended',
      highlight: true,
      features: [
        '✅ Full course access',
        '✅ Projects + templates',
        '✅ Mentor feedback',
        '✅ Certificate',
        '✅ Priority support',
      ],
    },
    {
      name: 'Career',
      price: 'Rs 9,999',
      note: 'Job-ready package',
      features: [
        '✅ Everything in Pro',
        '✅ Portfolio review',
        '✅ CV + LinkedIn optimization',
        '✅ Mock interviews',
        '✅ Internship guidance',
      ],
    },
  ];

  faqs: FAQ[] = [
    {
      q: 'Is this suitable for complete beginners?',
      a: 'Yes. You can start from the beginner track and progress step-by-step.',
    },
    {
      q: 'Do you provide certificates?',
      a: 'Yes. Pro and Career plans include certificates on completion.',
    },
    {
      q: 'Do I get mentor support?',
      a: 'Yes. Paid plans include mentor feedback and guidance.',
    },
    {
      q: 'Will you help with freelancing?',
      a: 'Absolutely. We cover proposals, profile optimization, pricing, and client communication.',
    },
  ];

  openFAQIndex: number | null = 0;

  setTrack(track: string) {
    this.selectedTrack = track;
  }

  get filteredCourses(): Course[] {
    if (this.selectedTrack === 'All') return this.courses;

    const t = this.selectedTrack.toLowerCase();

    if (t.includes('web')) return this.courses.filter(c => c.title.toLowerCase().includes('frontend') || c.title.toLowerCase().includes('angular') || c.title.toLowerCase().includes('react') || c.title.toLowerCase().includes('full stack'));
    if (t.includes('design')) return this.courses.filter(c => c.title.toLowerCase().includes('design') || c.title.toLowerCase().includes('ui/ux'));
    if (t.includes('marketing')) return this.courses.filter(c => c.title.toLowerCase().includes('marketing') || c.title.toLowerCase().includes('seo'));
    if (t.includes('freelancing')) return this.courses.filter(c => c.title.toLowerCase().includes('freelancing'));
    return this.courses;
  }

  badgeClass(level: Level) {
    return level === 'Beginner'
      ? 'badge badge-green'
      : level === 'Intermediate'
      ? 'badge badge-blue'
      : 'badge badge-orange';
  }

  stars(count: number) {
    const s = Math.max(1, Math.min(5, Math.round(count)));
    return '⭐'.repeat(s);
  }

  toggleFAQ(i: number) {
    this.openFAQIndex = this.openFAQIndex === i ? null : i;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Level = 'Beginner' | 'Intermediate' | 'Advanced';

type Course = {
  slug: string;
  title: string;
  desc: string;
  level: Level;
  duration: string;
  icon: string;
  tags: string[];
  rating: number;
  students: number;
};

type Plan = {
  name: string;
  price: string;
  note: string;
  features: string[];
  highlight?: boolean;
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
    'Career-focused learning with real projects, mentor feedback, and a clear roadmap — start from zero and become job-ready. 🚀';

  stats = [
    { label: 'Students', value: '12,500+', icon: '👩‍🎓' },
    { label: 'Courses', value: '45+', icon: '📚' },
    { label: 'Mentors', value: '18', icon: '🧑‍🏫' },
    { label: 'Hiring Partners', value: '30+', icon: '🤝' },
  ];

  tracks = [
    { name: 'All', icon: '🌍' },
    { name: 'Web Development', icon: '💻' },
    { name: 'Design', icon: '🎨' },
    { name: 'Marketing', icon: '📈' },
    { name: 'Freelancing', icon: '🧾' },
  ];

  selectedTrack = 'All';

  courses: Course[] = [
    {
      slug: 'angular',
      title: 'Angular Web Development',
      desc: 'Components, routing, APIs, authentication, and deployment — build real apps.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '⚡',
      tags: ['Angular', 'TypeScript', 'Projects'],
      rating: 4.8,
      students: 3200,
    },
    {
      slug: 'frontend-basics',
      title: 'HTML, CSS & Responsive UI',
      desc: 'Modern layouts, Flexbox/Grid, animations, accessibility, and mobile-first design.',
      level: 'Beginner',
      duration: '4 Weeks',
      icon: '🧱',
      tags: ['HTML', 'CSS', 'Responsive'],
      rating: 4.7,
      students: 4100,
    },
    {
      slug: 'graphic-design',
      title: 'Graphic Design Bootcamp',
      desc: 'Branding, thumbnails, social media designs, and a strong portfolio.',
      level: 'Beginner',
      duration: '5 Weeks',
      icon: '✨',
      tags: ['Design', 'Portfolio', 'Tools'],
      rating: 4.6,
      students: 2200,
    },
    {
      slug: 'digital-marketing',
      title: 'Digital Marketing + SEO',
      desc: 'SEO basics, content strategy, ads, and analytics to grow any business.',
      level: 'Intermediate',
      duration: '5 Weeks',
      icon: '🚀',
      tags: ['SEO', 'Ads', 'Analytics'],
      rating: 4.5,
      students: 1800,
    },
    {
      slug: 'freelancing',
      title: 'Freelancing Masterclass',
      desc: 'Upwork/Fiverr profile, proposals, pricing, client communication, and delivery system.',
      level: 'Beginner',
      duration: '3 Weeks',
      icon: '🧾',
      tags: ['Upwork', 'Fiverr', 'Clients'],
      rating: 4.6,
      students: 2900,
    },
    {
      slug: 'advanced-frontend',
      title: 'Advanced Frontend Portfolio Projects',
      desc: 'Build 3 portfolio-grade apps: dashboard, e-commerce, and a booking system.',
      level: 'Advanced',
      duration: '6 Weeks',
      icon: '🧠',
      tags: ['Portfolio', 'Architecture', 'Performance'],
      rating: 4.7,
      students: 900,
    },
  ];

  roadmap = [
    {
      step: '01',
      title: 'Choose a Track',
      desc: 'Select your path: Web Dev, Design, Marketing, or Freelancing.',
      icon: '🧭',
    },
    {
      step: '02',
      title: 'Learn with Projects',
      desc: 'Each module includes hands-on tasks and a real capstone project.',
      icon: '🛠️',
    },
    {
      step: '03',
      title: 'Build Your Portfolio',
      desc: 'Create a portfolio, polish your GitHub, and prepare a strong CV.',
      icon: '📁',
    },
    {
      step: '04',
      title: 'Become Job Ready',
      desc: 'Interview prep, mock interviews, and freelancing guidance included.',
      icon: '🎯',
    },
  ];

  plans: Plan[] = [
    {
      name: 'Starter',
      price: 'Free',
      note: 'Perfect to begin',
      features: [
        '✅ Access to 5 intro lessons',
        '✅ Community support',
        '✅ Learning roadmap',
        '❌ Mentor feedback',
      ],
    },
    {
      name: 'Pro',
      price: 'Rs 4,999',
      note: 'Most popular',
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
      note: 'Job-ready pack',
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
      q: 'Is this suitable for beginners?',
      a: 'Yes. Start from the Starter roadmap — everything is step-by-step and beginner-friendly.',
    },
    {
      q: 'Are classes live or recorded?',
      a: 'Both. You get live sessions plus recordings you can replay anytime.',
    },
    {
      q: 'Do I get a certificate?',
      a: 'Certificates are included in the Pro and Career plans.',
    },
    {
      q: 'Do you help with freelancing?',
      a: 'Yes. We cover proposals, profile optimization, client handling, and delivery workflow.',
    },
  ];

  openFAQIndex: number | null = 0;

  setTrack(track: string) {
    this.selectedTrack = track;
  }

  get filteredCourses(): Course[] {
    if (this.selectedTrack === 'All') return this.courses;

    const t = this.selectedTrack.toLowerCase();

    if (t.includes('web')) {
      return this.courses.filter(
        c =>
          c.title.toLowerCase().includes('angular') ||
          c.title.toLowerCase().includes('frontend') ||
          c.tags.join(' ').toLowerCase().includes('typescript')
      );
    }
    if (t.includes('design')) {
      return this.courses.filter(
        c => c.title.toLowerCase().includes('design') || c.tags.join(' ').toLowerCase().includes('design')
      );
    }
    if (t.includes('marketing')) {
      return this.courses.filter(
        c => c.title.toLowerCase().includes('marketing') || c.tags.join(' ').toLowerCase().includes('seo')
      );
    }
    if (t.includes('freelancing')) {
      return this.courses.filter(
        c =>
          c.title.toLowerCase().includes('freelanc') ||
          c.tags.join(' ').toLowerCase().includes('fiverr') ||
          c.tags.join(' ').toLowerCase().includes('upwork')
      );
    }
    return this.courses;
  }

  badgeClass(level: Level) {
    return level === 'Beginner'
      ? 'badge badge-green'
      : level === 'Intermediate'
      ? 'badge badge-blue'
      : 'badge badge-orange';
  }

  stars(rating: number) {
    const full = Math.max(1, Math.min(5, Math.round(rating)));
    return '⭐'.repeat(full);
  }

  toggleFAQ(i: number) {
    this.openFAQIndex = this.openFAQIndex === i ? null : i;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
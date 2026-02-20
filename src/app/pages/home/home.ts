import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Course = {
  title: string;
  desc: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon: string;
  tags: string[];
  rating: number;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html', // agar tumhara name home.component.html hai to yahan update kar lo
})
export class Home {
  title = 'Learn Skills. Build Your Future.';
  subtitle =
    'Practical learning, real projects, and career guidance — all in one place.';

  stats = [
    { label: 'Students', value: '12,500+', icon: '👩‍🎓' },
    { label: 'Courses', value: '45+', icon: '📚' },
    { label: 'Mentors', value: '18', icon: '🧑‍🏫' },
    { label: 'Projects', value: '120+', icon: '🛠️' },
  ];

  tracks = [
    { name: 'Web Development', icon: '💻', colorClass: 'tag-blue' },
    { name: 'Graphic Design', icon: '🎨', colorClass: 'tag-pink' },
    { name: 'Digital Marketing', icon: '📈', colorClass: 'tag-green' },
    { name: 'Freelancing', icon: '🧾', colorClass: 'tag-purple' },
  ];

  courses: Course[] = [
    {
      title: 'Angular Web Development',
      desc: 'Modern frontend with components, routing, API integration & projects.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '⚡',
      tags: ['Angular', 'TypeScript', 'Projects'],
      rating: 4.8,
    },
    {
      title: 'HTML, CSS & Responsive Design',
      desc: 'Build beautiful, mobile-first websites with real layouts.',
      level: 'Beginner',
      duration: '4 Weeks',
      icon: '🧱',
      tags: ['HTML', 'CSS', 'Responsive'],
      rating: 4.7,
    },
    {
      title: 'Graphic Design Bootcamp',
      desc: 'Branding, social media posts, thumbnails, and portfolio work.',
      level: 'Beginner',
      duration: '5 Weeks',
      icon: '✨',
      tags: ['Design', 'Portfolio', 'Tools'],
      rating: 4.6,
    },
    {
      title: 'Digital Marketing + SEO',
      desc: 'SEO basics, content strategy, ads, and analytics for growth.',
      level: 'Intermediate',
      duration: '5 Weeks',
      icon: '🚀',
      tags: ['SEO', 'Ads', 'Analytics'],
      rating: 4.5,
    },
  ];

  testimonials = [
    {
      name: 'Ayesha',
      role: 'Student',
      quote: 'Classes super clear! Projects ne confidence build kar diya. 😊',
      stars: 5,
    },
    {
      name: 'Hassan',
      role: 'Freelancer',
      quote: 'Portfolio ready hua aur first client mil gaya. Alhamdulillah! 🙌',
      stars: 5,
    },
    {
      name: 'Umar',
      role: 'Job Seeker',
      quote: 'Roadmap + mentor feedback ne best help ki. 🔥',
      stars: 4,
    },
  ];

  selectedTrack = 'All';

  get filteredCourses(): Course[] {
    if (this.selectedTrack === 'All') return this.courses;
    // simple mapping by keywords
    const key = this.selectedTrack.toLowerCase();
    return this.courses.filter(
      (c) =>
        c.title.toLowerCase().includes(key) ||
        c.tags.join(' ').toLowerCase().includes(key)
    );
  }

  setTrack(name: string) {
    this.selectedTrack = name;
  }

  badgeClass(level: Course['level']) {
    return level === 'Beginner'
      ? 'badge badge-green'
      : level === 'Intermediate'
      ? 'badge badge-blue'
      : 'badge badge-orange';
  }

  stars(rating: number) {
    const full = Math.round(rating);
    return '⭐'.repeat(full);
  }
}
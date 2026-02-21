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
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  heroTitle = 'Learn Skills. Build Your Future.';
  heroSubtitle =
    'Professional skill-based programs designed to help you build a strong portfolio, grow your career, and succeed in the digital world.';

  courses: Course[] = [
    {
      title: 'Angular Web Development',
      desc: 'Master Angular, build real-world apps, authentication systems, dashboards, and deploy live projects.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '⚡',
      rating: 4.8,
      students: 3200,
    },
    {
      title: 'Complete Frontend Development',
      desc: 'HTML, CSS, JavaScript, responsive design, animations, and UI best practices.',
      level: 'Beginner',
      duration: '8 Weeks',
      icon: '💻',
      rating: 4.7,
      students: 4500,
    },
    {
      title: 'React Fundamentals',
      desc: 'Learn React hooks, state management, reusable components, and API integration.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '⚛️',
      rating: 4.6,
      students: 2700,
    },
    {
      title: 'Node.js Backend Development',
      desc: 'Build REST APIs, authentication systems, databases, and server deployment.',
      level: 'Advanced',
      duration: '7 Weeks',
      icon: '🖥️',
      rating: 4.7,
      students: 1900,
    },
    {
      title: 'Graphic Design Mastery',
      desc: 'Branding, social media creatives, thumbnails, UI mockups, and portfolio building.',
      level: 'Beginner',
      duration: '5 Weeks',
      icon: '🎨',
      rating: 4.5,
      students: 3100,
    },
    {
      title: 'Digital Marketing & SEO',
      desc: 'SEO, paid ads, analytics, and growth marketing strategies.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '📈',
      rating: 4.4,
      students: 2200,
    },
    {
      title: 'Freelancing Bootcamp',
      desc: 'Learn Upwork, Fiverr, client communication, proposals, and pricing strategy.',
      level: 'Beginner',
      duration: '4 Weeks',
      icon: '🧾',
      rating: 4.6,
      students: 3800,
    },
    {
      title: 'UI/UX Design Professional',
      desc: 'User research, wireframing, prototyping, and usability testing.',
      level: 'Intermediate',
      duration: '6 Weeks',
      icon: '🧠',
      rating: 4.7,
      students: 1500,
    },
    {
      title: 'Full Stack Development',
      desc: 'Frontend + Backend + Database integration with complete deployment.',
      level: 'Advanced',
      duration: '10 Weeks',
      icon: '🚀',
      rating: 4.9,
      students: 1100,
    },
  ];

  benefits = [
    'Real-world projects in every course',
    'Industry-experienced mentors',
    'Portfolio & CV building guidance',
    'Freelancing & job interview preparation',
    'Lifetime community access',
    'Certificate upon completion'
  ];

  testimonials = [
    {
      name: 'Ayesha Khan',
      text: 'This platform completely changed my career path. I got my first freelance client within 2 months!',
    },
    {
      name: 'Hassan Ali',
      text: 'The structured roadmap and projects helped me land a frontend developer job.',
    },
    {
      name: 'Umar Farooq',
      text: 'Mentor support was amazing. Highly recommended for beginners.',
    },
  ];

  faqs = [
    {
      q: 'Are the courses beginner friendly?',
      a: 'Yes, most programs start from fundamentals and gradually move to advanced topics.',
    },
    {
      q: 'Do I get a certificate?',
      a: 'Yes, certificates are awarded after successful completion of the program.',
    },
    {
      q: 'Is there mentor support?',
      a: 'Yes, all paid plans include mentor feedback and guidance.',
    },
    {
      q: 'Can I get help with freelancing?',
      a: 'Yes, we guide you step-by-step in building your freelancing career.',
    },
  ];

}
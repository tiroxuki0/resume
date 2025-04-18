import clsx from 'clsx';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';

// Định nghĩa kiểu dự án (mở rộng)
type ProjectType =
  | 'wmember'
  | 'gstore'
  | 'wstore'
  | 'wmember-admin'
  | 'gstore-admin'
  | 'wstore-seller'
  | 'wstore-admin';

// Dữ liệu dự án (bổ sung thêm các dự án admin/seller)
const projectData = {
  wmember: {
    title: 'WMember.io',
    fullTitle: 'WMember.io - Community Platform',
    description:
      'Community development platform with membership management and engagement tools.',
    subtitle: 'Community Platform',
    period: '2023 - 2025',
    role: 'Frontend Developer',
    url: 'https://wmember.io',
    color: 'blue',
    secondColor: 'sky',
    accentColor: 'cyan',
    summary: [
      '<span class="font-semibold">Led</span> development of a comprehensive platform for community development and membership management with modern UX.',
      '<span class="font-semibold">Architected</span> the front-end infrastructure with focus on performance and scalability while <span class="font-semibold">implementing</span> real-time WebSocket capabilities for interactive user experiences.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Shadcn UI',
      'React Query',
      'Zustand',
      'Socket.io',
    ],
    features: [
      'Community engagement tools with real-time notifications',
      'Advanced member management system',
      'Content sharing platform with rich-media support',
      'Real-time WebSocket chat system',
      'Analytics dashboard for community leaders',
    ],
    contributions: [
      'Designed and built the WebSocket-based chat system',
      'Optimized SEO using Next.js SSR/SSG strategies',
      'Implemented code splitting and lazy loading for faster page loads',
      'Created custom hooks for shared business logic',
      'Developed automated testing suite with Jest and Cypress',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  'wmember-admin': {
    title: 'WMember Admin',
    fullTitle: 'WMember Admin - Dashboard',
    description:
      'Administrator control panel for the WMember community platform with advanced management capabilities.',
    subtitle: 'Admin Dashboard',
    period: '2023 - 2025',
    role: 'Frontend Developer',
    color: 'indigo', // Different color from main product
    secondColor: 'blue',
    accentColor: 'violet',
    summary: [
      '<span class="font-semibold">Developed</span> a powerful admin dashboard for comprehensive control over the WMember community platform.',
      '<span class="font-semibold">Designed</span> intuitive interfaces for complex data management while <span class="font-semibold">implementing</span> real-time monitoring and analytics for platform health.',
    ],
    techStack: [
      'Vite',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Tanstack Table',
      'Recharts',
      'React Hook Form',
      'Zod',
      'React Query',
    ],
    features: [
      'Comprehensive user management and moderation',
      'Real-time analytics dashboard with filters',
      'Content moderation tools with approval workflows',
      'Subscription and billing management',
      'Admin permission controls with audit logging',
    ],
    contributions: [
      'Built role-based access control system',
      'Implemented real-time admin notifications',
      'Created user management interfaces with bulk actions',
      'Developed analytics dashboard with customizable reports',
      'Integrated with payment providers for subscription management',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  gstore: {
    title: 'G-Store.ai',
    fullTitle: 'G-Store.ai - Tech Solutions',
    description:
      'Technology solutions and financial management platform with smart analytics.',
    subtitle: 'Tech Solutions',
    period: '2022 - 2024',
    role: 'Frontend Developer',
    url: 'https://g-store.ai',
    color: 'emerald',
    secondColor: 'green',
    accentColor: 'teal',
    summary: [
      '<span class="font-semibold">Developed</span> a technology solutions and financial management platform with intelligent analytics and modern UI.',
      '<span class="font-semibold">Designed</span> the front-end architecture with real-time data visualization while <span class="font-semibold">optimizing</span> performance for complex financial calculations and reports.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Material UI',
      'Redux',
      'React Query',
      'D3.js',
      'Socket.io',
    ],
    features: [
      'Financial management with real-time currency conversion',
      'Interactive data visualization dashboard',
      'WebSocket-powered real-time analytics',
      'Business intelligence reporting system',
      'Customizable workflow automation tools',
    ],
    contributions: [
      'Created responsive data visualization components',
      'Improved application performance with SSR/SSG',
      'Implemented WebSocket integration for real-time updates',
      'Optimized image loading and processing for reports',
      'Built drag-and-drop workflow automation interface',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  'gstore-admin': {
    title: 'G-Store Admin',
    fullTitle: 'G-Store Admin - Management Console',
    description:
      'Powerful management console for G-Store.ai with comprehensive control over financial data and analytics.',
    subtitle: 'Management Console',
    period: '2022 - 2024',
    role: 'Frontend Developer',
    color: 'teal', // Different color from main product
    secondColor: 'emerald',
    accentColor: 'green',
    summary: [
      '<span class="font-semibold">Built</span> an advanced management console for G-Store.ai with comprehensive financial controls and analytics.',
      '<span class="font-semibold">Engineered</span> robust data visualization components while <span class="font-semibold">integrating</span> complex filtering and reporting capabilities.',
    ],
    techStack: [
      'Vite',
      'React',
      'TypeScript',
      'Material UI',
      'Redux Toolkit',
      'D3.js',
      'React Query',
      'React Hook Form',
      'Vitest',
    ],
    features: [
      'Financial reporting dashboard with export functionality',
      'User access management with role-based permissions',
      'Advanced business analytics tools with drill-down capabilities',
      'Workflow configuration and automation tools',
      'System health monitoring and alerts',
    ],
    contributions: [
      'Developed advanced data visualization components',
      'Created Excel/PDF export functionality for reports',
      'Implemented role-based access control system',
      'Built workflow automation designer interface',
      'Optimized performance for large datasets',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    ),
  },
  wstore: {
    title: 'WStore.vn',
    fullTitle: 'WStore.vn - E-commerce Platform',
    description:
      'Vietnamese e-commerce marketplace with modern shopping experience and multi-vendor capabilities.',
    subtitle: 'E-commerce Platform',
    period: '2021 - 2024',
    role: 'Frontend Developer',
    url: 'https://wstore.vn',
    color: 'amber',
    secondColor: 'yellow',
    accentColor: 'orange',
    summary: [
      '<span class="font-semibold">Built</span> a modern Vietnamese e-commerce marketplace with smooth UX and comprehensive vendor management features.',
      '<span class="font-semibold">Collaborated</span> with backend developers to integrate payment systems while <span class="font-semibold">enhancing</span> the search system with advanced filtering and product recommendation algorithms.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Bootstrap',
      'Framer Motion',
      'React Query',
      'Zustand',
      'WebP/AVIF',
    ],
    features: [
      'Multi-vendor marketplace with seller dashboards',
      'Vietnamese payment gateway integrations',
      'Responsive product showcase with image galleries',
      'Advanced search with faceted navigation',
      'Real-time inventory management system',
    ],
    contributions: [
      'Architected product catalog system with filterable attributes',
      'Implemented WebSocket for real-time inventory updates',
      'Optimized image loading with Next.js Image component',
      'Designed responsive UI for all device types',
      'Built advanced SEO system with SSR/SSG capabilities',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  'wstore-seller': {
    title: 'WStore Seller',
    fullTitle: 'WStore Seller - Vendor Portal',
    description:
      'Vendor portal for WStore.vn allowing sellers to manage products, orders, and sales analytics.',
    subtitle: 'Seller Portal',
    period: '2021 - 2024',
    role: 'Frontend Developer',
    color: 'orange', // Different color from main product
    secondColor: 'amber',
    accentColor: 'yellow',
    summary: [
      '<span class="font-semibold">Built</span> an intuitive seller portal for WStore.vn vendors to manage their store operations efficiently.',
      '<span class="font-semibold">Designed</span> dashboards for tracking sales performance while <span class="font-semibold">creating</span> streamlined interfaces for product and order management.',
    ],
    techStack: [
      'Vite',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Chart.js',
      'React Hook Form',
      'React Query',
      'Zustand',
      'React Dropzone',
    ],
    features: [
      'Product management with batch operations',
      'Order fulfillment and status tracking',
      'Sales analytics with performance insights',
      'Inventory management with stock alerts',
      'Marketing campaign tools with performance tracking',
    ],
    contributions: [
      'Developed product management interface with image uploading',
      'Created sales analytics dashboard with filters',
      'Built inventory management system with alerts',
      'Implemented order fulfillment workflow',
      'Designed promotional tools for sellers',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M12 2a2 2 0 0 0-2 2v8l-4 4" />
        <path d="M19 10a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10Z" />
      </svg>
    ),
  },
  'wstore-admin': {
    title: 'WStore Admin',
    fullTitle: 'WStore Admin - Control Panel',
    description:
      'Administrative control panel for WStore.vn e-commerce platform with comprehensive management tools.',
    subtitle: 'Admin Panel',
    period: '2021 - 2024',
    role: 'Frontend Developer',
    color: 'rose', // Different color from main product
    secondColor: 'pink',
    accentColor: 'red',
    summary: [
      '<span class="font-semibold">Developed</span> a comprehensive control panel for the WStore.vn e-commerce platform with robust management tools.',
      '<span class="font-semibold">Implemented</span> order processing workflows and <span class="font-semibold">created</span> interfaces for managing products, vendors, and promotions.',
    ],
    techStack: [
      'Vite',
      'React',
      'TypeScript',
      'Ant Design',
      'Zustand',
      'React Query',
      'Apex Charts',
      'React Hook Form',
      'Testing Library',
    ],
    features: [
      'Product catalog management with bulk operations',
      'Order processing system with status tracking',
      'Vendor approval and management workflow',
      'Comprehensive report generation',
      'Promotion and discount management',
    ],
    contributions: [
      'Built product management interfaces with bulk editing',
      'Developed order processing pipeline and tracking',
      'Created vendor approval workflow and verification',
      'Implemented promotion rule engine',
      'Designed dashboard with key performance indicators',
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v14" />
      </svg>
    ),
  },
};

// Advanced Techniques Card Component
type AdvancedTechniquesCardProps = {
  color?: string;
  isAdmin?: boolean;
};

function AdvancedTechniquesCard({
  color = 'purple',
  isAdmin = false,
}: AdvancedTechniquesCardProps) {
  const secondColor =
    color === 'purple' ? 'indigo' : color === 'blue' ? 'cyan' : 'teal';

  const techniques = isAdmin ? (
    <>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <span className="font-medium">Optimized</span> application performance
        with code splitting, lazy loading, and component virtualization.
      </p>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <span className="font-medium">Implemented</span> efficient state
        management with global stores and context-based caching solutions.
      </p>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <span className="font-medium">Developed</span> responsive designs with
        advanced CSS techniques and optimized rendering strategies.
      </p>
    </>
  ) : (
    // Main app techniques content
    <>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <span className="font-medium">Implemented</span> performance
        optimizations including SSR/SSG rendering strategies for optimal SEO and
        faster page loads.
      </p>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <span className="font-medium">Optimized</span> core web vitals through
        code splitting, lazy loading, and advanced caching techniques.
      </p>
      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        <span className="font-medium">Developed</span> responsive images with
        automatic optimization and WebP format conversion.
      </p>
    </>
  );

  // Danh sách các tag kỹ thuật dựa vào loại ứng dụng
  const techTags = isAdmin
    ? [
        'Code Splitting',
        'Lazy Loading',
        'Virtualization',
        'State Management',
        'Bundle Optimization',
      ]
    : [
        'SSR/SSG',
        'Code Splitting',
        'Lazy Loading',
        'Image Optimization',
        'Caching',
      ];

  return (
    <div
      className={clsx(
        'mb-6 rounded-lg border p-5 shadow-sm backdrop-blur-sm',
        {
          // Light mode background gradients
          'border-blue-100/60 from-blue-50/80 to-sky-50/80': color === 'blue',
          'border-indigo-100/60 from-indigo-50/80 to-blue-50/80':
            color === 'indigo',
          'border-emerald-100/60 from-emerald-50/80 to-green-50/80':
            color === 'emerald',
          'border-teal-100/60 from-teal-50/80 to-emerald-50/80':
            color === 'teal',
          'border-amber-100/60 from-amber-50/80 to-yellow-50/80':
            color === 'amber',
          'border-orange-100/60 from-orange-50/80 to-amber-50/80':
            color === 'orange',
          'border-rose-100/60 from-rose-50/80 to-pink-50/80': color === 'rose',
          // Dark mode
          'dark:border-blue-800/30 dark:from-blue-900/20 dark:to-sky-900/20':
            color === 'blue',
          'dark:border-indigo-800/30 dark:from-indigo-900/20 dark:to-blue-900/20':
            color === 'indigo',
          'dark:border-emerald-800/30 dark:from-emerald-900/20 dark:to-green-900/20':
            color === 'emerald',
          'dark:border-teal-800/30 dark:from-teal-900/20 dark:to-emerald-900/20':
            color === 'teal',
          'dark:border-amber-800/30 dark:from-amber-900/20 dark:to-yellow-900/20':
            color === 'amber',
          'dark:border-orange-800/30 dark:from-orange-900/20 dark:to-amber-900/20':
            color === 'orange',
          'dark:border-rose-800/30 dark:from-rose-900/20 dark:to-pink-900/20':
            color === 'rose',
        },
        'bg-gradient-to-r'
      )}
    >
      <h3
        className={clsx('mb-3 flex items-center font-semibold', {
          'text-blue-700 dark:text-blue-400': color === 'blue',
          'text-indigo-700 dark:text-indigo-400': color === 'indigo',
          'text-emerald-700 dark:text-emerald-400': color === 'emerald',
          'text-teal-700 dark:text-teal-400': color === 'teal',
          'text-amber-700 dark:text-amber-400': color === 'amber',
          'text-orange-700 dark:text-orange-400': color === 'orange',
          'text-rose-700 dark:text-rose-400': color === 'rose',
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        Advanced Techniques
      </h3>

      <div className="space-y-3">{techniques}</div>

      <div className="mt-4 flex flex-wrap gap-2">
        {techTags.map((tech) => (
          <span
            key={tech}
            className={clsx(
              'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
              {
                // Light mode
                'bg-blue-100/80 text-blue-800': color === 'blue',
                'bg-indigo-100/80 text-indigo-800': color === 'indigo',
                'bg-emerald-100/80 text-emerald-800': color === 'emerald',
                'bg-teal-100/80 text-teal-800': color === 'teal',
                'bg-amber-100/80 text-amber-800': color === 'amber',
                'bg-orange-100/80 text-orange-800': color === 'orange',
                'bg-rose-100/80 text-rose-800': color === 'rose',
                // Dark mode
                'dark:bg-blue-900/50 dark:text-blue-300': color === 'blue',
                'dark:bg-indigo-900/50 dark:text-indigo-300':
                  color === 'indigo',
                'dark:bg-emerald-900/50 dark:text-emerald-300':
                  color === 'emerald',
                'dark:bg-teal-900/50 dark:text-teal-300': color === 'teal',
                'dark:bg-amber-900/50 dark:text-amber-300': color === 'amber',
                'dark:bg-orange-900/50 dark:text-orange-300':
                  color === 'orange',
                'dark:bg-rose-900/50 dark:text-rose-300': color === 'rose',
              }
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

type VisitSiteButtonProps = {
  url?: string;
  color?: string;
};

// Visit Site Button Component
function VisitSiteButton({ url = '', color = 'purple' }: VisitSiteButtonProps) {
  const secondColor =
    color === 'purple' ? 'indigo' : color === 'blue' ? 'cyan' : 'teal';

  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-lg bg-gradient-to-r px-4 py-2 from-${color}-600 to-${secondColor}-600 font-medium text-black shadow-md transition-all duration-300 hover:shadow-lg dark:text-white hover:from-${color}-700 hover:to-${secondColor}-700 hover:scale-[1.02] dark:shadow-${color}-900/20`}
    >
      <span>Visit Site</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );
}

type ProjectSectionProps = {
  title: string;
  items?: string[];
  color: string;
  icon: React.ReactNode;
};

// Section for tech stack, features, and contributions
function ProjectSection({
  title,
  items = [],
  color,
  icon,
}: ProjectSectionProps) {
  return (
    <div
      className={`rounded-lg border border-${color}-100/80 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:shadow-md dark:border-${color}-800/20 dark:bg-gray-800/40`}
    >
      <h3 className="mb-3 flex items-center font-semibold text-gray-800 dark:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`mr-2 h-5 w-5 text-${color}-500`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {icon}
        </svg>
        {title}
      </h3>

      {Array.isArray(items) && (
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {items.map((item) => (
            <li key={item} className="flex items-start">
              <span
                className={`mr-2 mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-${color}-100 p-[3px] text-xs text-${color}-700 dark:bg-${color}-900/40 dark:text-${color}-300`}
              >
                <ArrowRight size={12} />
              </span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Project Detail Component
type ProjectDetailProps = {
  project: {
    color: string;
    secondColor: string;
    accentColor: string;
    title: string;
    subtitle: string;
    period: string;
    summary: string[];
    techStack: string[];
    features: string[];
    contributions: string[];
    role: string;
    url?: string;
  };
};

function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    color,
    secondColor,
    accentColor,
    title,
    subtitle,
    period,
    summary,
    techStack,
    features,
    contributions,
    role,
    url,
  } = project;

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-white to-${color}-50 p-6 dark:from-gray-800 dark:to-${color}-900/20`}
    >
      {/* Background decorative elements */}
      <div
        className={`absolute right-0 top-0 -mr-10 -mt-10 h-40 w-40 rounded-full bg-${color}-100 opacity-50 blur-3xl dark:bg-${color}-700 dark:opacity-10`}
      />
      <div
        className={`absolute bottom-0 left-0 -mb-12 -ml-12 h-40 w-40 rounded-full bg-${secondColor}-100 opacity-50 blur-3xl dark:bg-${secondColor}-700 dark:opacity-10`}
      />
      <div
        className={`absolute left-1/3 top-1/2 -ml-12 -mt-12 h-24 w-24 rounded-full bg-${accentColor}-100 opacity-30 blur-2xl dark:bg-${accentColor}-700 dark:opacity-10`}
      />

      {/* Header */}
      <div className="relative mb-6 flex items-center">
        <div
          className={`mr-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-${color}-500 to-${secondColor}-600 text-black shadow-lg dark:text-white shadow-${color}-500/20 dark:shadow-${color}-800/30`}
        >
          <span className="text-xl font-bold">{title[0]}</span>
        </div>
        <div>
          <h2
            className={`bg-gradient-to-r from-${color}-600 to-${secondColor}-600 bg-clip-text text-2xl font-bold text-transparent dark:from-${color}-400 dark:to-${secondColor}-400 text-black dark:text-white`}
          >
            {title}
          </h2>
          <p
            className={`text-sm font-medium text-${color}-500 dark:text-${color}-400`}
          >
            {subtitle}
          </p>
        </div>
        <div className="ml-auto">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium text-${secondColor}-700 dark:text-${secondColor}-300`}
          >
            {period}
          </span>
        </div>
      </div>

      {/* Summary */}
      <div
        className={`mb-6 rounded-lg border border-${color}-100/80 bg-white/60 p-5 text-base leading-relaxed text-gray-700 backdrop-blur-sm dark:border-${color}-800/20 dark:bg-gray-800/40 dark:text-gray-300`}
      >
        {summary.map((paragraph, idx) => (
          <p
            key={paragraph}
            className={idx !== summary.length - 1 ? 'mb-3' : ''}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h3 className="mb-3 flex items-center font-semibold text-gray-800 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-2 h-5 w-5 text-${color}-500`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech: any) => (
            <span
              key={tech}
              className={`rounded-full border border-${color}-200 bg-white px-3 py-1.5 text-sm font-medium text-${color}-700 shadow-sm transition-all duration-200 hover:scale-105 hover:border-${color}-300 hover:shadow-md dark:border-${color}-800/40 dark:bg-gray-800 dark:text-${color}-300`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features and Contributions */}
      <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <ProjectSection
          title="Key Features"
          items={features}
          color={color}
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          }
        />

        <ProjectSection
          title="My Contributions"
          items={contributions}
          color={color}
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          }
        />
      </div>

      {/* Advanced Techniques */}
      <AdvancedTechniquesCard
        color={color}
        isAdmin={
          project.title.includes('Admin') || project.title.includes('Seller')
        }
      />

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">Role:</span> {role}
        </div>
        <VisitSiteButton url={url} color={color} />
      </div>
    </div>
  );
}

// Main component - đảm bảo hiển thị đúng các tab
function ProjectsContents() {
  const [currentState, setCurrentState] = useState<ProjectType>('wmember');
  const currentProject = projectData[currentState];

  // Nhóm các dự án theo loại để hiển thị trong sidebar
  const projectGroups = {
    main: ['wmember', 'gstore', 'wstore'],
    admin: ['wmember-admin', 'gstore-admin', 'wstore-seller', 'wstore-admin'],
  };

  return (
    <>
      <SectionTitle
        title="Enterprise Web Applications"
        caption="Professional Projects"
        description="Developed modern, high-performance web platforms that solve real business challenges using cutting-edge frontend technologies."
      />

      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          {/* Desktop sidebar */}
          <div className={clsx('hidden flex-1 flex-col gap-6 pt-8', 'lg:flex')}>
            {/* Main Applications */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Main Applications
              </h3>
              <div className={clsx('flex flex-col gap-3')}>
                {projectGroups.main.map((key) => {
                  const project = projectData[key as ProjectType];
                  return (
                    <SectionButton
                      key={key}
                      title={project.title}
                      icon={
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-${project.color}-400 to-${project.secondColor}-600 shadow-lg [&>svg]:dark:text-white shadow-${project.color}-500/20 dark:from-${project.color}-500 dark:to-${project.secondColor}-700 dark:shadow-${project.color}-800/30 [&>svg]:text-[black]`}
                        >
                          {project.icon}
                        </div>
                      }
                      description={project.description}
                      active={currentState === (key as ProjectType)}
                      onClick={() => setCurrentState(key as ProjectType)}
                    />
                  );
                })}
              </div>
            </div>

            {/* Management Portals */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Management Portals
              </h3>
              <div className={clsx('flex flex-col gap-3')}>
                {projectGroups.admin.map((key) => {
                  const project = projectData[key as ProjectType];
                  return (
                    <SectionButton
                      key={key}
                      title={project.title}
                      icon={
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-${project.color}-400 to-${project.secondColor}-600 shadow-lg [&>svg]:text-[black] [&>svg]:dark:text-white shadow-${project.color}-500/20 dark:from-${project.color}-500 dark:to-${project.secondColor}-700 dark:shadow-${project.color}-800/30`}
                        >
                          {project.icon}
                        </div>
                      }
                      description={project.description}
                      active={currentState === (key as ProjectType)}
                      onClick={() => setCurrentState(key as ProjectType)}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-fit lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={Object.entries(projectData).map(
                    ([key, project]) => ({
                      icon: (
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded-full bg-${project.color}-500 text-black dark:text-white`}
                        >
                          {project.title[0]}
                        </div>
                      ),
                      title: project.fullTitle,
                      isActive: currentState === (key as ProjectType),
                      onClick: () => setCurrentState(key as ProjectType),
                    })
                  )}
                >
                  <ProjectDetail project={currentProject} />
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;

import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<
    'wmember' | 'gstore' | 'wstore'
  >('wmember');

  return (
    <>
      <SectionTitle
        title="Enterprise Web Applications"
        caption="Professional Projects"
        description="Developed modern, high-performance web platforms that solve real business challenges using cutting-edge frontend technologies."
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="WMember.io"
                icon={
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
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
                  </div>
                }
                description="Community development platform with membership management and engagement tools."
                active={currentState === 'wmember'}
                onClick={() => setCurrentState('wmember')}
              />
              <SectionButton
                title="G-Store.ai"
                icon={
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
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
                  </div>
                }
                description="Technology solutions and financial management platform with smart analytics."
                active={currentState === 'gstore'}
                onClick={() => setCurrentState('gstore')}
              />
              <SectionButton
                title="WStore.vn"
                icon={
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
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
                  </div>
                }
                description="Vietnamese e-commerce marketplace with modern shopping experience and multi-vendor capabilities."
                active={currentState === 'wstore'}
                onClick={() => setCurrentState('wstore')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-fit lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: (
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 text-white">
                          W
                        </div>
                      ),
                      title: 'WMember.io - Community Platform',
                      isActive: currentState === 'wmember',
                    },
                    {
                      icon: (
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white">
                          G
                        </div>
                      ),
                      title: 'G-Store.ai - Tech Solutions',
                      isActive: currentState === 'gstore',
                    },
                    {
                      icon: (
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-white">
                          W
                        </div>
                      ),
                      title: 'WStore.vn - E-commerce Platform',
                      isActive: currentState === 'wstore',
                    },
                  ]}
                >
                  {currentState === 'wmember' && (
                    <div className="p-4">
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
                          <span className="font-bold">W</span>
                        </div>
                        <h2 className="text-xl font-bold">WMember.io</h2>
                      </div>
                      <p className="mb-3 text-gray-700 dark:text-gray-300">
                        A comprehensive platform for community development and
                        membership management with modern UX.
                      </p>
                      <div className="mb-4">
                        <h3 className="mb-2 font-medium">Tech Stack:</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Next.js
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            React
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            TailwindCSS
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Framer Motion
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Shadcn UI
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            React Query
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Zustand
                          </span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h3 className="mb-2 font-medium">Features:</h3>
                        <ul className="list-inside list-disc space-y-1 text-sm">
                          <li>Community engagement tools</li>
                          <li>Member management system</li>
                          <li>Content sharing platform</li>
                          <li>Interactive discussion forums</li>
                          <li>Analytics dashboard for community leaders</li>
                        </ul>
                      </div>
                      <div className="mb-4 mt-2 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                        <h3 className="mb-2 font-medium text-purple-600 dark:text-purple-400">
                          Admin Dashboard:
                        </h3>
                        <p className="mb-2 text-sm">
                          Built a powerful admin panel using Vite, TailwindCSS,
                          and Zustand for state management.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                            Vite
                          </span>
                          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                            Framer Motion
                          </span>
                          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                            Zustand
                          </span>
                          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                            Redux
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://wmember.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Visit Site →
                        </a>
                      </div>
                    </div>
                  )}
                  {currentState === 'gstore' && (
                    <div className="p-4">
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                          <span className="font-bold">G</span>
                        </div>
                        <h2 className="text-xl font-bold">G-Store.ai</h2>
                      </div>
                      <p className="mb-3 text-gray-700 dark:text-gray-300">
                        Technology solutions and financial management platform
                        with intelligent analytics and modern UI.
                      </p>
                      <div className="mb-4">
                        <h3 className="mb-2 font-medium">Tech Stack:</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Next.js
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            React
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            TailwindCSS
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Framer Motion
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Shadcn UI
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            React Query
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Redux
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Material UI
                          </span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h3 className="mb-2 font-medium">Features:</h3>
                        <ul className="list-inside list-disc space-y-1 text-sm">
                          <li>Financial management tools</li>
                          <li>Data visualization dashboard</li>
                          <li>Technology solution integration</li>
                          <li>Business intelligence reporting</li>
                          <li>Customizable workflow automation</li>
                        </ul>
                      </div>
                      <div className="mb-4 mt-2 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                        <h3 className="mb-2 font-medium text-blue-600 dark:text-blue-400">
                          Admin Dashboard:
                        </h3>
                        <p className="mb-2 text-sm">
                          Developed a comprehensive admin system with Vite for
                          faster performance and Redux for complex state
                          management.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Vite
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            TailwindCSS
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Framer Motion
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Redux
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://g-store.ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Visit Site →
                        </a>
                      </div>
                    </div>
                  )}
                  {currentState === 'wstore' && (
                    <div className="p-4">
                      <div className="mb-4 flex items-center">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                          <span className="font-bold">W</span>
                        </div>
                        <h2 className="text-xl font-bold">WStore.vn</h2>
                      </div>
                      <p className="mb-3 text-gray-700 dark:text-gray-300">
                        Modern Vietnamese e-commerce marketplace with smooth UX
                        and comprehensive vendor management.
                      </p>
                      <div className="mb-4">
                        <h3 className="mb-2 font-medium">Tech Stack:</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Next.js
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            React
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            TailwindCSS
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Framer Motion
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Shadcn UI
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            React Query
                          </span>
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            Zustand
                          </span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h3 className="mb-2 font-medium">Features:</h3>
                        <ul className="list-inside list-disc space-y-1 text-sm">
                          <li>Multi-vendor marketplace system</li>
                          <li>Vietnamese payment integrations</li>
                          <li>Responsive product showcase</li>
                          <li>Advanced search and filtering</li>
                          <li>Vendor dashboard with analytics</li>
                        </ul>
                      </div>
                      <div className="mb-4 mt-2 rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                        <h3 className="mb-2 font-medium text-green-600 dark:text-green-400">
                          Admin Dashboard:
                        </h3>
                        <p className="mb-2 text-sm">
                          Built a high-performance admin system using Vite and
                          Zustand for efficient state management.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                            Vite
                          </span>
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                            TailwindCSS
                          </span>
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                            Framer Motion
                          </span>
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                            Zustand
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://wstore.vn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer text-blue-600 hover:underline dark:text-blue-400"
                        >
                          Visit Site →
                        </a>
                      </div>
                    </div>
                  )}
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

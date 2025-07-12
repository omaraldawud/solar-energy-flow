import React from 'react';

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
export const steps: Step[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Design',
    description: 'Our solar experts create a custom system design optimized for your Minnesota home and energy needs.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: 'Quote',
    description: 'Receive a transparent, competitive quote with financing options tailored to your budget.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Equipment',
    description: 'We source premium solar panels and components from trusted manufacturers.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Install',
    description: 'Our certified local installer partners complete the installation with precision and care.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Interconnection',
    description: 'We handle all paperwork and approvals to connect your system to the grid.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={48}
        height={48}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Monitor & Support',
    description: 'We provide ongoing system monitoring and dedicated support to ensure peak performance.',
  },
];

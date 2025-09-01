import React from 'react';

// Props type for icons to allow passing className and other SVG attributes
type IconProps = React.SVGProps<SVGSVGElement>;

export const BrainCircuitIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2a10 10 0 0 0-2.34 19.79" />
    <path d="M22 12a10 10 0 0 0-19.79-2.34" />
    <path d="M4.21 16.33a10 10 0 0 0 13.46-5.66" />
    <path d="M12 2a10 10 0 0 1 8 4" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 15a3 3 0 0 0 3-3" />
    <path d="M12 9a3 3 0 0 0-3 3" />
    <path d="M12 2v3" />
    <path d="M12 19v3" />
    <path d="m22 12-3 0" />
    <path d="m5 12-3 0" />
    <path d="m19.07 4.93-2.12 2.12" />
    <path d="m7.05 16.95-2.12 2.12" />
    <path d="m4.93 4.93 2.12 2.12" />
    <path d="m16.95 16.95 2.12 2.12" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
  </svg>
);

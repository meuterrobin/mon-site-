// Minimal icon components (replacing lucide-react)
const Icon = ({ children, size = 24, stroke = 1.6, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
       fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);
const MenuIcon = (p) => <Icon {...p}><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/></Icon>;
const XIcon = (p) => <Icon {...p}><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></Icon>;
const ArrowRightIcon = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>;
const BrainIcon = (p) => (
  <Icon {...p} stroke={1.2}>
    <path d="M9.5 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 3 3c.83 0 1.5-.67 1.5-1.5V4.5C11 3.67 10.33 3 9.5 3z"/>
    <path d="M14.5 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-3 3c-.83 0-1.5-.67-1.5-1.5V4.5C13 3.67 13.67 3 14.5 3z"/>
  </Icon>
);
const ShareIcon = (p) => <Icon {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></Icon>;
const RotateIcon = (p) => <Icon {...p}><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></Icon>;

Object.assign(window, { Icon, MenuIcon, XIcon, ArrowRightIcon, BrainIcon, ShareIcon, RotateIcon });

import type React from 'react';

interface SideBarItems {
    label: string;
    href: string;
    children: React.ReactNode;
};

const SideBarItem: React.FC<SideBarItems> = ({ label, href, children }) => {
  return (
    <a className='py-4 w-full rounded-md bg-neutral-800 flex items-center justify-between px-6 transition hover:opacity-75' href={href}>
        <p className='text-neutral-300 text-lg font-semibold transition hover:text-white'>{label}</p>
        {children}
    </a>
  )
}

export default SideBarItem
import type React from 'react';

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <header className='py-5 px-5 rounded-md mx-2 mt-2 bg-neutral-800 flex justify-between'>
      <a href='/'>
        <h1 className='text-2xl text-blue-600 font-semibold transition hover:opacity-75'>Fimbres Page</h1>
      </a>
      {children}
    </header>
  )
}

export default NavBar
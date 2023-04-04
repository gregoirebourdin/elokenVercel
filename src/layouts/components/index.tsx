// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const Footer = dynamic(() => import('./Footer'));
export const NavBar = dynamic(() => import('./NavBar'), {ssr: false});

export const NavBarModal = dynamic(() => import('./NavBarModal'));
export const Loader = dynamic(() => import('./Loader'));


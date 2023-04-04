// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const Header = dynamic(() => import('./Header'));
export const BreadCrumb = dynamic(() => import('./Breadcrumb'));
export const ContactLinks = dynamic(() => import('./ContactLinks'));
export const NewsLetter = dynamic(() => import('./NewsLetter'));


// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const ListPortfolio = dynamic(() => import('./ListPortfolio'));
export const DetailPortfolio = dynamic(() => import('./DetailPortfolio'));


// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const DetailPortfolioItem = dynamic(() => import('./DetailPortfolioItem'));
export const Modal = dynamic(() => import('./Modal'));
export const List = dynamic(() => import('./List'));
export const HeaderPortfolio = dynamic(() => import('./HeaderPortfolio'));






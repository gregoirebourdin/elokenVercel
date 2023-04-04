// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const ListLegal = dynamic(() => import('./ListLegal'));
export const DetailLegal = dynamic(() => import('./DetailLegal'));


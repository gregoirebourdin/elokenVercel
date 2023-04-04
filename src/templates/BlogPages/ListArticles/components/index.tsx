// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const FilterCategories = dynamic(() => import('./FilterCategories'));
export const List = dynamic(() => import('./List'));






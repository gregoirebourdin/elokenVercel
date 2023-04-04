// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const DetailJob = dynamic(() => import('./DetailJob'));
export const ListJobs = dynamic(() => import('./ListJobs'));




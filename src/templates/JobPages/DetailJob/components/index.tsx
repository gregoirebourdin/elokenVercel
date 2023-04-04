// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const Content = dynamic(() => import('./Content'));
export const ShareJob = dynamic(() => import('./ShareJob'));




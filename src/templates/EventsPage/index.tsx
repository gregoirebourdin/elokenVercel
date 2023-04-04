// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const EventsList = dynamic(() => import('./ListEvents'));


// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const AnchorArrow = dynamic(() => import('./AnchorArrow'));
export const EmptyState = dynamic(() => import('./EmptyState'));


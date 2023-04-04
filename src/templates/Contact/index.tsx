// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

export const TypeformContact = dynamic(() => import('./TypeformContact'));
export const FormContact = dynamic(() => import('./FormContact'));
export const CalContact = dynamic(() => import('./CalContact'));




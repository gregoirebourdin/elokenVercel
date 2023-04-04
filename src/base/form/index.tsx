// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

// Providers
export const FormProvider = dynamic(() => import('./provider/FormProvider'));

// Inputs
export const RHFTextField = dynamic(() => import('./input/RHFTextField'));


export const RHFSelectSingleField = dynamic(
  () => import('./input/RHFSelectSingleField')
);
export const RHFSelectMultipleField = dynamic(
  () => import('./input/RHFSelectMultipleField')
);

export const RHFTextAreaField = dynamic(
  () => import('./input/RHFTextAreaField')
);
export const RHFBooleanField = dynamic(() => import('./input/RHFBooleanField'));
export const RHFSubmitButton = dynamic(() => import('./input/RHFSubmitButton'), {ssr: false});
export const RHFDeleteButton = dynamic(() => import('./input/RHFDeleteButton'));
export const RHFBooleanGroupField = dynamic(
  () => import('./input/RHFBooleanGroupField')
);
export const RHFRadioGroupField = dynamic(
  () => import('./input/RHFRadioGroupField')
);
export const RHFSearchSingleField = dynamic(
  () => import('./input/RHFSearchSingleField')
);
export const RHFHeaderTextField = dynamic(
  () => import('./input/RHFHeaderTextField')
);

// Layouts
export const FormLayout = dynamic(() => import('./layout/FormLayout'));
export const FormLayoutRow = dynamic(() => import('./layout/FormLayoutRow'));

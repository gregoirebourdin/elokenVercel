import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// Flowbite

import Label from './Label';
import InputErrors from './InputErrors';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextField({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <div className="form-control relative w-full">
            {other.label && <Label title={other.label} theme={other.theme} />}


              <input
                type="text"
                onChange={e => field.onChange(e.target.value)}
                value={field.value}
                placeholder={other.placeholder}
                className={
                  `input transform rounded-ui bg-gray-200 dark:bg-gray-800 text-base text-gray-700 dark:text-gray-100 ring-0 transition 
                   duration-500 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:-translate-y-0.5 focus:border-transparent focus:shadow-gray-700/5 
                   focus:outline-none focus:ring-0 focus:drop-shadow-[0_2px_8px_rgba(104,112,118,0.07)] focus:placeholder:text-transparent 
                   ${
                      error
                        ? 'bg-error-100 dark:bg-error-900 text-error-600 dark:text-error-400  dark:placeholder:text-error-600 placeholder:text-error-400 '
                        : ''
                    }`}
              />

                  <InputErrors error={error} />


          </div>
        </div>
      )}
    />
  );
}

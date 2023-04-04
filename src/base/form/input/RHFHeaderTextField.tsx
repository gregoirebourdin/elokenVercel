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
          <div className="form-control relative  w-full">
            <Label title={other.label} />
            <input
              type="text"
              onChange={e => field.onChange(e.target.value)}
              value={field.value}
              placeholder={other.placeholder}
              className={`input mb-4 transform rounded-uismall border-0 border-b-2 border-transparent px-0 py-4 text-3xl font-bold text-gray-700 ring-0 transition 
                                    duration-500 placeholder:text-gray-400 focus:-translate-y-0.5 focus:border-0 
                                     focus:border-b-2 focus:border-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-transparent ${
                                       error
                                         ? 'border-error-100 text-error-600 placeholder:text-error-400 focus:border-error-500 '
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

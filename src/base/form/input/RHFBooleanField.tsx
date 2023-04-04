import PropTypes from 'prop-types';

// form
import {useFormContext, Controller} from 'react-hook-form';


import InputErrors from '@/base/form/input/InputErrors';
import Link from 'next/link';

// ----------------------------------------------------------------------

RHFBooleanField.propTypes = {
    name: PropTypes.string,
};

export default function RHFBooleanField({name, ...other}) {
    const {control} = useFormContext();

    /* Error handler that displays error for NextUI */
    function ErrorHandler(error, value) {
        // console.log(error.message, value);
    }

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => {
                ErrorHandler(error, field.value);
                return (
                    <div className="form-control ">
                        <label className="label text-xs sm:text-base flex cursor-pointer items-center gap-2 p-0">
                          <span className='label-text  dark:text-gray-400 text-gray-600'>
                            {other.label}{' '}
                              {other.destination && (
                                  <a target={"_blank"} rel={"noopener noreferrer"} href={other.destination}>
                                    <span className="underline hover:text-primary-500">
                                      {other.link}
                                    </span>
                                  </a>
                              )}
                          </span>
                            <input
                                type="checkbox"
                                onChange={e => field.onChange(e.target.checked)}
                                className={other.type + ' rounded-ui bg-gray-200 dark:bg-gray-800'}
                                defaultChecked={other.defaultChecked}
                            />
                        </label>
                        <div className="relative w-full">
                            <InputErrors error={error}/>
                        </div>
                    </div>
                );
            }}
        />
    );
}

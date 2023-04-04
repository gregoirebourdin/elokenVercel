import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Combobox, Listbox } from '@headlessui/react';
// form
import { useFormContext, Controller } from 'react-hook-form';

RHFSelectSingleField.propTypes = {
  name: PropTypes.string,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// ----------------------------------------------------------------------

export default function RHFSelectSingleField({ name, ...other }) {
  const { control, setValue } = useFormContext();
  const [selectedOption, setSelectedOption] = useState(other.defaultValue);

  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? other.allOptions
      : other.allOptions.filter(option =>
          option.title.toLowerCase().includes(query.toLowerCase())
        );

  useEffect(() => {
    // delete the title property from the choices array
    const inputValue = { id: selectedOption.id };
    setValue(`${name}`, inputValue);
  }, [selectedOption]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <div className="form-control relative  w-full">
            <Combobox
              as="div"
              value={selectedOption.title}
              onChange={setSelectedOption}>
              <Combobox.Label className="label capitalize">
                <span className="label-text capitalize">{other.label}</span>
              </Combobox.Label>

              <div className="relative mt-0 p-0">
                <Combobox.Input
                  className={`input w-full transform rounded-ui bg-gray-100 text-base text-gray-700 ring-0 transition 
                                    duration-500 placeholder:text-gray-400 focus:-translate-y-0.5 focus:border-transparent focus:shadow-gray-700/5 focus:outline-none focus:ring-0 focus:drop-shadow-[0_2px_8px_rgba(104,112,118,0.07)] focus:placeholder:text-transparent `}
                  onChange={event => setQuery(event.target.value)}
                  displayValue={selectedOption.title}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>

                {filteredOptions.length > 0 && (
                  <Combobox.Options className="scrollbar absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-ui bg-white p-2  text-base shadow-xl focus:outline-none sm:text-sm">
                    {filteredOptions.map(option => (
                      <>
                        {option.title === selectedOption.title ? (
                          <Combobox.Option
                            key={option.id}
                            className={
                              'relative cursor-default select-none rounded-ui bg-gray-300 py-2 pl-3 pr-9 text-gray-900 hover:text-white'
                            }
                            value={option}>
                            <span className="block truncate font-semibold">
                              {option.title}
                            </span>
                            <span
                              className={
                                ' absolute inset-y-0 right-0 flex items-center pr-4'
                              }>
                              <CheckIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </span>
                          </Combobox.Option>
                        ) : (
                          <Combobox.Option
                            key={option.id}
                            className={
                              'relative cursor-default select-none rounded-ui py-2 pl-3 pr-9 text-gray-700 transition hover:bg-gray-100'
                            }
                            value={option}>
                            <span className="block truncate font-normal">
                              {option.title}
                            </span>
                          </Combobox.Option>
                        )}
                      </>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>
          </div>
        </>
      )}
    />
  );
}

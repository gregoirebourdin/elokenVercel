import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
// form
import { Controller, useFormContext } from 'react-hook-form';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import Label from './Label';

RHFSelectSingleField.propTypes = {
  name: PropTypes.string,
};

// ----------------------------------------------------------------------

export default function RHFSelectSingleField({ name, ...other }) {
  const { control } = useFormContext();
  const [selectedOption, setSelectedOption] = useState(other.defaultValue);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <div className="form-control relative  w-full">
            <Listbox
              value={selectedOption}
              onChange={e => {
                setSelectedOption(e);
                field.onChange(e);
              }}>
              {({ open }) => (
                <>
                  <Listbox.Label className="">
                    <Label title={other.label} />
                  </Listbox.Label>
                  <div className="relative mt-0 p-0">
                    {/*<Listbox.AdminButton>{selectedOption.title}</Listbox.AdminButton>*/}
                    <Listbox.Button
                      className="input relative w-full transform cursor-default rounded-ui bg-gray-100 text-left
                                    text-base text-gray-700
                            ring-0 transition placeholder:text-gray-400 focus:scale-[99%] focus:border-transparent focus:shadow-gray-700/5 focus:outline-none
                            focus:ring-0 focus:drop-shadow-[0_2px_8px_rgba(104,112,118,0.07)]  ">
                      <span className="block truncate">
                        {selectedOption.title}
                      </span>
                      <span className="pointer-events-none  absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon
                          className="h-5 w-5 origin-center text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition-opacity duration-250"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <Listbox.Options className="scrollbar absolute z-30 mt-1 max-h-40 w-full overflow-auto rounded-ui bg-white p-2  text-base shadow-xl focus:outline-none sm:text-sm">
                        {other.allOptions.map(option => (
                          <div key={option.id}>
                            {option.title === selectedOption.title ? (
                              <Listbox.Option
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
                              </Listbox.Option>
                            ) : (
                              <Listbox.Option
                                key={option.id}
                                className={
                                  'relative cursor-default select-none rounded-ui py-2 pl-3 pr-9 text-gray-700 transition hover:bg-gray-100'
                                }
                                value={option}>
                                <span className="block truncate font-normal">
                                  {option.title}
                                </span>
                              </Listbox.Option>
                            )}
                          </div>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
        </>
      )}
    />
  );
}

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
// form
import { Controller, useFormContext } from 'react-hook-form';
import Label from './Label';
import InputErrors from './InputErrors';
import { useFormData } from '@/context/FormContext';

RHFSelectSingleField.propTypes = {
  name: PropTypes.string,
};

// ----------------------------------------------------------------------

export default function RHFSelectSingleField({ name, ...other }) {
  const { control, setValue } = useFormContext();
  const [selectedOption, setSelectedOption] = useState('');
  const [choices, setChoices] = useState(
    other.defaultValue.map(choice => ({ id: choice.id, title: choice.title }))
  );
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let availableOptions: any[];

    if (query === '') {
      availableOptions = other.allOptions;
    } else {
      availableOptions = other.allOptions.filter(option =>
        option.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredOptions(
      availableOptions.filter(
        option => !choices.find(choice => choice.id === option.id)
      )
    );
  }, [selectedOption, query, choices]);

  // @ts-ignore
  const { data, setFormValues } = useFormData();

  useEffect(() => {
    // delete the title property from the choices array
    const choicesWithoutTitle = choices.map(choice => ({ id: choice.id }));
    if (!data) {
      setValue(`${name}`, choicesWithoutTitle);
      // setFormValues({ ...data, [name]: choicesWithoutTitle });
    } else {
      setValue(`${name}`, choices);
      setFormValues({ ...data, [name]: choices });
    }
  }, [choices]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className="form-control relative  w-full">
            <Combobox
              nullable
              as="div"
              value={query}
              // onChange=() => {setSelectedOption;
              //   field.onChange(choices)}

              onChange={() => {
                setSelectedOption;
                field.onChange();
              }}>
              <Combobox.Label className="">
                <Label title={other.label} />
              </Combobox.Label>

              <ul className={'mb-2 flex flex-wrap gap-2'}>
                {choices.map(choice => (
                  <li key={choice.id} className="list-none">
                    <span className="inline-flex items-center rounded-full bg-gray-100 py-0.5 pl-2.5 pr-1 text-sm font-medium text-gray-700">
                      {choice.title}
                      <div
                        onClick={() => {
                          setChoices(choices.filter(a => a.id !== choice.id));
                        }}
                        className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white focus:outline-none">
                        <span className="sr-only">Remove large option</span>
                        <svg
                          className="h-2 w-2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 8 8">
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M1 1l6 6m0-6L1 7"
                          />
                        </svg>
                      </div>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-0 p-0">
                <Combobox.Input
                  className={`input w-full transform rounded-ui bg-gray-100 text-base text-gray-700 ring-0 transition 
                                    duration-500 placeholder:text-gray-400 focus:-translate-y-0.5 focus:border-transparent focus:shadow-gray-700/5 focus:outline-none focus:ring-0 focus:drop-shadow-[0_2px_8px_rgba(104,112,118,0.07)] focus:placeholder:text-transparent `}
                  onChange={event => {
                    setQuery(event.target.value);
                  }}
                  placeholder={other.placeholder}
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
                      <Combobox.Option
                        onClick={() => {
                          setQuery('');
                          setChoices([...choices, option]);
                        }}
                        key={option.id}
                        className={
                          'relative cursor-default select-none rounded-ui py-2 pl-3 pr-9 text-gray-700 transition hover:bg-gray-100'
                        }
                        value={option}>
                        <span className="block truncate font-normal">
                          {option.title}
                        </span>
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>
            <InputErrors error={error} />
          </div>
        </>
      )}
    />
  );
}

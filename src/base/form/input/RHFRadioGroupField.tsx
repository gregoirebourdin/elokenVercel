import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
// form
import { useFormContext, Controller } from 'react-hook-form';

import { RadioGroup } from '@headlessui/react';
import Label from './Label';
import InputErrors from './InputErrors';

RHFSelectSingleField.propTypes = {
  name: PropTypes.string,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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
            <Label title={other.label} />
            <RadioGroup
              value={selectedOption}
              onChange={e => {
                setSelectedOption(e);
                field.onChange({ id: e.id });
              }}
              className="">
              <RadioGroup.Label className="sr-only">
                {' '}
                Choose a memory option{' '}
              </RadioGroup.Label>
              <div className="flex flex-wrap gap-3">
                {other.allOptions.map(option => (
                  <RadioGroup.Option
                    key={option.id}
                    value={option}
                    className={({ active, checked }) =>
                      classNames(
                        checked
                          ? 'border-transparent bg-gray-900 text-white'
                          : 'cursor-pointer border-gray-200 bg-white text-gray-900 hover:scale-110 hover:bg-gray-50',
                        'flex transform items-center justify-center rounded-ui border py-3 px-3 text-sm font-medium uppercase transition  sm:flex-1'
                      )
                    }>
                    <RadioGroup.Label as="span">
                      {option.title}
                    </RadioGroup.Label>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
            {/*<InputErrors error={error} />*/}
          </div>
        </>
      )}
    />
  );
}

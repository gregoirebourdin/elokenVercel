import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// form
import { useFormContext, Controller } from 'react-hook-form';

import Label from './Label';

// ----------------------------------------------------------------------

RHFBooleanGroupField.propTypes = {
  name: PropTypes.string,
};

export default function RHFBooleanGroupField({ name, ...other }) {
  /* Error handler that displays error for NextUI */
  function ErrorHandler(error, value) {
    // console.log(error.message, value);
  }

  const { control, setValue } = useFormContext();
  const [choices, setChoices] = useState([]);

  function initChoices() {
    for (let o = 0; o < other.allOptions.length; o++) {
      if (other.defaultValue.includes(other.allOptions[o])) {
        const item = other.allOptions[o];
        let element = { id: item.id, title: item.title, isAvailable: true };
        choices.push(element);
      } else {
        const item = other.allOptions[o];
        let element = { id: item.id, title: item.title, isAvailable: false };
        choices.push(element);
      }
    }
  }

  function handleChange(e, field, choice) {
    setChoices(
      choices.map(c =>
        choice.id === c.id ? { ...c, isAvailable: e.target.checked } : c
      )
    );
  }

  useEffect(() => {
    initChoices();
  }, []);

  useEffect(() => {
    const OnlyAvailableChoices = choices.filter(
      choice => choice.isAvailable === true
    );
    const choicesId = OnlyAvailableChoices.map(choice => ({
      id: choice.id,
    }));
    setValue(`${name}`, choicesId);
  }, [choices]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        ErrorHandler(error, field.value);
        return (
          <>
            <Label title={other.label} />
            {choices.map(choice => (
              <div key={choice.id} className="divide form-control divide-y">
                <label className="label cursor-pointer">
                  <span className="label-text">{choice.title}</span>
                  <input
                    type="checkbox"
                    className={other.type}
                    onChange={e => handleChange(e, field, choice)}
                    defaultChecked={choice.isAvailable}
                  />
                </label>
              </div>
            ))}
          </>
        );
      }}
    />
  );
}

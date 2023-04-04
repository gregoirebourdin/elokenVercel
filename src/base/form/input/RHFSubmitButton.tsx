import { useFormContext } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';
import {useState} from "react";

export default function RHFSubmitButton({ title, ...other }) {
  // if the form have errors, disable the button
  const { formState } = useFormContext();
  const { errors, isSubmitting } = formState;

  return (
    <div className="flex justify-items-end">
      {Object.keys(errors).length === 0 ? (
        <button
          className="button-normal w-full">
          {title}
        </button>
      ) : (
        <button
          disabled
          className="button-disabled w-full">
          {title}
        </button>
      )}
    </div>
  );
}

import { useFormContext } from 'react-hook-form';
import { RotatingLines } from 'react-loader-spinner';

export default function RHFSubmitButton({ title }) {
  // if the form have errors, disable the button
  const { formState } = useFormContext();
  const { errors, isSubmitting } = formState;
  function rippleEffect(event) {
    const btn = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add('ripple');

    const ripple = btn.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }
    btn.appendChild(circle);
  }

  // DISABLE BUTTON
  if (Object.keys(errors).length === 0) {
    return (
      <>
        {isSubmitting ? (
          <button
            disabled
            className=" relative inline-flex cursor-progress items-center justify-center overflow-hidden rounded-ui bg-error-600 px-5 py-4 text-center text-sm font-semibold leading-none text-white transition ">
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.90"
              width="20"
              visible={true}
            />
          </button>
        ) : (
          <button
            onClick={rippleEffect}
            className=" relative cursor-pointer  overflow-hidden   rounded-ui bg-error-600 px-5 py-4 text-sm font-semibold leading-none text-white shadow transition ">
            {title}
          </button>
        )}
      </>
    );
  }

  // ACTIVE BUTTON
  if (Object.keys(errors).length > 0) {
    return (
      <button
        disabled
        className="relative cursor-not-allowed overflow-hidden   rounded-ui bg-error-600 px-5 py-4 text-sm font-semibold leading-none text-white transition ">
        {title}
      </button>
    );
  }
}

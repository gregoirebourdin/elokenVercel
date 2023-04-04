
export default function Label({ error }) {
  if (error) {
    return (
      <label className="label">
            <span className="label-text-alt -mt-1 text-xs text-error-600 dark:text-error-700">
          {error.message}
        </span>
      </label>
    );
  } else {
    return null;
  }
}

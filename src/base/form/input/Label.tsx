

export default function Label({ title, ...other }) {
  console.log(other.theme);
  return (
    <label className="label m-0 p-0 pb-1  font-semibold">
      <span
        className="label-text text-xs text-gray-500 ">
        {title}
      </span>
    </label>
  );
}

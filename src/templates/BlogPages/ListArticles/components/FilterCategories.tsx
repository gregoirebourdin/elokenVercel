// ----------------------------------------------------------------------

import { XCircleIcon } from '@heroicons/react/24/outline';

export default function FilterCategories({
  categories,
  setChosenCategory,
  chosenCategory,
}: any) {
  return (
    <>
      <ul className="tabs tabs-boxed relative z-20 mx-auto mb-4 mt-0 flex items-center gap-3 bg-transparent  ">
        {categories.map((category,index) => (
            <li
                key={index}
                className={`group relative cursor-pointer   ${
                    chosenCategory === category.title
                        ? 'tag-primary'
                        : 'tag-outline'
                }`}
                onClick={() =>
                    chosenCategory !== category.title
                        ? setChosenCategory(category.title)
                        : setChosenCategory('')
                }>
                {chosenCategory === category.title && (
                    <span className="absolute left-0 -top-6 flex w-full transform items-center text-gray-500 opacity-0 animate-bounce transition hover:text-white group-hover:opacity-100">
                <XCircleIcon className="h-6 w-6 mx-auto " />
              </span>
                )}

                {category.title}
            </li>        ))}
      </ul>
    </>
  );
}

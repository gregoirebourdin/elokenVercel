import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import TestimonialList from '@/templates/HomePage/components/Testimonials/TestimonialList';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function TestimonialsModal({testimonials}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  //get screen size
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <>
      <div className="  flex items-center justify-center">
        <button
          onClick={openModal}
          className="button-outline mt-2">
          Voir tous les témoignages
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-900/90 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center sm:p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="h-screen w-full bg-black p-6 sm:aspect-[9/16] sm:h-[90vh] sm:w-auto sm:rounded-2xl ">
                  <TestimonialList testimonials={testimonials}/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          <div className="fixed top-8 right-4 z-50">
            <button onClick={closeModal}>
              <XMarkIcon className={'h-8 w-8 text-white'} />
            </button>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

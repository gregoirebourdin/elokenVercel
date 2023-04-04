import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {XMarkIcon} from "@heroicons/react/20/solid";

export default function Modal({setOpenModal, openModal, children}) {

    function closeModal() {
        setOpenModal(false)
    // THIS IS TO FIX THE BUG FROM HEADLESS UI
        setTimeout(() => {
                document.querySelector('html').style.overflow = 'auto'
            }, 500)

    }


    return (
        <Transition.Root appear show={openModal} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
                                  enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100"
                                  leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/50  transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="sm:flex min-h-full items-end justify-center sm:p-8 md:p-16  text-center sm:items-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300"
                                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                          enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel
                                className="h-screen sm:h-full relative w-full max-w-6xl transform  sm:rounded-ui bg-gray-900 text-left shadow-xl transition-all  sm:h-full ">
                                {children}
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
        </Transition.Root>
    );
}

import {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Link from "next/link";
import {XMarkIcon} from "@heroicons/react/20/solid";

export default function NavBarModal({setOpenModal, openModal, navigation}) {

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
                    <div className="fixed inset-0 bg-white transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center items-center p-0">
                        <Transition.Child as={Fragment} enter="ease-out duration-300"
                                          enterFrom="opacity-0 translate-y-4 translate-y-0 scale-95"
                                          enterTo="opacity-100 translate-y-0 scale-100" leave="ease-in duration-200"
                                          leaveFrom="opacity-100 translate-y-0 scale-100"
                                          leaveTo="opacity-0 translate-y-4 translate-y-0 scale-95">
                            <Dialog.Panel
                                className="h-full relative w-full  transform text-center rounded-ui bg-white text-left flex flex-col gap-3 transition-all ">
                                {navigation.map((item, index) => (
                                    <Link key={index} href={item.href} className="" onClick={closeModal} >
                                       <span className="title-main text-gray-900 hover:text-primary-500 tracking-normal	">
                                           {item.title}
                                       </span>
                                    </Link>
                                ))}
                                <Link href={'https://app.eloken.com'}>
                                    <button className={'rounded-ui bg-gradient-to-br from-primary-500 via-fuchsia-500 to-rose-500 px-4 py-3 text-3xl mx-auto font-semibold  leading-none text-white hover:bg-opacity-50 shadow transition-all duration-500;'}>
                                        Espace membres
                                    </button>
                                </Link>


                            </Dialog.Panel>
                        </Transition.Child> <XMarkIcon onClick={closeModal}
                                                       className={'w-8 h-8 absolute top-8 right-4 transition transform duration-500 delay-250' + (!openModal ? ' translate-x-24 opacity-0' : 'translate-x-0 opacity-100') }/>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

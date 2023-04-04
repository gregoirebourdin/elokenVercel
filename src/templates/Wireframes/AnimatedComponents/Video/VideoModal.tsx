import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';
import {XMarkIcon} from '@heroicons/react/20/solid';

export default function VideoModal({videoSrc, thumbnail}) {
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

            <div className="mx-auto sm:p-4 max-w-7xl">
                <video
                    autoPlay
                    className="sm:rounded-ui"
                    controls
                    width="100%"
                    height="auto"
                    loop
                    poster={thumbnail}
                >
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </>
    );
}

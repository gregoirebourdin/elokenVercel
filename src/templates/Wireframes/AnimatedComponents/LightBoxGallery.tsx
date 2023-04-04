import {Fragment, useEffect, useState} from "react";
import {SRLWrapper} from "simple-react-lightbox";
import Image from "next/image";
import Fade, {animate} from "@/base/animations/Fade";

const options = {
    settings: {
        overlayColor: 'rgba(0, 0, 0, 0.9)',
    },
    buttons: {
        showAutoplayButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
        showThumbnailsButton: false,
    },
    caption: {
        showCaption: false
    },
    thumbnails: {
        showThumbnails: false,
    }
}



export default function LightBoxGallery({columns, images}) {


    return (
        <>
            <div className="flex items-center justify-center">
                <SRLWrapper options={options}>
                    <div role="list" className={ columns + " gap-4"}>
                        {images.map((image,index) => (
                            <Fade animate={animate.fadeIn} delay={index / 5} key={index} >
                            <a href={image.imageSrc.src} className="relative w-auto h-auto overflow-hidden block rounded-ui mb-4">
                                <Image
                                    className="   hover:scale-110 transform transition duration-500 h-full w-auto object-center object-cover"
                                    alt={image.title}
                                    src={image.imageSrc}
                                    width={500}
                                    height={500}
                                />
                            </a>
                            </Fade>
                        ))}
                    </div>
                </SRLWrapper>
            </div>
        </>
    )


}
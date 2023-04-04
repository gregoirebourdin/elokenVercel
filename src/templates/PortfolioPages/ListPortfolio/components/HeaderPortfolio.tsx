import Image from 'next/image';
import CtaBg from '@/images/client/home/ctabg.png';

export default function HeaderPortfolio() {
    return (
        <>
            <div className="lg:px-4 2xl:px-0">
                <div className="relative mx-auto max-w-7xl lg:rounded-ui bg-gradient-to-br from-black to-gray-700">
                    <div className="relative z-10 mx-auto  py-16 px-4 sm:pt-24 sm:pb-40 lg:px-8">
                        <div className="text-center">
                            <span
                                className="absolute top-0 border transform -translate-y-1/2 left-1/2 -translate-x-1/2 tag bg-white text-gray-800">Portfolio</span>
                            <h1 className="title-1 text-white">Nos dernières réalisations</h1>
                            <p className="body-1 text-gray-300">Tous les projets de nos clients que l'on a kiffé
                                faire</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

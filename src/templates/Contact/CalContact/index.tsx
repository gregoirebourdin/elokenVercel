import Cal, {getCalApi} from "@calcom/embed-react";
import {useEffect} from "react";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import {path} from "@/routes/paths";
import Link from "next/link";

function CalComponent() {
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi();
            cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false});
        })();
    }, [])
    return <Cal calLink="eloken/pitch-ton-projet" style={{width:"100%",height:"100%",overflow:"scroll"}} />;
};

export default function Contact() {
    return (
        <>
            <div className="relative">
                <div className="flex inline absolute top-4 left-4">
                    <Link href={path.root} className={''}>
                        <button
                            className="rounded-ui border border-gray-200 dark:border-gray-800 px-2 py-1 w-auto flex items-center w-auto">
                            <ArrowLeftIcon className="h-4 w-4 flex-shrink-0 dark:text-gray-700 text-gray-400"
                                           aria-hidden="true"/>
                            <span
                                className="ml-1  text-sm font-medium  font-sans dark:text-gray-700 text-gray-400 dark:hover:text-gray-100 hover:text-gray-800"
                            >
                            Accueil
                        </span>
                        </button>
                    </Link>
                </div>
                <div className="w-screen h-screen flex items-center justify-center py-24">
                    <CalComponent/>
                </div>
            </div>
        </>

    )
}
import {useEffect, useState} from "react";
import Fade, {animate} from "@/base/animations/Fade";

function CountDownItem({title, value, index}) {
    function leading0(num) {
        return num < 10 ? "0" + num : num;
    }

    return (
        <>
            <Fade animate={animate.fadeIn} delay={index / 3}>
                <div
                    className="grid items-center justify-center text-center border border-gray-200 dark:border-gray-800 rounded-ui p-6 w-full">
              <span className="heading-2 text-primary-500 ">
                {leading0(value)}
              </span>
                    <span className="font-sans font-bold text-gray-900 dark:text-white">{title}</span>
                </div>
            </Fade>
        </>

    )
}

export default function CountDown({deadline}) {

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        getTimeUntil(deadline);
    }, []);

    useEffect(() => {
        setInterval(() => getTimeUntil(deadline), 1000);
    }, []);


    function getTimeUntil(t) {
        // @ts-ignore
        const time = Date.parse(t) - Date.parse(new Date());
        if (time < 0) {
            setTime({days: 0, hours: 0, minutes: 0, seconds: 0});
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            setTime({days, hours, minutes, seconds});
        }
    }

    return (
        <>
            {
                time.days + time.hours + time.minutes + time.seconds > 0 && (
                    <div className="">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                            <CountDownItem title={'Jours'} value={time.days} index={1}/>
                            <CountDownItem title={'Heures'} value={time.hours} index={2}/>
                            <CountDownItem title={'Minutes'} value={time.minutes} index={3}/>
                            <CountDownItem title={'Secondes'} value={time.seconds} index={4}/>
                        </div>
                    </div>
                )
            }


        </>

    )


}



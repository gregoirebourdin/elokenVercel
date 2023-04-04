import CountUp from 'react-countup';
import Fade, {animate} from "@/base/animations/Fade";

const numbers = [
    {
        title: "Sites développés",
        valueBefore: "+",
        valueAfter: undefined,
        start: 0,
        end: 100,
        duration: 2.75,
        decimals: 0,
    },
    {
        title: "de chargement",
        valueBefore: undefined,
        valueAfter: "sec",
        start: 0,
        end: 0.24,
        duration: 2.75,
        decimals: 2,
    },
    {
        title: "de CA généré",
        valueBefore: undefined,
        valueAfter: 'K€',
        start: 0,
        end: 375,
        duration: 2.75,
        decimals: 0,
    },

]

export default function NumbersUp() {
    return (
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-4">
            {numbers.map((number, index) => (
                <div key={index}>
                    <Fade animate={animate.fadeIn} delay={index / 3}>
                        <div className="grid text-center items-center justify-center">
                            <div className="flex gap-2 justify-center">
                                <span className="heading-2 text-primary-500">{number.valueBefore}</span>
                                <CountUp
                                    className={'heading-2 text-primary-500'}
                                    start={number.start}
                                    end={number.end}
                                    duration={number.duration}
                                    delay={0.5}
                                    decimals={number.decimals}
                                    decimal={'.'}
                                    separator={' '}
                                    enableScrollSpy={true}
                                    scrollSpyDelay={0.5}
                                    scrollSpyOnce={false}
                                />
                                <span className="heading-2 text-primary-500">{number.valueAfter}</span>
                            </div>
                            <span className="font-sans font-bold text-gray-900 dark:text-white">{number.title}</span>
                        </div>
                    </Fade>
                </div>
            ))}

        </div>

    )
}
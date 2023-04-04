import {RotatingLines} from "react-loader-spinner";
import {useEffect, useState} from "react";

export default function Loader({darkMode}) {

    const [color, setColor] = useState(darkMode ? "#fff" : "#000000")



    return (
        <div className="fixed  bottom-4 right-4">
            <div className="">
                <RotatingLines
                    strokeColor={color}
                    strokeWidth="5"
                    animationDuration="0.90"
                    width="20"
                    visible={true}
                />
            </div>
        </div>

    )
}
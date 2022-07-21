import React, {useEffect} from "react";
import "./style.css"
import {sliderData} from "./slider-data";
import {motion} from "framer-motion";


const slidVariant = {
    move: {
        x: [0,-10,0],
        y: [0,10,0],
        opacity:[1,0,1],
        transition: {
            delay:4.5,
            repeat: Infinity,
            repeatDelay: 4,
            duration: 1,
        }
    }
}


export default function SliderItem() {
    const [slideNum, setSlideNum] = React.useState(1);
    const [sliderState, setSliderState] = React.useState(sliderData[0].url);

    useEffect(() => {
        const interval = setInterval(() => {
            if (slideNum === sliderData.length - 1) {
                setSlideNum(0);
            } else {
                setSlideNum(slideNum + 1);
            }
            setSliderState(sliderData[slideNum].url);
        }, 5000);
        return () => clearInterval(interval);
    });


    return (
        <motion.div  className="img-box" style={{
            backgroundImage: `url(${sliderState})`,
        }}
                    variants={slidVariant}
                    animate="move"
        > </motion.div>
    )

}

import { useState, useEffect } from 'react'
import {
    motion,
 
    useAnimation
} from "framer-motion";
import { useInView } from "react-intersection-observer";


const Floating = ({children, xory}) => {
    const boxVariantminusx = {
        visible: { opacity: "100%", x: 0, transition: { duration: 0.8 } },
        hidden: { opacity: "0%", x: -300 },
    }
    const boxVariantminusy = {
        visible: { opacity: "100%", y: -40, transition: { duration: 0.9 } },
        hidden: { opacity: "0%", y: 0 },
    }
    const boxVarianty = {
        visible: { opacity: "100%", y: 100, transition: { duration: 0.9 } },
        hidden: { opacity: "0%", y: 0 },
    }
    const boxVariantx = {
        visible: { opacity: "100%", x: 0, transition: { duration: 0.9 } },
        hidden: { opacity: "0%", x: 100 },
    }

    const control = useAnimation();

    const { ref, inView } = useInView()

    useEffect(() => {
        console.log(inView)

        if (inView) {
            control.start("visible")
        } else {
            control.start("hidden")
        }


    }, [control, inView])


    return (
        <motion.div
            variants={xory == '-x' ? boxVariantminusx : xory == '-y' ? boxVariantminusy : xory == 'x' ? boxVariantx: boxVarianty}
            initial="hidden"
            ref={ref}
            animate={control}
            style={{width: '100%'}}
            className='motion'
        >
            {children}
        </motion.div >

    );
}

export default Floating
import React from "react";
import {motion} from "framer-motion";

function LoadingScreen() {
    return (
        <>
        <motion.div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#252727",
                position:"relative",
            }}
            animate={{ opacity: 1}}
            transition={{ duration: 3.1 }}
        >
            <motion.div
                style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                    backgroundColor: "#d08e43",
                    position:'absolute',


                }}
                animate={{ 
                    x: ['100vw', '0vw'],
                    // bottom:[0, 100, 0, 80, 0, 60, 0, 40, 0, 20, 0, -100],
                    scale:[3, 1],
                    bottom:[500,50, 150, 50, 150, 50, 130, 30, 90, 10, 70, 0, 50, -20, 30, -40]
                }}
                transition={{ 
                    duration: 3, 
                    x: {  ease:'linear', duration:2.8 },
                    bottom:{ type: "spring", duration:2.8, bounce: 0.7 },
                    scale:{ type: "spring", duration:2.8, bounce: 0.7 }
                    }}
            />
        </motion.div>
            
        </>
    );
    
}

export default LoadingScreen;
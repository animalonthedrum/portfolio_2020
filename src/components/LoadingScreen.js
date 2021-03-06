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
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            animate={{ opacity: 1}}
            transition={{ duration: 2.1 }}
        >
            <motion.div
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    backgroundColor: "#d08e43"


                }}
                animate={{ 
                    scale:[2, 1, 2, 1, 2, 0],
                }}
                transition={{ 
                    duration: 2, 
                    scale:{ type: "spring", duration:1.8, bounce: 0.3 }
                    }}
            />
        </motion.div>
            
        </>
    );
    
}

export default LoadingScreen;
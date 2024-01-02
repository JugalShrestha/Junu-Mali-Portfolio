import React from "react"
import {motion} from "framer-motion"


const Home = React.forwardRef((props,ref) => {
    const fromBottomVairants = {
        initial:{
            y: 100,
            opacity: 0,
        },
        animation:{
            y: 0,
            opacity: 1,
        }
    }
    const fromTopVairants = {
        initial:{
            y: -100,
            opacity: 0,
        },
        animation:{
            y: 0,
            opacity: 1,
        }
    }
    const fromLeftVairants = {
        initial:{
            x: -100,
            opacity: 0,
        },
        animation:{
            x: 0,
            opacity: 1,
        },
    }
    const fromRightVairants = {
        initial:{
            x: 100,
            opacity: 0,
        },
        animation:{
            x: 0,
            opacity: 1,
        }
    }
  return (
    <div ref={ref} className="page" id="home-page">
        <motion.div variants={fromBottomVairants} transition={{delay: 0.1,type: "spring",}} initial="initial" viewport={{ once: true }} whileInView={"animation"} className="middle-component">
            <motion.div variants={fromBottomVairants} transition={{delay: 1.2,type: "spring",}} initial="initial" viewport={{ once: true }} whileInView="animation" className="hero-page-photo">
                <img src="/junu-mali-shrestha-in-pink-saree.webp" alt="" />
            </motion.div>
            <div className="texts">
                <motion.div variants={fromLeftVairants} transition={{delay: 0.5,type: "spring",}} initial="initial" viewport={{ once: true }} whileInView="animation" className="text">Hi I{"'"}m Junu</motion.div>
                <motion.div variants={fromRightVairants} transition={{delay: 0.8,type: "spring",}} initial="initial" viewport={{ once: true }} whileInView="animation" className="text">Hi I{"'"}m Junu</motion.div>
                <motion.div variants={fromTopVairants} transition={{delay: 1,type: "spring",}} initial="initial" viewport={{ once: true }} whileInView="animation" className="text">Hi I{"'"}m <span>Junu</span></motion.div>
            </div>
            <motion.div variants={fromTopVairants} transition={{delay: 0.8,type: "spring",}} initial="initial" viewport={{ once: true }} whileInView={"animation"} className="motives">
                Artist - Teacher - Creator 
            </motion.div>
        </motion.div>
        <motion.div variants={fromTopVairants} transition={{delay: 1.5,type: "spring",}} initial="initial" viewport={{ once: true }} whileInView={"animation"} className="user-nav-text">
            <div className="text">scroll to <br /> see my gallery</div>
            <svg viewBox="0 0 24 263" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9393 262.061C11.5251 262.646 12.4749 262.646 13.0606 262.061L22.6066 252.515C23.1924 251.929 23.1924 250.979 22.6066 250.393C22.0208 249.808 21.0711 249.808 20.4853 250.393L12 258.879L3.51471 250.393C2.92892 249.808 1.97917 249.808 1.39339 250.393C0.807601 250.979 0.807601 251.929 1.39339 252.515L10.9393 262.061ZM10.5 -6.55671e-08L10.5 261L13.5 261L13.5 6.55671e-08L10.5 -6.55671e-08Z" fill="black"/>
            </svg>

        </motion.div>
    </div>
  )
})

Home.displayName = "Home"

export default Home
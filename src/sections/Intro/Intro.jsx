import React, { memo, useEffect, useRef } from 'react'
import { IntroVideo } from '../../assets/assets-export'
import './Intro.css'
import { motion } from 'framer-motion'

export default memo(function Intro() {
    

  return (
    <div className='intro-container'>
        <div className="intro-wrapper">
                <motion.h1
                initial = {{opacity: 0, scale: 0.8}}
                animate = {{opacity: 1, scale: 1}}
                transition={{delay: .5,duration: 2,ease: 'circInOut'}}
                id='title' >BETTER&nbsp; PADDLES</motion.h1>
        </div>
        <video loop muted autoPlay src={IntroVideo} className='intro-bg-video'/>
    </div>
  )
})

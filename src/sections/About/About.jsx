import React from 'react'
import './About.css'
import { paddleAnimation } from '../../assets/assets-export'
import { motion } from 'framer-motion'

export default function About() {
  const variantsOdd = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -300 },
  }

  const variantsEven = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 300 },
  }
  return (
    <section className='about-container' >
      <video className='paddle-animation' muted autoPlay loop src={paddleAnimation}/>
      <div className="about-text-container">
        <motion.span className='function-txt-container' initial={variantsEven.closed} whileInView={variantsEven.open} viewport={{once: true}} transition={{duration: 3,ease: 'anticipate'}}>
          <h2>Ultra comfortable handle</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sint molestiae suscipit accusantium sequi aliquam, pariatur unde repellat harum quisquam, officia, maiores officiis animi voluptatibus illo modi doloribus numquam. Optio!</p>
        </motion.span>

        <motion.span className='function-txt-container' initial={variantsOdd.closed} whileInView={variantsOdd.open} viewport={{once: true}} transition={{duration: 3,ease: 'anticipate'}}>
          <h2>3K Carbon Fiber</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sint molestiae suscipit accusantium sequi aliquam, pariatur unde repellat harum quisquam, officia, maiores officiis animi voluptatibus illo modi doloribus numquam. Optio!</p>
        </motion.span>

        <motion.span className='function-txt-container' initial={variantsEven.closed} whileInView={variantsEven.open} viewport={{once: true}} transition={{duration: 3,ease: 'anticipate'}}>
          <h2>PADDLE PROTECTION</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sint molestiae suscipit accusantium sequi aliquam, pariatur unde repellat harum quisquam, officia, maiores officiis animi voluptatibus illo modi doloribus numquam. Optio!</p>
        </motion.span>

        <motion.span className='function-txt-container' initial={variantsOdd.closed} whileInView={variantsOdd.open} viewport={{once: true}} transition={{duration: 3,ease: 'anticipate'}}>
          <h2>Edge Gua for Paddle Protection</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sint molestiae suscipit accusantium sequi aliquam, pariatur unde repellat harum quisquam, officia, maiores officiis animi voluptatibus illo modi doloribus numquam. Optio!</p>
        </motion.span>
        
      </div>
    </section>
  )
}

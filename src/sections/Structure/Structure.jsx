import React from 'react'
import './Structure.css'
import FancyScrolling from '../../components/Fancy-scrolling/Fancy-Scrolling'
import { paddelShot } from '../../assets/assets-export'

export default function Structure() {
  return (
    <section id='structure-section' className='structure-container'>
        <FancyScrolling frameLength={233} videoRef={'.paddel-shot'} sectionName={'structure-section'} frameStart={195}/>
    </section>
  )
}

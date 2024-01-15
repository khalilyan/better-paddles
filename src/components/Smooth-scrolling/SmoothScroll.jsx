import { memo, useEffect, useState } from "react"
import Scrollbar from 'smooth-scrollbar';

const options = {
    damping: 0.08,
    renderByPixels: false
}

const Scroll = memo(() => {
 
    useEffect(() => {
      const scrollbar = Scrollbar.init(document.body, options);
        const fixedTitle = document.getElementById("title");
        const paddleRotateAnimation = document.querySelector('.paddle-animation');
        const aboutSection = document.querySelector('.about-container');
        const introContainer = document.querySelector('.intro-container');
        const AboutTextContainer = document.querySelector('.about-text-container')
        scrollbar.track.xAxis.element.remove();
        
        fixedTitle.style.position = 'absolute'
        fixedTitle.style.top =  ''
        paddleRotateAnimation.style.top = 0
        fixedTitle.style.scale = 100 + '%'

        const handleScroll = ({ offset }) => {  
          fixedTitle.style.top = 38+offset.y*0.1 + '%';
          fixedTitle.style.scale = 100+offset.y*10 + '%'
          //ABOUT SECTION PADDLE TRANSFORMS
          if (aboutSection) {
            const containerRect = aboutSection.getBoundingClientRect();
            const isFullViewport = containerRect.top <= 0 ;

            if(isFullViewport){
              fixedTitle.style.display = 'none'
              paddleRotateAnimation.style.top = offset.y*0.0070 + 'vh'
            } else {
              fixedTitle.style.display = 'block'
            }


            if(Math.floor(offset.y-introContainer.clientHeight)>=AboutTextContainer.clientHeight/5){
              paddleRotateAnimation.style.transform = `translate(120vh,80vh)`
            } else {
              paddleRotateAnimation.style.transform = `translate(0%,0%)`
            }

            if(Math.floor(offset.y-introContainer.clientHeight)>=(AboutTextContainer.clientHeight/2.8)){
              paddleRotateAnimation.style.transform = `translate(0,160vh)`
            }

            if(Math.floor(offset.y-introContainer.clientHeight)>=(AboutTextContainer.clientHeight/1.8)){
              paddleRotateAnimation.style.transform = `translate(120vh,230vh)`
            }

          }
          
        };
        
        scrollbar.addListener(handleScroll);

        return () => {
          scrollbar.removeListener(handleScroll);
        };
      }, []);
      
    return null
})

export default Scroll;
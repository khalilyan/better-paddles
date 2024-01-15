import React, { memo, useEffect, useRef, useState } from 'react';
import './Fancy-Scrolling.css'
import Scrollbar from 'smooth-scrollbar';
import { paddelShot } from '../../assets/assets-export';

const options = {
  damping: 0.09,
  renderByPixels: false
}

const FancyScrolling = memo(({frameLength,frameStart,sectionName}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const scrollbar = Scrollbar.init(document.body, options);
  
  const frameUrls = Array.from({ length: frameLength }, (_, i) => {
    return require(`../../assets/frames1/frame${(i+frameStart).toString().padStart(3, '0')}.png`);
  });
  
  const preloadImages = () => {
    const imagePromises = frameUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
      });
    });
  
    return Promise.all(imagePromises);
  };

  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const video = document.querySelector('.paddel-shot');
    contextRef.current = context;
    const sectionAnimate = document.querySelector('#'+sectionName);
    
    const img = new Image();
    img.src = frameUrls[0];
    canvas.width = 1440;
    canvas.height = 810;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    video.load()

    const currentFrame = index => frameUrls[index]


    const updateImage = index => {
        img.src = currentFrame(index-frameStart);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    

    const handleScroll = () => {
      
      const containerRect = sectionAnimate.getBoundingClientRect();
      const isFullViewport = containerRect.top <= 0 && containerRect.bottom >= window.innerHeight;

      if(sectionAnimate && isFullViewport && canvasRef){
        const scrollTop = scrollbar.scrollTop;
        const maxScrollTop = scrollbar.limit.y;
        const scrollFraction = (scrollTop / maxScrollTop);
        
        let frameIndex = Math.min(
          frameLength,
          Math.ceil(scrollFraction * scrollFraction * scrollFraction * frameLength)
        );
          
        canvasRef.current.style.position = 'fixed'
        canvasRef.current.style.top = (scrollTop) + 'px';
        
        if(frameIndex + frameStart>=325){
          video.load()
          canvas.style.display = 'none'
          video.style.display = 'block'
        } else {
          canvas.style.display = 'block'
          video.style.display = 'none'
        }

        requestAnimationFrame(() => updateImage(frameIndex + (frameStart)));
      }
  }

    preloadImages();
    
    scrollbar.addListener(handleScroll);

    return () => {
      scrollbar.removeListener(handleScroll);
    };
  }, [frameUrls]);


  return (
    <div className='fancy-Container'>
          <canvas ref={canvasRef}/>
          <video className='paddel-shot' src={paddelShot} muted autoPlay/>         
    </div>
  )
});

export default FancyScrolling;
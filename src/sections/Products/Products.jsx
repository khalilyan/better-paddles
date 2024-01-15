import React, { memo, useEffect, useRef, useState } from 'react'
import './Products.css'
import { items } from './bg-animate-items'
import Scrollbar from 'smooth-scrollbar';

const options = {
  damping: 0,
  renderByPixels: false
}

export default memo(function Products() {
  const ballRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      ballRef.current.style.top = `${100-event.clientY/25}px`
      ballRef.current.style.left = `${1000-event.clientX/15}px`
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, [])

  useEffect(()=>{
  const scrollbar = Scrollbar.init(document.body, options);
  const container = document.querySelector('.products-container');
  const wrapper = document.querySelector('.products-wrapper');
  const title = document.querySelector('.products-title');
  scrollbar.track.xAxis.element.remove()
    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const isFullViewport = containerRect.top <= 0 && containerRect.bottom >= window.innerHeight;
      if(isFullViewport && title){
        wrapper.style.position = 'fixed'
        wrapper.style.top = scrollbar.scrollTop + 'px';
      }
      if(-containerRect.y>=containerRect.height/2){
        title.style.right = 0 + 'vh'
      } else {
        title.style.right = '-300vh'
      }
    }
    scrollbar.addListener(handleScroll);

    return () => {
      scrollbar.removeListener(handleScroll)
    }
  },[])
  
  return (
    <div  className='products-container'>
      <div className="products-wrapper">
        <div ref={ballRef} className="items-container">
          {
            items.map(item=>(
              <img src={item.paddleUrl} />
            ))
          }
        </div>
        <span><h1 className='products-title'>BETTER PADDELS</h1></span>
      </div>
    </div>
  )
})

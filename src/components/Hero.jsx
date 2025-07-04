import React from 'react';
import { FaChevronDown } from "react-icons/fa6";
import BackgroundHero from '../assets/herobackground.mp4';
import '../styles/Hero.css';

export default function Hero() {
    return (
      <section className='hero'>
              <div className='filter'>
                <div className='hero-content'>
                  <a href='#' className='container'>
                    <div className='icono'><img src="/riverplate.svg" alt="River Plate Logo" className="logo" /></div>
                    <h1 className="title">River Plate</h1>
                    <p>Pasión, gloria y una historia eterna</p>
                  </a>
                  <a href='#historia' className='arrow'>
                    <p>Explorar</p>
                    <FaChevronDown color='#fff' size={'2em'}/>
                  </a>
                </div>
              </div>
              <div className="video-overlay">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='background video'
                  >
                  <source src={BackgroundHero} type="video/mp4" />
                </video>
              </div>
      </section>
    )
}

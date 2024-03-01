/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useDarkMode } from '../components/DarkModeContext';
import banner2 from '../assets/assets/banner2.jpg';

function Banner() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);

  const { darkMode,toggleDarkMode } = useDarkMode();

  return (
    <section className={`${darkMode ? 'dark:bg-black' : 'light:bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 flex lg:flex-row justify-between items-center gap-6`}>
      <div className='lg:w-[50%] w-full'>
        <img data-aos='zoom-in' src={banner2} alt='banner-image ' className='aos-init aos-animate' />
      </div>
      <div className='lg:w-[50%] w-full lg:p-10 flex flex-col justify-center items-center gap-8 '>
        <h1 data-aos="zoom-in" data-aos-delay="200" className="uppercase text-2xl text-slate-500 dark:text-black text-center aos-init aos-animate">upto 60% off</h1>
        <h1 data-aos='zoom-in' data-aso-delay="400" className='lg:text-5xl text-4xl font-bold text-black dark:text-black line-clamp-5 text-center uppercase aos-init aos-animate'>Unleash your style <br /> potential with our <br /> spectacular clothing <br /> style</h1>
        <p data-aos="zoom-in" data-aos-delay="600" className='text-center text-xl text-slate-700 dark:text-black aos-init aos-animate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestias aperiam nisi quae possimus. Qui, laborum. Voluptate eum, dolore reiciendis dignissimos, similique, quod rerum qui consequuntur fugiat deserunt itaque commodi.</p>
        <button data-aos='zoom-in' data-aos-delay=
        "800" className='bg-black text-white dark:bg-dark font-bold text-sm px-10 py-4 rounded-md transform hover:scale-105 transition-transform duration-300'>Shop Now</button>
      </div>
    </section>
  );
}

export default Banner;

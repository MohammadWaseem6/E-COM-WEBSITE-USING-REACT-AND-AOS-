import Aos from 'aos';
import banner4 from '../assets/assets/banner4.jpg';
import { useDarkMode } from '../components/DarkModeContext';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function Hero() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <section
      id='hero'
      className={`w-full lg:px-20 lg:py-20 py-8 lg:h-screen h-fit flex flex-col lg:flex-row justify-between items-center bg-cover bg-center gap-10`}
      style={{ backgroundColor: darkMode ? '#19191a' : '#CBD5E0' }}
    >
      <div className='flex flex-col justify-center items-start gap-6 lg:w-[60%] w-full'>
        <h1 data-aos='zoom-in' className={`text-3xl italic ${darkMode ? 'text-white' : 'text-black'}`}>Chick Chrisma</h1>
        <h1 data-aos='zoom-in' className={`lg:text-7xl text-6xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Effortless <br />glamour for <br />every occasion</h1>
        <button
          data-aos='zoom-in'
          className={`border-2 border-black bg-black px-10 py-4 font-semibold text-white text-lg rounded-lg mt-8 hover:bg-white hover:text-black ${darkMode ? 'dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white' : ''} cursor-pointer`}
        >
          Shop Now
        </button>

      </div>
      <div id='image-box' className='lg:w-[40%] w-full'>
        <img data-aos='zoom-in' src={banner4} alt='hero image' className='bg-cover bg-center' />
      </div>
    </section>
  );
}

export default Hero;

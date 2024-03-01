/* eslint-disable no-unused-vars */
 import logo1 from '../assets/assets/clients/logo1.png'
 import logo2 from '../assets/assets/clients/logo2.png'
 import logo3 from '../assets/assets/clients/logo3.png'
import logo4 from '../assets/assets/clients/logo4.png'
import logo5 from '../assets/assets/clients/logo5.png'
import logo6 from '../assets/assets/clients/logo6.png'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useDarkMode } from '../components/DarkModeContext';

function Clients() {
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
    <section className={`${darkMode ? 'bg-black' : 'bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-between items-center gap-6`}>
       <h1 className={`uppercase text-2xl ${darkMode ? 'text-white' : 'text-slate-500'} font-normal text-center aos-init aos-animate`}>Top Brands</h1>
      <h1 data-aos='zoom-in' className={`uppercase text-5xl ${darkMode ? 'text-white' : 'text-black'} font-semibold text-center aos-init aos-animate`}>Popular Brands</h1>
    
      <div className='flex flex-wrap flex-col lg:flex-row justify-between items-center gap-6 w-full lg:mt-10 mt-6'>

        <img src={logo1} alt='client logo'  className='aos-init aos-animate' data-aos='zoom-in' data-aos-delay='200'
          width={180} height={180}
        />
        <img src={logo2} alt='client logo'  className='aos-init aos-animate' data-aos='zoom-in' data-aos-delay='400'
          width={180} height={180}
        />
        <img src={logo3} alt='client logo'  className='aos-init aos-animate' data-aos='zoom-in' data-aos-delay='600'
          width={180} height={180}
        />
        <img src={logo4} alt='client logo'  className='aos-init aos-animate' data-aos='zoom-in' data-aos-delay='800'
          width={180} height={180}
        />
        <img src={logo5} alt='client logo'  className='aos-init aos-animate' data-aos='zoom-in' data-aos-delay='1000'
          width={180} height={180}
        />
        <img src={logo6} alt='client logo'  className='aos-init aos-animate' data-aos='zoom-in' data-aos-delay='1200'
          width={180} height={180}
        />
      </div>
    </section>
  );
}

export default Clients;

import { newarrivals } from '../components/export';
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';
import { useDarkMode } from '../components/DarkModeContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function NewArrivals() {
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
    <section className={`${darkMode ? 'bg-black' : 'bg-slate-200'} w-full lg:px-20 px-10 lg:py-20 py-10 flex lg:flex-col justify-between items-center gap-6`}>
      <h1 data-aos='zoom-in' className={`${darkMode ? 'text-white' : 'text-slate-500'} uppercase text-2xl text-center aos-init aos-animate`}>Top Products</h1>
      <h1 data-aos='zoom-in' className={`${darkMode ? 'text-white' : 'text-black'} text-5xl font-semibold text-center aos-init aos-animate`}>New Arrivals</h1>

      <div data-aos='slide-up' className='w-full flex lg:flex-row flex-col justify-center items-center flex-wrap gap-8 mt-3 aos-init aos-animate'>
        {newarrivals.map((item, index) => (
          <div key={index} id='product-box' className={`flex flex-col justify-center items-start gap-2 ${darkMode ? 'bg-black' : 'bg-white'} rounded-xl`}>

            <div id='image-box' className='relative cursor-pointer'>
              <img src={item.image} alt='' className='w-[400px] h-[250px] rounded-lg' />
              <div id='icon-box' className='flex-col justify-center items-center gap-2 absolute top-3 right-3 hidden'>
                <div className='bg-white p-3 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-transform duration-300'><FaRegHeart /></div>
                <div className='bg-white p-3 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-transform duration-300'><IoSearch /></div>
                <div className='bg-white p-3 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-transform duration-300'><AiOutlineShoppingCart /></div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-start gap-3 p-4'>
              <p className={`italic ${darkMode ? 'text-white' : 'text-black'}`}>{item.category}</p>
              <h1 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{item.title}</h1>
              <h1 className={`text-red-600 font-bold text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>{item.price}</h1>
              <button data-aos='slide-up' className={`bg-black font-bold text-white text-sm px-5 py-2 rounded-md transform hover:scale-105 transition-transform duration-300 mt-2`}>Shop Now</button>
            </div>

          </div>
        ))}
      </div>

      <button data-aos='zoom-in' className={`text-black bg-transparent border-black border-2 px-8 py-4 rounded-md transform hover:scale-105 transition-transform duration-300 mt-10`}>View All Products</button>

    </section>
  );
}

export default NewArrivals;

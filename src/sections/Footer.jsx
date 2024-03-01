/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { footericons } from "../components/export"
import { FaFacebook, FaLinkedin, FaTwitter, FaArrowUp, FaInstagram, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"
import { IoMdArrowRoundForward } from "react-icons/io";
import foooterlogo from '../assets/assets/clients/footer-logo.svg'
import { FaMoon, FaSun } from "react-icons/fa"
import { useDarkMode } from "../components/DarkModeContext"
import { Link } from "react-scroll"
import { useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <section className={`${darkMode ? 'dark bg-[#19191a]' : 'light bg-white'} w-full lg:px-20 px-10 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`}>
        <div data-aos='zoom-in' id="icon-boxes" className="flex justify-between lg:items-center items-start lg:flex-row flex-col  w-full gap-6">
          {
            footericons.map((item, index) => (
              <div key={index} className="flex justify-between  items-center gap-3">
                <div id="icom-box" className="border-2  dark:text-black border-slate-300 rounded-full  p-4 hover:bg-black hover:text-white  cursor-pointer">
                  {
                    item.icon && <item.icon className="w-[25px] h-[25px]" />
                  }
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-2xl font-semibold text-black dark:text-black"> {item.title} </h1>
                  <p className="text-[17px] text-slate-600 dark:text-black"> {item.para} </p>
                </div>
              </div>
            ))
          }

        </div>
      </section >

      <section id="main-footer" className={`${darkMode ? 'dark bg-[#19191a]' : 'light bg-black'} w-full px-10 lg:py-20  py-10  grid lg:grid-cols-5 grid-col-1  justify-between items-start gap-14`}>
        <div data-aos="zoom-in" data-aos-delay="200" className=" flex flex-col justify-center items-start gap-5" >
          <img src={foooterlogo} alt="footer-logo" />
          <p className="text-lg text-justify text-slate-300"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit harum dolorem nostrum facilis repellat ab totam, quidem vero ea fuga. </p>
          <div id="social-icons" className="grid grid-cols-4 gap-3 ">
            <div className="flex justify-between items-center gap-3 mt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" id="social-icon-box-fb" className="border-2 bg-slate-300 rounded-full p-3 hover:text-white hover:bg-black cursor-pointer">
                <FaFacebook className="w-[20px] h-[20px]" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" id="social-icon-box-insta" className="border-2 bg-slate-300 rounded-full p-3 hover:text-white hover:bg-black cursor-pointer">
                <AiFillInstagram className="w-[20px] h-[20px]" />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" id="social-icon-box-linkedin" className="border-2 bg-slate-300 rounded-full p-3 hover:text-white hover:bg-black cursor-pointer">
                <FaLinkedin className="w-[20px] h-[20px]" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" id="social-icon-box-twitter" className="border-2 bg-slate-300 rounded-full p-3 hover:text-white hover:bg-black cursor-pointer">
                <FaTwitter className="w-[20px] h-[20px]" />
              </a>
              <a href="https://github.com/MohammadWaseem6" target="_blank" rel="noopener noreferrer" id="social-icon-box-twitter" className="border-2 bg-slate-300 rounded-full p-3 hover:text-white hover:bg-black cursor-pointer">
                <FaGithub className="w-[20px] h-[20px]" />
              </a>
            </div>

          </div>
        </div>

        <div data-aos='zoom-in' data-aos-delay='600' className=" flex flex-col justify-center items-start gap-3 aos-init aos-animate hover:bg-black text-white ml-4">
          <h1 className="text-xl font-semibold">About us</h1>
          <h1 className="text-lg text-slate-300">Our Story</h1>
          <h1 className="text-lg text-slate-300">Mission &amp; Values</h1>
          <h1 className="text-lg text-slate-300">Meet the team</h1>
          <h1 className="text-lg text-slate-300">Sustainability Efforts</h1>
          <h1 className="text-lg text-slate-300">Brand Partnerships</h1>
          <h1 className="text-lg text-slate-300">Influencer Collaborations</h1>
        </div>
        <div data-aos='zoom-in' data-aos-delay='800' className=" flex flex-col justify-center items-start gap-3 aos-init aos-animate hover:bg-black text-white">
          <h1 className="text-xl font-semibold">Accessibility</h1>
          <h1 className="text-lg text-slate-300">Our Story</h1>
          <h1 className="text-lg text-slate-300">Mission &amp; Values</h1>
          <h1 className="text-lg text-slate-300">Meet the team</h1>
          <h1 className="text-lg text-slate-300">Sustainability Efforts</h1>
          <h1 className="text-lg text-slate-300">Brand Partnerships</h1>
          <h1 className="text-lg text-slate-300">Influencer Collaborations</h1>
        </div>
        <div data-aos='zoom-in' data-aos-delay='1000' className=" flex flex-col justify-center items-start gap-3 aos-init aos-animate hover:bg-black text-white">
          <h1 className="text-xl font-semibold">Join Our Community</h1>
          <h1 className="text-lg text-slate-300">Our Story</h1>
          <h1 className="text-lg text-slate-300">Mission &amp; Values</h1>
          <h1 className="text-lg text-slate-300">Meet the team</h1>
          <h1 className="text-lg text-slate-300">Sustainability Efforts</h1><h1 className="text-lg text-slate-300">Brand Partnerships</h1>
          <h1 className="text-lg text-slate-300">Influencer Collaborations</h1></div>
        <div data-aos="zoom-in" data-aos-delay="1200" className=" flex flex-col justify-center items-start gap-6 w-full hover:bg-black text-white  ">
          <h1>Let's get in touch </h1>
          <p> Sign in for our newsletter & gets 50% off</p>
          <div id="form" className=" flex justify-center items-cener gap-1 bg-white  rounded-xl  p-2  w-full">
            <input type="email" placeholder="Enter your valid email here..." className="px-4 py-2 w-full " />
            <button className="text-black pr-3"><IoMdArrowRoundForward size={20} color="black" /> </button>
          </div>
        </div>
      </section>
      <button onClick={toggleDarkMode} className="flex items-center p-6  rounded-full bg-gray-900 fixed top-[350px] right-[10px] ">
        {darkMode ? <FaMoon size={30} className="text-white" /> : <FaSun className="text-white" />}
      </button>
      <div id="icon-box" className="bg-yellow-500 text-black rounded-full  hover:bg-white  cursor-pointer fixed lg:bottom-6  right-6 basis-6">
        <Link to="hero" smooth={true} span={true} duration={500}>
  <FaArrowUp className="w-[50px] h-[50px]" />
</Link>

      </div>

    </>
  )
}

export default Footer

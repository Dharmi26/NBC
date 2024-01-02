import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
const Footer = () => {
  return (
    <div>
      {/* subscribing newsletter */}
      <div className='bg-gray-300 mb-10 py-20 flex flex-row justify-between items-center'>
        <h1 className='w-1/2 font-extrabold text-3xl text-center'>SUBSCRIBE NEWSLETTER</h1>
        <div className='w-1/2 flex flex-row gap-4'>
          <input
            className='w-2/3 rounded-md h-10 px-4 focus:outline-none transition duration-300'
            placeholder='Your email address'
          /> 
          <button className='bg-black px-5 text-white h-10 rounded-md hover:bg-transparent transition duration-300 ease-in-out hover:text-black border border-black'>
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* links */}
      <div className='px-20 pb-16 flex flex-row gap-5 justify-center'>
        <div className='w-1/2 flex flex-col gap-5'>
          <div>
            <h1 className='font-extrabold'>Contact Us</h1>
            <h2 className='font-bold -mt-2'>_ _ _ _</h2>
          </div>
          <div className='text-gray-400 flex flex-col gap-5'>
            <p>Nothing Before Coffee</p>
            <div className='flex flex-row gap-2 cursor-pointer'>
              <div className='bg-gray-200 rounded-full p-2'>
                <IoIosCall className='text-gray-600' />
              </div>
              <p>(+91) 9782485948 | 9929123540 | 9610085666</p>
            </div>
            <div className='flex flex-row gap-2 cursor-pointer'>
              <div className='bg-gray-200 rounded-full p-2'>
                <FaTelegramPlane className='text-gray-600' />
              </div>
              <p>info@nothingbeforecoffee.com</p>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 cursor-pointer'>
              <div className='bg-gray-200 rounded-full p-2'>
                <FaLocationDot className='text-gray-600' />
              </div>
              <p>Plot no. 2, Sharma Colony, 22 Godam Industrial Area, Jaipur. 302006</p>
            </div>
            <img src="https://www.nothingbeforecoffeeindia.com/public//front/images/app-download.png" className='cursor-pointer' />
          </div>
        </div>
        <div className='w-1/4 flex flex-col gap-5'>
          <div>
            <h1 className='font-extrabold'>Follow Us</h1>
            <h2 className='font-bold -mt-2'>_ _ _ _</h2>
          </div>
          <div className='text-gray-400 flex flex-col gap-2'>
            <div className='flex flex-row gap-2 cursor-pointer'>
              <div className='bg-gray-200 rounded-full p-2'>
                <FaFacebookF className='text-gray-600' />
              </div>
              <p>Facebook</p>
            </div>
            <div className='flex flex-row gap-2 cursor-pointer'>
              <div className='bg-gray-200 rounded-full p-2'>
                <FaTwitter className='text-gray-600' />
              </div>
              <p>Twitter</p>
            </div>
            <div className='flex flex-row gap-2 cursor-pointer'>
              <div className='bg-gray-200 rounded-full p-2'>
                <FaLinkedinIn className='text-gray-600' />
              </div>
              <p>Linkedin</p>
            </div>
            <div className='flex flex-row gap-2 cursor-pointer'>
              <div className='bg-gray-200 rounded-full p-2'>
                <FaInstagram className='text-gray-600' />
              </div>
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <div className='w-1/4 flex flex-col gap-5'>
          <div>
            <h1 className='font-extrabold'>Useful Links</h1>
            <h2 className='font-bold -mt-2'>_ _ _ _</h2>
          </div>
          <ul className='text-gray-400 flex flex-col gap-2'>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Locations</li>
            <li className='cursor-pointer'>Careers</li>
            <li className='cursor-pointer'>Privacy Policy</li>
            <li className='cursor-pointer'>Shipping Policy</li>
            <li className='cursor-pointer'>Refund Policy</li>
            <li className='cursor-pointer'>Terms & Conditions</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        <div className='w-1/4'>
          <img src={logo} />
          <div className='text-gray-600 flex flex-row gap-5 my-5'>
            <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
              <FaFacebookF className='text-gray-600' />
            </div>
            <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
              <FaTwitter className='text-gray-600' />
            </div>
            <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
              <FaInstagram className='text-gray-600' />
            </div>
            <div className='bg-gray-200 rounded-full p-2 cursor-pointer'>
              <FaLinkedinIn className='text-gray-600' />
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className='text-center bg-gray-300 py-6 flex flex-row items-center justify-center gap-1 text-xs'>
        <p>© 2024</p>
        <h1 className='font-bold'>NOTHING BEFORE COFFEE.</h1>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

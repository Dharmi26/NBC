import React from 'react';

const Home = () => {
  return (
    <div>

      {/* hero image section */}
      <div className='w-full'>
        <img
          src="https://www.nothingbeforecoffeeindia.com/public/admin/images/home_slider/AnUwx-113720-hsK.jpg"
          className='w-full h-auto max-w-full' // Add this line to limit the max width
          alt="Slider Image"
        />
      </div>

      {/* about section */}
      <div className='my-16 relative z-10'>
        <h1 className='font-extrabold text-3xl text-center'>WHO WE ARE</h1>
        <p className='text-md text-justify text-gray-500 font-medium px-48 py-8'>We Started NBC In 2017 With An Approach Of Delivering Freshly Brewed Coffee With Fresh Ingredients. Our Target Was To Reach Out To Every Nook And Corner Of The City To Spread That Fragrant Aroma Of Freshly Brewed Coffee. NBC Is The Perfect Place To Enjoy And Feel Every Sip Of Your Favorite Beverage. A Huge Menu Of More Than 100 Beverages Offered From Different Categories With Coffee As Core Product Is Served Here, Being The QSR Model We Tend To Serve In Large Quantities With Super Classic Quality.</p>
        <div className='absolute -left-48 -bottom-22'>
         <img src="https://nothingbeforecoffeeindia.com/public/admin/images/banner/n4b0s-062524-1cX.png" width="400" alt="Banner Image"/>
        </div>
      </div>

      {/* Our location section */}
      <div className='relative text-center z-1'>
          <img src="https://www.nothingbeforecoffeeindia.com/public/admin/images/banner/bfY6Y-062524-tIt.jpg" alt="Location Image"/>
          <h1 className='font-extrabold cursor-pointer text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>OUR LOCATIONS</h1>
          <p className='font-semibold cursor-pointertext-sm opacity-60 text-gray-300 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>49 OUTLETS IN 25 CITIES</p>
      </div>

      {/* Best Sellers section */}
      <div className='flex flex-row justify-center items-center gap-10 my-20 mx-20'>
        <div className='flex-1'>
          <h1 className='font-extrabold text-lg mb-16 tracking-widest'>B E S T S E L L E R S</h1>
          <h1 className='font-bold text-2xl mb-5'>ICED TEA</h1>
          <p className='font-medium text-md'>Lets raise our glasses to the cool, crisp taste of iced tea. Join us for a refreshing rendezvous!</p>
        </div>
        <div className='flex-1'>
          <img src="https://www.nothingbeforecoffeeindia.com/public/admin/images/slider/5xqnk-013156-iPW.png" className='w-3/4' alt="Best Seller Image"/>
        </div>
      </div>


    {/* Testimonials */}
    <div className='flex flex-col justify-center items-center mb-20'>
      <h1 className='text-3xl font-extrabold tracking-wide'>WHAT OUR CUSTOMERS SAYING?</h1>
      <div className='flex flex-row justify-center items-center gap-5 mx-40 my-16'>
        <div className='p-10 rounded-tl-3xl shadow-lg flex-1 flex flex-col justify-center text-center bg-gray-100'>
          <hr className='h-px bg-gray-200 border-1'/>
          <p className='text-gray-400 italic text-sm'>With a lot more add onns in menu makes menu a lot more interesting. Apart from drinks I would definitely like to suggest their Tandoori maagi and Brownie with ice-cream. Shortage of space in outlet is totally covered by seating in porch outside.</p>
          <h1 className='mt-5 font-bold text-sm'>siddhant ajmera</h1>
          <p className='mt-2 text-green-500 text-xs italic'>Smoothie Bartender</p>
        </div>
        <div className='p-10 rounded-tl-3xl shadow-lg flex-1 flex flex-col justify-center text-center bg-gray-100'>
          <hr className='h-px bg-gray-200 border-1'/>
          <p className='text-gray-400 italic text-sm'>With a lot more add onns in menu makes menu a lot more interesting. Apart from drinks I would definitely like to suggest their Tandoori maagi and Brownie with ice-cream. Shortage of space in outlet is totally covered by seating in porch outside.</p>
          <h1 className='mt-5 font-bold text-sm'>siddhant ajmera</h1>
          <p className='mt-2 text-green-500 text-xs italic'>Smoothie Bartender</p>
        </div>
        <div className='p-10 rounded-tl-3xl shadow-lg flex-1 flex flex-col justify-center text-center bg-gray-100'>
          <hr className='h-px bg-gray-200 border-1'/>
          <p className='text-gray-400 italic text-sm'>With a lot more add onns in menu makes menu a lot more interesting. Apart from drinks I would definitely like to suggest their Tandoori maagi and Brownie with ice-cream. Shortage of space in outlet is totally covered by seating in porch outside.</p>
          <h1 className='mt-5 font-bold text-sm'>siddhant ajmera</h1>
          <p className='mt-2 text-green-500 text-xs italic'>Smoothie Bartender</p>
        </div>
      </div>
      <h1 className='font-extrabold text-3xl tracking-wide'>FIND US ON INSTAGRAM</h1>
      <p className='font-semibold text-md text-gray-400 mt-5'>Nothing Before Coffee</p>
      <button className='bg-black text-white px-5 py-2 mt-5'>Visit Now</button>
    </div>
    </div>
  );
}

export default Home;

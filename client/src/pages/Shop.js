import React from 'react'

const Shop = () => {
  return (
    <div className='pt-40 pb-20 z-0'>
      <div className='flex flex-col gap-5 justify-center items-center font-extrabold'>
        <h1 className='tracking-widest'>Our Products</h1>
        <h1 className='text-3xl'>Nothing Before Coffee Products</h1>
      </div>

      <div className='flex flex-row gap-5 mt-28 mx-10'>

        <div className='w-1/4 opacity-60 bg-black'>
          <img src="https://nothingbeforecoffeeindia.com/public/admin/images/page_banner/3lAC7-051745-5PA.jpg"/>
        </div>

        <div className='w-3/4'>
          <div className='bg-gray-300 flex flex-row gap-2 justify-end align-middle items-center p-5'>
            
            <label for="itemsperpage" className="block mb-2 text-sm font-medium text-gray-900">Items per page</label>
            <select id="itemsperpage" className="bg-gray-50 text-gray-900 text-sm rounded-lg w-1/8 p-2">
              <option value="9" selected>9</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>

          </div>

          <div>
            <div>cards</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Shop

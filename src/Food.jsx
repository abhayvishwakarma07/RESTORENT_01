import React from 'react'
import Product from '../public/product.json'

function Food() {
  return (
    <>
     <div className='md:py-20 justify-items-center'>
        <div className='w-5/6 justify-items-center'>
            <h1 className='m-4 text-4xl font-bold'>Our all product</h1>
            <p>we proviede a best quily in our food in last 10 year indea besg restorent Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, obcaecati cupiditate laboriosam consectetur qui at? Necessitatibus vel cum nemo vitae voluptatibus commodi minus velit expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ipsa architecto unde nostrum aliquid cumque, consequuntur error similique? Reiciendis totam eius repudiandae officiis sapiente facere. </p>
        </div>
        <div className='flex flex-wrap justify-center bg-gray-50 '>
            {
               Product.map((row)=>(
                <div className='w-64 p-2 m-5 transition-transform duration-300 bg-white shadow-2xl justify-items-center rounded-2xl hover:scale-110'>
                    <div><img src={row.food_image} alt="" className='w-56 h-56 rounded-full'/></div>
                    <h1 className='font-bold'>{row.food_name}</h1>
                    <p>{row.food_description}</p>
                    <h3 className='font-bold'>${row.food_price}</h3>
                    <button className="p-2 rounded-2xl bg-amber-300 hover:bg-amber-500">ORDER NOW</button>
                </div>
               ))
            }
        </div>
     </div>
    </>
  )
}

export default Food

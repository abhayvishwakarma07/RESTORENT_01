import React from 'react'
import Product from './../public/top.json'

function TopProduct() {
  return (
<>
<div className='justify-center m-5'>
    <div><h1 className='text-3xl font-bold'>FAST FOOD &gt;&gt;</h1></div>
    <div className='flex flex-wrap justify-center gap-5 '>
        {
            Product.map((row)=>(
                <div className='w-56 h-auto m-5 w-[300px] justify-items-center transition-transform duration-500 hover:scale-105 bg-white p-6 rounded-lg shadow-2xl'> 
                    <img className='w-50 h-50 object-cover transition-transform duration-500 hover:rotate-[360deg] rounded-full' src={row.img} alt="" />
                    <h1 className='text-xl font-bold uppercase' >{row.food}</h1>
                    <p>{row.dis}</p>
                    <h3>${row.price}</h3>
                    <h2 className='font-bold'>{row.restorent}</h2>
                    <button className='p-2 font-bold bg-amber-300 hover:bg-amber-500 rounded-xl'>Order NOW </button>
                </div>
            ))
        }
    </div>
</div>
</>
  )
}

export default TopProduct

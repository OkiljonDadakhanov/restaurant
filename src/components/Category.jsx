import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
  console.log(categories)
  return (
    <div className='max-w-[1640px] px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center mb-8'>Top Rated New Items</h1>
      <div className='grid grid-cols-2 mg:grid-cols-4 gap-6 '>
        {categories.map((item, index) => (
            <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                <img  src={item.image} alt={item.name} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Category

import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='testimonial-card-container h-full flex justify-between flex-col mt-8 bg-white colorsecondary p-4 round20 shadow-md'>
      <p className='fw500'>"<span className='text-gray-400'>Faraz is the best. With lots of complications with my website he still managed</span>  to get me a solution and was very patient with the challenges we had along the way. Definitely working with him again and again. I love my new website. Thank you."</p>
      <h3 className='font16 fw500 text-gray-700 text-right mt-3'>Customer Name</h3>
      <h3 className='font14 fw300 text-gray-700 text-right'>-CEO Name</h3>
    </div>
  )
}

export default TestimonialCard
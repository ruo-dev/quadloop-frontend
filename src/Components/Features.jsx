import React from 'react'

const Features = ({imgUrl, feature}) => {
  return (
    <div className="bg-white rounded-3xl flex items-center flex-col p-4 shadow-xl">
      <img src={imgUrl} alt="feature" className='w-24 lg:w-32'/>
      <p className='text-gray-800 text-xl font-bold'>{feature}</p>
    </div>
  )
}

export default Features
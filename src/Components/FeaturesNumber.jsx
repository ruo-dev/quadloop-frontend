import React from 'react'
import CountUp from 'react-countup';

const FeaturesNumber = ({imgUrl, feature, number, ending, point}) => {
  return (
    <div className="bg-white p-4 rounded-3xl flex flex-col w-36 lg:w-48 text-center shadow-2xl shadow-black/30 items-center justify-center">
      <img src={imgUrl} alt="feature" className='w-24 p-4'/>
      <h4><CountUp end={number} duration={10} suffix={ending} enableScrollSpy={true} decimals={point} className=' text-teal-400 font-bold text-4xl'/></h4>
      <p className='font-bold'>{feature}</p>
    </div>
  )
}

export default FeaturesNumber
import React from 'react'

const Title = ({title}) => {
  return (
    <div className='grid items-center'>
         <h1 className='text-5x1 lg:text-4x1 md:text-3x1 font-bold text-slate-900
           filter drop-shadow-lg  '>{title}</h1>
    </div>
  )
}

export default Title

import React from 'react'
import Title from './utlis/Title'
import Item from './utlis/Item'

const Sales = ({ ifExists ,  endpoints:{title , items} }) => { 
  // console.log(endpoints)
  return (
   <>
    <div className='nike-container my-10'>
        <Title title={title}/>
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists?`grid-cols-3 
         xl:grid-cols-2 sm:grid-cols-1`:`grid-cols-4 xl:grid-cols-3 
         md:grid-cols-2 sm:grid-cols-1` }  `}> {
             items?.map((item,i)=>(
                  <Item {...item} key={i} ifExists={ifExists} />
             ))
        }
         </div>
    </div>
    </> 
  )
}

export default Sales

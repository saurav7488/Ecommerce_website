import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setAddItemToCart } from '../../app/cartSlice';

const Item = ({ ifExists ,id,color,shadow,title,text,img,btn,rating,price}) => {

  const dispatch = useDispatch();
  const OncartToggle=()=>{
    dispatch(setOpenCart({
          cartState:true
    }))
}
   const onAddTocart=()=>{ 
         const item = {id,title,text,img,color,shadow,price};
         dispatch(setAddItemToCart(item))
   }
  return (
    <>
         <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${ifExists?`justify-
         items-start`:`justify-items-center`} justify-items-center  
         rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 
            
            `}>
           <div className='grid items-center justify-items-center  '>  
                <h1 className='text-slate-200 ext-xl lg:text-lg md:text-base font-medium filter drop-shadow-sm '>{title}</h1>

               <p className='text-slate-200 filter drop-shadow-sm 
                 text-base md:text-sm font-normal   '>{text}</p>

               <div className='flex items-center justify-between w-28 my-2  '>
                    <div className='flex items-center bg-white/80 px-1 rounded '> <h1 className='text-black 
                    text-sm blur-effect-theme '>${price}</h1></div>
                    <div className='flex items-center gap-1'><StarIcon className='icon-style text-slate-900 ' /><h1>{rating}</h1></div>
               </div>

               <div className='flex items-center gap-3'>
                   <button onClick={()=>onAddTocart()} type='button' className='bg-white/90  
                   blur-effect-theme '><ShoppingBagIcon className='icon-style text-slate-900'/></button>
                   <button type='button' className='bg-white/90  
                   blur-effect-theme ' onClick={()=>{onAddTocart();OncartToggle()}}>{btn}</button>
               </div>
           </div>

           <div className='flex items-center'> 
                <img src={img} alt="img/item" className='h-36 w-64 transition-theme hover:-rotate-12' />
            </div>
         </div>
    </>
  )
}

export default Item








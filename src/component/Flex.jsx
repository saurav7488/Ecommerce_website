import React from "react";

const Flex = ({ ifExists ,  endpoint: { title, heading, text, img, btn, url } }) => {
  return (
    <>
      <div className={`flex items-center justify-between lg:flex-col lg:justify-center 
       nike-container ${ifExists ?`flex-row-reverse`:`flex-row`} `}>
        <div className='max-w-lg lg:max-w-none md:text-center  
        grid items-center justify-items-center '>
          <h1 className='text-4x1 sm:text-3x1 font-bold text-gradient 
          '>{heading}</h1>
          <h1 className='text-5x1 lg:text-4x1 md:text-3xl sm:text-2xl font-bold 
           text-slate-900 filter drop-shadow-lg ' >{title}</h1>
          <p className='xl:text-sm my-4 text-slate-900 
           ' >{text}</p>
          <a href={url} className='flex items-center 
           ' target={"_blank"} role="button" >
            <button type="button" className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 
            py-9.5 ">
              {btn}
            </button>
          </a>
        </div>
        <div className="flex items-center justify-center max-w-xl relative 
         lg:max-w-none w-full">
          <img src={img} alt="flex/img" className={`w-auto object-fill transitions-theme ${ifExists?`h-60 lg:h-56 
          md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12`:`h-72 lg:h-64 md:h-60 xsm:h-40 
          rotate-[19deg] hover:rotate-12 `}  `}/>
        </div>
        <div />
      </div>
    </>
  );
};

export default Flex;









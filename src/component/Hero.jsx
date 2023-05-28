import React from "react";
import Clips from "./utlis/Clips";
import Social from "./utlis/Social";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  //console.log(heroapi)
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div
          className="bg-theme clip-path h-[85vh]
           lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 
            left-0 right-0 opacity-100 z-10 "
        ></div>
        <div
          className="relative opacity-100 z-20 grid items-center justify-items-center 
             nike-container "
        >
          <div
            className="grid items-center  justify-items-center 
              mt-28 md:mt-24 "
          >
            <h1
              className="text-6x1 lg:text-5x1
                 md:text-4x1 sm:text-3x1 xsm:text-2x1 font-extrabold filter drop-shadow-sm
                 text-slate-200"
            >
              {title}
            </h1>
            <h1
              className="text-6x1 lg:text-5x1
                 md:text-4x1 sm:text-3x1 xsm:text-2x1 font-extrabold filter 
                 drop-shadow-sm text-slate-200"
            >
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 
                  shadow-slate-200 rounded-xl my-5"
            >
              {btntext}
            </button>
            <div
              className="grid items-center gap-5 md:gap-3  
                   absolute top-[33vh]  lg:top-[27vh] left-[11%] xl:left-0 w-auto  
                     h-auto  "
            >
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks?.map((val, i) => (
                <Social key={i} icon={val.icon} />
              ))}
            </div>
          </div>
          <div className="">
            <img
              src={img}
              alt="hero-img/img"
              className="w-auto h-[45vh] 
                lg:h-[35vh]  md:h-[31vh] sm:h-[23vh] xsm:h-[19vh] 
                 transitions-theme -rotate-[24deg] hover:rotate-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React, { useEffect, useState } from "react";
import { PiWineFill } from "react-icons/pi";
import { FaBus } from "react-icons/fa";
import { IoBeer } from "react-icons/io5";
import { TbPyramid } from "react-icons/tb";
import { GiVomiting } from "react-icons/gi";
function Logo() {
  const [startAnimation, setStartAnimation] = useState(true);
  useEffect(() => {
    const interValId = setInterval(() => {
      setStartAnimation((prev) => !prev);
    }, 5000);
    return () => clearInterval(interValId);
  }, []);
  return (
    <div className="relative h-[200px] group">
      <div
        className={`bg-white w-[140px] h-[200px] absolute  left-0 right-0 mx-auto z-10 transition-transform flex justify-center items-center border-[1px] border-black duration-700 rounded-md ${
          startAnimation && `-translate-x-24 -rotate-[15deg] translate-y-4`
        }`}
      >
        <TbPyramid className="absolute text-xl text-yellow-600 top-3 left-3 fill-yellow-400 " />

        <PiWineFill className="text-3xl text-red-500" />
        <TbPyramid className="absolute text-xl bottom-3 right-3" />
      </div>
      <div
        className={`bg-white w-[140px] h-[200px] absolute z-20 mx-auto left-0 right-0 flex justify-center items-center border-[1px] border-black rounded-md`}
      >
        <TbPyramid className="absolute text-xl text-yellow-600 top-3 left-3 fill-yellow-400" />

        <FaBus className="text-3xl text-yellow-400" />
        <TbPyramid className="absolute text-xl bottom-3 right-3" />
      </div>
      <div
        className={`bg-white w-[140px] transition-transform h-[200px] absolute z-30  left-0 right-0 mx-auto  flex justify-center items-center border-[1px] border-black duration-1000  rounded-md ${
          startAnimation && `translate-x-24 rotate-[23deg] translate-y-4`
        }`}
      >
        <TbPyramid className="absolute text-xl text-yellow-600 fill-yellow-400 top-3 left-3" />
        <IoBeer className="text-3xl text-orange-500" />
        <GiVomiting className="absolute text-xl text-lime-900 bottom-3 right-3" />
      </div>
    </div>
  );
}

export default Logo;

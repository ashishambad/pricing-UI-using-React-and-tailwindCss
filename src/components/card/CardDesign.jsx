import React from "react";
import { CircleCheck } from "lucide-react";

const CardDesign = ({data}) => {
  return (
    <>
      <div className="bg-white shadow-xl  h-140 w-95 m-10 rounded-2xl p-4 ">
        <h2 className="font-bold text-2xl">{data.name}</h2>
        <p className="text-blue-700 font-extrabold text-2xl">---</p>
        <h1 className="font-extrabold text-6xl">
          {data.price}<span className="text-2xl text-gray-400 font-light">/mo</span>
        </h1>
        <p className="text-gray-400 text-2xl mt-3 my-2">
          {data.description}
        </p>
        <button className="bg-blue-700 px-30 py-4 rounded-2xl text-white text-lg font-bold mt-1 my-4">
          {data.buttonText}
        </button>
        <h2 className="font-bold text-3xl">What's included</h2>
        <div className="text-lg pl-10 flex flex-col gap-3 mt-4">
          <p className="flex items-center gap-2">
            <CircleCheck size={20} />
            {data.features[0]}
          </p>

          <p className="flex items-center gap-2">
            <CircleCheck size={20} />{data.features[1]}
          </p>

          <p className="flex items-center gap-2">
            <CircleCheck size={20} />
            {data.features[2]}
          </p>

          <p className="flex items-center gap-2">
            <CircleCheck size={20} />
            {data.features[3]}
          </p>

          <p className="flex items-center gap-2">
            <CircleCheck size={20} />
            {data.features[4]}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDesign;

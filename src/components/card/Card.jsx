import React from "react";
import CardDesign from "./CardDesign";
import { plans } from "../../data/data";

const Card = () => {
  return (
    <div className="flex items-center justify-center">
      {plans.map((plan,index)=>(
        <CardDesign key={index} data={plan} />
      ))}
    </div>
  );
};

export default Card;

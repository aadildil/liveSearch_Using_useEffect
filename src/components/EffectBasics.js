import React, { useState,useEffect } from "react";

const EffectBasics = () => {
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);


 // document.title=`gold:${gold} || silver: ${silver}` chanegs even when we use setBronze()

 useEffect(()=>{
    document.title=`gold:${gold} || silver: ${silver}`;
 },
 //we can add second paramter here, useeffect will run on the basis of second paramater
 [gold,bronze]
 )

  return (
    <div>
      <h1>UseEffect basics</h1>
      <p>Gold: {gold}</p>
      <p>Silver: {silver}</p>
      <p>Bronze: {bronze}</p>
      <button onClick={() => setGold(gold + 1)}>Add Gold</button>
      <button onClick={() => setSilver(silver + 1)}>Add Silver</button>
      <button onClick={() => setBronze(bronze + 1)}>Add Bronze</button>
    </div>
  );
};

export default EffectBasics;

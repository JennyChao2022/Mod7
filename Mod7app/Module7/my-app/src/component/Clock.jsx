import React, { useEffect, useState } from "react";

export default function Clock(){
    const [time, setTime] = useState(new Date());

     useEffect(() => {
      const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);
    return(
        <div>
      <h1>Clock</h1>
      <span>{time.toLocaleTimeString()}</span>
    </div>
    )
}
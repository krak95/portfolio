import { useEffect, useState } from "react";


const ShotClock = () =>{
    
const [date, setDate] = useState(0)
    
useEffect(()=>{
//let today = new Date();
let today = 120;
    const interval = setInterval(() => {
        //setDate(today.toLocaleString());
        setDate(--today);
}, 1000);
},[]);

return (
<>
<p className="shotclock">{date}</p>
</>
)
}

export default ShotClock
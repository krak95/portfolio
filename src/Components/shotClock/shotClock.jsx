import { useEffect, useRef, useState } from "react";


export const ShotClock = () =>{
    
    let [date, setDate] = useState(3)

    useEffect(()=>{
//let today = new Date();
    const interval = setInterval(() => {
        //setDate(today.toLocaleString());
        const countdown = --date
        localStorage.setItem('time',countdown)
        setDate(countdown);
        if(countdown <= 0){
            setDate('refresh')
            localStorage.setItem('time',0)
            clearInterval(interval)
        }
}, 1000);
},[]);

return (
<>
<p   className="shotclock">{date}</p>
</>
)
}

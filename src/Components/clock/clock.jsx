import { useEffect, useState } from "react";


export const clock = () =>{
let today = new Date();
    const interval = setInterval(() => {
        const clock = today.toLocaleString();
}, 1000);
}
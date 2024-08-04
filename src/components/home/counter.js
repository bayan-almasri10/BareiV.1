// import React, { useEffect, useState, useRef } from 'react';
//
// const PortfolioCounter = (target: number, time: number) => {
//     const [count, setCount] = useState(0);
//     const counterRef = useRef<HTMLDivElement>(null);
//
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             const [entry] = entries;
//             if (entry.isIntersecting) {
//                 const interval = setInterval(() => {
//                     if (count < target) {
//                         setCount((prevCount) => Math.min(prevCount + (target / time / 200), target));
//                     } else {
//                         clearInterval(interval);
//                     }
//                 }, 50);
//
//                 return () => {
//                     clearInterval(interval);
//                 };
//             }
//         });
//
//         if (counterRef.current) {
//             observer.observe(counterRef.current);
//         }
//
//         return () => {
//             if (counterRef.current) {
//                 observer.unobserve(counterRef.current);
//             }
//         };
//     }, []);
//
//     return <div ref={counterRef}>{count}</div>;
// };
//
// export default PortfolioCounter;
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Counter = ({n}) =>{
    const {number} = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1,tension: 20,friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

export default Counter;

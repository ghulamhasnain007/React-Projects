import { useEffect, useState } from 'react'

function useWindowSize() {

    const [dimensions, setDimensions] = useState(0)
    useEffect(()=>{
        const handleResize = () => {
            setDimensions(window.innerWidth)
            console.log('R')
          }
          window.addEventListener('resize', handleResize())
        return()=>{

          window.removeEventListener('resize', handleResize())
        }
   

    },[dimensions])


  return (
        {dimensions}
  )
}

export default useWindowSize


// import { useEffect, useState } from 'react';

// function useWindowSize() {
//     const [dimensions, setDimensions] = useState({
//         width: window.innerWidth,
//         height: window.innerHeight
//     });

//     useEffect(() => {
//         const handleResize = () => {
//             setDimensions({
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             });
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return { dimensions }; // Ensure you return an object with dimensions property
// }

// export default useWindowSize;

import React, { forwardRef, useImperativeHandle, useState } from 'react'


const MainInput = forwardRef((props, ref) => {

  const [count, setCount] = useState(0)
  useImperativeHandle(ref,
    ()=>{
      return{
        greetFromChild(){
          console.log("CHILD GREET", count)
        }
      }
    },[count])

  return (
    <div>
        <input type={props.type} ref={ref} placeholder={props.placeholder} id="" />
        <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
})
//we cannot pass ref to the children so we use forward Ref to do this
//useImpperitivehandler(refrence, callback, dependency list)
export default MainInput
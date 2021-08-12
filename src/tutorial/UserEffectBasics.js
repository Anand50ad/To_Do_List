import React, {useState, useEffect} from 'react'

function UserEffectBasics() {
    const [value,setValue] = useState(0);
//    react hooks cannot be used conditionally,i.e., use cannot use it inside if condition
    useEffect(()=>{
        console.log("call use effect");
       if(value>1){
        document.title = `New Message (${value})`;
       }
        
},[value]) //[] is a dependency here, if dependency is empty useEffect will be rendered only once
    return (
        <div>
            <h1>{value}</h1>
            <button className="btn" onClick={()=>setValue(value+1)}>Click Me</button>
        </div>
    )
}

export default UserEffectBasics

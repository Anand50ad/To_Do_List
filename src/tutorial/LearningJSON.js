import React from 'react'
import axios from 'axios'
function LearningJSON() {
   const handleClick=(b)=>{
       const promise = axios.post(" http://localhost:4000/users");

   }
    return (
       <>
            <button type="button" className="btn" onClick={handleClick}>send user</button>
            <button type="button" className="btn" onClick={getUsers}>get user</button>
        </>
    )
}

export default LearningJSON

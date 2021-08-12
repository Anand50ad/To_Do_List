import React,{useState} from 'react'

function ToDoList() {
    const [firstName, setFirstName] = useState(" ");
    // const [email, setEmail] = useState(" ");
    const [people,setPeople] = useState([]);
    const handleSubmit =(e)=>{
        e.preventDefault(); //this is used to prevent default browser variable
        if(firstName){
            
            console.log("submit the value");
            const person={id:new Date().getTime().toString(),firstName};
            console.log(person);
            setPeople((people)=>{
                return [...people, person];
            });
            setFirstName('');
            // setEmail('');
            //console.log(person);
        }else{
            console.log("empty value");
        }
    }
    return (
        <>
        <article>
            <h1>To Do List</h1>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="firstName">Task:</label>
                <input type="text" id="firstName" name="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            </div>
            {/* <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div> */}
            <button type="submit">Click to add</button>
            </form>
        {people.map((person, index)=>{
            const {id, firstName} = person;
            return <div className="item" key={id}>
            <h4>{firstName}</h4>
            {/* <p>{email}</p>  */}
            </div>
        })}
        </article>
        </>
    )

    
}

export default ToDoList

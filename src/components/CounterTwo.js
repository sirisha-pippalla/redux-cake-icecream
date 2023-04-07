import {React, useState} from "react";

const CounterTwo = () => {
    const [name, setName] = useState({firstName : '', lastName:''})
    return(
        <div>
            <input type="text" value = {name.firstName} 
            onChange = {e => setName({...name, firstName:e.target.value})}/>
            <input type="text" value = {name.secondName} 
            onChange = {e => setName({...name, lastName:e.target.value})}/>
            <p>FirstName : {name.firstName}</p>
            <p>lastName : {name.lastName}</p>
        </div>
    )
}

export default CounterTwo;
import React, {useState} from 'react';

const SignUp = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetch("http://localhost:8080/signup", {
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: props.email,
                    password: password
                })
            })
            .then((response) => response.json())
            // .then((data) => console.log("datta:", data))
            .then((data) => {
                console.log('this is the api response', data.response[0].name)
                if (data) {
                    setName(data.response[0].name);
                    setPassword(data.response[0].password);
                    setMessage("Created account successfully");
                    console.log("message::", message);
                    props.setCreateAcctButton(false);
                    console.log("setcreate account bttn:", props.CreateAccount)
                } else {
                    setMessage("Some error occured");
                    
                }
            })            
        } catch (err) {
            console.log("ERROR!!:", err);
        }
    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
                <input
                    type="text"
                    value={name}
                    placeholder="Enter Name"
                    onChange={( (e) => setName(e.target.value))} 
                />
                <input
                    type="text"
                    value={props.email}
                    // onChange={( (e) => setEmail(e.target.value))} 
                /> 
                <input
                    type="text"
                    value={password}
                    placeholder="Enter password"
                    onChange={( (e) => setPassword(e.target.value))} 
                /> 
                <button type="submit" onClick={handleSubmit}>Create</button>
                <div className="message">
                    {message ? <p> {message} </p> 
                    : null
                    }
                </div>
            {/* </form> */}
        </>
    )
}

export default SignUp; 

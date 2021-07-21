import React, { useEffect, useState } from 'react';

function InputTodo() {
    const [body, setBody] = useState("");
    const [username, setUsername] = useState("anonymous");
    
    const [isedited, setIsedited] = useState(false);

    useEffect(() => {
        const userdata = localStorage.getItem('username');
        setUsername(userdata)
    }, []);

    useEffect(() => {
        localStorage.setItem('username',username)
    }, [username]);

    async function onSubmit(e){
        e.preventDefault()
        try {
            const Rbody = {body}
            const Rname = {username}
            
            const Redited = {isedited}
            const arr = [Rbody, Rname, Redited]
            const response = await fetch("http://localhost:4001/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(arr),
                username: JSON.stringify(Rname),
                isedited: JSON.stringify(Redited)
            });
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
    function sb(e){
        setBody(e.target.value);
    }
    
    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={e => onSubmit(e)} action="">
                <input className="body" value={body} onChange={e => sb(e)} type="text" />
                <button className="bodyB"><b>Add</b></button>
                <div className="name">
                    <label className="userlabel" htmlFor="d">Your username: </label>
                    <input id="d" value={username} onChange={e => setUsername(e.target.value)} type="text" />
                </div>
            </form>
        </div>
    )
}

export default InputTodo;
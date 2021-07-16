import React, { useState } from 'react';

function InputTodo() {
    const [body, setBody] = useState("");
    const [username, setUsername] = useState("anonymous")

    async function onSubmit(e){
        e.preventDefault()
        try {
            const Rbody = {body}
            const Rname = {username}
            const arr = [Rbody, Rname]
            const response = await fetch("http://localhost:4001/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(arr),
                username: JSON.stringify(Rname)
            });
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={e => onSubmit(e)} action="">
                <input className="body" value={body} onChange={e => setBody(e.target.value)} type="text" />
                <button className="bodyB"><b>Add</b></button>
                <div className="name">
                    <label htmlFor="d">Your username: </label>
                    <input id="d" value={username} onChange={e => setUsername(e.target.value)} type="text" />
                </div>
            </form>
        </div>
    )
}

export default InputTodo;
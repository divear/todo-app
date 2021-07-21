import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo'; 
import {AiOutlineStar, AiFillStar} from  "react-icons/ai"


function ListTodo() {
    const [data, setData] = useState(null)
    //const [stared, setStared] = useState(false)

    useEffect(()=>{
        async function getTodos(){
            try {
                const response = await fetch("http://localhost:4001/todos");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getTodos()
    },[])

    
    async function deleteTodo(id ){
        try {
            const response = await fetch(`http://localhost:4001/todos/${id}`,{
                method: "DELETE"
            })
            setData(data.filter(todo => todo.id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    async function star(id, e){
        e.preventDefault()
        console.log(e);
        
        try {
            
            const response = await fetch(`http://localhost:4001/todos/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify()
            }); 
            window.location.reload()
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>star</th>
                        <th>body</th>
                        <th>name</th>
                        <th>time</th>
                        <td>edited</td>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>  
                </thead>
                <tbody>
                
                    {data && data.map(d =>{
                        console.log(d.stared);
                        return(
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <th onClick={e => star(d.id, e)}>{d.stared ? <AiFillStar className="star"/> : <AiOutlineStar className="star"/> }</th>
                                <td>{d.body}</td>
                                <td className={d.username === "anonymous" ? "anon" : "username"}>{d.username}</td>
                                <td>{d.ctime}</td>
                                <td>{d.isedited ? "yes" : "no"}</td>
                                <td className="b"><EditTodo todo={d}/></td>
                                <td className="b"><button onClick={()=> deleteTodo(d.id)} className="buttonDelete">Delete</button></td>
                            </tr>
                        )
                    })}
                
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo;
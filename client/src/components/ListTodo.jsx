import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo';

function ListTodo() {
    const [data, setData] = useState(null)

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

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>body</th>
                        <th>name</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>  
                </thead>
                <tbody>
                
                    {data && data.map(d =>{
                        return(
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.body}</td>
                                <td>{d.username}</td>
                                <td className="b"><EditTodo/></td>
                                <td className="b"><button onClick={()=> deleteTodo(d.id)} className="buttonDelete">delete</button></td>
                            </tr>
                        )
                    })}
                
                </tbody>
            </table>
        </div>
    )
}

export default ListTodo

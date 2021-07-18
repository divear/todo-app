import React, { useState } from 'react';
import {GrClose} from "react-icons/gr"

function EditTodo(todo) {
    const [mod, setMod] = useState(true);
    const [edit, setEdit] = useState("")
    console.log(todo);
    return (
        <div>
            <button onClick={()=>setMod(!mod)} className="buttonEdit">Edit</button>
            <div className={mod ? "modal" : "modalF"}>
                <div className="modal-content">
                    <span onClick={()=>setMod(!mod)} className="close"><GrClose/></span>
                    <h3>edit the todo</h3>
                    <input value={edit} onChange={e=>setEdit(e.target.value)} className="editInput" type="text" />
                    <button className="bodyB">save</button>
                    
                </div>
            </div>
        </div>
    )
}

export default EditTodo

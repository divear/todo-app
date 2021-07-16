import React, { useState } from 'react';
import {GrClose} from "react-icons/gr"

function EditTodo() {
    const [mod, setMod] = useState(true)
    return (
        <div>
            <button onClick={()=>setMod(!mod)} className="buttonEdit">Edit</button>
            <div className={mod ? "modal" : "modalF"}>
                <div className="modal-content">
                    <span onClick={()=>setMod(!mod)} className="close"><GrClose/></span>
                    <h3>edit the todo</h3>
                    <input className="editInput" type="text" />
                </div>
            </div>
        </div>
    )
}

export default EditTodo

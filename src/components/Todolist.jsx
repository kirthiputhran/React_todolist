import React from 'react'

function Todolist(props) {
    const {CompleteTodo, deletetodo} =props
    let todoarr=props.todoarr.length >0 ? props.todoarr :JSON.parse(localStorage.getItem('todos'))
    return (
        <div className="inner-box">
            <ul>
                {todoarr && todoarr.length >0 ?
                 todoarr.map((el,i) =>(    
                <li key={i}>
                    <div className={el["done"] ? "line-through" :null}>{el.title}</div>
                    <div className="icon">
                        <i title="Complete" onClick={() => CompleteTodo(i)} className={`fas fa-check-circle pointer ${el["done"] ? "green" :"blue"}`}/>
                        <i title="Delete" onClick={() => deletetodo(i)} className={`fas fa-trash pointer`}/> 
                    </div>
                </li>
            )) :null
            }
            </ul>
            
        </div>
    )
}

export default Todolist

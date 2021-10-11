import React,{useState} from 'react'
import Todolist from './Todolist'
import swal from 'sweetalert'
function CreateTodo() {
    const [todo,settodo]=useState({title:"" ,done:false})
    const [todoarr,settodoarr]=useState([])

    let todos=localStorage.hasOwnProperty("todos") 
    ? JSON.parse(localStorage.getItem("todos"))
    :[]

    const OnChange=(event) =>{
        let {value}=event.target
        let obj ={}
        obj["title"]=value
        obj["done"]=false
        settodo(obj)
    }
    const Createtodo =(event)=>{
        const {name}=event.target
        if(event.key==="Enter" || name==="addTodo"){
            if(todo.title!==""){
                todos.unshift(todo)
                localStorage.setItem('todos',JSON.stringify(todos))
                settodo({title:"",done:false})
            }
            else{
                swal("oops","Please write todo first","error")

            }
        }
    }
    const CompleteTodo=(i)=>{
        if(todos[i]["done"]!==true)
          todos[i]["done"]=true
          localStorage.setItem("todos",JSON.stringify(todos))
          settodoarr(todos)
          swal("Good job!!","Todo Completed","success")
    }

    const deletetodo = (i) => {
        swal({
            title:"Are you sure?",
            text:"Once deleted you wont be able to recover the file!",
            icon: "warning",
            buttons:true,
            dangerMode:true
        }).then(res =>{
            if(res){
                todos.splice(i,1)
                localStorage.setItem('todos',JSON.stringify(todos))
                settodoarr(todos)
            }
        })
    }


    return (
        <div className="box">
            <div className="text-end">
                <h2>Todo App</h2>
                <p>Add a new todo</p>
            </div> 
            <div className="text-addTodo">
                <input type="text" name="todo" placeholder="Write here..." value={todo.title} onKeyPress={Createtodo} onChange={OnChange}/>
                <button className="btn-addTodo" type="button" name="addTodo" onClick={Createtodo}>Add Todo</button>
            </div>  
            <Todolist todoarr={todoarr}
            CompleteTodo={CompleteTodo}
            deletetodo={deletetodo} />
        </div> 
    );
}

export default CreateTodo

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodoAct, DelAllTodoAct } from "../../redux/actions/TodoAct";


function UseAddTodo(){
    const dispatch = useDispatch()
    const [todo, setTodo] = useState("")

    const ctaAddTodo=()=>{
        if(todo === ""){
            alert("Please Fill All Fields!")
            return
        }else{
            console.log("running..", todo);
            let newTodo = {
              todo,
              id: Math.random(),
            };
            console.log("todo=>", newTodo);
            dispatch(AddTodoAct(newTodo));
            setTodo("");
        }
        
    }

    const ctaAllDell=()=>{
        dispatch(DelAllTodoAct())
    }

    return [todo, setTodo, ctaAddTodo, ctaAllDell];
}
export default UseAddTodo
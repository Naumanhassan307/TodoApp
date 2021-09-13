
import { useDispatch, useSelector } from "react-redux";
import {DelTodoAct} from "../../redux/actions/TodoAct"

function UseShowTodo(){
    const dispatch = useDispatch()
    const ctaDel=(id)=>{
        dispatch(DelTodoAct(id))
    }
    const commingTodos = useSelector((store) => store.TodoRed.allTodo);
    console.log("Comming todos", commingTodos);

    return [ctaDel, commingTodos];
}
export default UseShowTodo
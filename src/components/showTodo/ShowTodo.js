import { useDispatch, useSelector } from "react-redux"
import UseShowTodo from "./UseShowTodo";

import "./ShowTodoStyle.css";


function ShowTodo() {
  



const [ctaDel, commingTodos] = UseShowTodo();
  return (
    <div>
      <ul className="show-ul">
        {commingTodos.map((item, idx) => (
          <div key={idx} className="show-inner-div">
            <div className="show-li-div">
              <li className="show-li">{item.todo.toUpperCase()}</li>
            </div>
            <div>
              <button onClick={() => ctaDel(item.id)} className="show-btn">
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default ShowTodo;

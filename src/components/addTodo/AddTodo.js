
import ShowTodo from "../showTodo/ShowTodo";
import "./AddTodoStyle.css";
import UseAddTodo from "./UseAddTodo";

import {  useSelector } from "react-redux";

function AddTodo(){
  const commingTodos = useSelector((store) => store.TodoRed.allTodo);
    const [todo, setTodo, ctaAddTodo, ctaAllDell] = UseAddTodo();
    return (
      <>
        <div className="main-Add">
          <div className="main-mdl">
            <div style={{display: "flex", flex: 1, flexDirection: "column"}}>
              <div className="main-mdl1">
                <h2>Todo App</h2>
              </div>

              <div className="inp-div">
                <input
                  type="text"
                  placeholder="Enter Your new Todo"
                  className="inp-div1"
                  onChange={(e) => setTodo(e.target.value)}
                  value={todo}
                />
                <button className="inp-div2" onClick={ctaAddTodo}>
                  +
                </button>
              </div>
              <ShowTodo />

              <div className="pend-div">
                <p className="pend-div-txt">
                  You Have {commingTodos.length} Pending Todos
                </p>
                <button className="pend-div-btn" onClick={ctaAllDell}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default AddTodo
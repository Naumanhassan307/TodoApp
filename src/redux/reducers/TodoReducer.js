
const initialState = {
  allTodo: []
};

function TodoRed(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": {
        console.log("data in Red", action.payload);
      return {
        ...state,
        allTodo: [...state.allTodo, action.payload]
        
      };
    }
    case "DEL_TODO": {
        const newTodos = state.allTodo.filter((item) => {
          if (item.id !== action.payload) return item;
        });

        return {
          ...state,
          allTodo: [...newTodos],
        };
    }
    
    case "DEL_ALL_TODO": {
        

        return {
          ...state,
          allTodo: [],
        };
    }
    

    default:
      return state;
  }
}
export default TodoRed;

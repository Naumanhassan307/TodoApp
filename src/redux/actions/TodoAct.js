


export const AddTodoAct=(data)=> (dispatch)=>{
    console.log("data in Act", data);
    dispatch({
      type: "ADD_TODO",
      payload: data
    });
}

export const DelTodoAct = (data) => (dispatch) => {
  console.log("data in Act", data);
  dispatch({
    type: "DEL_TODO",
    payload: data,
  });
};
export const DelAllTodoAct = () => (dispatch) => {
  
  dispatch({
    type: "DEL_ALL_TODO",
    
  });
};
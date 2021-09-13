

export const INCRE_COUNT = (data) =>{

    return{
        type: "INCRE_COUNT",
        payload: data
    }
}
export const DECRE_COUNT = (data) => {
  return {
    type: "DECRE_COUNT",
    payload: data,
  };
};
export const RESET_COUNT = (data) => {
  return {
    type: "RESET_COUNT",
    payload: data,
  };
};
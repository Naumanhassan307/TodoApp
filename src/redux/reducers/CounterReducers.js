
let initialState={
    counterNumber : 0
}

function counterReducer(state = initialState, action){
    switch (action.type) {
        case "INCRE_COUNT":
            let NEW_INCRE_COUNT={
                counterNumber: action.payload
            }
            
           return NEW_INCRE_COUNT;
        case "DECRE_COUNT":
            let NEW_DECRE_COUNT = {
              counterNumber: action.payload,
            };
            
           return NEW_DECRE_COUNT;
        case "RESET_COUNT":
            let NEW_RESET_COUNT={
                counterNumber: action.payload
            }
            
           return NEW_RESET_COUNT;
    
        default:
           return state;
    }
}
export default counterReducer;
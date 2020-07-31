const commonReducer = (state, action) => {
    switch (action.type) {
     
        case "DETAILS_SUCCESS":
            return {
                ...state, Mylist: action.Mylist,
                recommendations:action.recommendations
            }
        default: return state;
    }
};
export default commonReducer;
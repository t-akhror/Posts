const initState={
    comments:[]
}
export  function commentReducer(state=initState,{type,payload}){
        switch(type){
            case'SET_COMMENTS':
                return {
                    ...state,
                    comments:payload
                }
            default: return state;
        }
}
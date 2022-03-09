const initState={
    users:[]
}
export  function userReducer(state=initState,{type,payload}){
    switch(type){
        case'SET_USERS':
            return{
                ...state,
                users:payload
            }
        default: return state;
    }
}
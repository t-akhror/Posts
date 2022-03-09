const initState={
    posts:[],
    post:{}
}
export  function postReducer(state=initState,{type,payload}){
    switch(type){
        case 'SET_POSTS':
            return{
                ...state,
                posts:payload
            }
        case'SET_SINGLEPOST':
        return{
            ...state,
            post:payload
        }
        default: return state;
    }
}
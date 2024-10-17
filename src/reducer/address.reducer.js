export const addressfxn=(state,action)=>{

    
    switch(action.type){
        case "post":
            return {...state,type:"post",product:action.payload}
        case "delete":
            return {...state,type:"delete",product:action.payload}
        default:
            return {...state}
    }
}
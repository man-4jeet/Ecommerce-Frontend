export const filterfxn=(state,action)=>{
switch(action.type){
    case'lth':
    return{...state,sortbyprice :'lth'}
    case'htl':
    return{...state,sortbyprice :'htl'}
    case'5':
    return{...state,discount :'5'}
    case'10':
    return{...state,discount :'10'}
    case'15':
    return{...state,discount :'15'}
    case'clear':
    return{...state,sortbyprice:'',discount :'0'}
    default:
    return{...state}

}
}
import * as type from '../constant/index'

var init ={
    by:'name',
    type:'asc'
};
const rootReducers=(state=init, action)=>{
    switch(action.type){
        case type.SORT_ITEM:
            console.log(action);
            return {
                by : action.sort.by,
                value : action.sort.value
            };
           
           
        default: return state;
    }
    
}
export default rootReducers;
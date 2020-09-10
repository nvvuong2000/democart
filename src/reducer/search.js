import * as type from '../constant/index'

var init ='';
const rootReducers=(state=init, action)=>{
    switch(action.type){
        case type.SEARCH_ITEM:
            state = action.keyword;
           
            return state;
        default: return state;
    }
    
}
export default rootReducers;
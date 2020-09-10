import * as type from './../constant/index'

var init ={};
const rootReducers=(state=init, action)=>{
    switch(action.type){
        case type.PRODUCT_ITEM_DETAILS:
            state = action.product;
            return state;
        default: return state;
    }
    
}
export default rootReducers;
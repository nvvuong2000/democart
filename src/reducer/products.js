import * as type from '../constant/index'
import roorReducer from '.';
var init =[];
var findID=(products,id)=>{
    var result = -1;
    // console.log(products.);
   
    Array.from(products).forEach((product,index) => {
        
        
        if(product.id === id){
            result = index;
        }
    });
    return result;
}
const rootReducers=(state=init, action)=>{
    switch(action.type){
        case type.GET_LIST_PRODUCTS:
            state = action.products;
            // console.log(state);
            return [...state];
            
            case type.DELETE_PRODUCT:
                var index =-1;
                index = findID(state,action.id);
                if(index!==-1){
                    state.splice(index,1);
                    return [...state];
                }
            case type.ADD_PRODUCT:
                state = state.concat(action.product);
            return [...state];
            case type.UPDATE_PRODUCT:
                index = findID(state,action.product);
                console.log(index);
                if(index!==-1){
                    state[index]= action.product;
                }
                return [...state];
        default: return [...state];
    }
    
    
}
export default rootReducers;
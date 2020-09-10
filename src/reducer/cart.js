import * as type from './../constant/index'


var data = JSON.parse(localStorage.getItem('damua',));
 const init = (data)?data:[];
var findID=(products,id)=>{
    var result = -1;
   
    Array.from(products).forEach((product,index) => {
        if(product.id === id){
            result = index;
        }
    });
    return result;
}
var findID2=(products,id)=>{
    var result = -1;
   
    Array.from(products).forEach((product,index) => {
        if(product.item.id === id){
            result = index;
        }
    });
    return result;
}
const rootReducers = (state=init,action)=>{
    switch(action.type){
        case type.GET_LIST_ITEM:
            // state = action.items;
            state= state.concat(action.items);
            return state;
            case type.ADD_ITEM:    
                  var data = action.item
                   var newItem =
                   {
                    item: {
                        color: data.color,
                        description: data.description,
                        id: data.id,
                        link: data.link,
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        rate: data.rate,
                        status: data.status
                    },
                    quantity_buy:1
                }
                state= state.concat(newItem);
                         return [...state];
              case type.DELETE_ITEM:
             
                var index =-1;
                index = findID(state,action.id);
            
    
                if(index!==-1){
                    state.splice(index,1);
                   
                }
             return [...state];
                case type.CHANGE_QUANTITY:
                    console.log(action);
            return [...state];
        default: return [...state];
       
    }
}
export default rootReducers;
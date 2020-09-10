import * as Type from './../constant/index'
import callAPI from './../call/callAPI'

export const act_GET_FULL_PRODUCTS_REQUEST= ()=>{
    return (dispatch)=>{
        return callAPI(`products`,'GET',null).then(res=>{
            dispatch(act_GET_FULL_PRODUCTS(res.data));
        });
    }
}
export const act_GET_FULL_PRODUCTS = (products)=>{
    return{
        type:Type.GET_LIST_PRODUCTS, products
    }
       

    
}


export const act_DELETE_ITEM_REQUEST= (id)=>{
    return (dispatch)=>{
        return callAPI(`products/${id}`,'delete',null).then(res=>{
            dispatch(act_DELETE_ITEM(id));
        });
    }
}
export const act_DELETE_ITEM = (id)=>{
    return{
        type:Type.DELETE_PRODUCT,id
    }
       

    
}
export const act_GET_LIST_SEARCH = ()=>{
    return{
        type:Type.GET_LIST_SEARCH
    }
       

    
}

export const act_GET_FULL_ITEM_REQUEST= ()=>{
    return (dispatch)=>{
        return callAPI('cart','get',null).then(res=>{
            dispatch(act_GET_FULL_ITEM(res.data));
        });
    }
}
export const act_GET_FULL_ITEM = (items)=>{
    return{
        type:Type.GET_LIST_ITEM,items
    }
       

    
}

export const act_ADD_PRODUCT_INTO_CART_REQUEST= (item,quantity)=>{
    return (dispatch)=>{
        return callAPI(`cart`,'post',{
            "item":item,
            "quantity":quantity
        }).then(res=>{
            // console.log(res);
            dispatch(act_ADD_PRODUCT_INTO_CART(res.data,1));
        });
    }
}
export const act_ADD_PRODUCT_INTO_CART = (item,quantity)=>{
    return{
        type:Type.ADD_ITEM, item,quantity
    }
       

    
}

export const actAddProductRequest =(product) => {
  return(dispatch)=>{
      return callAPI(`products`,'POST',product).then(res=>{
        //   console.log(product);
          console.log(res.data);
          dispatch(actAddProduct(res.data));
      });
      
  }
 
};
export const actAddProduct=(product)=>{
    return { type: Type.ADD_PRODUCT,
      product
}
}

export const act_DELETE_PRODUCT_INTO_CART_REQUEST= (id)=>{
    return (dispatch)=>{
        return callAPI(`cart/${id}`,'delete',null).then(res=>{
            dispatch(act_DELETE_PRODUCT_INTO_CART(id));
        });
    }
}
export const act_DELETE_PRODUCT_INTO_CART = (id)=>{
    return{
        type:Type.DELETE_ITEM, id
    }
       

    
}
export const actEditProduct=(product)=>{
    return { type: Type.PRODUCT_ITEM_DETAILS,
      product
}
}
export const actEditProductRequest =(id) => {
  return(dispatch)=>{
      return callAPI(`products/${id}`,'GET',null).then(res=>{
          dispatch(actEditProduct(res.data));
      });
      
  }
}
export const actUpdateProduct=(product)=>{
    return { type: Type.UPDATE_PRODUCT,
      product
}
}
export const actUpdateProductRequest =(product) => {
    console.log(product);
  return(dispatch)=>{
      return callAPI(`products/${product.id}`,'PUT',product).then(res=>{
           
          dispatch(actUpdateProduct(res.data));
      });
      
  }
 
};

export const actChangeQuanItem=(item,type)=>{
    return { type: Type.CHANGE_QUANTITY,
      item,type
}
}
export const actChangeQuanItemRequest=(item,type) => {
  return(dispatch)=>{
     if(type===true){
       return callAPI(`cart/${item.id}`,'PUT',{
          "item":item.item,
         "quantity":item.quantity+1>item.item.quantity?item.item.quantity:item.quantity+1,
    }).then(res=>{
        // console.log(res.data);
            // dispatch(actEditProductRequest())
    });
  }
  else{
    return callAPI(`cart/${item.id}`,'PUT',{
        "item":item.item,
       "quantity":item.quantity-1>0?item.quantity-1:0,
  }).then(res=>{
    // console.log(res.data);
    // dispatch(act_GET_FULL_ITEM(res.data));
  });
  }
}
}

    //   return callAPI(`cart/${item.id}`,'PUT',item).then(res=>{
    //       dispatch(act_GET_FULL_ITEM(res.data));
    //   });
      
 

export const actSearch =(keyword)=>{
    return { type:Type.SEARCH_ITEM, keyword}
}

export const actSearchRequest =(keyword)=>{
    return (dispatch)=>{
        return callAPI(`products/?search=${keyword}`,null,null).then(res=>{
             dispatch(act_GET_FULL_PRODUCTS(res.data));
        })
    }
}

export const actSort =(sort)=>{
    return { type:Type.SORT_ITEM,sort}
}

export const actSortRequest =(sort)=>{
    return (dispatch)=>{
        return callAPI(`products?sortBy=${sort.by}&order=${sort.value}`,null,null).then(res=>{
            dispatch(act_GET_FULL_PRODUCTS(res.data));
         
            
        })
    }
}
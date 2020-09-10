import {combineReducers} from 'redux'
import products from './products'
import cart from './cart'
import search from './search'
import itemdetails from './itemdetails'
import sort from './sort'
const rootReducers = combineReducers({
    products,itemdetails,cart,search,sort
});
export default rootReducers;
import React,{Component} from 'react'
class CartResult extends Component{
  showTotal=(cart)=>{
      var total =0;
      // console.log()
      for(var i =0; i<cart.length;i++){
        total+=  cart[i].item.price*cart[i].quantity;
      }
      // console.log(items.length);
      // for(var i=0; i<=items.length;i++){
        
      //     // total = items[i] ;
      //  console.log(items(i))
      // }
      return total;
      // items.forEach(items,index => {
      //   // console.log()
      //   console.log(' arr['+index+'] is '+ items);
        
      // });
  }
    render(){
      var  {cart} = this.props ;
     
      //  console.log(cart);
        return(
            <div className="card mb-4">
            <div className="card-body">
              <h5 className="mb-3">The total amount of</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Temporary amount
        <span>{this.showTotal(cart)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>The total amount of</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>$53.98</strong></span>
                </li>
              </ul>
              <button type="button" className="btn btn-primary  waves-effect waves-light">go to
                checkout</button>
            </div>
          </div>
        );
    }
}
export default CartResult
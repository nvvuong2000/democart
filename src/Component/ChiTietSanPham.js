// const { Component } = require("react");
import React, {Component} from 'react'
import * as actions from './../actions/actions'
import { connect } from 'react-redux';

class ChiTietSanPham extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
           
            name:'',
            // "name": "name 19",
            price:'',
            
            status:'',
            link:'',
            description:'',
            quantity:'',
            rate:'',
          
        }

    }
    componentDidMount(){
        var {match} = this.props;
        console.log(match);
        this.props.showItemDetails(match.params.id)
    }
    componentWillReceiveProps(nextprops){
        // var {ite}= this.props;
        // console.log(itemEdit);
        console.log(nextprops.chitietsanpham[0]);
        if(nextprops && nextprops.chitietsanpham[0]){
          var data = nextprops.chitietsanpham[0];
          this.setState({
            id: data.id,
            
            link:data.link,
           
            quantity:data.quantity,
            rate:data.rate,
                  name:data.name,
                  price:data.price,
                  status:data.status,
                  description: data.description,
                  // link: data.link,
          })
        }
      }
    

    render(){
        
        // console.log(this.state.name);
        var chitietsanpham = this.props.chitietsanpham[0];
        console.log(chitietsanpham);
        // var sanpham = chitietsanpham[0];
        // console.log(sanpham);
       
        return(
            <div>
            <section className="ftco-section">
            <div className="container">
              <div className="row">
                  <div className="col-md-12 room-wrap">
                          <div className="row">
                              <div className="col-md-7 d-flex  ">
                                  <div className="img align-self-stretch" style={{backgroundImage: 'url(./../images/hotel-1.jpg)'}}/></div>
                              </div>
                              <div className="col-md-5  ">
                                  <div className="text py-5">
                                      <h3><a href="#"></a></h3>
        <p className="pos">from <span className="price">{this.state.price}</span>/sp</p>
                                      <p>
                                          {this.state.description}
      {/* With separate rooms located in the lush garden area, this is a hotel near beautiful Cam Mountain that travelers should refer.
      
      Each room of Cam Mountain Resort is designed, decorated in a modern, sophisticated style, while being simple and still ensure full amenities for users. In addition, there is an outdoor dining area, swimming pool as well as a cool, clean garden.*/}
      </p> 
                                      <p><a href="#" className="btn btn-secondary">Details</a> <a href="#" className="btn btn-primary">Book now</a></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-12 room-wrap room-wrap-thumb mt-4">
                          <div className="row">
                              <div className="col-md-3  ">
                                  <a href="#" className="d-flex thumb">
                                      <div className="img align-self-stretch"style={{backgroundImage: 'url(./../images/hotel-1.jpg)'}}></div>
                                      <div className="text pl-3 py-3">
                                          <h3>classNameic Balcony Room</h3>
                                      </div>
                                  </a>
                              </div>
                              <div className="col-md-3  ">
                                  <a href="#" className="d-flex thumb">
                                      <div className="img align-self-stretch" style={{backgroundImage: 'url(./../images/hotel-1.jpg)'}}> </div>
                                      <div className="text pl-3 py-3">
                                          <h3>classNameic Balcony Room</h3>
                                      </div>
                                  </a>
                              </div>
                              <div className="col-md-3  ">
                                  <a href="#" className="d-flex thumb">
                                      <div className="img align-self-stretch" style={{backgroundImage: 'url(./../images/hotel-1.jpg)'}}></div>
                                      <div className="text pl-3 py-3">
                                          <h3>classNameic Balcony Room</h3>
                                      </div>
                                  </a>
                              </div>
                              <div className="col-md-3  ">
                                  <a href="#" className="d-flex thumb">
                                      <div className="img align-self-stretch" style={{backgroundImage: 'url(./../images/hotel-1.jpg)'}}></div>
                                      <div className="text pl-3 py-3">
                                          <h3>classNameic Balcony Room</h3>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-12 tour-wrap pt-5 mt-4">
    <h3 className="mb-5" style={{borderBottom: '1px solid #f2f2f2'}}></h3>
                              {/* <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.065880766717!2d105.01267771468467!3d10.49547289251257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109f63a11b4abb3%3A0x938e96fc6f55505f!2zTsO6aSBD4bqlbSBSZXNvcnQ!5e0!3m2!1svi!2s!4v1571578122432!5m2!1svi!2s" width="1000" height="450" frameBorder="0" style={{border:'0px'}} allowFullScreen=""></iframe></div> */}
                          <div className="col-md-12 tour-wrap pt-5 mt-4">
                              <h3 className="mb-5"  style={{borderBottom: '1px solid #f2f2f2'}}>Reviews &amp; Ratings</h3>
                              <form method="post" className="star-rating">
                                <div className="form-check">
                                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                      <label className="form-check-label"  htmlFor="exampleCheck1">
                                          <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i> 100 Ratings</span></p>
                                      </label>
                                </div>
                                <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label"  htmlFor="exampleCheck1">
                                     <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i> 30 Ratings</span></p>
                                </label>
                                </div>
                                <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 5 Ratings</span></p>
                               </label>
                                </div>
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label"  htmlFor="exampleCheck1">
                                    <p className="rate"><span><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
                                </label>
                                </div>
                                <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label"  htmlFor="exampleCheck1">
                                    <p className="rate"><span><i className="icon-star"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i><i className="icon-star-o"></i> 0 Ratings</span></p>
                                  </label>
                                </div>
                              </form>
                          </div>
      
                      <div className="col-md-12 tour-wrap">
                          <div className="pt-5">
                    <h3 className="mb-5"  style={{borderBottom: '1px solid #f2f2f2'}}>3 Comments</h3>
                    <ul className="comment-list">
                      <li className="comment">
                        <div className="vcard bio">
                          <img src="images/person_1.jpg" alt="Image placeholder"/>
                        </div>
                        <div className="comment-body">
                          <h3>John Doe</h3>
                          <div className="meta">October 03, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>
                      </li>
      
                      <li className="comment">
                        <div className="vcard bio">
                          <img src="images/person_1.jpg" alt="Image placeholder"/>
                        </div>
                        <div className="comment-body">
                          <h3>John Doe</h3>
                          <div className="meta">October 03, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>
      
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img src="images/person_1.jpg" alt="Image placeholder"/>
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta">October 03, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="#" className="reply">Reply</a></p>
                            </div>
      
      
                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img src="images/person_1.jpg" alt="Image placeholder"/>
                                </div>
                                <div className="comment-body">
                                  <h3>John Doe</h3>
                                  <div className="meta">October 03, 2018 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><a href="#" className="reply">Reply</a></p>
                                </div>
      
                                  <ul className="children">
                                    <li className="comment">
                                      <div className="vcard bio">
                                        <img src="images/person_1.jpg" alt="Image placeholder"/>
                                      </div>
                                      <div className="comment-body">
                                        <h3>John Doe</h3>
                                        <div className="meta">October 03, 2018 at 2:21pm</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                        <p><a href="#" className="reply">Reply</a></p>
                                      </div>
                                    </li>
                                  </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
      
                      <li className="comment">
                        <div className="vcard bio">
                          <img src="images/person_1.jpg" alt="Image placeholder"/>
                        </div>
                        <div className="comment-body">
                          <h3>John Doe</h3>
                          <div className="meta">October 03, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="#" className="reply">Reply</a></p>
                        </div>
                      </li>
                    </ul>
        
                    
                    <div className="comment-form-wrap pt-5">
                      <h3 className="mb-5">Leave a comment</h3>
                      <form action="#" className="p-5 bg-light">
                        <div className="form-group">
                          <label  htmlFor="name">Name *</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input type="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="website">Website</label>
                          <input type="url" className="form-control" />
                        </div>
      
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea  cols="30" rows="10" className="form-control"></textarea>
                        </div>
                        <div className="form-group">
                          <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary"/>
                        </div>
      
                      </form>
                    </div>
                  </div>
                      </div>
              </div>
            </div>
          </section> 
      
      
          <footer className="ftco-footer ftco-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">About <span><a href="index.html">Ecoland</a></span></h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                      <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4 ml-md-4">
                    <h2 className="ftco-heading-2">Information</h2>
                    <ul className="list-unstyled">
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Online Enquiry</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>General Enquiry</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Booking</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Privacy</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Refund Policy</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Call Us</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md">
                   <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Experience</h2>
                    <ul className="list-unstyled">
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Adventure</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Hotel and Restaurant</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Beach</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Nature</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Camping</a></li>
                      <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Party</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md">
                  <div className="ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2">Have a Questions?</h2>
                      <div className="block-23 mb-3">
                        <ul>
                          <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                          <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                          <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
      
                  <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. 
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. </p>
                </div>
              </div>
            </div>
          </footer>
    </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        chitietsanpham : state.itemdetails
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        showItemDetails:(id)=>{
            dispatch(actions.actEditProductRequest(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ChiTietSanPham);
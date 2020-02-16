import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component{
  state = {
    order: 5,
  }

  hendelCountChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }
  
  render(){
    return <Fragment>
              <div className="header">
                <h1>Logo</h1>
                <div className="thumb"></div>
                <div className="count">{this.state.order}</div>
              </div>
              <CardProduct onCountChange = {(value) => this.hendelCountChange(value)} />
           </Fragment>
  }
}

export default Product;
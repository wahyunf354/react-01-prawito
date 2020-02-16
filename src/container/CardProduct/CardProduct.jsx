import React, {Component} from 'react';

class CardProduct extends Component{
  state = {
    order: 5,
  }

  hendelCountChange = (value) => {
    this.props.onCountChange(value)
  }

  hendelMinus = () => {
    if(this.state.order > 0){
      this.setState({
        order : this.state.order - 1
      }, () => {
        this.hendelCountChange(this.state.order)
      }) 
    }
  }

  hendelPlus = () => {
    this.setState({
      order : this.state.order + 1
    }, () => {
      this.hendelCountChange(this.state.order)
    })
  }
  
  render(){
    return<div className="card">
            <div className="img"></div>
            <p className="title">Daging Segar</p>
            <p className="harga">Rp. 300.000</p>
            <div className="user">
              <button className="minus" onClick= {this.hendelMinus} >-</button>
              <input type="text" value={this.state.order} className="value"/>
              <button className="plus" onClick={this.hendelPlus}>+</button>
            </div>
          </div>
  }
}

export default CardProduct;
import React, { Component } from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import Product from '../Product/Product';

class Home extends React.Component {
  render() {
    return <div>
      {/* <p>Youtube Component</p>
      <hr/>
      <YoutubeComp 
        time="7.45"  
        title="javaScript #1" 
        date="5 feb 2010"/>
      <YoutubeComp 
        time="10.45" 
        title="javaScript #2" 
        date="5 mar 2016"/>
      <YoutubeComp 
        time="3.53" 
        title="javaScript #3" 
        date="5 feb 2020"/>
      <YoutubeComp 
        time="7.45" 
        title="javaScript #4" 
        date="25 jul 2019"/>
      <YoutubeComp 
        time="10.45" 
        title="javaScript #5" 
        date="3 mar 2016"/>
      <YoutubeComp /> */}
      <p>Counte</p>
      <hr/>
      <Product />
    </div>
  }
}

export default Home;
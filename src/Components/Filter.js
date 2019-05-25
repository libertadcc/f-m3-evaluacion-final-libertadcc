import React from'react';
import '../scss/Filter.scss';
import Header from './Header';

class Filter extends React.Component{
  render(){
    const {action} = this.props;
    return(
    <React.Fragment>
      <Header />
      <input 
      className="input"
      type="text"
      placeholder="Nombre personaje"
      onChange={action}></input>
    </React.Fragment>
    );
  }
}

export default Filter;
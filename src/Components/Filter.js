import React from'react';
import '../scss/Filter.scss';

class Filter extends React.Component{
  render(){
    const {action} = this.props;
    return(
      <input 
      className="input"
      type="text"
      placeholder="Insert character name to search"
      onChange={action}></input>
    );
  }
}

export default Filter;
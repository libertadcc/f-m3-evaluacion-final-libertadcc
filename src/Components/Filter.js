import React from'react';

class Filter extends React.Component{
  render(){
    const {action} = this.props;
    return(
      <input 
      type="text"
      placeholder="Insert character name to search"
      onChange={action}></input>
    );
  }
}

export default Filter;
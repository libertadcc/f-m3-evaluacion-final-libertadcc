import React from'react';
import '../scss/Filter.scss';

class Filter extends React.Component{
  render(){
    const {action} = this.props;
    return(
    <React.Fragment>
      <div>
        <input 
        className="input"
        type="text"
        placeholder="Introduce el nombre del personaje"
        onChange={action}></input>
        
      </div>
    </React.Fragment>
    );
  }
}

export default Filter;
import React from'react';
import '../scss/Filter.scss';

class Filter extends React.Component{
  render(){
    const {action} = this.props;
    return(
    <React.Fragment>
      <div className="filters">
        <input 
        className="input"
        type="text"
        placeholder="Introduce el nombre del personaje"
        onChange={action}></input>
        {/* <div>
          <label>Filtra por casa</label>
          <select>
            <option value="Todas">Todas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </div> */}
      </div>
    </React.Fragment>
    );
  }
}

export default Filter;
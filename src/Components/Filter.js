import React from'react';
import '../scss/Filter.scss';

class Filter extends React.Component{
  render(){
    const {action, checked, checkHouse} = this.props;
    return(
    <React.Fragment>
      <div className="filters">
        <input 
        className="input"
        type="text"
        placeholder="Introduce el nombre del personaje"
        onChange={action}>
        </input>
      </div>
      <div className="filter__houses">
      <p className="filter__houses-name">Selecciona la casa</p>
        <div className="option">
          <label htmlFor="todas">
            <input
              id="todas"
              type="radio"
              value=''
              name="houses"
              onChange={checkHouse}
              checked={checked === ''}
            />
            Todas
          </label>
        </div>
        <div className="option">
          <label htmlFor="Gryffindor">
            <input
              id="Gryffindor"
              type="radio"
              value="Gryffindor"
              name="houses"
              onChange={checkHouse}
              checked={checked ==='Gryffindor'}
            />
            Gryffindor
          </label>
        </div>
        <div className="option">
          <label htmlFor="Slytherin">
            <input
              id="Slytherin"
              type="radio"
              value="Slytherin"
              name="houses"
              onChange={checkHouse}
              checked={checked === 'Slytherin'}
            />
            Slytherin
          </label>
        </div>
        <div className="option">
          <label htmlFor="Ravenclaw">
            <input
              id="Ravenclaw"
              type="radio"
              value="Ravenclaw"
              name="houses"
              onChange={checkHouse}
              checked={checked === 'Ravenclaw'}
            />
            Ravenclaw
          </label>
        </div>
        <div className="option">
          <label htmlFor="Hufflepuff">
            <input
              id="Hufflepuff"
              type="radio"
              value="Hufflepuff"
              name="houses"
              onChange={checkHouse}
              checked={checked === 'Hufflepuff'}
            />
            Hufflepuff
          </label>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Filter;
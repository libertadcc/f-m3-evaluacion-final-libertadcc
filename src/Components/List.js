import React from 'react';
import '../scss/List.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends React.Component{
  render(){
    const {filterInput, characters} = this.props;
    return(
      <React.Fragment>
        <div className="shield___hogwarts"></div>
        <div className="pannel">
        <ul className="pannel__list">
        {characters
        .filter(obj => obj.name.toLowerCase().includes(filterInput))
        .map(item =>{
          return(
            <li className="character" key={item.id}>
              <Link className="link" to={`/detail/${item.id}`}>
                <span className="tooltiptext">Haz click para saber más</span>
              <div className="card">
                <img className="card__img" src={item.image} alt={`Imagen de ${item.name}`}/>
                <div className="card__info">
                  <h2 className="card__name">{item.name}</h2>
                  <h3 className="card__house">
                    {item.house !== '' ? `Casa: ${item.house}` : 'Sin casa'} </h3>
                </div>
              </div>
              </Link>
            </li>
          );
        })}
        </ul>
        </div> 
      </React.Fragment>  
    );
  }
}
List.defaultProps={
  filterInput: PropTypes.string,
  characters: PropTypes.array
}
export default List;
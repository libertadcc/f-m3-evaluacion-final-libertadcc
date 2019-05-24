import React from 'react';
import {Link} from 'react-router-dom';

class List extends React.Component{
  render(){
    const {filterInput, characters} = this.props;
    return(
        <div className="pannel">
        <ul className="pannel__list">
        {characters
        .filter(obj => obj.name.includes(filterInput))
        .map(item =>{
          return(
            <li className="character" key={item.id}>
              <Link to={`/detail/${item.id}`}>
              <div className="card">
                <img className="card__img" src={item.image} alt={`Imagen de ${item.name}`}/>
                <h2 className="card__name">{item.name}</h2>
                <h3 className="card__house">{item.house}</h3>
              </div>
              </Link>
            </li>
          );
        })}
        </ul>
      </div>   
    );
  }
}
export default List;
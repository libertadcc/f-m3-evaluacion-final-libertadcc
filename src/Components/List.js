import React from 'react';

class List extends React.Component{
  render(){
    const {characters, filterInput} = this.props;
    return(
      <div className="pannel">
        <ul className="pannel__list">
        {characters
        // filtross
        .map(item =>{
          return(
            <li className="character" key={item.id}>
              <div className="card">
                <img className="card__img" src={item.image} alt={`Imagen de ${item.name}`}/>
                <h2 className="card__name">{item.name}</h2>
                <h3 className="card__house">{item.house}</h3>
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default List;
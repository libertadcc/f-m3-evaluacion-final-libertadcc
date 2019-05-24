import React from 'react';
import {Link} from 'react-router-dom';

class Detail extends React.Component{
  render(){
    const {characters} =this.props;
    const characterId = parseInt(this.props.parameters.match.params.child);
    const selected = characters.find(obj => obj.id === characterId);

    return(
      <React.Fragment>
      {selected !== undefined ? 
      <div className="detail">
        <img className="detail__img" src={selected.image} alt={`Imagen de ${selected.name}`}/>
        <h2 className="detail__name">{selected.name}</h2>
        <div className="detail__info">
          <h3 className="detail__info--dob">{selected.dateOfBirth}</h3>
          <h3 className="detail__info--house">{selected.patronus}</h3>
          <h3 className="detail__info--surviver">{selected.alive 
          ? 'Alive'
          : 'Dead'}</h3>
        </div>
      </div>
      : <p>Así no</p>}
      <Link to="/">
        <button className="btn__back">Return</button>
      </Link>
      </React.Fragment>
    );
  }
}

export default Detail;
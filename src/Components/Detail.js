import React from 'react';
import '../scss/Detail.scss';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';



class Detail extends React.Component{
  componentWillUnmount(){
    this.props.reset();
  }

  render(){
    const {characters} =this.props;
    const characterId = parseInt(this.props.parameters.match.params.child);
    const selected = characters.find(obj => obj.id === characterId);

    return(
      <React.Fragment>
        <div className="wrapper__card">
        <Header />
      {selected !== undefined ? 
        <div className="wrapper__detail">
          <div className={`detail  detail-${selected.house === 'Gryffindor' ? 'griffindor' 
          : selected.house === 'Slytherin' ? 'slytherin' 
          : selected.house === 'Hufflepuff' ? 'hufflepuff' 
          : selected.house === 'Ravenclaw' ? 'ravenclaw' : ''
          }`}>
            <img className="detail__img" src={selected.image} alt={`Imagen de ${selected.name}`}/>
            <div className="detail__info">
              <h2 className="detail__name">{selected.name}</h2>
              <h3 className="detail__info--house">
              {selected.house !== '' ?
               `Casa: ${selected.house}` :
                'Sin casa'} </h3>
              <h3 className="detail__info--dob">Nacimiento:  {selected.yearOfBirth}</h3>
              <h3 className="detail__info--patronus"> 
              {selected.patronus === '' ? 'Sin patronus' : `Patronus: ${selected.patronus}`}</h3>
              <h3 className="detail__info--surviver">Estado: {selected.alive && selected.gender === 'female'
              ? 'Viva' : selected.alive && selected.gender === 'male' ? 'Vivo'
              : selected.alive === false && selected.gender === 'female' ?
              'Muerta' : 'Muerto'}</h3>
              <div className="detail--shield"
              >
                <img className="shield" alt="Escudo de la casa"
                src={selected.house === 'Gryffindor' ? 'https://vignette.wikia.nocookie.net/es.harrypotter/images/a/a3/Gryffindor_Pottermore.png/revision/latest?cb=20140922195249' 
                : selected.house === 'Slytherin' ? 'https://vignette.wikia.nocookie.net/es.harrypotter/images/6/69/Slytherin_Pottermore.png/revision/latest?cb=20141001130915' 
                : selected.house === 'Hufflepuff' ? 'https://vignette.wikia.nocookie.net/es.harrypotter/images/4/42/Hufflepuff_Pottermore.png/revision/latest?cb=20141001131135' 
                : selected.house === 'Ravenclaw' ? 'https://vignette.wikia.nocookie.net/es.harrypotter/images/7/76/Ravenclaw_Pottermore.png/revision/latest?cb=20141001130914' : ''
                }/>
              </div>
            </div>
          </div>
        </div>
      : <p>No has seleccionado ningún personaje</p>}
      
      <Link to="/">
        <button className="btn__back">
          Volver
        </button>
      </Link>
      </div>
      </React.Fragment>
    );
  }
}
Detail.defaultProps={
  characters: PropTypes.array,
  characterId: PropTypes.number,
  selected: PropTypes.obj
}
export default Detail;
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
          <div className="detail">
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
              <h3 className="detail__info--surviver">Estado: {selected.alive 
              ? 'Vivo'
              : 'Muerto'}</h3>
              {/* <div className="test">
                <img className="img" src={`${selected.house === 'Gryffindor' ? 'https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-gryffindor-harry-potter-61cm_12422_1.jpg' : 'https://static.fnac-static.com/multimedia/Images/ES/NR/45/bb/42/4373317/1540-1.jpg'}`}>
                </img> </div> */}
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
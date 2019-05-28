import React from 'react';
import './scss/App.scss';
import {fetchCharacters} from './services/fetchCharacters';
import Filter from './Components/Filter';
import List from './Components/List';
import Header from './Components/Header';

import Detail from './Components/Detail';
import {Switch, Route} from 'react-router-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      characters: [],
      filterInput: '',
      filterEye: '',
      checked: ''
    })
    this.getCharacters=this.getCharacters.bind(this);
    this.filterName=this.filterName.bind(this);
    this.reset=this.reset.bind(this);
    this.filterHouse=this.filterHouse.bind(this);
    this.filterColor=this.filterColor.bind(this);
  }

  componentDidMount(){
    this.getCharacters();
  }

  reset(){
    this.setState({
      filterInput: ''
    })
  }

  getCharacters(){
    fetchCharacters()
      .then(data=>{
        const newData = data.map((obj, index) =>{
          return {...obj, id: index}
        } )
        this.setState({
          characters: newData
        })
      });
  }

  filterName(event){
    const filterName = event.currentTarget.value;
    this.setState({
      filterInput: filterName.toLowerCase()
    })    
  }
  filterColor(event){
    const eyeColor = event.currentTarget.value;
    this.setState({
      filterEye: eyeColor.toLowerCase()
    })
  }

  filterHouse(event){
    const houseChecked = event.currentTarget.value;
    this.setState({
      checked: houseChecked
    })
  }
  
  render(){
    const {characters, filterInput, checked, filterEye} = this.state;
    return(
      <div className="page">
        <Switch>
          <Route exact path="/" render={() => 
            <React.Fragment>
            <Header />
            <Filter 
            action={this.filterName}
            filterColor={this.filterColor}
            checkHouse={this.filterHouse}
            checked={checked}
            />
            <List 
            characters={characters}
            filterInput={filterInput} 
            filterEye={filterEye}
            checked={checked}/>
            </React.Fragment>
          }/>
          <Route path="/detail/:child" render={(parameters) =>
            <Detail 
            parameters={parameters}
            characters={characters} 
            reset={this.reset}/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

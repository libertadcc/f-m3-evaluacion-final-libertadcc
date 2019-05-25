import React from 'react';
import './scss/App.scss';
import {fetchCharacters} from './services/fetchCharacters';
import Filter from './Components/Filter';
import List from './Components/List';
import Detail from './Components/Detail';
import {Switch, Route} from 'react-router-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      characters: [],
      filterInput: ''
    })
    this.getCharacters=this.getCharacters.bind(this);
    this.filterName=this.filterName.bind(this);
    this.reset=this.reset.bind(this);
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
        console.log(newData);
        this.setState({
          characters: newData
        })
      });
  }

  filterName(event){
    const filterName = event.currentTarget.value;
    this.setState({
      filterInput: filterName
    })    
  }

  render(){
    const {characters, filterInput} = this.state;
    return(
      <div className="page">
        <Switch>
          <Route exact path="/" render={() => 
            <React.Fragment>
            <Filter 
            action={this.filterName}/>
            <List 
            characters={characters}
            filterInput={filterInput} />
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

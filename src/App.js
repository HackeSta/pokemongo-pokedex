import React, { Component, Fragment } from 'react';
import './App.css';
import ButtonAppBar from './components/AppBar'
import Collection from './components/Collection'
import PokemonDialog from './components/dialogs/DialogPokemon'
import EvolutionDialog from './components/dialogs/DialogEvolution'
import InfoDialog from './components/dialogs/DialogInfo';
import './utils'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonDialogOpen: false,
      evolutionDialogOpen: false,
      infoDialogOpen: false,
      loading: true,
      searchText: null,
    }
  }
  componentDidMount(){
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  hideDialog(){
    this.setState({pokemonDialogOpen: false, evolutionDialogOpen: false, infoDialogOpen: false});
  }
  showInfoDialog(){
    this.setState({pokemonDialogOpen: false, evolutionDialogOpen: false, infoDialogOpen: true});    
  }
  showDialog(pokemon,id)
  {
    this.setState({
       pokemon: pokemon,
       pokemonDialogOpen: (id===0),
       evolutionDialogOpen: (id===1),
       infoDialogOpen: (id===2)
      });
  }
  searchTextChanged(ev){
    this.setState({
      searchText: (ev.target.value==="") ? null:ev.target.value.toLowerCase(), 
    })
  }
  render() {
    const { loading } = this.state;
    if(loading){
      return null;
    }
    return (
      <Fragment>
        <PokemonDialog pokemon={ this.state.pokemon } open={this.state.pokemonDialogOpen} handleClose={() => this.hideDialog()}/>
        <EvolutionDialog pokemon={ this.state.pokemon } open={this.state.evolutionDialogOpen} handleClose={() => this.hideDialog()} />
        <InfoDialog open={this.state.infoDialogOpen} handleClose={()=> this.hideDialog()}></InfoDialog>
        <ButtonAppBar hideDialog={() => this.hideDialog()}
                    showDialog={()=>this.showInfoDialog()}
                    searchTextChanged={(ev)=>this.searchTextChanged(ev)}></ButtonAppBar>
        <Collection hideDialog={() => this.hideDialog()}
                    showDialog={(pokemon,id)=>this.showDialog(pokemon,id)}
                    searchText={this.state.searchText}            
        ></Collection>
        
      </Fragment>
      );
  }
}
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;

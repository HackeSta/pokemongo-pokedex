import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import pokemonData from '../data/pokemon.json'
const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: "25px"
    },
    card: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});
class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            pokemons: [],
            showDialog: props.showDialog,
            classes: props.classes,
            filteredData: []
        }
    }
    // trackScolling = () => {
    //     const wrappedElement = document.getElementById('collection');
    //     if (wrappedElement.getBoundingClientRect().bottom<=window.innerHeight) {
    //         this.loadPokemon()
    //         document.removeEventListener('scroll', this.trackScrolling);
    //     }
    // }
    // componentDidMount() {
    //     document.addEventListener('scroll', this.trackScolling);
    // }
    // componentWillMount() {
    //     this.loadPokemon();
    // }
    // componentWillUnmount() {
    //     document.removeEventListener('scroll', this.trackScrolling);
    // }
    
    // loadPokemon = () => {
    //     this.setState({ isLoading: true }, () => {
    //         const nextPokemon = this.state.filteredData.slice(this.state.pokemons.length, this.state.pokemons.length + 50);
    //         this.setState({
    //             hasMore: true,
    //             isLoading: false,
    //             pokemons: [
    //                 ...this.state.pokemons, ...nextPokemon
    //             ],
    //         });
    //     })
    // }
   
    render() {
        const {
            classes,
        } = this.state
        let data = this.props.searchText === null ? pokemonData:[]
        if(this.props.searchText!==null){
            for(let pokemon of pokemonData){
                if(pokemon.name.toLowerCase().includes(this.props.searchText.toLowerCase())){
                    data.push(pokemon)
                }
            }
        }
        return (
            <div className={classes.root}>
                <Grid id="collection" container spacing={24} justify="center">
                    {pokemonData.map(pokemon => (
                      ((this.props.searchText===null||pokemon.name.toLowerCase().includes(this.props.searchText)) && <Grid  key={pokemon.id} item xs={12} sm={6} md={3}><PokemonCard showDialog={(pokemon, id) => this.state.showDialog(pokemon, id)} id={pokemon.id} {...{ data: pokemon }} className={classes.card}></PokemonCard></Grid>)
                    ))}
                </Grid>
               
            </div>
        )
    }
}
export default withStyles(styles)(Collection)
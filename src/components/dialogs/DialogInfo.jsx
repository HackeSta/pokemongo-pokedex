import React from 'react';
import { Dialog, DialogContent, withStyles, Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import LogoComponent from '../logos/LogoPokeGoDex'
import LogoHackesta from '../logos/LogoHackesta';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    margin: 0
  },
  center: {
    textAlign: "center"
  },
  media: {
    width: "100%",
    maxWidth: "140px"
  }
});

class InfoDialog extends React.Component {
  
  render() {
    const attributes = [
      {
        "item":"Pokemon Go GameData",
        "name": "pokemongo-dev-contrib",
        "link":"https://github.com/pokemongo-dev-contrib/pokemongo-json-pokedex"
      },
      {
        "item": "Pokemon Icons",
        "name":"The Artificial",
        "link":"https://theartificial.com/pokemonicons/"
      },
      {
        "item":"Item Icons",
        "name":"Flat Icon",
        "link":"https://www.flaticon.com/packs/pokemon-go"
      },
      {
        "item":"Type Symbols",
        "name":"falke2009 @ DeviantArt",
        "link":"https://www.deviantart.com/falke2009/art/Pokemon-Type-Symbols-Downloadable-403610684"
      }
    ]
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          // maxWidth="xl"
          fullWidth={true}
        >
          {/* <DialogTitle id="alert-dialog-title">Info</DialogTitle> */}
          <DialogContent >
            <Grid container justify="center" alignItems="center" style={{textAlign: "center"}}>
              <Grid style={{marginBottom: 10}} item xs={12} md={6}><LogoComponent/></Grid>
              <Grid style={{marginBottom: 10}} item xs={12} md={6}><LogoHackesta/></Grid>

            </Grid>
            <Typography style={{marginTop: 16,marginBottom: 16 }} variant="body1">A PokeDex project for <a href="https://www.pokemongo.com/" target="_blank" rel="noopener noreferrer">Pokemon Go</a>. Built with <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">ReactJS</a>. Developed by <a href="https://hackesta.org" rel="noopener noreferrer" target="_blank">Hackesta</a></Typography>
            <Typography variant="h6">Credits: </Typography>
            <List component="nav">
            {
              attributes.map((attr) => <ListItem key={attributes.indexOf(attr)} button component="a" href={attr.link} rel="noopener noreferrer" target="_blank"><ListItemText primary={`${attr.item} by ${attr.name}`}/></ListItem>
              )
            }
            </List>
            
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(InfoDialog);
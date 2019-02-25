import React from 'react';
import { withStyles,Grid,Avatar, Chip } from '@material-ui/core'
import {indigo, teal} from '@material-ui/core/colors'
const styles = theme => ({
    avatarContainer: {
        marginTop: theme.spacing.unit*2,
        marginBottom: theme.spacing.unit *2,
        textAlign: "center"
      },
      avatar: {
        margin: "auto",
        border: "3px solid"
      },
      chip:{
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit
      }
});


function PokemonAvatar(props){
    const { data,classes } = props
    let size2 = data.isMain?140:100
    let costs = []
    if(data.costs){
      if(data.costsDir===1) costs.push(<br/>)
      if(data.costs.candyCost) costs.push(<Chip color="secondary" className={classes.chip} avatar={<Avatar alt="Candy" src="/static/icons/extras/candy.svg"></Avatar>} label={data.costs.candyCost}></Chip>)
      if(data.costs.evolutionItem) costs.push(<Chip color="secondary" className={classes.chip} label={data.costs.evolutionItem.name}></Chip>)
    }
    return(
        <Grid item className={classes.avatarContainer} xs={data.size} style={{
            
          }}>
            {(data.costsDir===-1 && costs)}
            <Avatar className={classes.avatar} alt={
               data.name
            } src={`/static/icons/pokemons/${data.id}.svg`} style={{
              width: size2,
              height: size2,
              borderColor: data.isMain?teal[500]:indigo[500]
            }}></Avatar>
            <Chip color="primary" className={classes.chip} label={data.name}></Chip>
            {(data.costsDir===1 && costs)}
          </Grid>
    )
}
export default withStyles(styles)(PokemonAvatar)

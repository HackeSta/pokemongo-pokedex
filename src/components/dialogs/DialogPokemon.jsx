import React from 'react';
import { Dialog, DialogContent, DialogTitle, withStyles, Grid, Typography, Divider } from '@material-ui/core'
import TypeChip from '../chips/ChipType'
import StatsGrid from '../StatsGrid';
import MoveSetComponent from '../MoveSetComponent';

const blankData = {
  "dex": 0,
  "name": "",
  "animationTime": [],
  "height": 0,
  "modelHeight": 0,
  "kmBuddyDistance": 0,
  "weight": 0,
  "modelScale": 0,
  "maxCP": 0,
  "buddySize": {
    "id": "",
    "name": ""
  },
  "cinematicMoves": [
  ],
  "quickMoves": [
  ],
  "family": {
    "id": "",
    "name": ""
  },
  "stats": {
    "baseAttack": 0,
    "baseDefense": 0,
    "baseStamina": 0
  },
  "types": [
  ],
  "encounter": {
    "attackProbability": 0,
    "attackTimer": 0,
    "baseFleeRate": 0,
    "baseCaptureRate": 0,
    "cameraDistance": 0,
    "collisionRadius": 0,
    "dodgeDistance": 0,
    "dodgeProbability": 0,
    "jumpTime": 0,
    "maxPokemonActionFrequency": 0,
    "minPokemonActionFrequency": 0,
    "movementType": {
      "name": "",
      "id": ""
    },
    "gender": {
      "malePercent": 0,
      "femalePercent": 0
    }
  },
  "camera": {
    "cylinderRadius": 0.,
    "diskRadius": 0,
    "shoulderModeScale": 0
  },
  "evolution": {
    "futureBranches": [
    ]
  },
  "id": "",
  "forms": []
}
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
  },
  simpleDetails: {
    textAlign: 'center'
  },
  stat: {
    borderRight: '0.1em solid black',
    padding: '0.5em'
  }
});

class PokemonDialog extends React.Component {

  render() {
    const { classes } = this.props;
    let data = this.props.pokemon ? this.props.pokemon : blankData
    let types = []
    if (this.props.open) {

      for (let type of data.types) {
        types.push(<TypeChip type={type}></TypeChip>)
      }
    }
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{`#${parseInt(data.dex).pad(3)} ${data.name}`}</DialogTitle>
          <DialogContent >
              <Grid className={classes.container} container justify="center">
                <Grid item xs={12} sm={3} md={3} className={classes.center}>
                  <img alt={data.name} className={classes.media} src={`/static/icons/pokemons/${data.id}.svg`} />

                </Grid>
                <Grid item xs={12} sm={9} md={9} className={classes.center}>
                  {types}
                  <Divider style={{ marginTop: "5px", marginBottom: "5px" }}></Divider>
                  <StatsGrid stats={
                    {
                      "Max CP": data.maxCP,
                      "Buddy Distance": data.kmBuddyDistance.toString() + "km"
                    }
                  }></StatsGrid>
                  <Divider style={{ marginTop: "5px", marginBottom: "5px" }}></Divider>
                  <StatsGrid stats={
                    {
                      "Base Attack": data.stats.baseAttack,
                      "Base Defense": data.stats.baseDefense,
                      "Base Stamina": data.stats.baseStamina
                    }
                  }></StatsGrid>
                  <Divider style={{ marginTop: "5px", marginBottom: "5px" }}></Divider>
                  <StatsGrid stats={
                    {
                      "Height": data.height.toString() + "m",
                      "Weight": data.weight.toString() + "kg",
                      "Gender Percent(M:F)": `${data.encounter.gender.malePercent*100}:${data.encounter.gender.femalePercent*100}`,
                    }
                  }></StatsGrid>
                  <Divider style={{ marginTop: "5px", marginBottom: "5px" }}></Divider>
                  <StatsGrid stats={{
                      "Flee Rate": `${data.encounter.baseFleeRate*100}%`,
                      "Capture Rate": `${data.encounter.baseCaptureRate*100}%`,
                      "Dodge Rate":`${data.encounter.dodgeProbability*100}%`
                  }}></StatsGrid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{marginTop: "5px"}} className={classes.center}>
                <Typography style={{textAlign: "left"}} variant="h6">Quick Moves</Typography>
                  <MoveSetComponent data={data.quickMoves}>
                  </MoveSetComponent>
                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{marginTop: "5px"}} className={classes.center}>
                <Typography style={{textAlign: "left"}} variant="h6">Charge Moves</Typography>
                  <MoveSetComponent data={data.cinematicMoves}>
                  </MoveSetComponent>
                </Grid>
              </Grid>
            {/* <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText> */}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PokemonDialog);
import React from 'react';
import { Dialog, DialogContent, DialogTitle, withStyles, Grid } from '@material-ui/core'
import PokemonAvatar from '../PokemonAvatar';

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
  },
  avatarContainer: {
    marginTop: theme.spacing.unit*2,
    marginBottom: theme.spacing.unit*2
  },
  avatar: {
    margin: "auto",
  }
});

function evaluatePastEvolutions(pastBranch, cost, index) {
  let tree = {}
  tree[index] = {
    "id": pastBranch.id,
    "name": pastBranch.name,
    "cost": cost,
  }
  if (Object.keys(pastBranch).includes("pastBranch")) {
    tree = { ...tree, ...evaluatePastEvolutions(pastBranch.pastBranch, pastBranch.costToEvolve, index - 1) }
  }
  return tree;
}
function evaluateFutureEvolutions(futureBranches, index) {
  let tree = {}
  let branches = []
  for (let branch of futureBranches) {
    branches.push({
      "id": branch.id,
      "name": branch.name,
      "cost": branch.costToEvolve
    });
    if (Object.keys(branch).includes("futureBranches")) {
      tree = { ...tree, ...evaluateFutureEvolutions(branch.futureBranches, index + 1) }
    }
  }
  tree[index] = branches;
  return tree;
}

class EvolutionDialog extends React.Component {

  render() {
    let data = this.props.pokemon ? this.props.pokemon : blankData
    let tree = {
      0: {
        "id": data.id,
        "name": data.name
      }
    }
    let chart = [];

    if (this.props.open) {
      let evol = data.evolution;
      if (Object.keys(evol).includes("pastBranch")) {
        tree = { ...tree, ...evaluatePastEvolutions(evol.pastBranch, evol.costToEvolve, -1) }
      }
      if (Object.keys(evol).includes("futureBranches")) {
        tree = { ...tree, ...evaluateFutureEvolutions(evol.futureBranches, 1) }
      }
      console.log(tree)
      for (let index of Object.keys(tree).sort((a,b)=>parseInt(a)-parseInt(b))) {
        index = parseInt(index)
        if (index > 0) {
          let count = tree[index].length;
          let subChart = []
          for (let pokemon of tree[index]) {
            // let data = getPokemonData(pokemon.id)
            subChart.push(
            <PokemonAvatar data={{
              id: pokemon.id,
              name: pokemon.name,
              isMaine: false,
              size: Math.floor(12/count),
              costs: pokemon.cost,
              costsDir: -1
            }}></PokemonAvatar>
            )
          }
          chart.push(<Grid item xs={12}>
          <Grid container justify="center" alignItems="center">{subChart}</Grid>
          </Grid>)
        }
        else {
          // let data = getPokemonData(tree[index].id);
          chart.push(<PokemonAvatar data={{
            id: tree[index].id,
            name: tree[index].name,
            isPokemon: true,
            isMain: (index===0),
            size: 12,
            costs: (index!==0 && tree[index].cost),
            costsDir: 1
          }}></PokemonAvatar>)
        }
      }
    }
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="xl"
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">{`#${parseInt(data.dex).pad(3)} ${data.name}`}</DialogTitle>
          <DialogContent >
            <Grid container justify="center" alignItems="center">
              {chart}
            </Grid>

          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EvolutionDialog);
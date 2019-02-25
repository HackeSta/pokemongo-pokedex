
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography }  from '@material-ui/core';
import TypeChip from './chips/ChipType'
import BuddyDistanceChip from './chips/ChipBuddyDistance'
import StatsChips from './chips/ChipsStats'
import MaxCPChip from './chips/ChipMaxCP';
const styles = {
    card: {
        minWidth: 275,
        textAlign: 'center'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    icon: {
        marginRight: 4,
    },
    media: {
        height: 140
    }
};

function SimpleCard(props) {
    const { data, classes } = props;
    let types=[]
    for (let type of data.types){
        types.push(<TypeChip key={data.types.indexOf(type)} type={type}></TypeChip>)
    }
    return (
        <Fragment>
        <Card className={classes.card}>
            <img alt={data.name} className={classes.media} src={`/static/icons/pokemons/${data.id}.svg`}/>
           <CardContent>
               <Typography variant="h5">
                {`#${parseInt(data.dex).pad(3)} ${data.name}`}
               </Typography>
               {types}
               <br></br>
               <BuddyDistanceChip distance={data.kmBuddyDistance}></BuddyDistanceChip>
               <MaxCPChip data={data.maxCP}></MaxCPChip>
               <br></br>
               <StatsChips stats={data.stats}></StatsChips>
           </CardContent>
           
            <CardActions className={classes.actions} disableActionSpacing>
            <Button color="primary" variant="text" onClick={props.showDialog.bind(this, data,0 )}>
                Details
            </Button>
            { Object.keys(data.evolution).length!==0 && <Button color="primary" variant="text" onClick={props.showDialog.bind(this, data,1 )}>
            Evolution
            </Button>
            }
           </CardActions>
        </Card>
        </Fragment>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

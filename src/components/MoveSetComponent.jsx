import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import movesData from '../data/move.json'
import MoveComponent from './MoveComponent'
const styles = {
    root: {
        width: '100%'
    }
}

function MoveSetComponent(props){
    const { data, classes } = props
    let items = []
    for(let move of data){
        for(let _move of movesData){
            if(_move.id === move.id){
                items.push(<MoveComponent data={_move}></MoveComponent>)
            }
        }
    }
    return (
        <div className={classes.root}>
            {items}
        </div>
    )

}

MoveSetComponent.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MoveSetComponent)
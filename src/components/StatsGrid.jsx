
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
const styles = theme=> ({
    container: {
        margin: 0
    },
    center: {
        textAlign: "center",
        // padding: theme.spacing.unit
    }
});

function StatsGrid(props) {
    const { stats, classes } = props;
    let items = []
    let keys = Object.keys(stats)
    for (let index in Object.keys(stats)) {
        let key = keys[index]
        let item = <Grid className={classes.center} item xs={12/keys.length} sm={12/keys.length} md={12/keys.length} style={{
            borderRight: (parseInt(index) !== keys.length - 1) ? "0.1em solid grey" : "none",
            // paddingRight: (index != keys.length - 1) ? "0.5em" : "0",
            // paddingLeft: (index != 0) ? "0.5em" : "0",
        }}>
            <Typography variant="button">{stats[key]}</Typography>
            <Typography variant="caption">{key}</Typography>
        </Grid>
        items.push(item)
    }
    return (
        <div>

            <Grid className={classes.container} container spacing={24} justify="center">
                {items}
            </Grid>
        </div>
    );
}

StatsGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsGrid);


import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Chip }  from '@material-ui/core';
const styles = {
    chip: {
        marginTop: "2px"
      },
};

function StatsChips(props) {
    const { stats, classes } = props;
    
    return (
    
      <Fragment>
        <Chip
        className={classes.chip}
        label={`ATK: ${stats.baseAttack}`}
        variant="outlined"
      />
      <Chip
        className={classes.chip}
        label={`DEF: ${stats.baseDefense}`}
        variant="outlined"
      />
      <Chip
        className={classes.chip}
        label={`STM: ${stats.baseStamina}`}
        variant="outlined"
      />
      </Fragment>
    );
}

StatsChips.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatsChips);

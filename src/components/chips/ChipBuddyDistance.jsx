
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Chip, Avatar }  from '@material-ui/core';
const styles = {
    chip: {
        marginTop: "2px"
      },
};

function BuddyDistanceChip(props) {
    const { distance, classes } = props;
    
    return (
        <Chip
        avatar={<Avatar alt={"Footprints"} src={`/static/icons/extras/footprints.svg`} />}
        className={classes.chip}
        label={`${distance}km`}
        variant="outlined"
      />
    );
}

BuddyDistanceChip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuddyDistanceChip);


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Chip, Avatar }  from '@material-ui/core';
const styles = {
    chip: {
        marginTop: "2px"
      },
};

function MaxCPChip(props) {
    const { data, classes } = props;
    
    return (
        <Chip
        avatar={<Avatar alt={"CP"} src={`/static/icons/extras/cp.svg`} />}
        className={classes.chip}
        label={`${data}`}
        variant="outlined"
      />
    );
}

MaxCPChip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaxCPChip);


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Chip, Avatar }  from '@material-ui/core';
const styles = {};

function TypeChip(props) {
    const { type } = props;
    
    return (
        <Chip
        avatar={<Avatar alt={type.id} src={`/static/icons/types/${type.id}.png`} />}
        label={type.name}
        variant="outlined"
      />
    );
}

TypeChip.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypeChip);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { InputBase, AppBar } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing.unit,
        width: '100%',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        margin: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing.unit,
            width: 'auto',
        },
    },
});

function SearchBar(props) {
    const { classes } = props;
    return (
            <AppBar position="static" style={{ backgroundColor: props.color}}>
            <div className={classes.search}>
                
                <InputBase
                    placeholder="Search..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    onChange={props.searchTextChanged}
                />
            </div>    
            </AppBar>
            
    )
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar)
import React, { Fragment } from 'react'
import {Typography} from '@material-ui/core'

function LogoComponent() {
    return (
        <Fragment>
            <Typography variant="h4"  color="inherit" style={{ fontFamily: "Lato", fontWeight: 300, marginRight: 10}}>
              PokeGoDex
            </Typography> 
            
        </Fragment>
    );
}

export default LogoComponent
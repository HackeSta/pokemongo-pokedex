import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Divider, Typography, Avatar, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons'
import StatsGrid from './StatsGrid'
import typeColors from '../data/type_colors.json'

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }
});

function MoveComponent(props) {
    const { data, classes } = props
    let powerBar;
    if(data.energyDelta < 0 ){
        const cols = Math.round(100/(data.energyDelta * -1))
        powerBar = <Grid container>
        {Array(cols).fill(<Grid item xs={Math.floor(12/cols)}><div style={{borderBottom: `5px solid ${typeColors[data.pokemonType.id]}`, marginRight:"3px"}}></div></Grid>)}
        </Grid>
    }
    return (

        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Grid container justify="center" alignItems="center">
                    <Avatar alt={data.pokemonType.name} src={`/static/icons/types/${data.pokemonType.id}.png`} className={classes.avatar} />
                    <Typography className={classes.heading}>{`${data.name} (${data.power})`}</Typography>
                    {powerBar}
                </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display:"block"}}>
                <StatsGrid stats={{
                    "Power":data.power,
                    "Stamina Loss Scalar":data.staminaLossScalar,
                }
                }>
                </StatsGrid>
                <Divider style={{ marginTop: "5px", marginBottom: "5px" }}></Divider>

                <StatsGrid stats={{
                    "Duration (sec)" : data.durationMs/1000,
                    "Damage Window (Sec)": `${data.damageWindowStartMs/1000} - ${data.damageWindowEndMs/1000}`,
                }}></StatsGrid>
            </ExpansionPanelDetails>
        </ExpansionPanel>

    )

}

MoveComponent.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MoveComponent)
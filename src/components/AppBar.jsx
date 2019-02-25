import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { InfoOutlined, SearchOutlined } from '@material-ui/icons';
import { red } from '@material-ui/core/colors'
import { IconButton, Toolbar, AppBar, Collapse } from '@material-ui/core';
import LogoComponent from './logos/LogoPokeGoDex'
import SearchBar from './SearchBar'
const primary = red[500];

const styles = theme=>({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    color: "white",
    position: "relative",
  }
});
class MainAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarVisible: false,
      classes: props.classes
    }
  }
  toggleSearchBar = ()=>{
    this.setState({
      searchBarVisible: !this.state.searchBarVisible
    })
  }
  render() {

    const {
      searchBarVisible, classes
    } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: primary }}>
          <Toolbar>
            <LogoComponent style={{ marginLeft: "auto", marginRight: "auto" }}></LogoComponent>
            <div className={classes.grow} />
            <IconButton className={classes.button} aria-label="Settings" onClick={this.toggleSearchBar}>
              <SearchOutlined />
            </IconButton>
            <IconButton className={classes.button} aria-label="Info" onClick={this.props.showDialog}>
              <InfoOutlined />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Collapse in={searchBarVisible} collapsedHeight="0px">
          <SearchBar color={primary}
          searchTextChanged={(ev)=>this.props.searchTextChanged(ev)}></SearchBar>
        </Collapse>
      </div>
    )

  }
}



export default withStyles(styles)(MainAppBar);
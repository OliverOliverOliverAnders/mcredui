import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MCREUILeftNav from './mcreui_leftnav.js'


const MCREUIAppBar=React.createClass({

  getInitialState() {
  return {

    leftNavOpen: false,
  };
  },
  handleTouchTapLeftIconButton(){
    alert("lkjlj")
  },
  render(){
    return(
    <AppBar
      onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
      title="MCR-ED Control Center"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />)
  }
});

export default MCREUIAppBar ;

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MCREUILeftNav from './mcreui_leftnav.js'


const MCREUIAppBar=React.createClass({

  getInitialState() {
  return {

    leftNavOpen: this.props.leftNavOpen,
  };
  },
  handleTouchTapLeftIconButton(){
    alert("lkjlj")
  },
  render(){
    return(
      <div>
    <AppBar
      onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
      title="MCR-ED Control Center"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  <MCREUILeftNav open={this.props.leftNavOpen}/>
    </div>
)
  }
});

export default MCREUIAppBar ;

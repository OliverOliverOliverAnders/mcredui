import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MCREUILeftNav from './mcreui_leftnav.js'
import freezer from './store/store.js'


const MCREUIAppBar=React.createClass({

  getInitialState() {
  return {

    leftNavOpen: this.props.leftNavOpen,
  };
  },
  handleTouchTapLeftIconButton(){

    freezer.trigger('leftNavOpen:toggle');
  },
  render(){
    return(
      <div>
    <AppBar
      onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
      title={this.props.applicationName}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  <MCREUILeftNav open={this.props.leftNavOpen}/>
    </div>
)
  }
});

export default MCREUIAppBar ;

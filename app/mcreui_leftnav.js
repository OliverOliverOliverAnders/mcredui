import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class MCREUILeftNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  };



  handleClose () { this.setState({open: false}) } ;

  render() {
    return (
      <div>
        <LeftNav
          docked={false}
          disableSwipeToOpen={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import freezer from './store/store.js'

export default class MCREUILeftNav extends React.Component {

  constructor(props) {
    super(props);

  };



  handleClose () {
    freezer.trigger('leftNavOpen:toggle'); }  ;

  render() {
    return (
      <div>
        <LeftNav
          docked={false}
          width={200}
          open={this.props.open}
        >
          <MenuItem onTouchTap={function(){ freezer.trigger('page:select',"EventPage")}}>Events</MenuItem>
          <MenuItem onTouchTap={function(){ freezer.trigger('page:select',"Page 2")}}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

import React, {Component} from 'react';

import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import freezer from './store/store'
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends React.Component {
  componentDidMount(){
      var me = this;
      freezer.on('update', function(){ me.forceUpdate() });
  }
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    var state = freezer.get();
    const standardActions = (
      <FlatButton
        label="Okey"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>material-ui</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            primary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App

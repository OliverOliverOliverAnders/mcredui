/* EventListPage */
import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

var ReactDataGrid = require('react-data-grid');
var ReactDataGrid = require('react-data-grid/addons');

const MCREUIEventList=React.createClass({

  getInitialState()
  {
    return {
      myTableData: [
          {name: 'Rylan'},
          {name: 'Amelia'},
          {name: 'Estevan'},
          {name: 'Florence'},
          {name: 'Tressa'},
        ]
      };



  },
  render(){

// Table data as a list of array.
const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

return (   <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].name}
            </Cell>
          )}
          width={200}
        />
      </Table>
    );
  }
});

 const MCREUIEventView=React.createClass({

    getInitialState() {
    return {


    };
    },
    render(){
      var a=[1,2,3]
      var b=[4,5,...a];
      return(
        <div>
          <h1>EventView</h1>
      </div>
  )
    }
  });

const MCREUIEventPage=React.createClass({


    getInitialState() {
    return {


    };
    },
    render(){

      return(
        <div>
          <MCREUIEventList />
          <MCREUIEventView />
      </div>
  )
    }
  });
export default MCREUIEventPage;

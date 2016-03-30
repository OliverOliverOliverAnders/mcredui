/* EventListPage */
import React from 'react';
var ReactDataGrid = require('react-data-grid');
var ReactDataGrid = require('react-data-grid/addons');

const MCREUIEventList=React.createClass({

  getInitialState() {
  return {


  };
  },
  render(){
    var _rows = [];
    for (var i = 1; i < 1000; i++) {
      _rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 1000
      });
    }

    //A rowGetter function is required by the grid to retrieve a row for a given index
    var rowGetter = function(i){
      return _rows[i];
    };


    var columns = [
    {
      key: 'id',
      name: 'ID'
    },
    {
      key: 'title',
      name: 'Title'
    },
    {
      key: 'count',
      name: 'Count'
    }
    ]

        return  (<ReactDataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={_rows.length}
        minHeight={500} />);


  }
});

 const MCREUIEventView=React.createClass({

    getInitialState() {
    return {


    };
    },
    render(){
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

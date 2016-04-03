/* EventListPage */
import React from 'react';
import ReactDOM from 'react-dom';
import freezer from './store/store.js'
import 'fixed-data-table/dist/fixed-data-table.css'
import {Table, Column, Cell} from 'fixed-data-table';
const MCREUIEventList=React.createClass({

  componentWillUnmount(){
    /* inform about last scroll position */
    freezer.trigger('eventList:scrollPosition',this.state.x, this.state.y);
  },

  getInitialState()
  {

    return {
      /* set initial x,y*/
      x:this.props.x,
      y:this.props.y
    };

  },
  scrollHandle(x,y){
    /* remember x and y it will be triggered if component get unmounted */
    this.setState({y:y,x:x});

  },
  render(){

    // Table data as a list of array.
    const rows = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a4', 'b4', 'c4'],
    ['a5', 'b5', 'c5']
    // .... and more
    ];
    this.table=
    <Table
      rowsCount={5}
      rowHeight={50}
      headerHeight={50}
      width={1000}
      scrollTop={this.props.y}
      scrollLeft={this.props.x}
      onScrollEnd={this.scrollHandle}
      height={200}>
      <Column
        header={<Cell>Name</Cell>}
        cell={props =>
          (
            <Cell {...props}>
              {rows[props.rowIndex][0]}
            </Cell>
          )}
          width={200}
          />
      </Table>
      return (this.table);
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
          <MCREUIEventList y={this.props.y}/>
          <MCREUIEventView />
        </div>
      )
    }
  });
  export default MCREUIEventPage;

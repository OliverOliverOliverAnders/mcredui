/* EventListPage */
import React from 'react';
import ReactDOM from 'react-dom';
import freezer from './../store/store.js'
import 'fixed-data-table/dist/fixed-data-table.css'
import {Table, Column, Cell} from 'fixed-data-table';

'initial store data structure '
freezer.trigger(
  'put',
  'MCREUIEventListData',
  {
    scrollPosition:{x:0,y:0},
    events:[],
  }
);



const MCREUIEventList=React.createClass({
  propTypes:{
    y:React.PropTypes.number,
    x:React.PropTypes.number,
    rowCount:React.PropTypes.number,
    rowHeight:React.PropTypes.number,
    rows:React.PropTypes.array,

  },
  getDefaultProps: function() {
    return {
      rowHeight:50,
      rowCount:5,
      columns:[],
      rows: [
      { Name:'a1', Name2:'b1', Name3:'c1'},
      { Name:'a1', Name2:'b1', Name3:'c1'},
      { Name:'a1', Name2:'b1', Name3:'c1'},
      { Name:'a1', Name2:'b1', Name3:'c1'},
      { Name:'a1', Name2:'b1', Name3:'c1'}
      ]
    };
  },

  componentWillUnmount(){
    /* inform about last scroll position */
    freezer.trigger('eventList:scrollPosition','MCREUIEventListData',this.state.x, this.state.y);
  },

  getInitialState(){

    return {
      /* set initial x,y*/
      x:this.props.x,
      y:this.props.y,
      rowsCount:this.props.rows.length,
      /* derive columns from props if available */
      columns:this._getColumns()
    };

  },
  _getColumns(){
    if (this.props.columns.length==0){
      return Object.keys(this.props.rows[0]);
    }
    else{
      return this.props.columns
    }
  },
  scrollHandle(x,y){
    /* remember x and y it will be triggered if component get unmounted */
    this.setState({y:y,x:x});

  },
  render(){

    /* create Columns */
    var columns=this.state. columns.map(column =>(
      <Column
        header={<Cell>column</Cell>}
        cell={props =>
          (
            <Cell {...props}>
              {rows[props.rowIndex][column]}
            </Cell>
          )}
          />
      ));
      /* and table */
      this.table=
      <Table
        rowsCount={this.state.rowsCount}
        rowHeight={this.props.rowHeight}
        headerHeight={this.props.rowHeight}
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
                {this.props.rows[props.rowIndex]["Name"]}
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

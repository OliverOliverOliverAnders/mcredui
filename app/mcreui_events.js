/* EventListPage */
import React from 'react';

const MCREUIEventList=React.createClass({

  getInitialState() {
  return {


  };
  },
  render(){
    return(
      <div>
        <h1>EventListPage</h1>
    </div>
)
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

import freezer from './store.js'

var nano = require('nano')('http://localhost:5984');


freezer.on('page:select',function(page){
  var state=freezer.get();
  state.navigation.transact();
  state.navigation.set({leftNavOpen:false});
  state.navigation.set({page:page});
  state.navigation.run();

});
freezer.on('eventList:scrollPosition',function(x,y){
  var state=freezer.get();
  var data={x:x,y:y};
  state.eventList.scrollPosition.set(data);

});
freezer.on('put',function(name,entry){
  var state=freezer.get();
  var data={};
  data[name]=entry;
  state.set(data);

})
freezer.on('leftNavOpen:toggle', function( ){

	var state=freezer.get();

  state.navigation.set({leftNavOpen:!state.navigation.leftNavOpen});
  //alert(freezer.get().leftNavOpen);

});

freezer.on('readDocument',function(dbName,dbId,id){
  /* read document from dbName with Id and store it under id in state.dbs.dbName.id */
  var db = nano.db.use(dbName);
  db.get(dbId, function(err, body) {
    var state=freezer.get();
    var mobj={};
    mobj[id]=body;
    state.dbs[dbName].set(mobj);
  });

})

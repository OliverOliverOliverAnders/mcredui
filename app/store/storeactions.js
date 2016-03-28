import freezer from './store.js'

var nano = require('nano')('http://localhost:5984');


freezer.on('page:select',function(page){
  var state=freezer.get();
  state.navigation.transact();
  state.navigation.set({leftNavOpen:false});
  state.navigation.set({page:page});
  state.navigation.run();

});
freezer.on('leftNavOpen:toggle', function( ){

	var state=freezer.get();

  state.navigation.set({leftNavOpen:!state.navigation.leftNavOpen});
  //alert(freezer.get().leftNavOpen);

});

freezer.on('readDocument',function(dbName,dbId,id){
  var db = nano.db.use(dbName);
  db.get(dbId, function(err, body) {
    var state=freezer.get();
    var mobj={};
    mobj[id]=body;
    state.dbs[dbName].set(mobj);
  });

})

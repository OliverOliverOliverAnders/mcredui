import freezer from './store.js'

import cradle from 'cradle'


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
  var db = new(cradle.Connection)().database(dbName);
  db.get(dbId, function (err, doc) {
      var state=freezer.get();
      state.dbs[dbName].set({id:doc});
  });

})

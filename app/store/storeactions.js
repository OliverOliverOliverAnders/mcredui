import freezer from './store.js'


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

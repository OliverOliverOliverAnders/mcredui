import Freezer from 'freezer-js'
var freezer = new Freezer({
	applicationName:"THENAME",
	navigation:{
		leftNavOpen:false,
		page:"one"
	},
	dbs:{test:{}},	
	leftNavOpen:false
});

export default freezer

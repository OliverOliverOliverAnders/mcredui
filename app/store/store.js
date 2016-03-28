import Freezer from 'freezer-js'
var freezer = new Freezer({
	applicationName:"THENAME",
	navigation:{
		leftNavOpen:false,
		page:"one"
	},
	dbs:{test:{applicationName:{name:"THENAME"}}},
	leftNavOpen:false
});

export default freezer
